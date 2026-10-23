"use client";

import { useEffect, useRef } from "react";

/*
 * ヒーローの立体ネットワーク（Canvas 2D）
 * 下の層＝散らばったデータ → 中の層＝整理されたデータ → 上の層＝判断・成果。光の粒が下から上へ流れる。
 * - WebGLは使わない（軽く、どの環境でも表示できる。描けない環境ではCSSの背景だけが見える）
 * - 画面外・タブ非表示のときは止める。スマホは点と光を減らす
 * - 「動きを減らす」設定のときは、止まった1枚だけを描く
 */

type GNode = { x: number; y: number; z: number; layer: 0 | 1 | 2; hot?: boolean };
type Pulse = { from: number; to: number; t: number; speed: number };

const LAYER_Y = [0.95, 0, -0.95]; // 下・中・上（画面では上がマイナス）
const LAYER_R = [1.35, 0.95, 0.55];
const LAYER_LABEL = ["散らばったデータ", "整理されたデータ", "判断・成果"];

// 毎回同じ形になるよう、決まった乱数を使う
function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGraph(small: boolean) {
  const rand = seeded(42);
  const nodes: GNode[] = [];

  // 下の層：ばらばらの生データ
  const nRaw = small ? 26 : 48;
  for (let i = 0; i < nRaw; i++) {
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(rand()) * LAYER_R[0];
    nodes.push({ x: Math.cos(a) * r, y: LAYER_Y[0] + (rand() - 0.5) * 0.22, z: Math.sin(a) * r, layer: 0 });
  }
  // 中の層：格子にそろえたデータ
  const step = small ? 0.42 : 0.36;
  for (let gx = -2; gx <= 2; gx++) {
    for (let gz = -2; gz <= 2; gz++) {
      const x = gx * step;
      const z = gz * step;
      if (Math.hypot(x, z) > LAYER_R[1] - 0.05) continue;
      nodes.push({ x, y: LAYER_Y[1], z, layer: 1 });
    }
  }
  // 上の層：判断に使う少数の指標と、その中心
  const nTop = 6;
  for (let i = 0; i < nTop; i++) {
    const a = (i / nTop) * Math.PI * 2;
    nodes.push({ x: Math.cos(a) * LAYER_R[2], y: LAYER_Y[2], z: Math.sin(a) * LAYER_R[2], layer: 2 });
  }
  nodes.push({ x: 0, y: LAYER_Y[2], z: 0, layer: 2, hot: true });

  const edges: [number, number, number][] = []; // [from, to, kind]  kind: 0=層の中 1=下→中 2=中→上
  const up: number[][] = nodes.map(() => []);
  const ids = (layer: number) => nodes.map((n, i) => (n.layer === layer ? i : -1)).filter((i) => i >= 0);
  const d = (a: GNode, b: GNode) => Math.hypot(a.x - b.x, a.z - b.z);
  const nearest = (from: number, pool: number[], k: number) =>
    [...pool].filter((j) => j !== from).sort((a, b) => d(nodes[from], nodes[a]) - d(nodes[from], nodes[b])).slice(0, k);

  const raw = ids(0);
  const mid = ids(1);
  const top = ids(2);
  const hot = top[top.length - 1];
  const ring = top.slice(0, -1);

  // 層の中のつながり
  raw.forEach((i) => nearest(i, raw, 1).forEach((j) => edges.push([i, j, 0])));
  mid.forEach((i) => mid.forEach((j) => { if (j > i && d(nodes[i], nodes[j]) < step * 1.05) edges.push([i, j, 0]); }));
  ring.forEach((i, k) => edges.push([i, ring[(k + 1) % ring.length], 0]));

  // 層の間（下から上へ）
  mid.forEach((m) => nearest(m, raw, 2).forEach((r) => { edges.push([r, m, 1]); up[r].push(m); }));
  ring.forEach((t) => nearest(t, mid, 2).forEach((m) => { edges.push([m, t, 2]); up[m].push(t); }));
  ring.forEach((t) => { edges.push([t, hot, 2]); up[t].push(hot); });

  return { nodes, edges, up, raw };
}

export default function DataNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // 描けない環境では背景のグラデーションだけを見せる

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const { nodes, edges, up, raw } = buildGraph(small);
    const font = getComputedStyle(document.body).fontFamily;

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // 視点（マウスで少しだけ傾く）
    let rotY = 0.6;
    const tiltX = 0.42;
    let targetMx = 0;
    let targetMy = 0;
    let mx = 0;
    let my = 0;

    const project = (x: number, y: number, z: number) => {
      const ry = rotY + mx * 0.35;
      const rx = tiltX + my * 0.12;
      const cy = Math.cos(ry), sy = Math.sin(ry);
      const x1 = x * cy - z * sy;
      const z1 = x * sy + z * cy;
      const cx = Math.cos(rx), sx = Math.sin(rx);
      const y2 = y * cx - z1 * sx;
      const z2 = y * sx + z1 * cx;
      const s = 4 / (4 + z2);
      const unit = Math.min(w, h) * (small ? 0.3 : 0.27);
      return { x: w / 2 + x1 * s * unit, y: h * 0.47 + y2 * s * unit, s, z: z2, unit };
    };
    const depthAlpha = (z: number) => Math.max(0.25, Math.min(1, 0.75 - z * 0.35));

    // 光の粒（数を絞る）
    const pulses: Pulse[] = [];
    const spawn = (): Pulse => {
      let from = raw[Math.floor(Math.random() * raw.length)];
      while (up[from].length === 0) from = raw[Math.floor(Math.random() * raw.length)];
      const to = up[from][Math.floor(Math.random() * up[from].length)];
      return { from, to, t: Math.random() * 0.6, speed: 0.45 + Math.random() * 0.35 };
    };
    if (!reduceMotion) for (let i = 0; i < (small ? 5 : 10); i++) pulses.push(spawn());

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = nodes.map((n) => project(n.x, n.y, n.z));

      // 層の面（輪）とラベル
      LAYER_Y.forEach((ly, li) => {
        ctx.beginPath();
        for (let k = 0; k <= 48; k++) {
          const a = (k / 48) * Math.PI * 2;
          const p = project(Math.cos(a) * (LAYER_R[li] + 0.12), ly, Math.sin(a) * (LAYER_R[li] + 0.12));
          if (k === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = li === 2 ? "rgba(196,229,56,0.22)" : "rgba(120,150,255,0.16)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // ラベルは輪の左に置く。はみ出すときは輪の内側の上に置く
        const c = project(0, ly, 0);
        ctx.font = `600 ${small ? 10 : 11}px ${font}`;
        ctx.fillStyle = li === 2 ? "rgba(196,229,56,0.85)" : "rgba(200,212,255,0.6)";
        const label = LAYER_LABEL[li];
        const ringLeft = c.x - (LAYER_R[li] + 0.12) * c.unit * c.s;
        const tw = ctx.measureText(label).width;
        if (ringLeft - 10 - tw > 4) {
          ctx.textAlign = "right";
          ctx.fillText(label, ringLeft - 10, c.y + 4);
        } else {
          ctx.textAlign = "left";
          ctx.fillText(label, Math.max(4, ringLeft + 6), c.y - 10);
        }
      });

      // 線
      edges.forEach(([a, b, kind]) => {
        const p = pts[a], q = pts[b];
        const alpha = depthAlpha((p.z + q.z) / 2);
        ctx.strokeStyle =
          kind === 0
            ? nodes[a].layer === 0
              ? `rgba(150,165,210,${0.14 * alpha})`
              : nodes[a].layer === 1
                ? `rgba(91,140,255,${0.32 * alpha})`
                : `rgba(196,229,56,${0.4 * alpha})`
            : kind === 1
              ? `rgba(91,140,255,${0.12 * alpha})`
              : `rgba(56,189,248,${0.28 * alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      });

      // 点（奥から手前の順に）
      nodes
        .map((n, i) => ({ n, p: pts[i] }))
        .sort((A, B) => B.p.z - A.p.z)
        .forEach(({ n, p }) => {
          const alpha = depthAlpha(p.z);
          const r = (n.hot ? 6 : n.layer === 2 ? 3.6 : n.layer === 1 ? 2.6 : 2) * p.s;
          if (n.hot) {
            ctx.fillStyle = "rgba(196,229,56,0.16)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, r * 3.2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = n.hot
            ? "#C4E538"
            : n.layer === 2
              ? `rgba(56,189,248,${alpha})`
              : n.layer === 1
                ? `rgba(110,150,255,${alpha})`
                : `rgba(170,182,220,${0.6 * alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        });

      // 光の粒
      pulses.forEach((pl) => {
        const p = pts[pl.from], q = pts[pl.to];
        for (let k = 0; k < 3; k++) {
          const t = Math.max(0, pl.t - k * 0.06);
          const x = p.x + (q.x - p.x) * t;
          const y = p.y + (q.y - p.y) * t;
          ctx.fillStyle = k === 0 ? "rgba(214,245,120,0.95)" : `rgba(196,229,56,${0.35 - k * 0.1})`;
          ctx.beginPath();
          ctx.arc(x, y, (k === 0 ? 2.2 : 1.6) * p.s, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    let raf = 0;
    let last = performance.now();
    let visible = true;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      rotY += dt * 0.08; // ゆっくり回る（1周およそ80秒）
      mx += (targetMx - mx) * 0.05;
      my += (targetMy - my) * 0.05;
      pulses.forEach((pl, i) => {
        pl.t += dt * pl.speed;
        if (pl.t >= 1) {
          const next = up[pl.to];
          pulses[i] = next.length
            ? { from: pl.to, to: next[Math.floor(Math.random() * next.length)], t: 0, speed: pl.speed }
            : spawn();
        }
      });
      draw();
      raf = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (reduceMotion || raf) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    draw();
    start();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : visible && start());
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMx = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
      targetMy = Math.max(-1, Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
    };
    if (finePointer && !reduceMotion) window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

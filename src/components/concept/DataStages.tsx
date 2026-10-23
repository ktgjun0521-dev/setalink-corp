// 「データが判断に変わるまで」の3段階を、等角（アイソメトリック）の立体図で描く。SVGなので軽い

const C = Math.cos(Math.PI / 6);
const S = Math.sin(Math.PI / 6);
const SIZE = 21;
const OX = 150;
const OY = 78;

const iso = (x: number, y: number, z = 0) => [OX + (x - y) * C * SIZE, OY + (x + y) * S * SIZE - z * SIZE] as const;
const pts = (...p: (readonly [number, number])[]) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

const N = 6; // 面の大きさ（6×6マス）

function Plane({ grid = 0.06, edge = 0.22 }: { grid?: number; edge?: number }) {
  return (
    <g>
      <polygon points={pts(iso(0, 0), iso(N, 0), iso(N, N), iso(0, N))} fill="rgba(91,140,255,0.06)" stroke={`rgba(160,185,255,${edge})`} strokeWidth="1" />
      {Array.from({ length: N - 1 }).map((_, i) => (
        <g key={i} stroke={`rgba(160,185,255,${grid})`} strokeWidth="1">
          <line x1={iso(i + 1, 0)[0]} y1={iso(i + 1, 0)[1]} x2={iso(i + 1, N)[0]} y2={iso(i + 1, N)[1]} />
          <line x1={iso(0, i + 1)[0]} y1={iso(0, i + 1)[1]} x2={iso(N, i + 1)[0]} y2={iso(N, i + 1)[1]} />
        </g>
      ))}
    </g>
  );
}

function Box({ x, y, w = 0.8, d = 0.8, h, tone }: { x: number; y: number; w?: number; d?: number; h: number; tone: "blue" | "lime" }) {
  const c =
    tone === "lime"
      ? { top: "#DDF27A", left: "#B5D334", right: "#8FAE1C" }
      : { top: "rgba(130,165,255,0.95)", left: "rgba(70,110,235,0.9)", right: "rgba(45,80,200,0.9)" };
  return (
    <g>
      <polygon points={pts(iso(x, y + d, 0), iso(x + w, y + d, 0), iso(x + w, y + d, h), iso(x, y + d, h))} fill={c.left} />
      <polygon points={pts(iso(x + w, y, 0), iso(x + w, y + d, 0), iso(x + w, y + d, h), iso(x + w, y, h))} fill={c.right} />
      <polygon points={pts(iso(x, y, h), iso(x + w, y, h), iso(x + w, y + d, h), iso(x, y + d, h))} fill={c.top} />
    </g>
  );
}

/* 01：散らばったデータ（高さもばらばらの点） */
function RawStage() {
  const dots = [
    [0.8, 1.2, 1.6], [2.1, 0.6, 0.6], [4.6, 0.9, 2.2], [5.2, 2.4, 0.9], [1.4, 3.3, 2.6], [3.0, 2.2, 1.4],
    [3.8, 4.1, 0.5], [0.6, 5.0, 1.1], [2.6, 5.2, 2.0], [5.0, 4.8, 1.7], [4.2, 3.0, 2.9], [1.9, 4.4, 0.4],
  ];
  return (
    <svg viewBox="0 0 300 230" className="w-full" aria-hidden="true">
      <Plane grid={0.04} edge={0.18} />
      {dots.map(([x, y, z], i) => {
        const [bx, by] = iso(x, y, 0);
        const [tx, ty] = iso(x, y, z);
        return (
          <g key={i}>
            <ellipse cx={bx} cy={by} rx="4" ry="2" fill="rgba(160,185,255,0.18)" />
            <line x1={bx} y1={by} x2={tx} y2={ty} stroke="rgba(160,185,255,0.25)" strokeDasharray="2 3" />
            <circle cx={tx} cy={ty} r="4" fill="rgba(190,200,230,0.85)" />
          </g>
        );
      })}
    </svg>
  );
}

/* 02：整理されたデータ（マス目にそろう） */
function StructuredStage() {
  const heat = [
    [0.2, 0.4, 0.3, 0.6, 0.2, 0.1],
    [0.5, 0.8, 0.6, 0.3, 0.4, 0.2],
    [0.3, 0.6, 1.0, 0.7, 0.5, 0.3],
    [0.2, 0.4, 0.7, 0.9, 0.6, 0.4],
    [0.1, 0.3, 0.4, 0.5, 0.8, 0.5],
    [0.1, 0.2, 0.2, 0.3, 0.4, 0.6],
  ];
  return (
    <svg viewBox="0 0 300 230" className="w-full" aria-hidden="true">
      {heat.map((row, y) =>
        row.map((v, x) => (
          <polygon
            key={`${x}-${y}`}
            points={pts(iso(x + 0.08, y + 0.08), iso(x + 0.92, y + 0.08), iso(x + 0.92, y + 0.92), iso(x + 0.08, y + 0.92))}
            fill={`rgba(91,140,255,${0.12 + v * 0.7})`}
          />
        ))
      )}
      <Plane grid={0} edge={0.35} />
    </svg>
  );
}

/* 03：判断・成果（伸びる棒と、効いている所） */
function ValueStage() {
  const bars = [
    { x: 0.6, y: 3.6, h: 1.0 },
    { x: 1.8, y: 2.4, h: 1.6 },
    { x: 3.0, y: 1.2, h: 2.2 },
    { x: 4.2, y: 0.0, h: 3.3, key: true },
  ];
  const peak = iso(4.6, 0.4, 3.3);
  return (
    <svg viewBox="0 0 300 230" className="w-full" aria-hidden="true">
      <defs>
        <filter id="value-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <Plane grid={0.05} edge={0.2} />
      <ellipse cx={iso(4.6, 0.4)[0]} cy={iso(4.6, 0.4)[1]} rx="30" ry="14" fill="rgba(196,229,56,0.35)" filter="url(#value-glow)" />
      {[...bars].sort((a, b) => a.x + a.y - (b.x + b.y)).map((b) => (
        <Box key={b.x} x={b.x} y={b.y} h={b.h} tone={b.key ? "lime" : "blue"} />
      ))}
      <path d={`M${peak[0] + 14} ${peak[1] - 6} l 0 -22 m -7 7 l 7 -7 l 7 7`} stroke="#C4E538" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StageVisual({ kind }: { kind: "raw" | "structured" | "value" }) {
  if (kind === "raw") return <RawStage />;
  if (kind === "structured") return <StructuredStage />;
  return <ValueStage />;
}

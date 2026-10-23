// トップページの図解（改善サイクル・4つの選択肢のつまずき）。線画＋差し色

const INK = "#16161D";
const PAPER = "#FFFDF7";
const BLUE = "#2D5BFF";
const LIME = "#C4E538";
const PEACH = "#FCE6D6";
const RED = "#E8590C";
const GRAY = "#5A5D66";
const HAND = "var(--font-klee-one), cursive";
const GOTHIC = "var(--font-noto-sans-jp), sans-serif";

const CX = 260;
const CY = 260;
const R = 176;
const NODE_R = 56;

const pos = (deg: number, r = R) => ({
  x: CX + r * Math.cos((deg * Math.PI) / 180),
  y: CY + r * Math.sin((deg * Math.PI) / 180),
});

const r1 = (n: number) => Math.round(n * 10) / 10;

/* 改善サイクル：6つのステップを円で回す。03（見える化）で終わらせず、04〜06まで回す */
export function ImprovementCycle({
  steps,
  className = "",
}: {
  steps: { step: string; short: [string, string] }[];
  className?: string;
}) {
  const nodeDeg = (i: number) => -90 + i * 60;
  const arcStart = pos(90);
  const arcEnd = pos(210);

  return (
    <svg viewBox="20 20 480 480" className={className} role="img" aria-label="改善サイクルの図。いまの改善を知る、仮説を立てる、数字を見える化、ボトルネックを見つける、施策を実行する、成果を測る、を繰り返す。多くの支援は見える化で終わるが、セタリンクはボトルネックの特定から成果の測定まで回す">
      {/* 04→06：ここからが本番（マーカー） */}
      <path
        d={`M ${r1(arcStart.x)} ${r1(arcStart.y)} A ${R} ${R} 0 0 1 ${r1(arcEnd.x)} ${r1(arcEnd.y)}`}
        fill="none"
        stroke={LIME}
        strokeWidth="18"
      />
      {/* 円の線 */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={INK} strokeWidth="2" />
      {/* 進む向きの矢印 */}
      {[-60, 0, 60, 120, 180, 240].map((deg) => {
        const p = pos(deg);
        return (
          <path
            key={deg}
            d="M-7 -9 L5 0 L-7 9"
            transform={`translate(${r1(p.x)} ${r1(p.y)}) rotate(${deg + 90})`}
            fill="none"
            stroke={INK}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}

      {/* 中央 */}
      <text x={CX} y={CY - 4} textAnchor="middle" fontSize="26" fontWeight="900" fill={INK} fontFamily={GOTHIC}>
        改善サイクル
      </text>
      <text x={CX} y={CY + 28} textAnchor="middle" fontSize="16" fill={GRAY} fontFamily={HAND}>
        回すたびに、精度が上がる
      </text>

      {/* ステップ */}
      {steps.map((s, i) => {
        const p = pos(nodeDeg(i));
        const key = i === 3;
        return (
          <g key={s.step} transform={`translate(${r1(p.x)} ${r1(p.y)})`}>
            <circle r={NODE_R} fill={key ? LIME : PAPER} stroke={INK} strokeWidth="2" />
            <text y="-17" textAnchor="middle" fontSize="14" fontWeight="700" fill={key ? INK : BLUE} fontFamily="var(--font-inter), sans-serif">
              {s.step}
            </text>
            <text y="6" textAnchor="middle" fontSize="16" fontWeight="700" fill={INK} fontFamily={GOTHIC}>
              {s.short[0]}
            </text>
            <text y="26" textAnchor="middle" fontSize="16" fontWeight="700" fill={INK} fontFamily={GOTHIC}>
              {s.short[1]}
            </text>
          </g>
        );
      })}

      {/* 書き込み：多くの支援はここで終わり（03の横） */}
      <path d="M440 428 C 444 416, 436 408, 426 402" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" />
      <path d="M426 402 L 438 402 M 426 402 L 430 414" stroke={RED} strokeWidth="2" strokeLinecap="round" />
      <rect x="380" y="430" width="116" height="60" fill={PEACH} stroke={INK} strokeWidth="1.8" />
      <text x="438" y="455" textAnchor="middle" fontSize="16" fill={INK} fontFamily={HAND}>
        多くの支援は
      </text>
      <text x="438" y="478" textAnchor="middle" fontSize="16" fill={INK} fontFamily={HAND}>
        ここで終わり
      </text>

      {/* 書き込み：ここからが本番（04〜06の横） */}
      <rect x="22" y="430" width="134" height="60" fill={LIME} stroke={INK} strokeWidth="1.8" />
      <text x="89" y="455" textAnchor="middle" fontSize="16" fill={INK} fontFamily={HAND}>
        セタリンクは
      </text>
      <text x="89" y="478" textAnchor="middle" fontSize="16" fill={INK} fontFamily={HAND}>
        ここからが本番
      </text>
    </svg>
  );
}

/* ===== 4つの選択肢のつまずき（それぞれの言葉に合わせた絵） ===== */

export type StumbleKind = "self" | "tool" | "hire" | "wait";

/* 線で描く人 */
function Person({ x, y, fill = PAPER, flip = false }: { x: number; y: number; fill?: string; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="-6" y1="34" x2="-7" y2="48" />
      <line x1="6" y1="34" x2="8" y2="48" />
      <path d="M-14 36 C -14 10, 14 10, 14 36 Z" fill={fill} />
      <circle cx="0" cy="-2" r="10" fill={PAPER} />
    </g>
  );
}

/* 本業が忙しくて止まる：本業の箱を山ほど抱え、「データ整理」の紙は後回しで置き去り */
function SelfScene() {
  return (
    <g>
      <line x1="10" y1="150" x2="330" y2="150" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {/* 置き去りの紙 */}
      <g transform="rotate(-6 70 136)">
        <rect x="34" y="120" width="76" height="26" fill={PAPER} stroke={INK} strokeWidth="1.8" />
        <text x="72" y="138" textAnchor="middle" fontSize="13" fill={INK} fontFamily={HAND}>データ整理</text>
      </g>
      <path d="M40 112 Q 46 106 52 112 M 96 108 Q 102 102 108 108" fill="none" stroke={GRAY} strokeWidth="1.5" />
      <text x="40" y="98" fontSize="13" fill={RED} fontFamily={HAND}>あとで…</text>
      {/* 箱を抱えて歩く人 */}
      <Person x={222} y={102} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={186 + (i % 2) * 6} y={54 - i * 24} width="64" height="24" fill={i === 1 ? "#E8EEFF" : PAPER} stroke={INK} strokeWidth="1.8" />
          <text x={218 + (i % 2) * 6} y={71 - i * 24} textAnchor="middle" fontSize="13" fill={INK} fontFamily={HAND}>本業</text>
        </g>
      ))}
      <rect x="192" y="78" width="64" height="24" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <text x="224" y="95" textAnchor="middle" fontSize="13" fill={INK} fontFamily={HAND}>本業</text>
      {/* 汗 */}
      <path d="M258 66 C 262 72, 262 76, 258 78 C 254 76, 254 72, 258 66 Z" fill="#9CC0FF" stroke={INK} strokeWidth="1.2" />
      <g stroke={GRAY} strokeWidth="2" strokeLinecap="round">
        <line x1="270" y1="120" x2="292" y2="120" />
        <line x1="274" y1="130" x2="300" y2="130" />
      </g>
    </g>
  );
}

/* だんだん誰も見なくなる：クモの巣が張った画面と、空いたままの椅子 */
function ToolScene() {
  return (
    <g>
      <line x1="10" y1="150" x2="330" y2="150" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {/* 机 */}
      <rect x="40" y="112" width="170" height="8" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <line x1="56" y1="120" x2="56" y2="150" stroke={INK} strokeWidth="1.8" />
      <line x1="194" y1="120" x2="194" y2="150" stroke={INK} strokeWidth="1.8" />
      {/* 画面 */}
      <rect x="66" y="40" width="118" height="70" fill={PAPER} stroke={INK} strokeWidth="2" />
      <line x1="125" y1="110" x2="125" y2="112" stroke={INK} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={98 + i * 18} y={92 - [10, 18, 14, 24][i]} width="11" height={[10, 18, 14, 24][i]} fill="#E8EEFF" stroke={INK} strokeWidth="1.2" />
      ))}
      {/* クモの巣 */}
      <g stroke={GRAY} strokeWidth="1" fill="none">
        <path d="M66 40 L 96 40 M 66 40 L 66 70 M 66 40 L 90 64" />
        <path d="M76 40 Q 72 46 66 48 M 86 40 Q 80 52 66 58 M 96 40 Q 88 60 66 68" />
      </g>
      {/* 付箋 */}
      <g transform="rotate(4 168 52)">
        <rect x="140" y="30" width="58" height="40" fill={LIME} stroke={INK} strokeWidth="1.5" />
        <text x="169" y="47" textAnchor="middle" fontSize="11" fill={INK} fontFamily={HAND}>最終更新</text>
        <text x="169" y="63" textAnchor="middle" fontSize="11" fill={INK} fontFamily={HAND}>3か月前</text>
      </g>
      {/* 空いた椅子 */}
      <g stroke={INK} strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M250 70 L 250 124 L 290 124" />
        <line x1="252" y1="124" x2="252" y2="150" />
        <line x1="288" y1="124" x2="288" y2="150" />
      </g>
      <text x="248" y="58" fontSize="13" fill={RED} fontFamily={HAND}>だれもいない</text>
    </g>
  );
}

/* そもそも採用できない：募集の貼り紙に「応募 0件」、待ちぼうけの人 */
function HireScene() {
  return (
    <g>
      <line x1="10" y1="150" x2="330" y2="150" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {/* 掲示板 */}
      <rect x="40" y="36" width="140" height="92" fill="#EFE3CF" stroke={INK} strokeWidth="2" />
      <line x1="62" y1="128" x2="62" y2="150" stroke={INK} strokeWidth="2" />
      <line x1="158" y1="128" x2="158" y2="150" stroke={INK} strokeWidth="2" />
      <g transform="rotate(-3 110 82)">
        <rect x="58" y="46" width="104" height="72" fill={PAPER} stroke={INK} strokeWidth="1.8" />
        <circle cx="110" cy="50" r="3.5" fill={RED} />
        <text x="110" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} fontFamily={GOTHIC}>募集</text>
        <text x="110" y="89" textAnchor="middle" fontSize="12" fill={INK} fontFamily={GOTHIC}>データ担当</text>
        <path d="M74 100 H146 M74 108 H128" stroke="#E3DDCF" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 応募 0件 */}
      <g transform="rotate(-6 214 60)">
        <rect x="184" y="44" width="72" height="30" fill={PEACH} stroke={INK} strokeWidth="1.8" />
        <text x="220" y="65" textAnchor="middle" fontSize="15" fill={RED} fontFamily={HAND}>応募 0件</text>
      </g>
      {/* 待つ人と砂時計 */}
      <Person x={282} y={102} />
      <g transform="translate(316 96)" stroke={INK} strokeWidth="1.8" fill={PAPER} strokeLinejoin="round">
        <path d="M-9 -16 H9 M-9 16 H9" strokeLinecap="round" />
        <path d="M-7 -16 L 7 -16 L 0 0 Z M -7 16 L 7 16 L 0 0 Z" />
      </g>
      <text x="262" y="80" fontSize="12" fill={GRAY} fontFamily={HAND}>まだかな…</text>
    </g>
  );
}

/* 1年後も同じ場所：2026年と2027年、同じ人が同じ×印の上に立っている */
function WaitScene() {
  const panel = (x: number, year: string) => (
    <g>
      <rect x={x} y="34" width="118" height="116" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x={x} y="34" width="118" height="24" fill={INK} />
      <text x={x + 59} y="52" textAnchor="middle" fontSize="14" fontWeight="700" fill={PAPER} fontFamily="var(--font-inter), sans-serif">
        {year}
      </text>
      <path d={`M${x + 47} 138 L ${x + 71} 146 M ${x + 71} 138 L ${x + 47} 146`} stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
  return (
    <g>
      {panel(26, "2026")}
      {panel(196, "2027")}
      <Person x={85} y={88} fill="#E8EEFF" />
      <Person x={255} y={88} fill="#E8EEFF" />
      <path d="M150 92 H 186" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M178 84 L 188 92 L 178 100" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="168" y="78" textAnchor="middle" fontSize="12" fill={GRAY} fontFamily={HAND}>1年後</text>
      <text x="255" y="166" textAnchor="middle" fontSize="13" fill={RED} fontFamily={HAND}>↑ 変わらず</text>
    </g>
  );
}

export function StumbleScene({ kind, label, className = "" }: { kind: StumbleKind; label: string; className?: string }) {
  return (
    <svg viewBox="0 0 340 168" className={className} role="img" aria-label={`つまずきやすいところ：${label}`}>
      {kind === "self" && <SelfScene />}
      {kind === "tool" && <ToolScene />}
      {kind === "hire" && <HireScene />}
      {kind === "wait" && <WaitScene />}
    </svg>
  );
}

// トップページの図解（改善サイクル・つまずきの道）

const INK = "#1A1A2E";
const BLUE = "#2D5BFF";
const LIME = "#C4E538";
const FONT = "var(--font-zen-maru), sans-serif";

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
      {/* 円の道 */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#E6EEFF" strokeWidth="16" />
      {/* 04→06：ここからが本番 */}
      <path
        d={`M ${r1(arcStart.x)} ${r1(arcStart.y)} A ${R} ${R} 0 0 1 ${r1(arcEnd.x)} ${r1(arcEnd.y)}`}
        fill="none"
        stroke={LIME}
        strokeWidth="16"
        strokeLinecap="round"
      />
      {/* 進む向きの矢印 */}
      {[-60, 0, 60, 120, 180, 240].map((deg) => {
        const p = pos(deg);
        return (
          <path
            key={deg}
            d="M-6 -9 L6 0 L-6 9"
            transform={`translate(${r1(p.x)} ${r1(p.y)}) rotate(${deg + 90})`}
            fill="none"
            stroke={BLUE}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}

      {/* 中央 */}
      <circle cx={CX} cy={CY} r="92" fill="#fff" />
      <text x={CX} y={CY - 8} textAnchor="middle" fontSize="24" fontWeight="700" fill={INK} fontFamily={FONT}>
        改善サイクル
      </text>
      <text x={CX} y={CY + 22} textAnchor="middle" fontSize="14" fill="#5F6577" fontFamily={FONT}>
        回すたびに、
      </text>
      <text x={CX} y={CY + 42} textAnchor="middle" fontSize="14" fill="#5F6577" fontFamily={FONT}>
        改善の精度が上がる
      </text>

      {/* ステップ */}
      {steps.map((s, i) => {
        const p = pos(nodeDeg(i));
        const key = i === 3;
        return (
          <g key={s.step} transform={`translate(${r1(p.x)} ${r1(p.y)})`}>
            <circle r={NODE_R} fill={key ? LIME : "#fff"} stroke={INK} strokeWidth={key ? 3 : 2.5} />
            <text y="-17" textAnchor="middle" fontSize="14" fontWeight="700" fill={key ? INK : BLUE} fontFamily="var(--font-inter), sans-serif">
              {s.step}
            </text>
            <text y="6" textAnchor="middle" fontSize="16" fontWeight="700" fill={INK} fontFamily={FONT}>
              {s.short[0]}
            </text>
            <text y="26" textAnchor="middle" fontSize="16" fontWeight="700" fill={INK} fontFamily={FONT}>
              {s.short[1]}
            </text>
          </g>
        );
      })}

      {/* 吹き出し：多くの支援はここで終わり（03の横） */}
      <path d="M432 430 L420 404" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="378" y="430" width="118" height="60" rx="12" fill="#FFEBDD" stroke={INK} strokeWidth="1.5" />
      <text x="437" y="455" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fontFamily={FONT}>
        多くの支援は
      </text>
      <text x="437" y="476" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fontFamily={FONT}>
        ここで終わり
      </text>

      {/* 吹き出し：ここからが本番（04〜06の横） */}
      <rect x="22" y="430" width="134" height="60" rx="12" fill="#F1F8D0" stroke={INK} strokeWidth="1.5" />
      <text x="88" y="455" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fontFamily={FONT}>
        セタリンクは
      </text>
      <text x="88" y="476" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fontFamily={FONT}>
        ここからが本番
      </text>
    </svg>
  );
}

/* つまずきの道：成果（旗）に向かう途中で、石につまずく。stay は動かずにその場にいる */
export function StumbleRoad({
  label,
  variant = "stumble",
  className = "",
}: {
  label: string;
  variant?: "stumble" | "stay";
  className?: string;
}) {
  const tagW = label.length * 13 + 26;
  const tagCx = variant === "stumble" ? 170 : 70;
  const tagX = Math.max(6, Math.min(334 - tagW, tagCx - tagW / 2));

  return (
    <svg viewBox="0 0 340 140" className={className} role="img" aria-label={`つまずきやすいところ：${label}`}>
      {/* 道 */}
      <path d="M10 118 Q 90 112 170 118 T 330 116" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 126 L322 126" stroke="#EAE4D6" strokeWidth="6" strokeLinecap="round" />

      {/* ゴール：成果 */}
      <g opacity={variant === "stay" ? 0.45 : 0.6}>
        <line x1="294" y1="117" x2="294" y2="62" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M294 62 L332 70 L294 80 Z" fill={LIME} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <text x="294" y="100" textAnchor="end" dx="-6" fontSize="12" fontWeight="700" fill={INK} fontFamily={FONT}>
          成果
        </text>
      </g>

      {variant === "stumble" ? (
        <>
          {/* 石 */}
          <path d="M150 118 C 148 104, 160 96, 172 98 C 186 98, 196 106, 194 118 Z" fill="#D9D2C3" stroke={INK} strokeWidth="2" />
          {/* つまずく人 */}
          <g transform="translate(140 116) rotate(32)">
            <line x1="-4" y1="0" x2="-14" y2="4" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="5" y1="0" x2="10" y2="-6" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-11 0 C -11 -30, 11 -30, 11 0 Z" fill={BLUE} stroke={INK} strokeWidth="2" />
            <line x1="-8" y1="-18" x2="-20" y2="-32" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="8" y1="-18" x2="18" y2="-34" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="-36" r="10" fill="#FFE3CF" stroke={INK} strokeWidth="2" />
          </g>
          {/* 歩いてきた勢い */}
          <g stroke="#9AA0AE" strokeWidth="2.5" strokeLinecap="round">
            <line x1="70" y1="86" x2="92" y2="86" />
            <line x1="62" y1="97" x2="90" y2="97" />
            <line x1="72" y1="108" x2="94" y2="108" />
          </g>
          {/* 石にぶつかった印 */}
          <g stroke="#E8590C" strokeWidth="2.5" strokeLinecap="round">
            <line x1="152" y1="96" x2="148" y2="88" />
            <line x1="158" y1="94" x2="160" y2="85" />
            <line x1="146" y1="101" x2="138" y2="98" />
          </g>
          {/* びっくり */}
          <g stroke={INK} strokeWidth="2.5" strokeLinecap="round">
            <line x1="112" y1="66" x2="106" y2="58" />
            <line x1="120" y1="62" x2="120" y2="52" />
          </g>
          {/* 吹き出しの矢印 */}
          <path d={`M${tagCx - 6} 46 L${tagCx} 56 L${tagCx + 6} 46`} fill="#FFEBDD" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
        </>
      ) : (
        <>
          {/* その場で立ち止まる人 */}
          <g transform="translate(70 116)">
            <line x1="-5" y1="0" x2="-5" y2="-6" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="5" y1="0" x2="5" y2="-6" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-12 -4 C -12 -34, 12 -34, 12 -4 Z" fill={BLUE} stroke={INK} strokeWidth="2" />
            <circle cx="0" cy="-42" r="10" fill="#FFE3CF" stroke={INK} strokeWidth="2" />
          </g>
          {/* ここから進まない（点線） */}
          <path d="M96 106 L270 106" stroke={INK} strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" opacity="0.35" />
          <text x="182" y="98" textAnchor="middle" fontSize="12" fill="#5F6577" fontFamily={FONT}>
            ……
          </text>
          <path d={`M${tagCx - 6} 46 L${tagCx} 56 L${tagCx + 6} 46`} fill="#FFEBDD" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
        </>
      )}

      {/* つまずきのラベル */}
      <rect x={tagX} y="18" width={tagW} height="29" rx="10" fill="#FFEBDD" stroke={INK} strokeWidth="1.5" />
      <text x={tagX + tagW / 2} y="37.5" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} fontFamily={FONT}>
        {label}
      </text>
    </svg>
  );
}

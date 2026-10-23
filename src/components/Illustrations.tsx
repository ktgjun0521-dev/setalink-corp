// 線画のイラスト（雑誌の挿絵・会議メモのように。塗りは差し色だけ）

const INK = "#16161D";
const PAPER = "#FFFDF7";
const BLUE = "#2D5BFF";
const LIME = "#C4E538";
const PEACH = "#FCE6D6";
const RED = "#E8590C"; // 赤ペン
const RULE = "#E3DDCF";
const HAND = "var(--font-klee-one), cursive";
const GOTHIC = "var(--font-noto-sans-jp), sans-serif";

/* 線で描く人（頭・胴・腕） */
function Person({ x, y, scale = 1, fill = PAPER }: { x: number; y: number; scale?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={INK} strokeWidth={2 / scale} strokeLinecap="round" strokeLinejoin="round">
      <path d="M-18 40 C -18 12, 18 12, 18 40" fill={fill} />
      <circle cx="0" cy="-2" r="12" fill={PAPER} />
      <path d="M-9 -8 C -6 -16, 6 -16, 9 -8" fill="none" />
    </g>
  );
}

/* ファーストビュー：改善会議のメモ。流れを分解して、詰まっている所に赤丸 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  const rows = [
    { label: "問い合わせ", value: "1,200", w: 210 },
    { label: "面談", value: "480", w: 150 },
    { label: "提案", value: "130", w: 52, hot: true },
    { label: "契約", value: "42", w: 26 },
  ];
  return (
    <svg viewBox="0 0 520 440" className={className} role="img" aria-label="改善会議のメモのイラスト。問い合わせから契約までの数を分解し、面談から提案で大きく減っているところに赤丸で「ここが詰まってる」と書き込んでいる">
      {/* ノート */}
      <g transform="rotate(-2 260 220)">
        <rect x="36" y="34" width="430" height="370" fill={PAPER} stroke={INK} strokeWidth="2" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={i} x1="36" x2="466" y1={96 + i * 28} y2={96 + i * 28} stroke={RULE} strokeWidth="1" />
        ))}
        <line x1="78" y1="34" x2="78" y2="404" stroke="#F2B8A0" strokeWidth="1" />
        {/* リング */}
        {Array.from({ length: 9 }).map((_, i) => (
          <ellipse key={i} cx={70 + i * 45} cy="34" rx="5" ry="10" fill={PAPER} stroke={INK} strokeWidth="1.8" />
        ))}

        <text x="92" y="80" fontSize="20" fill={INK} fontFamily={HAND}>問い合わせ → 契約、どこで減ってる？</text>

        {rows.map((r, i) => {
          const y = 118 + i * 56;
          return (
            <g key={r.label}>
              <text x="92" y={y + 20} fontSize="16" fill={INK} fontFamily={HAND}>{r.label}</text>
              <rect x="190" y={y} width={r.w} height="28" fill={r.hot ? PEACH : "#E8EEFF"} stroke={INK} strokeWidth="1.8" />
              <text x={196 + r.w + 6} y={y + 20} fontSize="15" fill={INK} fontFamily={GOTHIC} fontWeight="700">{r.value}</text>
            </g>
          );
        })}

        {/* 赤丸と書き込み */}
        <path d="M180 236 C 176 216, 232 208, 272 212 C 312 216, 316 256, 276 264 C 230 272, 182 266, 184 240" fill="none" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        <path d="M318 302 C 330 286, 322 266, 304 254" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M304 254 L 318 254 M 304 254 L 308 268" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
        <text x="284" y="326" fontSize="18" fill={RED} fontFamily={HAND}>ここが詰まってる！</text>

        <text x="92" y="372" fontSize="15" fill="#5A5D66" fontFamily={HAND}>→ 面談の中身を見てみる</text>
      </g>

      {/* 付箋 */}
      <g transform="rotate(6 440 196)">
        <rect x="392" y="152" width="100" height="84" fill={LIME} stroke={INK} strokeWidth="2" />
        <text x="406" y="184" fontSize="17" fill={INK} fontFamily={HAND}>施策A</text>
        <text x="406" y="212" fontSize="17" fill={INK} fontFamily={HAND}>効いた？</text>
      </g>

      {/* ペン */}
      <g transform="rotate(-22 460 386)">
        <rect x="420" y="380" width="88" height="12" fill={BLUE} stroke={INK} strokeWidth="1.8" />
        <path d="M420 380 L 404 386 L 420 392 Z" fill={PAPER} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* お悩み：どれが最新か分からないファイルの山 */
export function WorryIllustration({ className = "" }: { className?: string }) {
  const files = ["売上_最新.xlsx", "売上_最新(2).xlsx", "売上_最新_修正版.xlsx", "本当の最新.xlsx"];
  return (
    <svg viewBox="0 0 360 280" className={className} role="img" aria-label="「売上_最新」「本当の最新」など、どれが正しいか分からないファイルが積み重なっているイラスト">
      {files.map((f, i) => (
        <g key={f} transform={`translate(${26 + i * 22} ${30 + i * 44}) rotate(${i % 2 ? 2 : -2})`}>
          <rect width="240" height="56" fill={PAPER} stroke={INK} strokeWidth="2" />
          <rect x="14" y="14" width="28" height="28" fill={i === 3 ? LIME : "#E8EEFF"} stroke={INK} strokeWidth="1.5" />
          <path d="M14 23 H42 M14 32 H42 M24 14 V42 M33 14 V42" stroke={INK} strokeWidth="1" />
          <text x="56" y="34" fontSize="15" fill={INK} fontFamily={GOTHIC} fontWeight="700">{f}</text>
        </g>
      ))}
      <path d="M300 120 C 330 132, 336 160, 318 182" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M318 182 L 314 168 M 318 182 L 330 174" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
      <text x="248" y="108" fontSize="19" fill={RED} fontFamily={HAND}>どれが正しい…？</text>
    </svg>
  );
}

/* 初回相談：机をはさんで話す2人 */
export function TalkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 230" className={className} role="img" aria-label="お客様とセタリンクが、ノートを見ながら改善したいことを話しているイラスト">
      <line x1="40" y1="190" x2="300" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {/* 机とノート */}
      <rect x="90" y="166" width="160" height="10" fill={PAPER} stroke={INK} strokeWidth="2" />
      <g transform="rotate(-3 170 150)">
        <rect x="132" y="134" width="76" height="32" fill={PAPER} stroke={INK} strokeWidth="1.8" />
        <path d="M142 158 L 158 150 L 172 154 L 196 140" fill="none" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="158" cy="150" r="8" fill="none" stroke={RED} strokeWidth="2" />
      </g>
      <Person x={70} y={130} scale={1.25} />
      <Person x={270} y={130} scale={1.25} fill="#E8EEFF" />
      {/* ふきだし */}
      <g>
        <rect x="14" y="20" width="132" height="44" fill={PAPER} stroke={INK} strokeWidth="2" />
        <path d="M58 64 L 64 78 L 74 64" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <line x1="59" y1="64" x2="73" y2="64" stroke={PAPER} strokeWidth="3" />
        <text x="80" y="48" textAnchor="middle" fontSize="16" fill={INK} fontFamily={HAND}>どこを直せば…？</text>
      </g>
      <g>
        <rect x="192" y="26" width="136" height="44" fill={LIME} stroke={INK} strokeWidth="2" />
        <path d="M262 70 L 270 84 L 278 70" fill={LIME} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <line x1="263" y1="70" x2="277" y2="70" stroke={LIME} strokeWidth="3" />
        <text x="260" y="54" textAnchor="middle" fontSize="16" fill={INK} fontFamily={HAND}>ここかもしれない！</text>
      </g>
    </svg>
  );
}

/* データコンサルティング：バラバラ → そろえる → いつでも見られる */
export function DataIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 300" className={className} role="img" aria-label="ばらばらのシートを整理して、いつでも見られる画面にするイラスト">
      {/* バラバラのシート */}
      {[
        { x: 18, y: 60, r: -8 },
        { x: 34, y: 128, r: 5 },
        { x: 14, y: 194, r: -3 },
      ].map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
          <rect width="72" height="52" fill={PAPER} stroke={INK} strokeWidth="2" />
          <path d="M10 16 H62 M10 28 H52 M10 40 H58" stroke={RULE} strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
      <text x="20" y="282" fontSize="16" fill="#5A5D66" fontFamily={HAND}>バラバラ</text>

      {[86, 154, 220].map((y) => (
        <path key={y} d={`M100 ${y} C 130 ${y}, 128 150, 150 150`} fill="none" stroke={INK} strokeWidth="1.8" strokeDasharray="5 6" strokeLinecap="round" />
      ))}

      {/* そろえる */}
      <g transform="translate(152 116)">
        <rect width="64" height="68" fill="#E8EEFF" stroke={INK} strokeWidth="2" />
        <path d="M0 22 H64 M0 45 H64 M21 0 V68 M42 0 V68" stroke={INK} strokeWidth="1.2" />
      </g>
      <text x="152" y="214" fontSize="16" fill="#5A5D66" fontFamily={HAND}>そろえる</text>

      <path d="M226 150 H 252" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M244 142 L 254 150 L 244 158" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* いつでも見られる画面 */}
      <g transform="translate(262 70)">
        <rect width="166" height="150" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        <rect y="0" width="166" height="20" fill={INK} />
        <circle cx="12" cy="10" r="3" fill={PAPER} />
        <circle cx="22" cy="10" r="3" fill={PAPER} />
        <rect x="12" y="32" width="66" height="34" fill={LIME} stroke={INK} strokeWidth="1.5" />
        <text x="45" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} fontFamily="var(--font-inter), sans-serif">KPI</text>
        <rect x="88" y="32" width="66" height="34" fill={PAPER} stroke={INK} strokeWidth="1.5" />
        <path d="M96 58 L 110 50 L 122 54 L 146 40" fill="none" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="136" x2="154" y2="136" stroke={INK} strokeWidth="1.5" />
        {[24, 50, 76, 102, 128].map((x, i) => (
          <rect key={x} x={x} y={136 - [24, 34, 42, 52, 46][i]} width="16" height={[24, 34, 42, 52, 46][i]} fill={i === 3 ? BLUE : "#E8EEFF"} stroke={INK} strokeWidth="1.2" />
        ))}
      </g>
      <text x="262" y="246" fontSize="16" fill="#5A5D66" fontFamily={HAND}>いつでも見られる</text>
    </svg>
  );
}

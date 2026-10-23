// トップページ用の線画イラスト（写真は使わず、変化が見えるように描く）

const INK = "#1A1A2E";
const BLUE = "#2D5BFF";
const LIME = "#C4E538";

/* ファーストビュー：ばらばらの施策 → 1本の右肩上がりの線へ */
export function HeroIllustration({ className = "" }: { className?: string }) {
  const cards = [
    { x: 18, y: 40, r: -8, label: "広告" },
    { x: 92, y: 118, r: 6, label: "営業" },
    { x: 14, y: 196, r: 4, label: "キャンペーン" },
    { x: 96, y: 276, r: -5, label: "店舗施策" },
  ];
  return (
    <svg viewBox="0 0 520 420" className={className} role="img" aria-label="ばらばらの施策が、データでつながって成果のグラフになるイラスト">
      {/* 背景のやわらかい形 */}
      <path d="M300 40c90-20 190 30 205 120s-35 190-130 215-205 5-235-80 70-235 160-255z" fill="#E6EEFF" />
      <circle cx="140" cy="350" r="52" fill="#F1F8D0" />

      {/* 施策カード */}
      {cards.map((c, i) => (
        // 位置は外側の g、揺れるアニメーションは内側の g（CSSのtransformが位置指定を上書きしないように）
        <g key={c.label} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
          <g className="sway" style={{ animationDelay: `${i * 0.6}s` }}>
            <rect width="118" height="52" rx="14" fill="#fff" stroke={INK} strokeWidth="2" />
            <text x="59" y="32" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fontFamily="var(--font-zen-maru), sans-serif">
              {c.label}
            </text>
            <circle cx="112" cy="4" r="11" fill="#FFEBDD" stroke={INK} strokeWidth="1.5" />
            <text x="112" y="9" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>?</text>
          </g>
        </g>
      ))}

      {/* つながる点線 */}
      {[66, 144, 222, 302].map((y, i) => (
        <path key={y} d={`M${i % 2 ? 214 : 138} ${y} C 230 ${y}, 240 210, 286 210`} fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" className="dash-line" opacity="0.7" />
      ))}

      {/* グラフのボード */}
      <g transform="translate(286 110)">
        <rect width="200" height="200" rx="20" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <line x1="28" y1="168" x2="176" y2="168" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="168" x2="28" y2="34" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <rect x="44" y="128" width="20" height="40" rx="4" fill="#E6EEFF" />
        <rect x="76" y="112" width="20" height="56" rx="4" fill="#E6EEFF" />
        <rect x="108" y="92" width="20" height="76" rx="4" fill="#E6EEFF" />
        <rect x="140" y="62" width="20" height="106" rx="4" fill={LIME} />
        <path d="M44 132 L86 112 L118 118 L150 64" fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M138 62 L152 60 L150 74" fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {/* 虫めがね：ボトルネック発見 */}
        <g transform="translate(86 112)">
          <circle r="20" fill="#FFF" fillOpacity="0.6" stroke={INK} strokeWidth="3" />
          <line x1="14" y1="14" x2="30" y2="30" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        </g>
      </g>

      {/* きらっ */}
      <g stroke={INK} strokeWidth="2.5" strokeLinecap="round">
        <line x1="478" y1="88" x2="478" y2="104" />
        <line x1="470" y1="96" x2="486" y2="96" />
        <line x1="500" y1="330" x2="500" y2="342" />
        <line x1="494" y1="336" x2="506" y2="336" />
      </g>
    </svg>
  );
}

/* お悩み：数字が散らばって、頭をかかえる人 */
export function WorryIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 260" className={className} role="img" aria-label="スプレッドシートが散らばって悩んでいる人のイラスト">
      <ellipse cx="160" cy="232" rx="130" ry="14" fill="#F6F1E6" />
      {/* 散らばったシート */}
      {[
        { x: 18, y: 120, r: -12 },
        { x: 230, y: 110, r: 10 },
        { x: 40, y: 30, r: 8 },
        { x: 222, y: 22, r: -6 },
      ].map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
          <rect width="72" height="88" rx="8" fill="#fff" stroke={INK} strokeWidth="2" />
          <line x1="12" y1="22" x2="60" y2="22" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
          <line x1="12" y1="38" x2="52" y2="38" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
          <line x1="12" y1="54" x2="58" y2="54" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
          <line x1="12" y1="70" x2="40" y2="70" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
      {/* 人 */}
      <g transform="translate(160 0)">
        <path d="M-52 232c0-50 22-82 52-82s52 32 52 82z" fill={BLUE} stroke={INK} strokeWidth="2.5" />
        <circle cx="0" cy="112" r="34" fill="#FFE3CF" stroke={INK} strokeWidth="2.5" />
        <path d="M-34 104c4-26 22-36 38-36s32 12 30 34c-10-10-24-14-38-12s-22 8-30 14z" fill={INK} />
        <circle cx="-11" cy="116" r="3" fill={INK} />
        <circle cx="13" cy="116" r="3" fill={INK} />
        <path d="M-8 133c5-4 11-4 16 0" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        {/* 汗 */}
        <path d="M38 96c4 6 6 10 3 14s-9 2-9-3 3-7 6-11z" fill="#9CC0FF" stroke={INK} strokeWidth="1.5" />
      </g>
      {/* はてな */}
      <g fontFamily="var(--font-zen-maru), sans-serif" fontWeight="700" fill={INK}>
        <text x="118" y="54" fontSize="30">?</text>
        <text x="188" y="40" fontSize="22">?</text>
      </g>
    </svg>
  );
}

/* 初回相談：対話している2人 */
export function TalkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="お客様とセタリンクが、改善したいことについて話しているイラスト">
      <ellipse cx="160" cy="202" rx="140" ry="12" fill="#F6F1E6" />
      {/* 机 */}
      <rect x="70" y="150" width="180" height="12" rx="6" fill={INK} />
      {/* ノートのグラフ */}
      <rect x="128" y="118" width="64" height="34" rx="6" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M138 142 L152 134 L164 138 L182 124" fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* 左の人（お客様） */}
      <g transform="translate(70 0)">
        <path d="M-40 200c0-42 18-66 40-66s40 24 40 66z" fill="#FFB98A" stroke={INK} strokeWidth="2.5" />
        <circle cx="0" cy="100" r="28" fill="#FFE3CF" stroke={INK} strokeWidth="2.5" />
        <path d="M-28 94c2-22 16-30 30-30s26 10 26 28c-14-6-34-8-56 2z" fill="#6B4A3A" />
        <circle cx="-8" cy="104" r="2.5" fill={INK} />
        <circle cx="10" cy="104" r="2.5" fill={INK} />
        <path d="M-6 116c4 3 9 3 13 0" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* 右の人（セタリンク） */}
      <g transform="translate(250 0)">
        <path d="M-40 200c0-42 18-66 40-66s40 24 40 66z" fill={BLUE} stroke={INK} strokeWidth="2.5" />
        <circle cx="0" cy="100" r="28" fill="#FFE3CF" stroke={INK} strokeWidth="2.5" />
        <path d="M-28 92c4-20 16-28 30-28s26 8 26 26c-10-8-22-10-34-8s-16 6-22 10z" fill={INK} />
        <circle cx="-9" cy="104" r="2.5" fill={INK} />
        <circle cx="9" cy="104" r="2.5" fill={INK} />
        <path d="M-7 115c4 4 10 4 14 0" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* ふきだし */}
      <g>
        <rect x="22" y="10" width="124" height="44" rx="14" fill="#fff" stroke={INK} strokeWidth="2" />
        <path d="M58 54 L66 66 L74 54" fill="#fff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <text x="84" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} fontFamily="var(--font-zen-maru), sans-serif">どこを直せば…？</text>
      </g>
      <g>
        <rect x="176" y="18" width="124" height="44" rx="14" fill={LIME} stroke={INK} strokeWidth="2" />
        <path d="M240 62 L248 74 L256 62" fill={LIME} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <text x="238" y="46" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} fontFamily="var(--font-zen-maru), sans-serif">ここかもしれない！</text>
      </g>
    </svg>
  );
}

/* データコンサルティング：散らばったシート → 整理 → いつでも見られる画面 */
export function DataIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 300" className={className} role="img" aria-label="散らばったシートのデータが整理され、ひとつの画面で見られるようになるイラスト">
      <path d="M40 150c0-80 70-130 170-130s200 40 210 120-60 140-190 140S40 230 40 150z" fill="#F6F1E6" />
      {/* 散らばったシート */}
      {[
        { x: 22, y: 58, r: -10 },
        { x: 40, y: 140, r: 6 },
        { x: 18, y: 214, r: -4 },
      ].map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
          <rect width="62" height="56" rx="8" fill="#fff" stroke={INK} strokeWidth="2" />
          <line x1="10" y1="16" x2="52" y2="16" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
          <line x1="10" y1="28" x2="44" y2="28" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
          <line x1="10" y1="40" x2="48" y2="40" stroke="#C9D3EE" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
      {/* 整理の矢印 */}
      {[86, 166, 240].map((y) => (
        <path key={y} d={`M96 ${y} C 128 ${y}, 128 150, 152 150`} fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" className="dash-line" />
      ))}
      {/* データの箱（整理済み） */}
      <g transform="translate(152 112)">
        <ellipse cx="30" cy="10" rx="30" ry="10" fill="#E6EEFF" stroke={INK} strokeWidth="2" />
        <path d="M0 10v50c0 6 13 10 30 10s30-4 30-10V10" fill="#E6EEFF" stroke={INK} strokeWidth="2" />
        <path d="M0 35c0 6 13 10 30 10s30-4 30-10" fill="none" stroke={INK} strokeWidth="2" />
      </g>
      <path d="M216 150 L246 150" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M238 142 L248 150 L238 158" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* いつでも見られる画面 */}
      <g transform="translate(254 60)">
        <rect width="170" height="150" rx="16" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="14" y="16" width="64" height="34" rx="8" fill={LIME} />
        <rect x="88" y="16" width="68" height="34" rx="8" fill="#E6EEFF" />
        <text x="46" y="39" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} fontFamily="var(--font-inter), sans-serif">KPI</text>
        <path d="M100 38 L114 30 L126 34 L142 24" fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="130" x2="156" y2="130" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <rect x="24" y="96" width="18" height="34" rx="4" fill="#E6EEFF" />
        <rect x="52" y="84" width="18" height="46" rx="4" fill="#E6EEFF" />
        <rect x="80" y="74" width="18" height="56" rx="4" fill="#E6EEFF" />
        <rect x="108" y="64" width="18" height="66" rx="4" fill={BLUE} />
        <rect x="136" y="70" width="12" height="60" rx="4" fill="#E6EEFF" />
      </g>
      {/* 見ている人 */}
      <g transform="translate(340 262)">
        <path d="M-30 30c0-26 13-42 30-42s30 16 30 42z" fill={BLUE} stroke={INK} strokeWidth="2.5" />
        <circle cx="0" cy="-26" r="20" fill="#FFE3CF" stroke={INK} strokeWidth="2.5" />
        <path d="M-20 -30c2-14 12-20 22-20s18 6 18 18c-8-6-18-8-26-6s-10 4-14 8z" fill={INK} />
        <path d="M-6 -18c4 3 8 3 12 0" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>
      <g stroke={INK} strokeWidth="2.5" strokeLinecap="round">
        <line x1="420" y1="34" x2="420" y2="48" />
        <line x1="413" y1="41" x2="427" y2="41" />
      </g>
    </svg>
  );
}

export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="20" r="5" stroke="#2D5BFF" strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="12" r="4" stroke="#0EA5E9" strokeWidth="2.5" fill="none" />
      <circle cx="22" cy="6" r="3" stroke="#06B6D4" strokeWidth="2" fill="none" />
      <line x1="12" y1="17" x2="13" y2="15" stroke="#2D5BFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="10" x2="20" y2="8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

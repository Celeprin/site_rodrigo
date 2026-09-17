export default function CornerMark({ className, color = "rgba(255,255,255,0.45)" }: { className?: string; color?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 0V10M14 18V28M0 14H10M18 14H28" stroke={color} strokeWidth="1" />
      <circle cx="14" cy="14" r="3" stroke={color} strokeWidth="1" />
    </svg>
  );
}

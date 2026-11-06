export function AuraStar({ size = 40, className = "" }: { size?: number; className?: string }) {
  const petal = "M50 6C60 6 66 22 68 36C70 50 58 52 50 50C42 48 34 36 38 22C40 12 44 6 50 6Z";

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-label="Aruma">
      <g transform="rotate(-8 50 50)">
        <path d={petal} fill="#65509A" />
        <path d={petal} fill="#CFC1F4" transform="rotate(90 50 50)" />
        <path d={petal} fill="#8570B8" transform="rotate(180 50 50)" />
        <path d={petal} fill="#65509A" transform="rotate(270 50 50)" />
        <path d="M50 30 L58 56 L44 54 Z" fill="#fff" />
      </g>
    </svg>
  );
}

export const Loader = () => (
  <div className="grid h-screen place-items-center">
    <AuraStar size={64} className="animate-pulse" />
  </div>
);
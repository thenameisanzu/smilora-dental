// Placeholder illustration. Pass real photos to <BeforeAfter before="" after="" /> to replace it.
export default function Smile({ tone }: { tone: "before" | "after" }) {
  const after = tone === "after";
  const teeth = Array.from({ length: 8 }, (_, i) => {
    const o = i - 3.5;
    return { x: 200 + o * 40, y: 88 + o * o * 3.4, w: i === 3 || i === 4 ? 44 : 38, h: 78 - Math.abs(o) * 6.5 };
  });
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`bg-${tone}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#CDEFF2" /><stop offset="1" stopColor="#F1FAFB" /></linearGradient>
        <linearGradient id={`t-${tone}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={after ? "#FFFFFF" : "#EBCB7C"} /><stop offset="1" stopColor={after ? "#D9ECF0" : "#C99B3A"} /></linearGradient>
        <clipPath id={`m-${tone}`}><path d="M30 140 Q200 30 370 140 Q200 250 30 140Z" /></clipPath>
      </defs>
      <rect width="400" height="300" fill={`url(#bg-${tone})`} />
      <path d="M30 140 Q200 30 370 140 Q200 250 30 140Z" fill="#6E2132" />
      <g clipPath={`url(#m-${tone})`}>
        {teeth.map((t, i) => <rect key={i} x={t.x - t.w / 2} y={t.y} width={t.w} height={t.h} rx={14} fill={`url(#t-${tone})`} stroke={after ? "#C9E3E8" : "#B88A2E"} strokeWidth="1.5" />)}
        {!after && teeth.map((t, i) => <path key={`s${i}`} d={`M${t.x - 8} ${t.y + 30} q8 10 16 0`} stroke="#A9782A" strokeOpacity=".45" strokeWidth="3" fill="none" strokeLinecap="round" />)}
      </g>
      <path d="M30 140 Q200 30 370 140 Q200 250 30 140Z" fill="none" stroke="#E98A9A" strokeWidth="12" strokeLinejoin="round" />
      {after && <g fill="#fff" stroke="#0E9AA7" strokeWidth="1.5"><path d="M118 70l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" /><path d="M300 62l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" /></g>}
    </svg>
  );
}

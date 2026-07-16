/* Animated city-map backdrop — streets, pulsing worker nodes and flowing
   trails. Shared by the landing hero and the waitlist page. */
export function MapBackdrop({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const road = tone === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(80,55,105,0.10)';
  const block = tone === 'dark' ? 'rgba(255,255,255,0.035)' : 'rgba(80,55,105,0.05)';
  const trailA = tone === 'dark' ? 'rgba(178,132,215,0.55)' : 'rgba(134,87,162,0.45)';
  const trailB = tone === 'dark' ? 'rgba(52,199,123,0.5)' : 'rgba(35,165,105,0.45)';
  const nodes: { x: number; y: number; c: string; init: string }[] = [
    { x: 190, y: 170, c: '#8657a2', init: 'A' },
    { x: 620, y: 120, c: '#22a06b', init: 'T' },
    { x: 1010, y: 250, c: '#8657a2', init: 'E' },
    { x: 420, y: 430, c: '#d99a26', init: 'B' },
    { x: 830, y: 520, c: '#22a06b', init: 'N' },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 1200 640" fill="none" preserveAspectRatio="xMidYMid slice">
        {[[60, 60, 220, 140], [340, 40, 200, 120], [900, 60, 220, 130], [120, 330, 180, 150], [560, 300, 200, 160], [950, 400, 190, 150]].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx={14} stroke={block} strokeWidth="1.5" />
        ))}
        <path d="M-20 210 C260 190 520 240 740 210 S1080 170 1220 200" stroke={road} strokeWidth="2" />
        <path d="M-20 470 C300 440 640 500 900 470 S1140 430 1220 460" stroke={road} strokeWidth="2" />
        <path d="M300 -20 C320 200 280 420 310 660" stroke={road} strokeWidth="2" />
        <path d="M760 -20 C740 180 790 400 760 660" stroke={road} strokeWidth="2" />
        <path d="M1040 -20 C1060 160 1010 380 1050 660" stroke={road} strokeWidth="2" />
        <circle cx="620" cy="210" r="34" stroke={road} strokeWidth="2" />

        <path d="M190 170 C340 90 500 100 620 120" stroke={trailA} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_3.2s_linear_infinite]" />
        <path d="M620 120 C780 150 900 190 1010 250" stroke={trailB} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_4s_linear_infinite]" />
        <path d="M190 170 C240 300 330 380 420 430" stroke={trailB} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_4.6s_linear_infinite]" />
        <path d="M420 430 C560 500 700 540 830 520" stroke={trailA} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_3.6s_linear_infinite]" />

        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="11" fill={n.c} opacity="0.45"
              className="animate-[node-pulse_2.8s_ease-out_infinite]"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${i * 0.55}s` }} />
            <circle cx={n.x} cy={n.y} r="11" fill={tone === 'dark' ? '#231b30' : '#ffffff'} stroke={n.c} strokeWidth="2" />
            <text x={n.x} y={n.y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" fill={n.c}>{n.init}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

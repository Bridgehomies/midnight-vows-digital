import { useEffect, useState, useMemo } from "react";

interface WindowState {
  opacity: number;
}

const BUILDINGS = [
  { x: 0, w: 60, h: 140 },
  { x: 55, w: 40, h: 200 },
  { x: 90, w: 70, h: 160 },
  { x: 155, w: 35, h: 260 },
  { x: 185, w: 55, h: 180 },
  { x: 235, w: 80, h: 130 },
  { x: 310, w: 45, h: 290 },
  { x: 350, w: 65, h: 170 },
  { x: 410, w: 50, h: 240 },
  { x: 455, w: 75, h: 150 },
  { x: 525, w: 40, h: 220 },
  { x: 560, w: 60, h: 190 },
  { x: 615, w: 55, h: 270 },
  { x: 665, w: 70, h: 140 },
  { x: 730, w: 45, h: 310 },
  { x: 770, w: 80, h: 160 },
  { x: 845, w: 50, h: 230 },
  { x: 890, w: 65, h: 180 },
  { x: 950, w: 55, h: 250 },
];

function generateWindows(building: { x: number; w: number; h: number }) {
  const windows: { x: number; y: number; w: number; h: number }[] = [];
  const winW = 6;
  const winH = 8;
  const gapX = 10;
  const gapY = 14;
  const padX = 8;
  const padY = 10;

  const cols = Math.floor((building.w - padX * 2 + gapX) / (winW + gapX));
  const rows = Math.floor((building.h - padY * 2 + gapY) / (winH + gapY));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      windows.push({
        x: building.x + padX + c * (winW + gapX),
        y: 350 - building.h + padY + r * (winH + gapY),
        w: winW,
        h: winH,
      });
    }
  }
  return windows;
}

const CitySkylline = () => {
  const allWindows = useMemo(
    () => BUILDINGS.flatMap(generateWindows),
    []
  );

  const [windowStates, setWindowStates] = useState<WindowState[]>(() =>
    allWindows.map(() => ({ opacity: Math.random() * 0.7 + 0.2 }))
  );

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const flicker = (index: number) => {
      const delay = 800 + Math.random() * 1200;
      const timer = setTimeout(() => {
        setWindowStates((prev) => {
          const next = [...prev];
          next[index] = { opacity: Math.random() * 0.7 + 0.2 };
          return next;
        });
        flicker(index);
      }, delay);
      timers.push(timer);
    };

    // Only animate a subset for performance
    const animatedCount = Math.min(allWindows.length, 80);
    const indices = Array.from({ length: allWindows.length }, (_, i) => i)
      .sort(() => Math.random() - 0.5)
      .slice(0, animatedCount);

    indices.forEach(flicker);

    return () => timers.forEach(clearTimeout);
  }, [allWindows.length]);

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "350px" }}>
      <svg
        viewBox="0 0 1000 350"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {BUILDINGS.map((b, i) => (
          <rect
            key={`b-${i}`}
            x={b.x}
            y={350 - b.h}
            width={b.w}
            height={b.h}
            fill="#0d0d18"
          />
        ))}
        {allWindows.map((w, i) => (
          <rect
            key={`w-${i}`}
            x={w.x}
            y={w.y}
            width={w.w}
            height={w.h}
            fill="#e8c87a"
            opacity={windowStates[i]?.opacity ?? 0.3}
            style={{ transition: "opacity 0.6s ease" }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CitySkylline;

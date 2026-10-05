import type { ProjectVisual } from "@/lib/site";

/**
 * Original, animated monochrome diagrams for each project.
 * Drawn with `currentColor` so they follow the light/dark palette.
 */

const common = {
  viewBox: "0 0 400 260",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-full w-full",
  "aria-hidden": true,
};

function Robot() {
  return (
    <svg {...common}>
      {/* Lidar sweep */}
      <g opacity="0.35">
        <circle cx="200" cy="140" r="90" strokeDasharray="2 6" />
        <circle cx="200" cy="140" r="60" strokeDasharray="2 6" />
      </g>
      <g className="spin-slow">
        <path d="M200 140 L290 140 A90 90 0 0 0 263.6 76.4 Z" fill="currentColor" fillOpacity="0.07" stroke="none" />
        <line x1="200" y1="140" x2="290" y2="140" opacity="0.6" />
      </g>
      {/* Obstacles detected */}
      <rect x="298" y="62" width="34" height="34" rx="3" />
      <rect x="70" y="170" width="46" height="26" rx="3" />
      <circle cx="96" cy="72" r="14" />
      {/* Planned path */}
      <path className="flow" d="M200 140 C 240 180, 280 200, 340 196" opacity="0.8" />
      <circle cx="340" cy="196" r="4" fill="currentColor" />
      <circle className="pulse" cx="340" cy="196" r="4" />
      {/* Robot body */}
      <rect x="178" y="118" width="44" height="44" rx="10" fill="var(--surface)" />
      <circle cx="200" cy="140" r="7" fill="currentColor" />
      <rect x="172" y="124" width="6" height="14" rx="2" fill="currentColor" />
      <rect x="222" y="124" width="6" height="14" rx="2" fill="currentColor" />
      {/* Labels */}
      <g fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
        <text x="20" y="28">SENSE</text>
        <text x="182" y="28">PLAN</text>
        <text x="346" y="28">ACT</text>
      </g>
      <path d="M58 25 H170 M218 25 H336" opacity="0.4" className="flow" />
    </svg>
  );
}

function Homelab() {
  const vms = [0, 1, 2, 3];
  return (
    <svg {...common}>
      {/* Server chassis */}
      <rect x="40" y="70" width="120" height="120" rx="8" fill="var(--surface)" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1="52" y1={96 + i * 32} x2="148" y2={96 + i * 32} opacity="0.3" />
          <circle
            cx="136"
            cy={84 + i * 32}
            r="2.5"
            fill="currentColor"
            className="blink"
            style={{ "--delay": `${i * 400}ms` } as React.CSSProperties}
          />
          <line x1="56" y1={84 + i * 32} x2="104" y2={84 + i * 32} opacity="0.6" />
        </g>
      ))}
      <text x="100" y="210" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
        PROXMOX
      </text>
      {/* Virtual machines / containers */}
      {vms.map((i) => {
        const y = 40 + i * 50;
        return (
          <g key={i}>
            <path className="flow" d={`M160 130 C 210 130, 210 ${y + 16}, 250 ${y + 16}`} opacity="0.55" />
            <rect x="250" y={y} width="110" height="32" rx="6" fill="var(--surface)" />
            <rect x="260" y={y + 11} width="10" height="10" rx="2" fill={i % 2 ? "none" : "currentColor"} />
            <line x1="280" y1={y + 16} x2={320 - i * 6} y2={y + 16} opacity="0.5" />
          </g>
        );
      })}
      <g fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1" opacity="0.6">
        <text x="330" y="30">VM / LXC</text>
      </g>
    </svg>
  );
}

function Search() {
  const docs = [0, 1, 2];
  return (
    <svg {...common}>
      {/* Source documents */}
      {docs.map((i) => (
        <g key={i} transform={`translate(${30 + i * 8} ${60 + i * 12})`}>
          <rect width="60" height="78" rx="4" fill="var(--surface)" />
          {[0, 1, 2, 3].map((l) => (
            <line key={l} x1="10" y1={16 + l * 12} x2={50 - l * 5} y2={16 + l * 12} opacity="0.45" />
          ))}
        </g>
      ))}
      <path className="flow" d="M110 110 H160" />
      {/* Index */}
      <rect x="160" y="70" width="90" height="80" rx="8" fill="var(--surface)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="172" y={82 + i * 15} width={66 - i * 12} height="7" rx="2" fill="currentColor" fillOpacity={0.8 - i * 0.18} stroke="none" />
      ))}
      <text x="205" y="168" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
        INDEX
      </text>
      <path className="flow" d="M250 110 H290" />
      {/* Search box + results */}
      <rect x="290" y="62" width="90" height="24" rx="12" fill="var(--surface)" />
      <circle cx="304" cy="74" r="5" />
      <line x1="308" y1="78" x2="312" y2="82" />
      <rect x="318" y="69" width="1.5" height="10" fill="currentColor" stroke="none" className="blink" />
      {[0, 1, 2].map((i) => (
        <g key={i} className="blink" style={{ "--delay": `${i * 300}ms` } as React.CSSProperties}>
          <rect x="290" y={100 + i * 26} width="90" height="18" rx="4" opacity={1 - i * 0.25} />
          <line x1="300" y1={109 + i * 26} x2={360 - i * 10} y2={109 + i * 26} opacity="0.5" />
        </g>
      ))}
      <text x="72" y="215" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
        C# / .NET
      </text>
      <text x="335" y="215" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
        AZURE
      </text>
    </svg>
  );
}

function Pipeline() {
  const stages = ["COMMIT", "BUILD", "TEST", "RELEASE"];
  return (
    <svg {...common}>
      <line x1="40" y1="130" x2="360" y2="130" opacity="0.25" />
      <line className="flow" x1="40" y1="130" x2="360" y2="130" />
      {stages.map((label, i) => {
        const x = 50 + i * 100;
        return (
          <g key={label}>
            <circle cx={x} cy="130" r="18" fill="var(--surface)" />
            <circle
              cx={x}
              cy="130"
              r="6"
              fill="currentColor"
              className="blink"
              style={{ "--delay": `${i * 450}ms` } as React.CSSProperties}
            />
            <text x={x} y="176" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
              {label}
            </text>
          </g>
        );
      })}
      {/* Environments the release fans out to */}
      <path className="flow" d="M350 112 C 350 80, 330 60, 300 60 H 250" opacity="0.5" />
      <rect x="170" y="44" width="80" height="32" rx="6" fill="var(--surface)" />
      <text x="210" y="64" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">
        AZURE
      </text>
      <rect x="60" y="44" width="80" height="32" rx="6" strokeDasharray="3 4" opacity="0.6" />
      <text x="100" y="64" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1" opacity="0.7">
        CONFLUENCE
      </text>
      <path className="flow" d="M170 60 H140" opacity="0.5" />
      <text x="200" y="228" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1" opacity="0.5">
        AZURE DEVOPS PIPELINE
      </text>
    </svg>
  );
}

const visuals: Record<ProjectVisual, () => React.JSX.Element> = {
  robot: Robot,
  homelab: Homelab,
  search: Search,
  pipeline: Pipeline,
};

export function ProjectVisualArt({ type }: { type: ProjectVisual }) {
  const Visual = visuals[type];
  return <Visual />;
}

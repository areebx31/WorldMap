import { useState } from "react";

interface ContinentData {
  name: string;
  countries: number;
  area: string;
  population: string;
  highlights: string[];
  color: string;
}

const continents: Record<string, ContinentData> = {
  asia: {
    name: "Asia",
    countries: 49,
    area: "44.6M km²",
    population: "4.7B",
    highlights: ["Mount Everest", "Great Wall of China", "Taj Mahal"],
    color: "hsl(175, 65%, 45%)",
  },
  africa: {
    name: "Africa",
    countries: 54,
    area: "30.4M km²",
    population: "1.4B",
    highlights: ["Sahara Desert", "Victoria Falls", "Serengeti"],
    color: "hsl(35, 70%, 50%)",
  },
  northAmerica: {
    name: "North America",
    countries: 23,
    area: "24.7M km²",
    population: "580M",
    highlights: ["Grand Canyon", "Niagara Falls", "Rocky Mountains"],
    color: "hsl(210, 60%, 50%)",
  },
  southAmerica: {
    name: "South America",
    countries: 12,
    area: "17.8M km²",
    population: "430M",
    highlights: ["Amazon Rainforest", "Machu Picchu", "Iguazu Falls"],
    color: "hsl(130, 50%, 45%)",
  },
  europe: {
    name: "Europe",
    countries: 44,
    area: "10.2M km²",
    population: "750M",
    highlights: ["Eiffel Tower", "Colosseum", "Alps"],
    color: "hsl(260, 50%, 55%)",
  },
  oceania: {
    name: "Oceania",
    countries: 14,
    area: "8.5M km²",
    population: "45M",
    highlights: ["Great Barrier Reef", "Uluru", "Milford Sound"],
    color: "hsl(0, 60%, 55%)",
  },
  antarctica: {
    name: "Antarctica",
    countries: 0,
    area: "14.2M km²",
    population: "~4,000",
    highlights: ["South Pole", "McMurdo Station", "Ross Ice Shelf"],
    color: "hsl(195, 40%, 70%)",
  },
};

const cities = [
  { name: "New York", x: 248, y: 155, continent: "northAmerica" },
  { name: "London", x: 430, y: 120, continent: "europe" },
  { name: "Tokyo", x: 780, y: 160, continent: "asia" },
  { name: "Sydney", x: 770, y: 340, continent: "oceania" },
  { name: "São Paulo", x: 300, y: 310, continent: "southAmerica" },
  { name: "Cairo", x: 500, y: 190, continent: "africa" },
  { name: "Mumbai", x: 625, y: 210, continent: "asia" },
  { name: "Beijing", x: 720, y: 150, continent: "asia" },
  { name: "Lagos", x: 440, y: 250, continent: "africa" },
  { name: "Mexico City", x: 195, y: 210, continent: "northAmerica" },
  { name: "Moscow", x: 545, y: 100, continent: "europe" },
  { name: "Dubai", x: 580, y: 200, continent: "asia" },
];

const WorldMap = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const active = selected || hovered;
  const info = active ? continents[active] : null;

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden rounded-lg border border-border glow-primary">
        {/* Grid overlay */}
        <div className="map-grid-bg absolute inset-0 pointer-events-none z-10 opacity-30" />

        <svg
          viewBox="0 0 900 450"
          className="w-full h-auto block"
          style={{ background: "hsl(var(--map-ocean))" }}
        >
          {/* Graticule lines */}
          {[...Array(9)].map((_, i) => (
            <line
              key={`h${i}`}
              x1={0} y1={(i + 1) * 45}
              x2={900} y2={(i + 1) * 45}
              stroke="hsl(var(--border))"
              strokeWidth={0.5}
              opacity={0.3}
            />
          ))}
          {[...Array(17)].map((_, i) => (
            <line
              key={`v${i}`}
              x1={(i + 1) * 50} y1={0}
              x2={(i + 1) * 50} y2={450}
              stroke="hsl(var(--border))"
              strokeWidth={0.5}
              opacity={0.3}
            />
          ))}

          {/* North America */}
          <path
            d="M120,60 L140,55 L170,50 L200,55 L230,60 L260,55 L275,65 L280,80 L275,100 L270,120 L265,140 L260,155 L255,165 L245,175 L235,180 L225,185 L215,195 L205,210 L195,220 L190,230 L185,225 L175,215 L165,210 L160,200 L155,190 L150,180 L140,170 L130,160 L120,150 L115,140 L110,125 L108,110 L110,95 L115,80 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "northAmerica" || selected === "northAmerica" ? continents.northAmerica.color : "hsl(var(--map-land))"}
            stroke={hovered === "northAmerica" || selected === "northAmerica" ? continents.northAmerica.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "northAmerica" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("northAmerica")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "northAmerica" ? null : "northAmerica")}
          />

          {/* South America */}
          <path
            d="M230,240 L245,235 L260,240 L275,250 L285,265 L295,280 L300,295 L305,310 L302,325 L298,340 L290,355 L280,365 L270,370 L260,365 L250,355 L245,340 L240,325 L238,310 L235,295 L230,280 L225,265 L225,250 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "southAmerica" || selected === "southAmerica" ? continents.southAmerica.color : "hsl(var(--map-land))"}
            stroke={hovered === "southAmerica" || selected === "southAmerica" ? continents.southAmerica.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "southAmerica" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("southAmerica")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "southAmerica" ? null : "southAmerica")}
          />

          {/* Europe */}
          <path
            d="M420,70 L440,65 L460,68 L480,72 L500,70 L515,75 L520,85 L515,100 L510,115 L500,125 L490,130 L480,135 L465,140 L450,142 L440,140 L430,135 L422,125 L418,110 L415,95 L418,80 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "europe" || selected === "europe" ? continents.europe.color : "hsl(var(--map-land))"}
            stroke={hovered === "europe" || selected === "europe" ? continents.europe.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "europe" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("europe")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "europe" ? null : "europe")}
          />

          {/* Africa */}
          <path
            d="M420,170 L440,165 L460,168 L480,172 L500,175 L510,185 L515,200 L518,220 L520,240 L518,260 L515,280 L510,300 L500,315 L490,325 L475,330 L460,328 L445,320 L435,310 L428,295 L422,275 L418,255 L415,235 L413,215 L415,195 L418,180 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "africa" || selected === "africa" ? continents.africa.color : "hsl(var(--map-land))"}
            stroke={hovered === "africa" || selected === "africa" ? continents.africa.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "africa" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("africa")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "africa" ? null : "africa")}
          />

          {/* Asia */}
          <path
            d="M530,60 L560,55 L600,50 L640,55 L680,60 L720,65 L750,70 L770,80 L780,95 L785,115 L782,135 L778,155 L770,170 L755,180 L740,185 L720,190 L700,195 L680,198 L660,200 L640,198 L620,195 L600,190 L580,185 L565,175 L555,165 L548,150 L542,135 L538,115 L535,95 L530,75 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "asia" || selected === "asia" ? continents.asia.color : "hsl(var(--map-land))"}
            stroke={hovered === "asia" || selected === "asia" ? continents.asia.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "asia" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("asia")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "asia" ? null : "asia")}
          />

          {/* Oceania */}
          <path
            d="M720,280 L740,275 L760,278 L780,285 L795,295 L800,310 L795,325 L785,335 L770,340 L755,338 L740,332 L730,320 L725,305 L720,290 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "oceania" || selected === "oceania" ? continents.oceania.color : "hsl(var(--map-land))"}
            stroke={hovered === "oceania" || selected === "oceania" ? continents.oceania.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "oceania" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("oceania")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "oceania" ? null : "oceania")}
          />

          {/* Antarctica */}
          <path
            d="M100,420 L200,415 L300,412 L400,410 L500,412 L600,415 L700,418 L800,420 L820,430 L800,440 L700,445 L600,448 L500,450 L400,448 L300,445 L200,442 L100,440 L80,430 Z"
            className="cursor-pointer transition-all duration-300"
            fill={hovered === "antarctica" || selected === "antarctica" ? continents.antarctica.color : "hsl(var(--map-land))"}
            stroke={hovered === "antarctica" || selected === "antarctica" ? continents.antarctica.color : "hsl(var(--map-border))"}
            strokeWidth={1}
            opacity={active && active !== "antarctica" ? 0.4 : 0.85}
            onMouseEnter={() => setHovered("antarctica")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === "antarctica" ? null : "antarctica")}
          />

          {/* City markers */}
          {cities.map((city) => {
            const isActive = !active || active === city.continent;
            return (
              <g key={city.name} opacity={isActive ? 1 : 0.2} className="transition-opacity duration-300">
                {/* Pulse ring */}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={6}
                  fill="none"
                  stroke={continents[city.continent]?.color || "hsl(var(--primary))"}
                  strokeWidth={1}
                  opacity={0.6}
                  className="animate-ping"
                  style={{ transformOrigin: `${city.x}px ${city.y}px`, animationDuration: "2s" }}
                />
                {/* Dot */}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={3}
                  fill={continents[city.continent]?.color || "hsl(var(--primary))"}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                />
                {/* Tooltip */}
                {hoveredCity === city.name && (
                  <g>
                    <rect
                      x={city.x - 35}
                      y={city.y - 24}
                      width={70}
                      height={18}
                      rx={4}
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--border))"
                      strokeWidth={0.5}
                    />
                    <text
                      x={city.x}
                      y={city.y - 12}
                      textAnchor="middle"
                      fill="hsl(var(--foreground))"
                      fontSize={9}
                      fontFamily="Space Grotesk"
                    >
                      {city.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-2">
          {Object.entries(continents).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setSelected(selected === key ? null : key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-2.5 py-1 text-[10px] transition-all hover:border-primary/50"
              style={{
                borderColor: selected === key ? val.color : undefined,
                boxShadow: selected === key ? `0 0 8px ${val.color}40` : undefined,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: val.color }}
              />
              <span className="text-muted-foreground">{val.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      {info && (
        <div
          className="mt-4 rounded-lg border border-border bg-card p-5 animate-fade-in"
          style={{ borderColor: `${info.color}40` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold" style={{ color: info.color }}>
              {info.name}
            </h3>
            {selected && (
              <button
                onClick={() => setSelected(null)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕ Close
              </button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-mono text-lg font-semibold text-foreground">{info.countries}</p>
              <p className="text-xs text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-mono text-lg font-semibold text-foreground">{info.area}</p>
              <p className="text-xs text-muted-foreground">Area</p>
            </div>
            <div className="text-center">
              <p className="text-mono text-lg font-semibold text-foreground">{info.population}</p>
              <p className="text-xs text-muted-foreground">Population</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Highlights</p>
            <div className="flex flex-wrap gap-2">
              {info.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full px-3 py-1 text-xs border"
                  style={{
                    borderColor: `${info.color}30`,
                    color: info.color,
                    backgroundColor: `${info.color}10`,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {!info && (
        <p className="mt-3 text-center text-xs text-muted-foreground animate-pulse">
          Hover or click a continent to explore
        </p>
      )}
    </div>
  );
};

export default WorldMap;

import { Sun, Droplets, Bird, MapPin, AlertTriangle, Tag } from "lucide-react";

const difficultyStyle = {
  "Very Easy": { bg: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300", dot: "bg-emerald-400" },
  "Easy": { bg: "bg-green-500/15 border-green-500/25 text-green-300", dot: "bg-green-400" },
  "Easy if sited right": { bg: "bg-teal-500/15 border-teal-500/25 text-teal-300", dot: "bg-teal-400" },
  "Moderate": { bg: "bg-amber-500/15 border-amber-500/25 text-amber-300", dot: "bg-amber-400" },
};

const ecotypeLabel = {
  meadow: "Meadow",
  woodland: "Woodland",
  wetland: "Wetland / Rain Garden",
  coastal: "Coastal",
};

const ecotypeBg = {
  meadow: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  woodland: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  wetland: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  coastal: "bg-teal-500/10 border-teal-500/20 text-teal-300",
};

export default function PlantCard({ plant }) {
  const diff = difficultyStyle[plant.difficulty] || difficultyStyle["Easy"];
  const etLabel = ecotypeLabel[plant.ecotype] || plant.ecotype;
  const etStyle = ecotypeBg[plant.ecotype] || ecotypeBg.meadow;

  // Dynamic glow color from plant accent
  const glowStyle = { boxShadow: `0 0 0 1px ${plant.accent}22, 0 1px 3px rgba(0,0,0,0.4)` };
  const accentBorderStyle = { borderLeftColor: plant.accent };

  return (
    <div
      className="relative group bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 border-l-4 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden"
      style={{ ...glowStyle, ...accentBorderStyle }}
    >
      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse 60% 40% at 0% 50%, ${plant.accent}12, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-bold text-white text-lg leading-tight">{plant.commonName}</h3>
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full border ${diff.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
              {plant.difficulty}
            </span>
          </div>
          <p className="text-sm italic text-slate-500">{plant.scientificName}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className={`text-xs px-2.5 py-1 rounded-full border ${etStyle} whitespace-nowrap`}>
            {etLabel}
          </span>
          <span className="text-xs text-slate-600 border border-white/5 px-2 py-0.5 rounded-full">{plant.type}</span>
        </div>
      </div>

      {/* Data grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div>
            <p className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Light</p>
            <p className="text-sm text-slate-300">{plant.light}</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Moisture</p>
            <p className="text-sm text-slate-300">{plant.soilMoisture}</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
            <Bird className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Wildlife</p>
            <p className="text-sm text-slate-300">{plant.wildlifeBenefit}</p>
          </div>
        </div>
      </div>

      {/* Placement note */}
      <div className="flex items-start gap-2.5 bg-white/[0.04] border border-white/[0.07] rounded-xl px-3.5 py-3 mb-3">
        <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-400 leading-relaxed">{plant.placementNote}</p>
      </div>

      {/* Warning */}
      {plant.warning && (
        <div className="flex items-start gap-2 text-xs text-amber-600/80">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{plant.warning}</span>
        </div>
      )}
    </div>
  );
}
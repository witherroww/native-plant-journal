import { useState } from "react";
import { Sun, Droplets, Bird, AlertTriangle } from "lucide-react";
import { getPlantImage } from "../data/plantImages";

const ecotypeMap = {
  meadow:   { label: "Meadow",   ink: "#6b7c2e", bg: "#edf2d0" },
  woodland: { label: "Woodland", ink: "#2e5430", bg: "#d8eedb" },
  wetland:  { label: "Wetland",  ink: "#1e5a72", bg: "#cce5f0" },
  coastal:  { label: "Coastal",  ink: "#4a6030", bg: "#e0eacc" },
};

const difficultyMap = {
  "Very Easy":           { label: "Very Easy",     color: "#3d7a3e" },
  "Easy":                { label: "Easy",           color: "#4a7a4c" },
  "Easy if sited right": { label: "Easy if sited", color: "#7a8c3a" },
  "Moderate":            { label: "Moderate",       color: "#a07020" },
};

const ordinals = ["01", "02", "03", "04", "05"];

export default function PlantEntry({ plant, index }) {
  const [creditOpen, setCreditOpen] = useState(false);
  const eco = ecotypeMap[plant.ecotype] || ecotypeMap.meadow;
  const diff = difficultyMap[plant.difficulty] || difficultyMap["Easy"];
  const num = ordinals[index] ?? `0${index + 1}`;
  const imgMeta = getPlantImage(plant);

  return (
    <article
      className="py-8 border-t"
      style={{ borderColor: "#d4c8a8" }}
    >
      {/* Entry header */}
      <div className="grid grid-cols-[2.5rem_1fr] gap-5 mb-5">
        {/* Number — like a hand-inked ordinal */}
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.0rem",
          fontWeight: 700,
          color: "#c8b890",
          lineHeight: 1,
          paddingTop: "0.3rem",
        }}>
          {num}
        </span>

        <div>
          {/* Name row */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-2">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem, 3vw, 2.5rem)", color: "#1e1a10", lineHeight: 1.1 }}>
              {plant.commonName}
            </h3>
            <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.0rem", color: "#7a5c3a", fontStyle: "italic" }}>
              {plant.scientificName}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5" style={{ backgroundColor: eco.bg, color: eco.ink, fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {eco.label}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: diff.color }}>
              {diff.label}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a08060" }}>
              {plant.type}
            </span>
          </div>
        </div>
      </div>

      {/* Photo — field journal specimen image */}
      {imgMeta && (
        <div className="grid grid-cols-[2.5rem_1fr] gap-5 mb-5">
          <div />
          <div>
            <img
              src={imgMeta.image}
              alt={plant.commonName}
              className="w-full rounded-sm"
              style={{ maxHeight: "260px", objectFit: "cover", objectPosition: "center" }}
            />
            <div className="mt-1 flex items-center gap-1">
              <button
                onClick={() => setCreditOpen(!creditOpen)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.08em", color: "#b0a080", textDecoration: "underline", cursor: "pointer", background: "none", border: "none", padding: 0 }}
              >
                Photo credit
              </button>
              {creditOpen && (
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#b0a080", letterSpacing: "0.04em" }}>
                  — {imgMeta.photographer} · {imgMeta.license}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Placement note — the "field entry" paragraph */}
      <div className="grid grid-cols-[2.5rem_1fr] gap-5 mb-5">
        <div />
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#3a3020", lineHeight: 1.75 }}>
          {plant.placementNote}
        </p>
      </div>

      {/* Detail block — always visible, accent bar left */}
      <div className="grid grid-cols-[2.5rem_1fr] gap-5">
        <div />
        <div className="pl-4" style={{ borderLeft: `2px solid ${plant.accent}55` }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Sun className="w-3 h-3" style={{ color: "#b5862a" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: ".9rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a5c3a" }}>Light</span>
              </div>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#2e2618", lineHeight: 1.55 }}>{plant.light}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Droplets className="w-3 h-3" style={{ color: "#4a80a8" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a5c3a" }}>Moisture</span>
              </div>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#2e2618", lineHeight: 1.55 }}>{plant.soilMoisture}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Bird className="w-3 h-3" style={{ color: "#3d5a3e" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a5c3a" }}>Wildlife</span>
              </div>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#2e2618", lineHeight: 1.55 }}>{plant.wildlifeBenefit}</p>
            </div>
          </div>

          {plant.warning && (
            <div className="flex items-start gap-2 pt-3 border-t" style={{ borderColor: "#d4c4a4" }}>
              <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" style={{ color: "#a07020" }} />
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.0rem", color: "#7a4c10", lineHeight: 1.6 }}>{plant.warning}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
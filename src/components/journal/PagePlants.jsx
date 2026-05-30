import PlantEntry from "@/components/PlantEntry";

export default function PagePlants({ profile, plants }) {
  return (
    <div style={{ backgroundColor: "#f0e8d8", minHeight: "60vh" }}>
      {/* Page header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8" style={{ backgroundColor: "#4a7a3a" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#4a7a3a" }}>
            Recommended for your region
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-end mb-2">
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a1a10", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              {profile.region}
            </h2>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "#5a4a35", fontStyle: "italic", lineHeight: 1.6 }}>
              {profile.climateNotes}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {profile.usdaZones.map(z => (
              <span key={z} style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#4a7a3a", border: "1px solid #4a7a3a",
                padding: "0.25rem 0.6rem",
              }}>
                USDA {z}
              </span>
            ))}
          </div>
        </div>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#8a7a60", letterSpacing: "0.05em", lineHeight: 1.6, borderTop: "1px solid #c8b89a", paddingTop: "0.75rem", marginTop: "0.75rem" }}>
          {profile.epaEcoregion}
        </p>
      </div>

      {/* Plant list */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-12">
        <div className="border-t" style={{ borderColor: "#c8b89a" }}>
          {plants.map((plant, i) => (
            <PlantEntry key={plant.id} plant={plant} index={i} />
          ))}
        </div>

        <p className="mt-10 pt-6 border-t" style={{ borderColor: "#c8b89a", fontFamily: "'Crimson Pro', serif", fontSize: "0.92rem", color: "#8a7a60", lineHeight: 1.7, fontStyle: "italic" }}>
          Regional match gives a starting point — your specific sun, soil moisture, drainage, and deer pressure still determine what thrives. Verify with a local native plant nursery.
        </p>
      </div>
    </div>
  );
}
const entries = [
  {
    accent: "#b5862a",
    eyebrow: "Native Biodiversity",
stat: "500+ species",
statNote: "can be supported by a single native oak tree!",
    body: "Native plants developed alongside native bees, butterflies, hummingbirds, and many other species. As a result of this coevolution, native plants often provide the right pollen, bloom at the right time, and offer familiar flower shapes that local pollinators identify. The result is a garden that looks beautiful AND actively supports local wildlife.",
    fieldNote: "The Spring Beauty Mining Bee (Andrena erigeniae) emerges for just a few weeks each spring and relies heavily on Spring Beauty flowers for pollen.",
  },
  {
    accent: "#5b8fa8",
    eyebrow: "Conservation",
    stat: "Restore habitats",
    statNote: "Monarch butterflies cannot reproduce without milkweed.",
    body: "Many native species have lost habitat over time, leading to declines in various populations. However, by planting native species, WE can help restore small pieces of that habitat and provide food, shelter, and breeding areas for wildlife that depend on them. Together we can all make a meaningful difference, one native plant at a time.",
    fieldNote: "Goldenrod supports more than 100 species of caterpillars in eastern North America.",
  },
  {
    accent: "#c87040",
    eyebrow: "Resilience",
    stat: "Low input.",
    statNote: "Once established, native plants know how to survive.",
    body: "Native plants evolved with regional soils, weather, and seasonal extremes. After the first year of establishment, many need little to NO supplemental water, fertilizer, or pesticides. Remember, they’ve been thriving in these conditions for thousands of years before we ever planted them in our gardens!",
    fieldNote: "Little Bluestem and Switchgrass evolved to survive periods of drought WITHOUT irrigation.",
  },
];

export default function PageWhyNative() {
  return (
    <div style={{ backgroundColor: "#f0e8d8", minHeight: "60vh" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-16">

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8" style={{ backgroundColor: "#b5862a" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b5862a" }}>
            The ecological case
          </span>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a1a10", lineHeight: 1.1, marginBottom: "0.5rem" }}>
          Why Native Plants Matter
        </h2>
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#5a4a35", lineHeight: 1.7, maxWidth: "36rem", marginBottom: "3rem" }}>
          Native plants make a yard come <em>alive.</em> The difference isn't aesthetic it's ecological.
        </p>

        <div className="space-y-0">
          {entries.map(({ accent, eyebrow, stat, statNote, body, fieldNote }) => (
            <div key={eyebrow} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 sm:gap-14 py-10 border-t" style={{ borderColor: "#c8b89a" }}>
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, display: "block", marginBottom: "0.5rem" }}>
                  {eyebrow}
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1a1a10", lineHeight: 1.1, display: "block", marginBottom: "0.3rem" }}>
                  {stat}
                </span>
                <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "0.99rem", color: "#8a7060", lineHeight: 1.5, display: "block" }}>
                  {statNote}
                </span>
              </div>
              <div>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", color: "#2e2618", lineHeight: 1.75, marginBottom: "0.8rem" }}>
                  {body}
                </p>
                <div className="flex items-start gap-2 pt-2 border-t" style={{ borderColor: "#d4c4a4" }}>
                  <div className="w-1 h-full rounded-full shrink-0 mt-1" style={{ backgroundColor: accent, opacity: 0.6, minHeight: "1rem" }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: ".8rem", color: "#8a7060", lineHeight: 1.65, letterSpacing: "0.02em" }}>
                    {fieldNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
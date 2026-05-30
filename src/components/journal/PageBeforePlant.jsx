const steps = [
  {
    num: "01",
    accent: "#b5862a",
    title: "Observe your sun",
    body: "Track how much direct sunlight an area actually gets throughout the day. You can do this by taking a photo of the area you want to plant at 9 AM, 12 PM, and 3 PM. Note that six or more hours of direct sunlight is considered full sun. A spot that gets sun in the morning but shade after lunch is usually considered part shade.",
    fieldNote: "Also trees leaf out, thus a sunny April planting spot may be deep shade by June.",
  },
  {
    num: "02",
    accent: "#5b8fa8",
    title: "Listen to the land",
    body: "After a decent rain, check the area you want to plant. If water is still standing after 24 hours, you’ll want species that tolerate wet soils. If the area dries within a few hours, most garden plants will be happy there. Understanding drainage is often more important than choosing the “perfect” plant.",
    fieldNote: "If your shoes sink into the soil a day after rain, don’t fight it!! Plant for wet conditions.",
  },
  {
    num: "03",
    accent: "#3d6e30",
    title: "Start small",
    body: "You don't need to transform your whole yard at once, although tempting! A few well-placed plants that thrive are worth more than a dozen that struggle. Remember many native plants will naturally spread on there own!",
    fieldNote: "Native gardens can begin with a single plant!",
  },
  {
    num: "04",
    accent: "#c87040",
    title: "Let the garden be",
    body: "Native gardens need time to establish, reseed, and spread. Give them two seasons before judging. Often, what looks sparse in spring fills in beautifully by fall.",
    fieldNote: "    Native gardens grow roots before they grow beauty. Be Patient",
  },
];

export default function PageBeforePlant() {
  return (
    <div style={{ backgroundColor: "#e8e0d0", minHeight: "60vh" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-16">

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8" style={{ backgroundColor: "#7a5c3a" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a5c3a" }}>
            Field prep
          </span>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1a1a10", lineHeight: 1.1, marginBottom: "0.5rem" }}>
          Before You Plant
        </h2>
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#5a4a35", lineHeight: 1.7, maxWidth: "36rem", marginBottom: "3rem" }}>
          Your specific sun, water, and soil determine the best plants for your garden. Take time to observe your planting sites before you buy anything! 
        </p>

        <div className="space-y-0">
          {steps.map(({ num, accent, title, body, fieldNote }) => (
            <div key={num} className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4 sm:gap-10 py-10 border-t" style={{ borderColor: "#c8b89a" }}>
              <div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: accent, lineHeight: 1 }}>
                  {num}
                </span>
              </div>
              <div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#1a1a10", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                  {title}
                </h4>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#3a3020", lineHeight: 1.75, marginBottom: "0.8rem" }}>
                  {body}
                </p>
                <div className="flex items-start gap-2 pt-2 border-t" style={{ borderColor: "#d4c4a4" }}>
                  <div className="w-1 rounded-full shrink-0 mt-1" style={{ backgroundColor: accent, opacity: 0.6, height: "1rem" }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#8a7060", lineHeight: 1.65, letterSpacing: "0.02em" }}>
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
// Ryan's Favorites — personal plant observations & picks
// To add a plant: add an entry to the FAVORITES array below.
// photo: use a URL (Unsplash or your own uploaded image URL)

const FAVORITES = [
  {
    id: 1,
    commonName: "Blue Columbine",
    scientificName: "Aquilegia",
    photo: "/myplants/blue-columbine.jpg",
    note: "To the left are my very own columbines! I’ve always loved these flowers because they thrive in the shady, moist conditions that make up most of our yard, and although the plant pictured here are NOT the native Eastern Red Columbine (Aquilegia canadensis), I could not resist the deep blue color of these cultivars against the backdrop of our house. That distinction is important to me because, while I do grow native columbines, I also want this project to show that gardening does not have to be all-or-nothing. It’s okay to include plants that simply feel special to you, especially when they still provide beauty, atmosphere, and even some value to pollinators alongside the native species growing nearby. ",
    siteCondition: "Part shade, dry rocky soil under conifers",
    whyILikeIt: "Super hardy and they are stunning when covered in water droplets after a humid night.",
    accent: "#c084fc",
  }, 
  {
    id: 2,
    commonName: "Golden Alexanders",
    scientificName: "Zizia aurea",
    photo: "/myplants/golden-alexanders.jpg",
    note: "Pictured here are my Golden Alexanders, and I absolutely LOVE these plants. Not only are they incredibly hardy, but they thrive in full sun and bring such a vibrant burst of yellow to the landscape. Plus their height makes them perfect for filling in the back portions of garden beds, where they create a soft, natural backdrop for shorter flowers nearby. One of my favorite things about them, though, is how alive they are. There are always ladybugs and other insects resting on the leaves or moving through the stems, and seeing those little moments of life throughout the day makes my lawn feel all the more connected and active.",
    siteCondition: "Full sun, dry sandy slope, thin soil",
    whyILikeIt: "Hardy, good looking, attracts life, and tall!",
    accent: "#f59e0b",
  },
  {
    id: 3,
    commonName: "Woodland Phlox",
    scientificName: "Phlox divaricata",
    photo: "/myplants/woodland-phlox.jpg",
    note: "These are my Woodland Phlox, and I love them because they provide an important early-season food source for pollinators while also filling the garden with a soft, sweet fragrance during the day and evening. On top of that, they’re hardy, accessible, and a great native plant for newer gardeners.",
    siteCondition: "Full sun, average moisture, back of border",
    whyILikeIt: "Hardy, accessible, fragrant, and pretty!",
    accent: "#818cf8",
  },
];

export default function PageFavorites() {
  return (
    <div style={{ backgroundColor: "#ece4d2", minHeight: "60vh" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-16">

        {/* Page header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8" style={{ backgroundColor: "#b5862a" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b5862a" }}>
            Personal observations
          </span>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a1a10", lineHeight: 1.1, marginBottom: "0.5rem" }}>
          Ryan's Favorites
        </h2>
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", color: "#5a4a35", lineHeight: 1.7, maxWidth: "36rem", marginBottom: "3rem", fontStyle: "italic" }}>
          Plants I've grown and love! 
        </p>

        {/* Favorites grid */}
        <div className="space-y-0">
          {FAVORITES.map((fav, i) => (
            <div
              key={fav.id}
              className="border-t py-10"
              style={{ borderColor: "#c8b89a" }}
            >
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 ${i % 2 === 1 ? "sm:[grid-template-areas:'b_a']" : ""}`}>

                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    gridArea: i % 2 === 1 ? "b" : "auto",
                    aspectRatio: "4/3",
                    backgroundColor: "#c8b89a",
                  }}
                >
                  {fav.photo && (
                    <img
                      src={fav.photo}
                      alt={fav.commonName}
                      className="w-full h-full object-cover"
                      style={{ filter: "saturate(0.9) contrast(1.05)" }}
                    />
                  )}
                  {/* Subtle film-grain overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(26,20,10,0.12)", mixBlendMode: "multiply" }} />
                  {/* Caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                      {fav.siteCondition}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div style={{ gridArea: i % 2 === 1 ? "a" : "auto" }} className="flex flex-col justify-center">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: fav.accent, opacity: 0.7, minHeight: "1.5rem" }} />
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#1a1a10", lineHeight: 1.1, marginBottom: "0.2rem" }}>
                        {fav.commonName}
                      </h3>
                      <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "0.9rem", color: "#8a7060", fontStyle: "italic" }}>
                        {fav.scientificName}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", color: "#3a3020", lineHeight: 1.75, marginBottom: "1rem" }}>
                    {fav.note}
                  </p>

                  <div className="pt-3 border-t" style={{ borderColor: "#d4c4a4" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#b5862a", display: "block", marginBottom: "0.3rem" }}>
                      Why I keep planting it
                    </span>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "0.95rem", color: "#5a4a35", lineHeight: 1.6, fontStyle: "italic" }}>
                      {fav.whyILikeIt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function PageAuthor() {
  return (
    <div className="px-6 sm:px-14 py-14 max-w-3xl mx-auto">

      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px w-8" style={{ backgroundColor: "#c8b890" }} />
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 700,
          letterSpacing: "0.28em", textTransform: "uppercase", color: "#a09070",
        }}>
          About the Author
        </span>
        <div className="h-px w-8" style={{ backgroundColor: "#c8b890" }} />
      </div>

      {/* Portrait */}
      <div className="mb-10 flex justify-center">
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Tape corner decoration — top left */}
          <div style={{
            position: "absolute", top: "-8px", left: "12px", width: "36px", height: "14px",
            backgroundColor: "rgba(210,190,120,0.45)", transform: "rotate(-3deg)", zIndex: 2,
            borderRadius: "1px",
          }} />
          {/* Tape corner — bottom right */}
          <div style={{
            position: "absolute", bottom: "-8px", right: "16px", width: "36px", height: "14px",
            backgroundColor: "rgba(210,190,120,0.4)", transform: "rotate(2deg)", zIndex: 2,
            borderRadius: "1px",
          }} />
          <div style={{
            padding: "8px", backgroundColor: "#ede7d8",
            boxShadow: "2px 4px 18px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.08)",
            transform: "rotate(-1.5deg)",
          }}>
            {/* Placeholder portrait — warm parchment with initials */}
            <div style={{
              width: "700px", height: "350px",
              backgroundColor: "#ddd5c0",
              backgroundImage: "url('/humans/about-me-photo-ryan.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "3.5rem", color: "rgba(100,80,50,0.35)", userSelect: "none",
              }}></span>
            </div>
          </div>
        </div>
      </div>

      {/* Name + location stamp */}
      <div className="text-center mb-10">
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", color: "#2a2418", marginBottom: "0.2rem" }}>
          Ryan McGurk
        </h2>
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "0.9rem", fontStyle: "italic", color: "#a09070" }}>
          Connecticut · Southern New England
        </p>
      </div>

      {/* Thin ruled divider */}
      <div className="mb-10" style={{ height: "1px", backgroundColor: "#d4c8a8" }} />

      {/* Biography */}
      <div className="mb-10">
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem",
          color: "#3a3020", lineHeight: 1.85,
        }}>
          I grew up in Connecticut, surrounded by suburban yards, overgrown fence lines, and small patches of nature between neighborhoods and streams. What first drew me to native plants was not a spectacular garden or a cool looking plant, I simply noticed how little diversity surrounded me.

        </p>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem",
          color: "#3a3020", lineHeight: 1.85, marginTop: "1.2rem",
        }}>
           I became frustrated by endless stretches of short lawn, everywhere I looked, people spent enormous time, water, fuel, and effort on landscapes that felt disconnected from wildlife. Yet I understand why they do it. People want their homes to look ‘beautiful’, intentional, and welcoming.
        </p>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#3a3020", lineHeight: 1.85, marginTop: "1.2rem",
        }}>
          That realization changed how I thought about the problem. The goal was not to stop people from caring about aesthetics or to let yards grow wild but to create landscapes that were beautiful and ecologically meaningful. As I invested my time into biology, I found that native plants offered a perfect balance as they support pollinators, birds, and local ecosystems yet they also create vibrant, attractive gardens for homeowners to enjoy and be proud of.
        </p>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem", color: "#3a3020", lineHeight: 1.85, marginTop: "1.2rem",
        }}>
          In the end, I created this website to make native gardening more approachable. My hope is that a few well-placed native plants can help people see their yards and the life around them in a new way!
        </p>
      </div>

      {/* Favorites */}
      <div className="mb-10">
        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "1.2rem",
          color: "#2a2418", marginBottom: "0.75rem",
          fontStyle: "italic",
        }}>

        </h3>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem",
          color: "#3a3020", lineHeight: 1.85,
        }}>
          
        </p>
      </div>

      {/* Why this project */}
      <div className="mb-10">
        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "1.2rem",
          color: "#2a2418", marginBottom: "0.75rem",
          fontStyle: "italic",
        }}>
          Why this journal exists
        </h3>
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem",
          color: "#3a3020", lineHeight: 1.85,
        }}>
          I spent a lot of time early on trying to find a simple answer to "what should I actually
          plant in my yard." The information existed, but it was scattered, technical, or written
          for people who already had the vocabulary. I built this because I wanted something I could
          hand to someone a neighbor, a family member, a friend with a sunny backyard and no idea
          where to start. Something that starts with your ZIP code
          and works from there. Not a database. A recommendation from someone who has thought about
          it.
        </p>
      </div>

      {/* Closing note */}
      <div className="mb-12">
        <div className="mb-5" style={{ height: "1px", backgroundColor: "#d4c8a8" }} />
        <p style={{
          fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem",
          color: "#4a3f2f", lineHeight: 1.9, fontStyle: "italic",
        }}>
          Start with one plant. Watch what happens. The most useful thing I've
          learned about native gardening is that the garden itself will tell you what to do! Don't forget to have fun!!
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1" style={{ backgroundColor: "#d4c8a8" }} />
          <span style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.1rem",
            color: "#8a7050", fontStyle: "italic",
          }}>
            — Ry.
          </span>
        </div>
      </div>

      {/* Final journal stamp */}
      <div className="text-center pb-4">
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.69rem", fontWeight: 700,
          letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8b890",
        }}>
          Connecticut · Vol. I · Field Journal
        </p>
      </div>

    </div>
  );
}
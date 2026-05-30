// Birds & Observations — personal bird sightings linked to native habitat
// To add a bird: add an entry to the BIRDS array below.

const BIRDS = [
  {
    id: 1,
    name: "Blue Jay",
    latinName: "Cyanocitta cristata",
    photo: "/birds/blue-jay.jpg",
    observation: "Here is a photo of a stunning Blue Jay in my yard. This bird is LOUD and if you learn their call, I am confident that you’ll be surprised by how many there are. However, they can be a bit controversial among homeowners because they sometimes raid nests, fruit, or other food sources (bird feeders). Personally, I believe that’s exactly what makes them so fascinating; if I were a highly intelligent bird, I’d probably pounce on every food opportunity as well! Overall, their bright blue feathers, bold personalities, and unmistakable calls always make them one of my favorite birds to see and hear around the garden.",
    habitatConnection: "Blue Jays also remind me that a healthy habitat is more than just flowers as bluejays love to be around mature trees (especially oak!) and 'woodland edges', where they can find food and shelter. Plus, their presence is a good sign that a yard is supporting the kind of structure and diversity that wildlife depends on!",
    merlin: "    Many oak trees owe their existence to Blue Jays, which bury and forget thousands of acorns.",

    accent: "#f87171",
  },
  {
    id: 2,
    name: "Common Grackle",
    latinName: "Quiscalus quiscula",
    photo: "/birds/common-grackle.jpg",
    observation: "Here is a Common Grackle, and without question, this is my favorite bird. I love them so much that I could probably dedicate an entire website to them. One of the reasons I find them so fascinating is that their beauty is easy to miss. At first glance, they often look like plain black birds, but when the light hits them just right, their feathers reveal stunning iridescent blues, purples, and greens. I tried to capture some of that in this photo, but I highly encourage you to look them up and then see if you can spot one outside; the contrast is remarkable. Beyond their appearance, grackles are incredibly intelligent birds. They’re resourceful, adaptable, and constantly searching for opportunities. Like Blue Jays, they sometimes get a bad reputation because they can be aggressive and occasionally feed on crops or fruit. HOWEVER, I believe that’s because they’re simply taking advantage of the resources available to them.\n... can you really blame them?! \n\n In a way, grackles remind me of an important lesson about gardening and ecology. A healthy landscape is not only aesthetically pleasing but also functions as a thriving habitat. Too often, many people fill a yard with whatever looks the 'prettiest' from the garden center and then they become frustrated when wildlife shows up and starts acting like... wildlife. However the bird isn’t the problem. The grackle doesn’t know how much money was spent on a flower bed as it simply sees an 'opportunity.'\n\n Yet, that’s one of the many reasons I appreciate native gardening. My yard still has plenty of color and beauty, but it also supports the insects, birds, and other wildlife that BELONG here. Nothing feels out of balance. Thus, the grackles aren’t disrupting my garden because they’re part of it!",
    habitatConnection: "Nom nom they love insects. If you see them around, you may have some rich soil on your hands!",
    merlin: "Watch them move around as unlike many birds they WALK rather than hop!",

    accent: "#fbbf24",
  },
  {
    id: 3,
    name: "American Robin",
    latinName: "Turdus migratorius",
    photo: "/birds/american-robin.jpg",
    observation: "Pictured here is a hungry American Robin. This bird is a little different from the two birds above because I don’t particularly find them to be very visually striking or fascinatingly intelligent. Yet, I believe the robin is way MORE impressive. \n\n One of the main 'ideas' within this website is that different regions support different forms of life. Even within 3 states, there are changes in soil, climate, and habitat which can create entirely different ecological communities. Yet, whether it is a suburban lawn, a city park, forests, or rural fields, robins can be found almost everywhere! They have sucessfully become one of the most familiar and recognizable birds in North America which, to me, is a remarkable achievement and it is fascinating to witness.",
    habitatConnection: "American Robins love to forage! They can signal a healthy soil.",
    merlin: "Robins tilt their heads towards the ground while hunting, which may be a behavior that helps them detect movement beneath the ground, although scientists do not know with certainty.",

    accent: "#f97316",
  },
];

export default function PageBirds() {
  return (
    <div style={{ backgroundColor: "#e8f0e8", minHeight: "60vh" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-16">

        {/* Page header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8" style={{ backgroundColor: "#3d6e30" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3d6e30" }}>
            Field observations
          </span>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a1a10", lineHeight: 1.1, marginBottom: "0.5rem" }}>
          Birds & Observations
        </h2>
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#3a4a35", lineHeight: 1.7, maxWidth: "36rem", marginBottom: "3rem" }}>
          Native plants and birds are inseparable!! These are a few species I love! 
        </p>

        {/* Bird entries */}
        <div className="space-y-0">
          {BIRDS.map((bird) => (
            <div key={bird.id} className="border-t py-10" style={{ borderColor: "#b8c8b0" }}>
              <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-8">

                {/* Photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/2", backgroundColor: "#b8c8b0" }}>
                  {bird.photo && (
                    <img src={bird.photo} alt={bird.name} className="w-full h-full object-cover"
                      style={{ filter: "saturate(0.88) contrast(1.08)" }} />
                  )}
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(20,30,18,0.1)" }} />
                  <div className="absolute top-2 right-2 px-2 py-0.5" style={{ backgroundColor: "rgba(20,30,18,0.65)" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.52rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(180,220,160,0.9)" }}>
                      {bird.season}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 style={{ whiteSpace: "pre-line", fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#1a2010", lineHeight: 1.1 }}>
                      {bird.name}
                    </h3>
                  </div>
                  <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "0.9rem", color: "#6a7860", fontStyle: "italic", display: "block", marginBottom: "0.8rem" }}>
                    {bird.latinName}
                  </span>

                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#2e3a28", lineHeight: 1.75, marginBottom: "1rem", whiteSpace: "pre-line"}}>
                    {bird.observation}
                  </p>

                  <div className="pt-3 border-t mb-3" style={{ borderColor: "#b8c8b0" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3d6e30", display: "block", marginBottom: "0.3rem" }}>
                      Habitat connection
                    </span>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#3a4a30", lineHeight: 1.65 }}>
                      {bird.habitatConnection}
                    </p>
                  </div>

                  {bird.merlin && (
                    <div className="flex items-start gap-2 pt-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: bird.accent }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#6a7860", lineHeight: 1.6, letterSpacing: "0.02em" }}>
                        {bird.merlin}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 pt-6 border-t" style={{ borderColor: "#b8c8b0", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#6a7860", lineHeight: 1.7, letterSpacing: "0.04em" }}>
          Bird identification aided by Merlin Bird ID (Cornell Lab of Ornithology). I highly recommend that you download the app as it can audibly identify birds, which becomes addicting to use!
        </p>
      </div>
    </div>
  );
}
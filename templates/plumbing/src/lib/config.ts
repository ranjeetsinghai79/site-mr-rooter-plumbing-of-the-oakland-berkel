import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Mr. Rooter Plumbing of The Oakland-Berkeley Area",
    tagline: "Expert Plumbing. Always On Time.",
    phone: "(510) 957-9648",
    phoneHref: "tel:+15109579648",
    email: "info@mrrooterberkeley.com",
    address: "2625 Alcatraz Ave",
    city: "Oakland",
    serviceAreas: ["Oakland", "Berkeley"],
    license: "CA C36 #987654",
    since: "1995",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Plumbing Repair", desc: "We fix all types of leaks, drips, and clogs quickly and efficiently.", urgent: false },
    { icon: "wrench", title: "Sewer & Drain Cleaning", desc: "Advanced solutions like HydroScrub Jetting clear the toughest blockages.", urgent: false },
    { icon: "thermometer", title: "Water Heater Services", desc: "Repair, replacement, and installation of traditional and tankless water heaters.", urgent: false },
    { icon: "home", title: "Leak Detection", desc: "Pinpoint and repair hidden leaks to prevent costly water damage.", urgent: true },
    { icon: "zap", title: "Emergency Plumbing", desc: "24/7 rapid response for burst pipes, severe clogs, and other urgent issues.", urgent: true },
    { icon: "truck", title: "Trenchless Sewer Repair", desc: "Non-invasive sewer line repair saves your yard and your wallet.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Oakland", stars: 5, text: "Our water heater completely failed on a Sunday morning. Mr. Rooter responded within an hour, and their technician, Mark, was incredibly professional. He explained all our options clearly and had a new tankless unit installed by the afternoon. The price was fair, and the service was exceptional. Highly recommend!" },
    { name: "David L.", location: "Berkeley", stars: 5, text: "We had a persistent slow drain in our kitchen sink that other plumbers couldn't fix. Mr. Rooter used their HydroScrub Jetting service, and it's been flowing perfectly ever since. The technician was friendly, clean, and got the job done right the first time. So relieved to have a functional sink again!" },
    { name: "Jessica P.", location: "Oakland", stars: 5, text: "A burst pipe in our basement was a nightmare, but Mr. Rooter turned it into a manageable situation. Their emergency team arrived quickly, minimized the water damage, and completed the repair efficiently. They were transparent about costs and truly empathetic to our stress. Fantastic service when we needed it most." }
  ],

  trustBadges: [
    "Licensed & Insured", "24/7 Emergency Service", "GAF Master Elite Certified", "Locally Owned & Operated", "Upfront Pricing", "NATE Certified"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 25, label: "Years in Business", suffix: "+", decimals: 0 },
    { value: 10000, label: "Happy Customers", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly, ready to diagnose and resolve your plumbing issues." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises, just clear, honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and background-checked." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "24/7 Emergency", desc: "Always available for urgent plumbing needs, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vans are stocked with the right tools for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["Plumbing Repair", "Sewer and Drain Cleaning", "Water Heater Repair and Replacement", "Leak Detection", "Emergency Plumbing", "Trenchless Sewer Line Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!
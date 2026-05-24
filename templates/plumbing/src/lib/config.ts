import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Mr. Rooter Plumbing of The Oakland-Berkeley Area",
    tagline: "Expert Plumbing. Always On Time.",
    phone: "(510) 957-9648",
    phoneHref: "tel:+15109579648",
    email: "info@mrrooter.com",
    address: "123 Main St",
    city: "Oakland",
    serviceAreas: ["Oakland", "Berkeley Area"],
    license: "CA C36 #123456",
    since: "1970",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Residential Plumbing", desc: "Comprehensive plumbing solutions for your home, ensuring everything runs smoothly.", urgent: false },
    { icon: "wrench", title: "Emergency Plumbing", desc: "24/7 rapid response for urgent plumbing issues, minimizing damage and stress.", urgent: true },
    { icon: "thermometer", title: "Water Heater Services", desc: "Repair, replacement, and installation of all types of water heaters, including tankless.", urgent: false },
    { icon: "zap", title: "Sewer & Drain Cleaning", desc: "Advanced techniques like HydroScrub Jetting for clear, free-flowing pipes.", urgent: false },
    { icon: "home", title: "Leak Detection & Repair", desc: "Pinpointing and fixing leaks quickly to prevent water damage and conserve resources.", urgent: false },
    { icon: "hammer", title: "Gas Line Services", desc: "Safe and professional installation, repair, and maintenance of gas lines.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Oakland, CA", stars: 5, text: "Mr. Rooter saved us during a major pipe burst last month. Their technician arrived within an hour on a Sunday evening, quickly diagnosed the problem, and fixed it efficiently. The upfront pricing was a huge relief, and the repair has held up perfectly. Highly recommend their emergency service!" },
    { name: "David L.", location: "Berkeley, CA", stars: 5, text: "We had a persistent clogged drain that other companies couldn't fix. Mr. Rooter used their HydroScrub Jetting, and it worked wonders! The plumber was incredibly knowledgeable, explained everything clearly, and left the area spotless. Our drains haven't flowed this well in years." },
    { name: "Emily R.", location: "Oakland, CA", stars: 5, text: "Our old water heater finally gave out. Mr. Rooter provided a clear quote for a new tankless system, installed it the very next day, and even hauled away the old unit. The installation was seamless, and we now have endless hot water. Fantastic service from start to finish!" }
  ],

  trustBadges: [
    "Licensed & Insured", "24/7 Emergency Service", "Upfront Pricing", "NATE Certified Technicians", "5-Star Rated", "HydroScrub® Jetting Experts"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 50, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly, especially for emergencies, to resolve your plumbing issues promptly." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! You'll know the cost before we start any work, with transparent quotes." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, certified, and experienced in all aspects of plumbing." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "24/7 Emergency Service", desc: "Plumbing emergencies don't wait, and neither do we. Call us anytime, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the right tools and parts for efficient repairs." }
  ],

  formServiceOptions: ["Residential Plumbing", "Toilet Repair and Replacement", "Sump Pump Services", "Emergency Plumbing", "Backflow Preventers", "Pipe Insulation", "Water Valves Service", "Sewer Repair", "Leaking Pipes Repair", "Water Shut Off Services", "Drain Repair", "Faucet Repair", "Basement Drains Service", "Sink Repair", "Plumbing Leak Detection", "Sewer and Drain Cleaning", "Clogged Drains", "Sewer Drains (System Backups)", "Sewer Camera Inspection", "HydroScrub Drain Jetting", "Trenchless Sewer Line Repair", "Water Heater Repair and Replacement", "Tankless Water Heaters", "Hot Water Dispensers", "Water Softener Repair", "Water Filters", "Garbage Disposals Repair", "Boiler Repair", "Remodeling Services", "Gas Line Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!
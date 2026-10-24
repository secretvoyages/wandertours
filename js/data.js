const DESTINATIONS = [
  { name: "Paris", country: "France", tours: 1240, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
  { name: "Rome", country: "Italy", tours: 980, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80" },
  { name: "Tokyo", country: "Japan", tours: 870, img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80" },
  { name: "Bali", country: "Indonesia", tours: 1120, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" },
  { name: "New York", country: "USA", tours: 1450, img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80" },
  { name: "Cape Town", country: "South Africa", tours: 420, img: "https://images.unsplash.com/photo-1580060831444-23c5ce6294c0?auto=format&fit=crop&w=600&q=80" },
  { name: "Dubai", country: "UAE", tours: 760, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
  { name: "Barcelona", country: "Spain", tours: 890, img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=600&q=80" }
];

const CATEGORIES = [
  { id: "day-trips", name: "Day trips", icon: "🚌" },
  { id: "food", name: "Food & wine", icon: "🍷" },
  { id: "adventure", name: "Adventure", icon: "🏔️" },
  { id: "culture", name: "Culture & history", icon: "🏛️" },
  { id: "water", name: "Water activities", icon: "🌊" },
  { id: "wildlife", name: "Wildlife", icon: "🦁" },
  { id: "nightlife", name: "Nightlife", icon: "🌃" },
  { id: "wellness", name: "Wellness", icon: "🧘" },
  { id: "family", name: "Family-friendly", icon: "👨‍👩‍👧‍👦" },
  { id: "private", name: "Private tours", icon: "🔑" }
];

const TOURS = [
  {
    id: 1,
    title: "Skip-the-Line Colosseum, Roman Forum & Palatine Hill Tour",
    location: "Rome, Italy",
    category: "culture",
    price: 59,
    duration: "3 hours",
    rating: 4.9,
    reviews: 12840,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    desc: "Explore ancient Rome with an expert guide. Skip the long lines and walk through the Colosseum, Roman Forum and Palatine Hill while hearing fascinating stories of emperors and gladiators."
  },
  {
    id: 2,
    title: "Sunset Seine River Cruise with Champagne",
    location: "Paris, France",
    category: "day-trips",
    price: 45,
    duration: "1 hour",
    rating: 4.8,
    reviews: 9320,
    badge: "Likely to sell out",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    desc: "Glide past the Eiffel Tower, Notre-Dame and the Louvre as the sun sets over Paris. Includes a glass of champagne and live commentary."
  },
  {
    id: 3,
    title: "Mount Batur Sunrise Trek & Natural Hot Springs",
    location: "Bali, Indonesia",
    category: "adventure",
    price: 38,
    duration: "6 hours",
    rating: 4.9,
    reviews: 7650,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    desc: "Hike an active volcano before dawn, watch the sunrise above the clouds, then soak in natural hot springs. Breakfast included."
  },
  {
    id: 4,
    title: "Tokyo Street Food Night Tour in Shinjuku",
    location: "Tokyo, Japan",
    category: "food",
    price: 89,
    duration: "3.5 hours",
    rating: 4.95,
    reviews: 4210,
    badge: "Top rated",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    desc: "Taste authentic izakaya dishes, ramen, yakitori and local drinks with a passionate foodie guide through the neon streets of Shinjuku."
  },
  {
    id: 5,
    title: "Full-Day Cape Peninsula & Penguins Tour",
    location: "Cape Town, South Africa",
    category: "wildlife",
    price: 72,
    duration: "9 hours",
    rating: 4.85,
    reviews: 3180,
    badge: null,
    img: "https://images.unsplash.com/photo-1580060831444-23c5ce6294c0?auto=format&fit=crop&w=800&q=80",
    desc: "Scenic drive along Chapman’s Peak, visit the Cape of Good Hope, and meet the African penguins at Boulders Beach. Small-group tour."
  },
  {
    id: 6,
    title: "Desert Safari with BBQ Dinner & Shows",
    location: "Dubai, UAE",
    category: "adventure",
    price: 55,
    duration: "6 hours",
    rating: 4.7,
    reviews: 15600,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    desc: "Dune bashing in a 4x4, camel ride, sandboarding, traditional BBQ dinner under the stars with belly dancing and fire shows."
  },
  {
    id: 7,
    title: "Sagrada Familia & Park Güell Guided Tour",
    location: "Barcelona, Spain",
    category: "culture",
    price: 79,
    duration: "4 hours",
    rating: 4.9,
    reviews: 8920,
    badge: "Skip the line",
    img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
    desc: "Skip-the-line access to Gaudí’s masterpieces. Expert guide explains the architecture and history of both iconic sites."
  },
  {
    id: 8,
    title: "Statues, Secrets & Stories: NYC Walking Tour",
    location: "New York, USA",
    category: "culture",
    price: 35,
    duration: "2.5 hours",
    rating: 4.8,
    reviews: 6450,
    badge: null,
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    desc: "Discover hidden stories behind famous landmarks, statues and buildings in Midtown and Central Park with a local historian."
  },
  {
    id: 9,
    title: "Private Food & Wine Tour in Tuscany",
    location: "Florence, Italy",
    category: "food",
    price: 195,
    duration: "8 hours",
    rating: 5.0,
    reviews: 1240,
    badge: "Private",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    desc: "Exclusive day with a private driver and sommelier. Visit two family-run wineries, olive oil tasting and a farm-to-table lunch."
  },
  {
    id: 10,
    title: "Great Barrier Reef Snorkel & Dive Day Trip",
    location: "Cairns, Australia",
    category: "water",
    price: 165,
    duration: "9 hours",
    rating: 4.85,
    reviews: 5120,
    badge: "Likely to sell out",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    desc: "Full day on the reef with snorkel gear, optional intro dive, lunch and underwater photos. Small groups and expert marine guides."
  },
  {
    id: 11,
    title: "Northern Lights Hunt by Minibus",
    location: "Reykjavik, Iceland",
    category: "adventure",
    price: 85,
    duration: "4–5 hours",
    rating: 4.6,
    reviews: 9870,
    badge: null,
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    desc: "Chase the Aurora Borealis with expert hunters. Hot chocolate, photography tips and free rebooking if the lights don’t appear."
  },
  {
    id: 12,
    title: "Angkor Wat Sunrise Small-Group Tour",
    location: "Siem Reap, Cambodia",
    category: "culture",
    price: 42,
    duration: "8 hours",
    rating: 4.9,
    reviews: 7340,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    desc: "Watch the sunrise over Angkor Wat, then explore the temples of Angkor Thom and Ta Prohm with an expert local guide."
  }
];

const SEARCH_SUGGESTIONS = [
  "Paris, France", "Rome, Italy", "Tokyo, Japan", "Bali, Indonesia",
  "New York, USA", "Barcelona, Spain", "Dubai, UAE", "Cape Town, South Africa",
  "London, UK", "Amsterdam, Netherlands", "Santorini, Greece", "Machu Picchu, Peru",
  "Sydney, Australia", "Reykjavik, Iceland", "Cairo, Egypt", "Bangkok, Thailand"
];

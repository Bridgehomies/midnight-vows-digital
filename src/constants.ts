export const WEDDING_DATE = "2026-06-14T16:00:00";

export const COUPLE_NAMES = {
  partner1: "Alexander",
  partner2: "Isabella",
};

export const COUPLE_HASHTAG = "#AlexAndIsa2026";

export const COUPLE_MONOGRAM = "A & I";

export const HERO = {
  invitation: "YOU'RE INVITED",
  date: "Saturday, June 14th, 2026",
  cta: "RSVP NOW",
};

export const STORY_ITEMS = [
  {
    year: "2019",
    title: "The First Glance",
    description:
      "A chance encounter at a rooftop gallery opening downtown. Our eyes met across the room, and the city lights seemed to dim in comparison.",
  },
  {
    year: "2020",
    title: "First Adventure Together",
    description:
      "A spontaneous road trip along the coast turned into the first of many adventures. We discovered we shared a love for hidden bookshops and midnight conversations.",
  },
  {
    year: "2023",
    title: "Moving In",
    description:
      "We found our little apartment overlooking the park. It was small, but it was ours — filled with laughter, late-night cooking experiments, and our growing vinyl collection.",
  },
  {
    year: "2025",
    title: "The Proposal",
    description:
      "Under a canopy of string lights on the very rooftop where we first met, the question was asked — and the answer was always yes.",
  },
];

export const EVENTS = [
  {
    type: "Ceremony",
    icon: "Heart" as const,
    time: "4:00 PM",
    venue: "St. Andrew's Cathedral",
    address: "123 Cathedral Lane, Downtown",
    directionsUrl: "#",
  },
  {
    type: "Reception",
    icon: "Wine" as const,
    time: "6:30 PM",
    venue: "The Grand Ballroom",
    address: "456 Riverside Drive, Waterfront",
    directionsUrl: "#",
  },
];

export const ACCOMMODATIONS = [
  {
    name: "The Langham Hotel",
    distance: "0.3 miles away",
    bookUrl: "#",
  },
  {
    name: "The Ritz-Carlton",
    distance: "0.5 miles away",
    bookUrl: "#",
  },
  {
    name: "Hotel Indigo Downtown",
    distance: "0.8 miles away",
    bookUrl: "#",
  },
];

export const RSVP_WEBHOOK = import.meta.env.VITE_RSVP_WEBHOOK || "";

export const MEAL_OPTIONS = [
  "Filet Mignon",
  "Pan-Seared Salmon",
  "Wild Mushroom Risotto",
  "Roasted Herb Chicken",
];

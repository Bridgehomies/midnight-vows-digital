export const WEDDING_DATE = "2026-06-14T16:00:00";

export const COUPLE_NAMES = {
  partner1: "Alexander",
  partner2: "Isabella",
};

export const COUPLE_HASHTAG = "#AlexAndIsa2026";

export const COUPLE_MONOGRAM = "A & I";

export const HERO = {
  invitation: "SAVE THE DATE",
  date: "Saturday, June 14th, 2026",
  cta: "RSVP NOW",
};

export const INVITATION = {
  blessing: "With the blessings of the Almighty",
  familyLine1: "Mr. & Mrs. James Harrison",
  familyLine2: "Mr. & Mrs. Robert Montague",
  inviteText: "Cordially invite you to celebrate the union of",
  closingText: "On the following events",
};

export const EVENTS = [
  {
    type: "Rehearsal Dinner",
    icon: "Wine" as const,
    time: "7:00 PM Onwards",
    date: "Friday, June 12th, 2026",
    venue: "The Ivy Restaurant",
    address: "789 Park Avenue, Downtown",
    directionsUrl: "#",
  },
  {
    type: "Welcome Party",
    icon: "PartyPopper" as const,
    time: "8:00 PM Onwards",
    date: "Friday, June 13th, 2026",
    venue: "The Rooftop Lounge",
    address: "321 Skyline Boulevard",
    directionsUrl: "#",
  },
  {
    type: "Ceremony",
    icon: "Heart" as const,
    time: "4:00 PM",
    date: "Saturday, June 14th, 2026",
    venue: "St. Andrew's Cathedral",
    address: "123 Cathedral Lane, Downtown",
    directionsUrl: "#",
  },
  {
    type: "Cocktail Hour",
    icon: "GlassWater" as const,
    time: "5:30 PM",
    date: "Saturday, June 14th, 2026",
    venue: "Cathedral Gardens",
    address: "123 Cathedral Lane, Downtown",
    directionsUrl: "#",
  },
  {
    type: "Reception",
    icon: "Wine" as const,
    time: "6:30 PM",
    date: "Saturday, June 14th, 2026",
    venue: "The Grand Ballroom",
    address: "456 Riverside Drive, Waterfront",
    directionsUrl: "#",
  },
  {
    type: "After Party",
    icon: "Music" as const,
    time: "10:00 PM Onwards",
    date: "Saturday, June 14th, 2026",
    venue: "The Velvet Room",
    address: "456 Riverside Drive, Waterfront",
    directionsUrl: "#",
  },
];

export const MEET_THE_COUPLE = {
  title: "Meet the Bride & Groom",
  description:
    "We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The love shown to us by so many people since our engagement has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to seeing you at the wedding.",
};

export const THINGS_TO_KNOW = [
  {
    icon: "Hash" as const,
    title: "Hashtag",
    description: "While posting photos on social media please use the hashtag — #AlexAndIsa2026",
  },
  {
    icon: "Sun" as const,
    title: "Weather",
    description: "It will be warm and sunny with temperatures reaching up to 78°F at the venue",
  },
  {
    icon: "Car" as const,
    title: "Parking",
    description: "Complimentary valet parking for all our guests will be available at the venue",
  },
  {
    icon: "Shirt" as const,
    title: "Dress Code",
    description: "Black tie optional — we'd love to see you dressed to celebrate!",
  },
];

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

export const RSVP_WEBHOOK = import.meta.env.VITE_RSVP_WEBHOOK || "";

export const MEAL_OPTIONS = [
  "Filet Mignon",
  "Pan-Seared Salmon",
  "Wild Mushroom Risotto",
  "Roasted Herb Chicken",
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

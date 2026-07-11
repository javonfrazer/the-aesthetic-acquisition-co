export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export const TRUSTED_BY = [
  "Luxe Med Spa",
  "Radiance Aesthetics",
  "The Glow Bar",
  "Aurelia Med Spa",
  "Aura Aesthetics Studio",
  "Aesthetica Clinic",
  "Bare Beauty Med Spa",
  "The Skin Society",
];

export type Service = {
  icon: "instagram" | "target" | "clapperboard" | "compass";
  title: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "instagram",
    title: "Social Media Management",
    description:
      "A fully managed Instagram and Facebook presence that positions your med spa as the premium choice in your market.",
    points: [
      "Strategic content calendar & posting",
      "Community management & DMs",
      "Growth-focused profile optimization",
      "Monthly performance reporting",
    ],
  },
  {
    icon: "target",
    title: "Meta Ads",
    description:
      "High-converting Facebook and Instagram ad campaigns engineered to fill your consultation calendar, not just chase likes.",
    points: [
      "Consultation-focused funnel builds",
      "Advanced audience targeting",
      "Weekly optimization & scaling",
      "Transparent cost-per-booking tracking",
    ],
  },
  {
    icon: "clapperboard",
    title: "Content Creation",
    description:
      "Scroll-stopping photo and video content that showcases your treatments, results, and expertise with editorial polish.",
    points: [
      "On-site & remote content production",
      "Before/after result storytelling",
      "Reels, UGC-style & procedure content",
      "On-brand editing & captioning",
    ],
  },
  {
    icon: "compass",
    title: "Brand Strategy",
    description:
      "A clear, premium brand identity and messaging framework that separates you from every other injector in town.",
    points: [
      "Positioning & competitor analysis",
      "Voice, tone & visual guidelines",
      "Offer & pricing presentation",
      "Patient journey mapping",
    ],
  },
];

export type WhyPoint = {
  icon: "sparkles" | "trending" | "shield" | "clock";
  title: string;
  description: string;
};

export const WHY_CHOOSE_US: WhyPoint[] = [
  {
    icon: "sparkles",
    title: "Med Spa Specialists Only",
    description:
      "We exclusively work with medical spas and aesthetic clinics — no diluted attention across unrelated industries.",
  },
  {
    icon: "trending",
    title: "Bookings, Not Vanity Metrics",
    description:
      "Every strategy is built around one outcome: qualified consultations on your calendar, tracked and reported honestly.",
  },
  {
    icon: "shield",
    title: "Compliance-Aware Advertising",
    description:
      "Our team understands Meta's aesthetic and medical advertising policies, keeping your ad accounts safe and running.",
  },
  {
    icon: "clock",
    title: "Fast, Dedicated Turnaround",
    description:
      "A dedicated strategist and content team means faster execution, quicker iteration, and no agency red tape.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "150+", label: "Med Spas Served" },
  { value: "3.2x", label: "Avg. Consultation Increase" },
  { value: "$8M+", label: "Ad Spend Managed" },
  { value: "92%", label: "Client Retention Rate" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  result: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Within 60 days our consultation bookings nearly tripled. The Aesthetic Acquisition Co. finally made our marketing feel as premium as our treatments.",
    name: "Dr. Melissa Hart",
    role: "Owner, Luxe Med Spa",
    result: "+186% consultations in 90 days",
  },
  {
    quote:
      "They understand med spas in a way no other agency has. Our Instagram finally looks like the clinic we actually are, and the ad results speak for themselves.",
    name: "Jordan Reyes",
    role: "Director, Radiance Aesthetics",
    result: "4.1x return on ad spend",
  },
  {
    quote:
      "We went from inconsistent walk-ins to a fully booked calendar three weeks out. Communication has been seamless the entire way.",
    name: "Dr. Amina Osei",
    role: "Medical Director, Aurelia Med Spa",
    result: "3x monthly booked consultations",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "How quickly can we expect to see results?",
    answer:
      "Most partners see an increase in engagement within the first two weeks and a measurable lift in booked consultations within 30 to 60 days as ad campaigns and content gather data and optimize.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We work on a 90-day minimum engagement to allow strategies room to compound, followed by a flexible month-to-month agreement. No multi-year lock-ins.",
  },
  {
    question: "What ad budget do you recommend?",
    answer:
      "Most medical spas see strong results starting around $2,000–$4,000/month in Meta ad spend, separate from our management fee. We'll build a specific recommendation during your strategy call.",
  },
  {
    question: "Who creates our photo and video content?",
    answer:
      "Our in-house content team can shoot on-site, or work remotely with footage you provide. Every asset is edited and branded in-house to match your clinic's aesthetic.",
  },
  {
    question: "Do you only work with med spas?",
    answer:
      "Yes — exclusively. We work with medical spas, injectors, and aesthetic clinics so every strategy, ad angle, and piece of content is built on deep niche experience.",
  },
  {
    question: "How is this different from a general marketing agency?",
    answer:
      "General agencies split attention across dozens of industries. We live inside med spa marketing daily — from Meta's aesthetic ad policies to what actually converts browsers into booked consultations.",
  },
];

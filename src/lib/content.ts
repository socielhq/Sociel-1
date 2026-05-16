import {
  Aperture,
  BarChart3,
  CalendarCheck,
  Clapperboard,
  Edit3,
  Eye,
  Film,
  Instagram,
  Layers3,
  Linkedin,
  Palette,
  Send,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Instagram Presence Management",
    description:
      "A steady visual rhythm for feeds, stories, reels, captions, and community-facing details.",
    icon: Instagram
  },
  {
    title: "LinkedIn Brand Presence",
    description:
      "Credible thought-led publishing that keeps founders and teams visible without feeling forced.",
    icon: Linkedin
  },
  {
    title: "Short-Form Content Management",
    description:
      "Content systems for reels, clips, hooks, retention edits, and platform-native packaging.",
    icon: Clapperboard
  },
  {
    title: "Content Editing & Optimization",
    description:
      "Sharper copy, stronger sequencing, cleaner formats, and repeatable publishing standards.",
    icon: Edit3
  },
  {
    title: "Visual Content Design",
    description:
      "Modern social visuals, carousels, covers, templates, and campaign assets with taste.",
    icon: Palette
  },
  {
    title: "Platform Management & Publishing",
    description:
      "Organized calendars, approval flows, scheduling, posting, and execution across channels.",
    icon: Send
  }
];

export const work = [
  {
    number: "01",
    title: "Educational Content With A Sharper Point Of View",
    label: "Instagram / Carousel Strategy",
    image: "/work/marketing-101.webp",
    description:
      "A premium thought-led post system built around simple strategic truths, editorial spacing, and save-worthy framing."
  },
  {
    number: "02",
    title: "Questions That Turn Clarity Into Scale",
    label: "Brand Messaging / Carousel System",
    image: "/work/clarity-spend/01.webp",
    description:
      "A strategic carousel that turns positioning questions into a premium narrative for decision makers.",
    carouselAspect: "portrait",
    carousel: [
      "/work/clarity-spend/01.webp",
      "/work/clarity-spend/02.webp",
      "/work/clarity-spend/03.webp",
      "/work/clarity-spend/04.webp",
      "/work/clarity-spend/05.webp",
      "/work/clarity-spend/06.webp",
      "/work/clarity-spend/07.webp"
    ]
  },
  {
    number: "03",
    title: "Traffic-Led Posts That Reframe The Problem",
    label: "Instagram / Authority Content",
    image: "/work/traffic-clarity/01.webp",
    description:
      "A clean carousel sequence designed to show why stronger clarity must come before higher traffic.",
    carouselAspect: "square",
    carousel: [
      "/work/traffic-clarity/01.webp",
      "/work/traffic-clarity/02.webp",
      "/work/traffic-clarity/03.webp",
      "/work/traffic-clarity/04.webp",
      "/work/traffic-clarity/05.webp",
      "/work/traffic-clarity/06.webp"
    ]
  }
];

export const reasons = [
  {
    title: "Consistency That Compounds",
    description:
      "Presence gets easier to trust when the cadence, tone, and visuals keep showing up.",
    icon: CalendarCheck
  },
  {
    title: "Visual Quality With Restraint",
    description:
      "Design choices feel current and editorial without becoming noisy or overly decorative.",
    icon: Eye
  },
  {
    title: "Organized Execution",
    description:
      "Planning, edits, approvals, and publishing live in a clear system instead of scattered tasks.",
    icon: Workflow
  },
  {
    title: "Internet-Native Judgment",
    description:
      "We understand platform behavior, social formats, and the difference between relevance and trend-chasing.",
    icon: Sparkles
  }
];

export const process = [
  {
    title: "Onboarding",
    description: "Understand the brand, platforms, constraints, voice, and current content habits.",
    icon: Target
  },
  {
    title: "Planning",
    description: "Shape the monthly rhythm, content pillars, platform mix, and publishing priorities.",
    icon: BarChart3
  },
  {
    title: "Editing / Design",
    description: "Turn ideas and source material into clean, platform-ready posts, clips, and assets.",
    icon: Aperture
  },
  {
    title: "Approvals",
    description: "Keep review cycles focused, easy to follow, and light enough to maintain momentum.",
    icon: Layers3
  },
  {
    title: "Publishing",
    description: "Schedule, post, refine, and keep the presence active with reliable execution.",
    icon: Film
  }
];

export const testimonials = [
  {
    quote:
      "Sociel brought a cleaner rhythm to our digital presence. The content felt organized, premium, and much easier for our audience to understand.",
    name: "Elegant Options"
  },
  {
    quote:
      "The positioning-led approach helped our ideas land with more clarity. Every post felt intentional, not just designed for the sake of posting.",
    name: "Global CMO Partners"
  },
  {
    quote:
      "The visual direction and execution made our content feel sharper while still staying simple, readable, and platform-native.",
    name: "Creative News Bharat"
  }
];

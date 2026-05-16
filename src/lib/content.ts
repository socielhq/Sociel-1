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
  { label: "services", href: "#services" },
  { label: "work", href: "#work" },
  { label: "approach", href: "#approach" },
  { label: "process", href: "#process" },
  { label: "contact", href: "#contact" }
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
    title: "The founder-led operating system",
    label: "linkedin / content planning",
    description:
      "A weekly publishing structure for a service brand that needed clear authority without corporate stiffness."
  },
  {
    number: "02",
    title: "Visual cadence for a local studio",
    label: "instagram / visual design",
    description:
      "A warmer grid language, repeatable story formats, and cleaner campaign moments across launch weeks."
  },
  {
    number: "03",
    title: "Short-form pipeline for a product team",
    label: "reels / editing workflow",
    description:
      "A compact clip system that turned raw ideas into consistent, platform-ready vertical content."
  }
];

export const reasons = [
  {
    title: "consistency that compounds",
    description:
      "Presence gets easier to trust when the cadence, tone, and visuals keep showing up.",
    icon: CalendarCheck
  },
  {
    title: "visual quality with restraint",
    description:
      "Design choices feel current and editorial without becoming noisy or overly decorative.",
    icon: Eye
  },
  {
    title: "organized execution",
    description:
      "Planning, edits, approvals, and publishing live in a clear system instead of scattered tasks.",
    icon: Workflow
  },
  {
    title: "internet-native judgment",
    description:
      "We understand platform behavior, social formats, and the difference between relevance and trend-chasing.",
    icon: Sparkles
  }
];

export const process = [
  {
    title: "onboarding",
    description: "Understand the brand, platforms, constraints, voice, and current content habits.",
    icon: Target
  },
  {
    title: "planning",
    description: "Shape the monthly rhythm, content pillars, platform mix, and publishing priorities.",
    icon: BarChart3
  },
  {
    title: "editing / design",
    description: "Turn ideas and source material into clean, platform-ready posts, clips, and assets.",
    icon: Aperture
  },
  {
    title: "approvals",
    description: "Keep review cycles focused, easy to follow, and light enough to maintain momentum.",
    icon: Layers3
  },
  {
    title: "publishing",
    description: "Schedule, post, refine, and keep the presence active with reliable execution.",
    icon: Film
  }
];

export const testimonials = [
  {
    quote:
      "Sociel gave our content a rhythm that finally felt manageable and visually consistent.",
    name: "Founder, boutique studio"
  },
  {
    quote:
      "The work felt sharp without trying too hard. Our channels became clearer within the first month.",
    name: "Marketing lead, services brand"
  }
];

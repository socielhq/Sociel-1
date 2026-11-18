import {
  Aperture,
  BarChart3,
  CalendarCheck,
  Edit3,
  Eye,
  Film,
  Instagram,
  Layers3,
  Linkedin,
  Building2,
  MessageCircle,
  Palette,
  Send,
  Sparkles,
  Target,
  Scale,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Work", href: "#work" },
  { label: "Why Sociel", href: "#why-sociel" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Brand Foundation & Identity",
    description:
      "Positioning, key message and tone of voice, plus the colours, fonts and post templates that make every post look like you. Includes profile setup and a short brand guide.",
    icon: Layers3
  },
  {
    title: "Instagram Presence Management",
    description:
      "A steady visual rhythm for feeds, stories, captions, and community-facing details.",
    icon: Instagram
  },
  {
    title: "LinkedIn Brand Presence",
    description:
      "Credible thought-led publishing that keeps founders and teams visible without feeling forced.",
    icon: Linkedin
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

export const whoWeHelp = [
  {
    title: "Founder-Led Businesses",
    description:
      "Startups and growing companies where the founder is the brand. We turn your story, launches and milestones into steady content.",
    icon: Building2
  },
  {
    title: "Professional Firms",
    description:
      "CAs, law firms and consultancies. Educational content that builds trust and respects your profession's rules.",
    icon: Scale
  },
  {
    title: "Experts & Personal Brands",
    description:
      "Coaches, speakers, trainers and advisors. Your expertise, shared consistently, from a little of your time each month.",
    icon: MessageCircle
  }
];

export const work = [
  {
    // TODO: Replace this reused hero image with a dedicated case study image.
    number: "01",
    title: "Educational Content With A Sharper Point Of View",
    label: "Instagram / Carousel Strategy",
    image: "/work/marketing-101.webp",
    description:
      "A premium thought-led post system built around simple strategic truths, editorial spacing, and save-worthy framing."
  },
  {
    // TODO: Add a real case study destination before making this card interactive.
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
      "/work/clarity-spend/07.webp"
    ]
  },
  {
    // TODO: Add a real case study destination before making this card interactive.
    number: "03",
    title: "Legal Awareness Content That Makes The Ruling Clear",
    label: "Global Legal Partners / Legal Education",
    image: "/work/global-legal-acceptance/01.webp",
    description:
      "A structured legal-awareness carousel that turns a commercial ruling into clear, accessible public education.",
    carouselAspect: "portrait",
    carousel: [
      "/work/global-legal-acceptance/01.webp",
      "/work/global-legal-acceptance/02.webp",
      "/work/global-legal-acceptance/03.webp",
      "/work/global-legal-acceptance/04.webp",
      "/work/global-legal-acceptance/05.webp",
      "/work/global-legal-acceptance/06.webp"
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
    title: "Writing & Design",
    description: "We turn your ideas, notes and voice into finished posts and visuals, ready for your review.",
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
      "Sociel understood the level of detail our brand needs. The content now feels polished, considered, and true to the visual standard Elegant Options stands for.",
    name: "Vidya Sindhgatta",
    role: "Elegant Options"
  },
  {
    quote:
      "Sociel helped us turn complex positioning into clear, credible content. Every post now carries the strategic thinking behind our work without losing its simplicity.",
    name: "Global CMO Partners"
  },
  {
    quote:
      "Sociel brought a sharper editorial rhythm to our presence. The work feels culturally aware, visually distinctive, and easier for our audience to engage with.",
    name: "Manjula Subhash Nair",
    role: "Creative Bharat News"
  },
  {
    quote:
      "Sociel helped us build an informative digital presence around legal awareness and public education. The content stayed measured, credible, and mindful of the professional boundaries we need to respect.",
    name: "Adv. Subhash Nair",
    role: "Global Legal Partners"
  }
];

export const clientLogos = [
  {
    name: "Elegant Options",
    image: "/client-logos/elegant-options.png",
    size: "h-14",
    className: "client-logo--elegant"
  },
  {
    name: "Global CMO Partners",
    image: "/client-logos/global-cmo-partners-transparent.png",
    size: "h-14",
    className: ""
  },
  {
    name: "Creative Bharat News",
    image: "/client-logos/creative-bharat-news-transparent.png",
    size: "h-16",
    className: ""
  },
  {
    name: "Global Legal Partners",
    image: "/client-logos/global-legal-partners.png",
    size: "h-14",
    className: ""
  }
];

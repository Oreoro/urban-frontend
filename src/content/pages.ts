export const pages = {
  about: {
    title: "About UrbanEvents",
    description: "The story behind the event management platform built for Pakistan.",
    theme: "theme-peach",
    eyebrow: "About",
    heading: "built for the creators, powered by tech, simplified for you.",
    subheading: "why is it so hard to manage small events without a mess of spreadsheets?",
    image: {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
      alt: "Event organizers planning a workshop"
    },
    body: [
      "UrbanEvents was born out of frustration. As former student organizers and event enthusiasts, we spent more time managing registration lists and verifying payments than actually enjoying the events we worked so hard to create.",
      "We realized that while high-end corporate software exists, it's often too complex and expensive for students, society leaders, and independent workshop hosts in Pakistan. We needed something localized, reliable, and accessible.",
      "One weekend, we mapped out the platform we wished we had during our university days. Now, we've built it for the next generation of Pakistani organizers."
    ],
    pullquote: "Event planning should feel lighter.",
    close: "That's the idea behind everything we build.",
    ctaHeading: "Got questions, feedback, or want to partner with us?",
    ctaLabel: "REACH OUT",
    ctaHref: "/contact"
  },
  features: {
    title: "Features | UrbanEvents",
    description: "Everything you need to launch ticketing in minutes.",
    theme: "theme-mint",
    eyebrow: "Features",
    heading: "EVERYTHING YOU NEED TO LAUNCH TICKETING IN MINUTES",
    subheading: "Pro tools for student organizers, without the pro price tag.",
    items: [
      {
        title: "Sell Tickets Fast",
        desc: "Create a beautiful event page and start selling tickets in less than 5 minutes.",
        icon: "ticket",
        color: "var(--color-pink)"
      },
      {
        title: "QR Code Check-in",
        desc: "Scan attendees at the door with our blazing fast mobile-friendly scanner.",
        icon: "qr",
        color: "var(--color-yellow)"
      },
      {
        title: "Local Payments",
        desc: "Seamlessly accept EasyPaisa, JazzCash, and bank transfers without hassle.",
        icon: "wallet",
        color: "var(--color-cyan)"
      },
      {
        title: "Live Analytics",
        desc: "Track sales, page views, and check-ins in real-time from your dashboard.",
        icon: "chart",
        color: "var(--color-peach)"
      }
    ]
  },
  pricing: {
    title: "Pricing | UrbanEvents",
    description: "Simple, transparent pricing for any event size.",
    theme: "theme-cyan",
    eyebrow: "Pricing",
    heading: "SIMPLE PRICING FOR EVERY EVENT!",
    subheading: "NO HIDDEN FEES. JUST POWERFUL TOOLS.",
    tiers: [
      {
        name: "Free Events",
        price: "RS 0",
        period: "forever",
        description: "Everything you need to host a free event, workshop, or meetup.",
        color: "var(--color-mint)",
        features: [
          "Unlimited tickets",
          "Custom event page",
          "QR Check-in tool",
          "Basic analytics"
        ],
        cta: "Start for Free",
        href: "https://app.urbanevents.pk"
      },
      {
        name: "Paid Events",
        price: "5%",
        period: "+ Rs 50/ticket",
        description: "For organizers selling tickets, passes, or taking registrations.",
        color: "var(--color-peach)",
        features: [
          "Everything in Free",
          "Local payment gateways",
          "Automated payouts",
          "Priority email support"
        ],
        cta: "Create Paid Event",
        href: "https://app.urbanevents.pk"
      }
    ],
    ctaHeading: "Ready to sell tickets?",
    ctaLabel: "Create Your Event",
    ctaHref: "https://app.urbanevents.pk"
  },
  android: {
    title: "Coming Soon",
    description: "The UrbanEvents mobile app for organizers.",
    theme: "theme-yellow",
    eyebrow: "Organizer App",
    heading: "Management on the go!",
    body: [
      "We're working on a dedicated app for real-time check-ins and analytics. Sign up to be first to know when it launches.",
      "In the meantime, the dashboard is fully responsive on all mobile browsers."
    ]
  },
  contact: {
    title: "Contact UrbanEvents",
    description: "Get in touch with the UrbanEvents team.",
    theme: "theme-mint",
    eyebrow: "Contact",
    heading: "Get in touch!",
    emailIntro: "VIA EMAIL",
    email: "hello@urbanevents.pk",
    formHeading: "Send an Enquiry",
    formIntro: "We’ll get back to you faster than a sold-out ticket.",
    form: "contact"
  },
  policies: {
    title: "UrbanEvents Policies",
    description: "Terms, privacy, and legal information for UrbanEvents.",
    theme: "theme-pink",
    eyebrow: "Policies",
    heading: "Terms, privacy, and legal information.",
    body: [
      "This page contains the legal policies for the UrbanEvents platform.",
      "For questions about our policies, contact us at hello@urbanevents.pk."
    ]
  }
};

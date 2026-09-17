export const pages = {
  about: {
    title: "About",
    description: "Why we built Urban Events: a ticketing platform for student societies, MUNs and workshop hosts in Pakistan.",
    eyebrow: "About",
    heading: "Built for the creators, powered by tech, simplified for you.",
    subheading: "Why is it so hard to manage small events without a mess of spreadsheets?",
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
    ctaLabel: "Reach out",
    ctaHref: "/contact"
  },
  features: {
    title: "Features",
    description: "Event pages, PKR checkout, QR check-in and live reports — everything included from your first ticket.",
    eyebrow: "Features",
    heading: "Everything you need to launch ticketing in minutes.",
    subheading: "Pro tools for student organizers, without the pro price tag.",
    items: [
      {
        title: "Sell tickets fast",
        desc: "Create a beautiful event page and start selling tickets in less than 5 minutes."
      },
      {
        title: "QR code check-in",
        desc: "Scan attendees at the door with our blazing fast mobile-friendly scanner."
      },
      {
        title: "Local payments",
        desc: "Seamlessly accept EasyPaisa, JazzCash, and bank transfers without hassle."
      },
      {
        title: "Live analytics",
        desc: "Track sales, page views, and check-ins in real-time from your dashboard."
      }
    ]
  },
  pricing: {
    title: "Pricing",
    description: "Free for free events. 5% + Rs 50 per paid ticket. No monthly subscription and no contract.",
    eyebrow: "Pricing",
    heading: "Simple pricing for every event.",
    subheading: "No hidden fees. Just powerful tools.",
    tiers: [
      {
        name: "Free events",
        price: "Rs 0",
        period: "forever",
        description: "Everything you need to host a free event, workshop, or meetup.",
        features: [
          "Unlimited tickets",
          "Custom event page",
          "QR check-in tool",
          "Basic analytics"
        ],
        cta: "Start for free",
        href: "https://app.urbanevents.pk",
        featured: false
      },
      {
        name: "Paid events",
        price: "5%",
        period: "+ Rs 50 / ticket",
        description: "For organizers selling tickets, passes, or taking registrations.",
        features: [
          "Everything in Free",
          "Local payment gateways",
          "Automated payouts",
          "Priority email support"
        ],
        cta: "Create paid event",
        href: "https://app.urbanevents.pk",
        featured: true
      }
    ],
    ctaHeading: "Ready to sell tickets?",
    ctaLabel: "Create your event",
    ctaHref: "https://app.urbanevents.pk"
  },
  android: {
    title: "Organizer App",
    description: "The Urban Events mobile app for real-time check-ins and analytics — coming soon.",
    eyebrow: "Organizer app",
    heading: "Management on the go.",
    body: [
      "We're working on a dedicated app for real-time check-ins and analytics. Sign up to be first to know when it launches.",
      "In the meantime, the dashboard is fully responsive on all mobile browsers."
    ]
  },
  contact: {
    title: "Contact",
    description: "Questions about ticketing, payments or check-in? Email the Urban Events team at hello@urbanevents.pk.",
    eyebrow: "Contact",
    heading: "Get in touch.",
    emailIntro: "Via email",
    email: "hello@urbanevents.pk",
    formHeading: "Send an enquiry",
    formIntro: "We'll get back to you faster than a sold-out ticket.",
    form: "contact"
  },
  policies: {
    title: "Policies",
    description: "Terms, privacy and legal information for the Urban Events ticketing platform.",
    eyebrow: "Policies",
    heading: "Terms, privacy, and legal information.",
    body: [
      "This page contains the legal policies for the UrbanEvents platform.",
      "For questions about our policies, contact us at hello@urbanevents.pk."
    ]
  }
};

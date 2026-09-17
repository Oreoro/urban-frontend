export const home = {
  hero: {
    kicker: "Ticketing for Pakistan",
    titleLine1: "Every great event",
    titleLine2: "starts here.",
    sub: "Set up an event page, take JazzCash, Easypaisa or bank transfer, and scan people in at the door — without a spreadsheet in sight.",
    primaryCta: "Create your event",
    primaryCtaHref: "https://app.urbanevents.pk/auth/register",
    secondaryCta: "See pricing",
    secondaryCtaHref: "/pricing",
    trust: ["Free for free events", "No monthly fees", "PKR checkout"]
  },

  workflow: [
    { step: "01", title: "Publish", sub: "One link, your branding" },
    { step: "02", title: "Sell", sub: "JazzCash, Easypaisa, bank" },
    { step: "03", title: "Check in", sub: "Scan from any phone" }
  ],

  ticker: [
    "MUNs",
    "Concerts",
    "Workshops",
    "Student societies",
    "Meetups",
    "Festivals",
    "Sports weeks",
    "Seminars"
  ],

  capabilities: [
    {
      title: "Publish",
      desc: "A clean event page on your own link — your logo, your colors, your ticket tiers.",
      points: [
        "Paid, free or donation tiers with sale windows and capacity",
        "Custom registration questions — roll number, dietary, t-shirt size",
        "Sold-out states and waitlists handled for you"
      ]
    },
    {
      title: "Sell tickets",
      desc: "Attendees pay the way they already pay — in rupees.",
      points: [
        "JazzCash, Easypaisa and bank transfer",
        "Promo codes, per-order limits and early-bird pricing",
        "5% + Rs 50 per paid ticket. Free events stay free."
      ]
    },
    {
      title: "Check in",
      desc: "Door duty runs from any phone browser. Nothing to install.",
      points: [
        "Scan a QR code, or search a name and tap",
        "Live counts sync across every phone at the door",
        "Keeps working when the venue wifi doesn't"
      ]
    },
    {
      title: "Get paid",
      desc: "Payouts and reports, without the spreadsheet mess.",
      points: [
        "Automated payouts after your event wraps",
        "Live sales, page views and check-in numbers",
        "Daily reports and CSV exports for your team"
      ]
    }
  ],

  steps: {
    kicker: "How it works",
    heading: "Live the same afternoon.",
    lede: "No onboarding calls, no setup fees, no waiting on approval. Create the event, set your prices and share the link.",
    items: [
      {
        title: "Create your event",
        desc: "Add the details, upload your logo and pick your ticket types. Publish when it looks right."
      },
      {
        title: "Set your prices",
        desc: "Paid, free or donation tiers with capacity, sale windows and promo codes — all in PKR."
      },
      {
        title: "Share and scan",
        desc: "Post one link to Instagram, WhatsApp and society chats. Then scan QR codes at the door."
      }
    ]
  },

  pricing: {
    kicker: "Pricing",
    heading: "Keep more of every ticket you sell",
    lede: "0% platform fee on free events. A small flat fee on paid tickets — no monthly subscription, no contract.",
    cards: [
      {
        tier: "Free events",
        price: "Rs 0",
        note: "forever",
        desc: "Everything you need to host a workshop, meetup or society event.",
        features: ["Unlimited free tickets", "Custom event page", "QR check-in tool", "Basic analytics"],
        cta: "Start for free",
        href: "https://app.urbanevents.pk/auth/register",
        featured: false
      },
      {
        tier: "Paid events",
        price: "5%",
        note: "+ Rs 50 / ticket",
        desc: "For organizers selling tickets, passes or taking registrations.",
        features: [
          "Everything in Free",
          "JazzCash, Easypaisa & bank transfer",
          "Automated payouts",
          "Priority support"
        ],
        cta: "Create a paid event",
        href: "https://app.urbanevents.pk/auth/register",
        featured: true
      }
    ],
    moreHref: "/pricing",
    moreLabel: "See the full pricing breakdown"
  },

  origin: {
    kicker: "Why we built this",
    heading: "The tool we wished we had",
    quote:
      "We spent more time chasing screenshots of payment confirmations and rebuilding registration lists than actually running the events we cared about. So we built the platform we wanted as student organizers.",
    attribution: "The Urban Events team",
    ctaLabel: "Read our story",
    ctaHref: "/about"
  },

  faqTeaser: [
    {
      question: "Is it really free for free events?",
      answer: "Yes. Free events cost nothing to list or run — no platform fee, no listing fee, no card required."
    },
    {
      question: "How do attendees pay?",
      answer: "JazzCash, Easypaisa and bank transfer, all settled in PKR. Payouts reach your account after the event."
    },
    {
      question: "Do I need an app to check people in?",
      answer: "No. Door staff open a link on any phone — scan a QR or search a name and tap. Nothing to install."
    }
  ],

  cta: {
    headingLine1: "Ready to sell out",
    headingLine2: "your next event?",
    sub: "Start your event for free. Built for small teams with big ideas.",
    primaryCta: "Create your event",
    primaryCtaHref: "https://app.urbanevents.pk/auth/register",
    secondaryCta: "Talk to us",
    secondaryCtaHref: "/contact"
  }
};
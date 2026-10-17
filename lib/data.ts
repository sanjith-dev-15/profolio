export const profile = {
  name: "Sanjith B",
  role: "AI Backend Developer · Mobile App Developer",
  email: "sanjith151102@gmail.com",
  location: "Erode, India",
  github: "https://github.com/SanjithB",
  linkedin: "https://linkedin.com/in/sanjith-b-a05b95230",
};

export const stats = [
  { n: 2, suffix: "+", label: "years shipping products" },
  { n: 2, suffix: "", label: "LLM platforms in production" },
  { n: 15, suffix: "+", label: "banks parsed on-device" },
  { n: 3, suffix: "", label: "compliance filings automated" },
];

export const skillGroups = [
  {
    key: "ai",
    title: "AI & LLMs",
    blurb: "Prompting and pipelines that turn documents into structured data.",
    items: [
      "Anthropic Claude API",
      "Google Gemini API",
      "Prompt Engineering",
      "AI Document Processing",
      "Structured Data Extraction",
      "AI-Assisted Document Generation",
    ],
  },
  {
    key: "backend",
    title: "Backend",
    blurb: "APIs behind the AI workflows.",
    items: ["Node.js", "Express.js", "REST APIs", "API Integration"],
  },
  {
    key: "mobile",
    title: "Mobile",
    blurb: "Android apps, from React Native down to Kotlin.",
    items: [
      "React Native",
      "Expo",
      "Android",
      "Expo Modules API",
      "Native Modules",
      "Background Tasks",
      "Geofencing",
    ],
  },
  {
    key: "lang",
    title: "Languages",
    blurb: "What I write every day.",
    items: ["JavaScript", "TypeScript", "Kotlin"],
  },
  {
    key: "data",
    title: "Database & Cloud",
    blurb: "Storage, auth and sync.",
    items: ["PostgreSQL", "Supabase", "Firebase Auth", "Cloud Firestore", "AsyncStorage"],
  },
  {
    key: "maps",
    title: "Maps & Location",
    blurb: "Location-aware features.",
    items: ["MapLibre", "OpenStreetMap", "Geolocation", "Reverse Geocoding", "Location Reminders"],
  },
  {
    key: "devops",
    title: "Tools & DevOps",
    blurb: "Shipping it reliably.",
    items: ["Git", "GitHub", "GitHub Actions", "Postman", "CI/CD", "APK Signing"],
  },
] as const;

export const experience = {
  role: "Product Developer",
  company: "Nigo Compliance Private Limited",
  location: "Erode, India",
  period: "05/2024 — Present",
  filings: ["MGT-7", "AOC-4", "Director's Report"],
  groups: [
    {
      label: "AI Backend",
      bullets: [
        "Built an **AI document-processing backend** in Node.js and Express.js that uses **Anthropic Claude** and **Google Gemini** to extract structured data from financial statements and corporate documents.",
        "Built extraction workflows for **financial figures, directors and shareholders**, used to prepare statutory compliance filings.",
        "Wrote and refined prompts to extract **negative values, equity share details, director information** and company filing data more accurately.",
        "Built **AI-assisted Word document editing** so users can change Board Reports and Lists of Directors by typing plain-language instructions.",
        "Built and integrated backend APIs for AI processing, document handling and application workflows.",
      ],
    },
    {
      label: "Mobile & DevOps",
      bullets: [
        "Worked on the company's **Android app** in React Native and Expo: authentication, call-log sync, enquiry capture and native module integration.",
        "Set up **GitHub Actions** workflows that build signed Android releases, keep build secrets secure and publish APKs to GitHub Releases.",
        "Documented APIs in **Postman** with the team, fixed production issues and shipped ongoing product improvements.",
      ],
    },
  ],
};

export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    school: "K. S. Rangasamy College of Technology",
    place: "Tiruchengode, India",
    period: "2021 — 2024",
    scoreLabel: "CGPA",
    score: "7.8",
    pct: 78,
  },
  {
    degree: "Diploma in Mechanical Engineering",
    school: "Kongu Polytechnic College",
    place: "Perundurai, India",
    period: "2018 — 2021",
    scoreLabel: "Score",
    score: "88%",
    pct: 88,
  },
];

// ✏️  Edit this file to change the portfolio. Everything on the page comes from here.

export const profile = {
  name: "Navalogithan Somasekaram",
  shortName: "Navalogithan",
  logo: "NS",
  role: "Senior Software Engineer",
  headline: "C# · .NET 8 · ASP.NET Core · Entity Framework · Azure",
  tagline:
    "I design, build and optimize enterprise web applications and backend services — from clean .NET APIs to Angular front ends and the cloud they run on.",
  location: "Batticaloa, Sri Lanka",
  email: "snavalogithan@gmail.com",
  // WhatsApp number in international format without "+" or spaces, e.g. "94752795377".
  // Left empty so your phone number isn't published; fill it in to show a WhatsApp button.
  whatsapp: "",
  resumeUrl: "/resume.pdf", // file lives in /public — set to "" to hide the button
  status: "Open to opportunities",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/navalogithan-somasekaram/" },
    { label: "GitHub", url: "https://github.com/navalo" },
  ],
};

export const summary = [
  "Senior Software Engineer with 6+ years of experience designing, developing, maintaining and optimizing enterprise web applications and backend services.",
  "I build C# and ASP.NET Core Web APIs on modern .NET with Entity Framework Core and Microsoft SQL Server (complex T-SQL and stored procedures), paired with JavaScript/TypeScript front ends in Angular. I integrate systems through REST APIs and microservices, and I'm comfortable in production — troubleshooting complex issues and getting to the root cause.",
  "Day to day I work in Visual Studio with Git and Azure DevOps branching and pull-request workflows. Microsoft Certified: Azure Fundamentals (AZ-900), with hands-on experience of Azure Functions, Key Vault and Application Insights.",
];

export const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "~30%", label: "Faster booking API" },
  { value: "AZ-900", label: "Azure Certified" },
];

export const competencies = [
  "Clean Architecture",
  "SOLID & OOP",
  "Design Patterns",
  "REST & Microservices",
  "Performance Tuning",
  "Root-Cause Analysis",
  "Vertical Slice Architecture",
  "CQRS",
  "Code Reviews",
  "Unit & Integration Testing",
  "Agile Delivery",
  "Technical Documentation",
];

// Each item's logo and brand color come from components/techIcons.tsx (matched by name).
export const techStack: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "SQL / T-SQL"],
  },
  {
    title: ".NET Ecosystem",
    items: [".NET 8", ".NET Core", "ASP.NET Core Web API", "Entity Framework Core", "LINQ", "Dependency Injection", "Middleware"],
  },
  {
    title: "Integration & Services",
    items: ["RESTful APIs", "Microservices", "RabbitMQ", "Node.js", "NestJS", "Web Services"],
  },
  {
    title: "Databases",
    items: ["SQL Server", "MySQL", "Stored Procedures", "Query Optimization", "MongoDB", "Redis", "Firebase"],
  },
  {
    title: "Cloud",
    items: ["Microsoft Azure", "Azure Functions", "Azure Key Vault", "Application Insights", "AWS", "Google Cloud (GCP)"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "Angular Material", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Firebase Realtime Database"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Azure DevOps", "GitHub", "CI/CD", "Visual Studio", "VS Code", "Postman", "Jira"],
  },
  {
    title: "Testing",
    items: ["xUnit", "Mocking", "Debugging"],
  },
];

export const experience: {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  tech: string[];
}[] = [
  {
    role: "Software Development Engineer",
    company: "BCS Technology International Pty Ltd",
    period: "Feb 2025 – Present",
    current: true,
    points: [
      "Develop and maintain backend APIs and service integrations for a low-cost airline's digital-commerce platform, integrating with Navitaire booking services.",
      "Provide production support for live booking systems — troubleshooting complex application and third-party integration issues and delivering maintainable fixes.",
      "Improved the performance of a booking API by ~30% through profiling and targeted optimization.",
      "Implement asynchronous, service-to-service workflows with RabbitMQ in a microservices architecture.",
      "Contribute to code reviews, technical design discussions and documentation in an Agile team.",
    ],
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "AWS", "Navitaire", "RabbitMQ", "Microservices", "Redis"],
  },
  {
    role: "Software Engineer",
    company: "Code2Futures Pvt Ltd",
    period: "Dec 2023 – Jan 2025",
    points: [
      "Designed and developed an investment platform with C#, .NET and ASP.NET Core Web API — controllers, application services and endpoints.",
      "Built data access with Entity Framework Core and SQL Server, writing and optimizing complex T-SQL queries and stored procedures.",
      "Built RESTful APIs and integrated them with an Angular/TypeScript front end.",
      "Worked with Azure Functions, Key Vault (secrets) and Application Insights (monitoring & diagnostics).",
      "Wrote automated tests with xUnit using mocking to isolate dependencies.",
      "Built the Kural mobile app with Flutter and Firebase Realtime Database.",
    ],
    tech: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Angular", "Azure", "Flutter", "Firebase"],
  },
  {
    role: "Software Engineer",
    company: "Kochasoft Pvt Ltd",
    period: "Jun 2020 – Dec 2023",
    points: [
      "Led development of a corporate Learning Management System with an Angular front end and Node.js backend services.",
      "Designed REST APIs and microservices for enrollment, assessments, payments and evaluation on MongoDB.",
      "Resolved production issues and improved front-end performance through a modular, reusable component architecture.",
      "Deployed and managed hosting and database services on Google Cloud Platform.",
      "Built a Microsoft LMS for running Microsoft quizzes using ASP.NET pages and SQL Server.",
    ],
    tech: ["Angular", "TypeScript", "JavaScript", "Node.js", "MongoDB", "GCP", "C#", "ASP.NET", "SQL Server"],
  },
];

export const projects: {
  title: string;
  subtitle: string;
  company?: string; // leave out for personal projects
  kind?: string; // label in the details window, defaults to "Company Project"
  summary: string;
  details: string[];
  tags: string[];
  repo?: string;
  demo?: string;
}[] = [
  {
    title: "RetailCore POS & Inventory",
    kind: "Personal Project · In Progress",
    subtitle: "ERP & point-of-sale for local retail shops",
    summary:
      "An ERP and point-of-sale system I'm building for local retail shops, bringing sales, inventory, purchasing and reporting into one platform.",
    details: [
      "Covers the day-to-day running of a shop: POS billing, returns, customer credit, stock control, purchasing, expenses and reports.",
      "ASP.NET Core Web API built on Clean Architecture, with Domain, Application, Infrastructure and API layers and dependencies pointing inward.",
      "Inside the Application layer, each feature is a vertical slice with its own commands, queries, validators and handlers (CQRS with MediatR).",
      "SQL Server with Entity Framework Core, plus stock locking and a full audit trail to keep inventory accurate.",
      "React, TypeScript and Tailwind CSS front end with fast, searchable POS screens and dashboards for sales and stock.",
      "Secured with JWT authentication, role-based permissions and rate limiting, and shipped with Docker.",
    ],
    tags: ["C#", "TypeScript", "React", "ASP.NET Core Web API", "SQL Server", "Clean Architecture", "Vertical Slices", "EF Core", "MediatR", "Tailwind CSS", "Docker"],
  },
  {
    title: "Airline Booking System",
    subtitle: "Low-cost airline booking platform",
    company: "BCS Technology",
    summary:
      "A booking system built for a low-cost airline, letting customers search, book and manage flights. It runs on a Next.js front end and Node.js microservices integrated with Navitaire.",
    details: [
      "Built booking flows with Next.js, TypeScript and Tailwind CSS on top of Node.js backend services.",
      "Integrated with Navitaire booking services for availability, pricing and reservations.",
      "Designed event-driven microservices that communicate asynchronously through RabbitMQ.",
      "Used Redis caching to cut response times and reduce load on downstream services.",
      "Profiled and optimized a booking API for roughly 30% better performance.",
      "Ran the services on AWS and provided production support with root-cause analysis.",
    ],
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "AWS", "Navitaire", "RabbitMQ", "Microservices", "Redis"],
  },
  {
    title: "Investment Platform",
    subtitle: "Enterprise .NET web application",
    company: "Code2Futures",
    summary:
      "An investment platform built on ASP.NET Core Web API and SQL Server with an Angular front end, hosted on Azure.",
    details: [
      "ASP.NET Core Web API using modern C# — records, pattern matching, LINQ, async/await.",
      "Entity Framework Core data access with tuned T-SQL and stored procedures.",
      "Azure Functions, Key Vault for secrets and Application Insights for diagnostics.",
      "Automated test suites with xUnit.",
    ],
    tags: ["C#", ".NET", "EF Core", "SQL Server", "Angular", "Azure"],
  },
  {
    title: "Kural App",
    company: "Code2Futures",
    subtitle: "Cross-platform mobile app",
    summary:
      "A cross-platform mobile app built with Flutter, using Firebase Realtime Database to keep data in sync across devices instantly.",
    details: [
      "Built a single Flutter codebase that runs on both Android and iOS.",
      "Used Firebase Realtime Database for live data updates without manual refreshes.",
      "Designed a clean, responsive mobile interface with reusable Flutter widgets.",
    ],
    tags: ["Flutter", "Dart", "Firebase Realtime Database"],
  },
  {
    title: "Corporate LMS",
    subtitle: "Learning Management System",
    company: "Kochasoft",
    summary:
      "A corporate learning platform covering enrollment, assessments, payments and evaluation — which I led from the front end to the services.",
    details: [
      "Led development of the Angular front end and Node.js backend services.",
      "Microservices for enrollment, assessments, payments and evaluation.",
      "MongoDB as the primary data store.",
      "Hosting and databases deployed on Google Cloud Platform.",
    ],
    tags: ["Angular", "TypeScript", "JavaScript", "Node.js", "MongoDB", "GCP"],
  },
  {
    title: "Microsoft LMS",
    company: "Kochasoft",
    subtitle: "Quiz & assessment platform",
    summary:
      "A learning management system used mainly to run Microsoft quizzes, giving learners a simple way to take assessments and track their results.",
    details: [
      "Built the web interface with ASP.NET pages for creating, taking and reviewing quizzes.",
      "Stored questions, answers, attempts and scores in a SQL Server database.",
      "Wrote parameterized SQL queries against SQL Server for fast, reliable data access.",
      "Focused on a straightforward quiz flow so learners can concentrate on the content.",
    ],
    tags: ["C#", "ASP.NET", "SQL Server", "SQL"],
  },
  {
    title: "Pharmacy Management System",
    company: "Software Engineering Academy",
    kind: "Internship · Team Project",
    subtitle: "Windows desktop app for pharmacies",
    summary:
      "A Windows desktop application my team and I built during my internship, bringing medicine inventory, sales and billing together in one place.",
    details: [
      "Built as a team project during my internship at Software Engineering Academy.",
      "Developed the desktop interface in C# with Windows Forms (WinForms).",
      "Stored data in SQL Server, with business logic in stored procedures for consistent, efficient queries.",
      "Tracks medicine stock, batches and expiry dates to reduce waste and stock-outs.",
      "Handles sales and billing, with records of every transaction.",
      "Manages suppliers and purchases, with reports to support day-to-day decisions.",
      "Gave me hands-on experience with teamwork and the full development cycle.",
    ],
    tags: ["C#", "WinForms", "SQL Server", "Stored Procedures"],
  },
];

export const education = [
  {
    title: "Bachelor of Information Technology (BIT)",
    org: "University of Moratuwa, Sri Lanka",
    period: "2018 – 2021",
    description: "Foundations in software engineering, programming, databases and systems.",
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    org: "Microsoft",
    period: "December 2021",
  },
];

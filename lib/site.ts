/**
 * Single source of truth for all site content.
 * Edit this file to update copy, links and projects — the components only render it.
 */

export const profile = {
  name: "Mark Milan Szedlak",
  firstName: "Mark",
  preferredName: "Milan",
  surname: "Szedlak",
  role: "Software Engineer",
  focus: "Cloud · Robotics",
  location: "Manchester, UK",
  email: "milanszedlak@gmail.com",
  headshot: "/milan-headshot.jpeg",
  cv: "/mark-milan-szedlak-cv.pdf",
  bio: "Full-stack software engineer with four years of industry experience at Fujitsu UK through a degree apprenticeship. I build scalable, cloud-native systems in C#, .NET and Azure — and I'm now pointing that experience at robotics.",
} as const;

export const socials = {
  github: "https://github.com/milanszedlak",
  linkedin: "https://www.linkedin.com/in/milan-szedlak/",
} as const;

export const stats = [
  { value: "4", label: "Years in industry" },
  { value: "3", label: "Azure certifications" },
  { value: "2", label: "Degrees — BSc & MSc" },
] as const;

export const objectives = [
  {
    title: "Cloud robotics",
    body: "Connecting robots to scalable cloud back-ends for telemetry, fleet management and remote monitoring.",
  },
  {
    title: "Reliable autonomy",
    body: "Bringing CI/CD, testing and DevOps discipline to robotic software so it ships as safely as enterprise code.",
  },
  {
    title: "Applied machine learning",
    body: "Deploying perception and decision models from Azure Machine Learning onto real hardware at the edge.",
  },
] as const;

export const bioParagraphs = [
  "I'm a software engineer who learned the craft on the job. Through a four-year degree apprenticeship I combined study at Manchester Metropolitan University with building full-stack, cloud-based software at Fujitsu UK — graduating with a BSc in Digital & Technology Solutions in May 2026.",
  "Day to day that meant C#, .NET, Azure and Elasticsearch, keeping CI/CD pipelines running in Azure DevOps and administering Confluence for teams across the business.",
  "I'm now studying for an MSc in Robotics at the University of Manchester, taking that engineering discipline into systems that sense and act in the real world. Outside of work you'll find me tinkering with my Proxmox home lab or playing in pool tournaments.",
] as const;

export const quickFacts = [
  { label: "Currently", value: "MSc Robotics, University of Manchester" },
  { label: "Experience", value: "Software Engineer, Fujitsu UK" },
  { label: "Graduated", value: "BSc (Hons), Manchester Met — 2026" },
  { label: "Focus", value: "Cloud platforms & robotic software" },
] as const;

export const careerGoal =
  "My goal is a robotics software role where cloud infrastructure meets physical systems — building the platforms that let autonomous machines be deployed, monitored and improved at scale.";

export const skillGroups = [
  { title: "Languages", items: ["C#", ".NET 9", "Java", "Python", "SQL"] },
  {
    title: "Cloud & Data",
    items: [
      "Microsoft Azure",
      "Azure Cosmos DB",
      "Azure Machine Learning",
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Azure DevOps",
      "CI/CD pipelines",
      "Cloud networking",
      "Cloud security",
      "Virtualisation",
      "Proxmox",
    ],
  },
  {
    title: "Ways of working",
    items: ["Agile / Scrum", "Confluence administration", "Technical documentation", "Cross-functional delivery"],
  },
] as const;

export const certifications = [
  { code: "AZ-900", name: "Azure Fundamentals" },
  { code: "AI-900", name: "Azure AI Fundamentals" },
  { code: "DP-900", name: "Azure Data Fundamentals" },
] as const;

export type ProjectVisual = "robot" | "homelab" | "search" | "pipeline";

export type Project = {
  index: string;
  title: string;
  context: string;
  summary: string;
  tags: readonly string[];
  visual: ProjectVisual;
  caption: string;
  links: readonly { label: string; href: string }[];
};

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "Robotic Systems Design Project",
    context: "MSc Robotics · University of Manchester",
    summary:
      "Team project designing, integrating and testing an autonomous mobile robot — from system architecture and ROS 2 software through to a live demonstration.",
    tags: ["ROS 2", "Python", "Systems design", "Teamwork"],
    visual: "robot",
    caption: "Sense → plan → act loop of the mobile robot.",
    links: [
      // TODO: point these at the real repository and report.
      { label: "Repository", href: "https://github.com/milanszedlak" },
      { label: "Report", href: "https://github.com/milanszedlak" },
    ],
  },
  {
    index: "02",
    title: "Proxmox Home Lab",
    context: "Personal project",
    summary:
      "A self-hosted Proxmox cluster running virtual machines and containers that automate my home and everyday tasks — my sandbox for networking, security and infrastructure-as-code.",
    tags: ["Proxmox", "Virtualisation", "Networking", "Home automation"],
    visual: "homelab",
    caption: "Hypervisor hosting VMs and containers on an isolated network.",
    links: [{ label: "Repository", href: "https://github.com/milanszedlak" }],
  },
  {
    index: "03",
    title: "Enterprise Search Platform",
    context: "Fujitsu UK · 2022 — present",
    summary:
      "Full-stack features for an Azure-hosted search solution — C# / .NET services indexing content into Elasticsearch and exposing fast, relevant search to users.",
    tags: ["C#", ".NET", "Azure", "Elasticsearch"],
    visual: "search",
    caption: "Content is indexed, ranked and served through an API.",
    links: [
      { label: "Elasticsearch docs", href: "https://www.elastic.co/docs" },
      { label: "Fujitsu UK", href: "https://www.fujitsu.com/uk/" },
    ],
  },
  {
    index: "04",
    title: "CI/CD & Confluence Platform",
    context: "Fujitsu UK · DevOps",
    summary:
      "Supporting build-and-release pipelines in Azure DevOps and administering Confluence — planning upgrades and keeping a platform used across teams stable and available.",
    tags: ["Azure DevOps", "CI/CD", "Confluence", "Reliability"],
    visual: "pipeline",
    caption: "Every commit flows through build, test and release stages.",
    links: [
      { label: "Azure Pipelines", href: "https://learn.microsoft.com/azure/devops/pipelines/" },
      { label: "Confluence", href: "https://www.atlassian.com/software/confluence" },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Fujitsu UK Ltd",
    period: "Sept 2022 — Present",
    points: [
      "Full-stack development with C#, .NET, Azure and Elasticsearch in an Agile team.",
      "Confluence administration — upgrades, stability and availability across teams.",
      "CI/CD pipelines and cloud deployments through Azure DevOps.",
    ],
  },
  {
    role: "Hygiene Operative",
    org: "Fosters Bakery",
    period: "Aug 2021 — May 2022",
    points: [
      "Delivered time-critical tasks to strict quality standards.",
      "Communicated effectively within a multilingual team.",
    ],
  },
] as const;

export const education = [
  {
    // TODO: confirm dates / title for the MSc.
    title: "MSc Robotics",
    org: "University of Manchester",
    period: "2026 — Present",
  },
  {
    title: "BSc (Hons) Digital & Technology Solutions — Software Engineer",
    org: "Manchester Metropolitan University · Degree apprenticeship",
    period: "Sept 2022 — May 2026",
  },
  {
    title: "A-Levels — Computer Science, Maths, Physics",
    org: "Barnsley Sixth Form College",
    period: "2020 — 2022",
  },
] as const;

export const interests = [
  { title: "Home labbing", body: "Automating my house and routines on a Proxmox server." },
  { title: "Competitive pool", body: "MMU Pool Society and university / open tournaments." },
] as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

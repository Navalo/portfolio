import type { IconType } from "react-icons";
import {
  SiDotnet, SiRabbitmq, SiNodedotjs, SiNestjs, SiMongodb, SiMysql, SiRedis, SiFlutter, SiDart, SiReact, SiDocker, SiTailwindcss, SiFirebase, SiGooglecloud, SiAngular,
  SiNextdotjs, SiHtml5, SiCss, SiGit, SiGithub, SiPostman, SiJira, SiTypescript, SiJavascript, SiMui,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { VscAzure, VscAzureDevops, VscVscode } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  TbBrandCSharp, TbApi, TbBraces, TbPlugConnected, TbDatabase, TbHierarchy3, TbLayersLinked, TbKey,
  TbChartLine, TbTestPipe, TbBug, TbInfinity, TbSql, TbFilter, TbTopologyStar3, TbBolt,
  TbDatabaseSearch, TbSchema, TbWorldWww, TbCode, TbMask, TbStack2, TbArrowsShuffle,
  TbCloud, TbTool, TbAppWindow, TbDeviceMobile, TbLayoutColumns, TbHexagons, TbRoute, TbLayoutDashboard,
} from "react-icons/tb";

type TechIcon = { icon: IconType; color: string };

// Name (as written in data/portfolio.ts) → logo + brand color.
const icons: Record<string, TechIcon> = {
  // Languages
  "C#": { icon: TbBrandCSharp, color: "#a179dc" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "SQL / T-SQL": { icon: TbSql, color: "#e38c00" },
  // .NET
  ".NET 8": { icon: SiDotnet, color: "#8f6bff" },
  ".NET": { icon: SiDotnet, color: "#8f6bff" },
  ".NET Core": { icon: SiDotnet, color: "#8f6bff" },
  WinForms: { icon: TbAppWindow, color: "#0078D4" },
  "ASP.NET": { icon: SiDotnet, color: "#8f6bff" },
  "ASP.NET Core": { icon: SiDotnet, color: "#8f6bff" },
  "ASP.NET Core Web API": { icon: TbApi, color: "#a78bfa" },
  "Entity Framework Core": { icon: TbDatabase, color: "#a179dc" },
  "EF Core": { icon: TbDatabase, color: "#a179dc" },
  LINQ: { icon: TbFilter, color: "#c084fc" },
  "Dependency Injection": { icon: TbPlugConnected, color: "#22d3ee" },
  Middleware: { icon: TbLayersLinked, color: "#f472b6" },
  // Integration
  "RESTful APIs": { icon: TbApi, color: "#34d399" },
  Microservices: { icon: TbTopologyStar3, color: "#22d3ee" },
  RabbitMQ: { icon: SiRabbitmq, color: "#FF6600" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Web Services": { icon: TbWorldWww, color: "#60a5fa" },
  Navitaire: { icon: TbArrowsShuffle, color: "#38bdf8" },
  // Databases
  SQL: { icon: TbSql, color: "#e38c00" },
  "SQL Server": { icon: DiMsqlServer, color: "#CC2927" },
  "Stored Procedures": { icon: TbSchema, color: "#f59e0b" },
  "Query Optimization": { icon: TbDatabaseSearch, color: "#34d399" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  // Cloud
  "Microsoft Azure": { icon: VscAzure, color: "#0089D6" },
  Azure: { icon: VscAzure, color: "#0089D6" },
  "Azure Functions": { icon: TbBolt, color: "#f5c518" },
  "Azure Key Vault": { icon: TbKey, color: "#0089D6" },
  "Application Insights": { icon: TbChartLine, color: "#a78bfa" },
  AWS: { icon: FaAws, color: "#FF9900" },
  "Google Cloud (GCP)": { icon: SiGooglecloud, color: "#4285F4" },
  GCP: { icon: SiGooglecloud, color: "#4285F4" },
  // Frontend
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  React: { icon: SiReact, color: "#61DAFB" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  "Angular Material": { icon: SiMui, color: "#f06292" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  // Mobile
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Dart: { icon: SiDart, color: "#0175C2" },
  "Firebase Realtime Database": { icon: SiFirebase, color: "#FFCA28" },
  // DevOps & tools
  Docker: { icon: SiDocker, color: "#2496ED" },
  // Architecture
  "Clean Architecture": { icon: TbHexagons, color: "#c084fc" },
  "Vertical Slices": { icon: TbLayoutColumns, color: "#22d3ee" },
  MediatR: { icon: TbRoute, color: "#f472b6" },
  Git: { icon: SiGit, color: "#F05032" },
  "Azure DevOps": { icon: VscAzureDevops, color: "#0078D7" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  "CI/CD": { icon: TbInfinity, color: "#22d3ee" },
  "Visual Studio": { icon: BiLogoVisualStudio, color: "#a074c4" },
  "VS Code": { icon: VscVscode, color: "#23a8f2" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Jira: { icon: SiJira, color: "#2684FF" },
  // Testing
  xUnit: { icon: TbTestPipe, color: "#5c9df5" },
  Mocking: { icon: TbMask, color: "#f472b6" },
  Debugging: { icon: TbBug, color: "#f87171" },
};

const fallback: TechIcon = { icon: TbCode, color: "#c084fc" };

export function techIcon(name: string): TechIcon {
  return icons[name] ?? fallback;
}

// Icons for the category headers.
export const categoryIcons: Record<string, IconType> = {
  Languages: TbBraces,
  ".NET Ecosystem": SiDotnet,
  "Integration & Services": TbHierarchy3,
  Databases: TbDatabase,
  Cloud: TbCloud,
  Frontend: TbLayoutDashboard,
  Mobile: TbDeviceMobile,
  "DevOps & Tools": TbTool,
  Testing: TbBug,
};
export const defaultCategoryIcon = TbStack2;

export function TechPill({ name, small }: { name: string; small?: boolean }) {
  const { icon: Icon, color } = techIcon(name);
  return (
    <span className={`tech-pill ${small ? "small" : ""}`}>
      <span className="tech-logo" style={{ color }}>
        <Icon aria-hidden />
      </span>
      <span>{name}</span>
    </span>
  );
}


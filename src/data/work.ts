import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Product Manager",
    company: "Glance Digital Pvt. Ltd.",
    period: "Jan 2026 – Present",
    region: "Bangalore, India",
    description:
      "Owns the News & Bundles product area end-to-end. Shipped the Value Prop Landing Page (swiping sessions 7%→23.4%, click rate 6%→19%), Bundle Explore Page V2 (+9% landing rate, +12% cards per session), and Full-Screen Immersive Video (~30K DAU, +33% cards per session). Defines scope, runs experiments, evaluates outcomes.",
    technologies: [
      "A/B Testing",
      "BigQuery",
      "Figma",
      "SQL",
      "Agile",
      "JIRA",
      "Experimentation",
      "AI Tools",
    ],
  },
  {
    title: "Associate Product Manager",
    company: "Glance Digital Pvt. Ltd.",
    period: "Jan 2025 – Dec 2025",
    region: "Bangalore, India",
    description:
      "Launched Bundles content format (+4% session depth); introduced Video Cards (+55% cards per session, 2.2→3.4 peak); drove Quiz Time to +122.5% CTR and +171% revenue per Mn impressions. Owned ambiguous problem spaces with full end-to-end accountability.",
    technologies: [
      "A/B Testing",
      "BigQuery",
      "SQL",
      "Figma",
      "Experimentation",
    ],
  },
  {
    title: "Senior Product Analyst",
    company: "Glance Digital Pvt. Ltd.",
    period: "Aug 2023 – Dec 2024",
    region: "Bangalore, India",
    description:
      "Built product dashboards (Fast Card V1 funnel, Novo Master, SHP 3P), wrote instrumentation requirements, and ran TOFU War Room cohort analysis to improve LEU→MEU user transition. Operated as a de facto APM — defining metrics, QA-ing instrumentation, and running SQL at scale.",
    technologies: [
      "SQL",
      "BigQuery",
      "Looker Studio",
      "Cohort Analysis",
      "Instrumentation",
    ],
  },
  {
    title: "Senior Product Analyst",
    company: "Chingari",
    period: "Jun 2022 – Jul 2023",
    region: "Bangalore, India",
    description:
      "Owned the Gari Quest feature revamp delivering a 3.5× revenue impact in a month. Built end‑to‑end automation of reports, alerts, and dashboards. Carried out extensive product feature analysis to drive 12% revenue growth in the first 4 weeks. Chingari is the world's first Web3 social media app (Solana blockchain) with 10M+ MAU.",
    technologies: [
      "SQL",
      "Python",
      "A/B Testing",
      "Product Analytics",
      "Dashboard Automation",
      "Web3",
    ],
  },
  {
    title: "Product Analyst 2",
    company: "Gameberry Labs",
    period: "Aug 2021 – May 2022",
    region: "Bangalore, India",
    description:
      "Built analytics around A/B tests on a gaming platform with 2.5Mn+ DAU and $25Mn ARR. Delivered actionable insights on player behavior, retention, and monetization to inform feature decisions.",
    technologies: [
      "SQL",
      "Python",
      "A/B Testing",
      "Retention Analysis",
      "Behavioral Analytics",
    ],
  },
  {
    title: "Business Analyst",
    company: "Shadowfax Technologies",
    period: "May 2019 – Jul 2021",
    region: "Bangalore, India",
    description:
      "Decreased debit percentage from 12% to 7% by implementing node‑level alert mechanisms. Reduced last‑mile partner costs per order from ₹18.5 to ₹17.3. Built BI dashboards and guided an analyst team to expand data insights for decision‑making. Automated payout processes for improved transparency.",
    technologies: [
      "SQL",
      "BI Dashboards",
      "Python",
      "Data Analysis",
      "Process Automation",
    ],
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys Limited",
    period: "Jan 2017 – Apr 2019",
    region: "Bangalore, India",
    description:
      "Worked in the Education Training & Assessment department for the Data Science and AI Automation team. Consulted on internal projects using R and Python for data science, EDA, and machine learning. Worked with Infosys Nia platforms — Nia Advanced ML (Skytree), Nia Automation, Nia Chatbot — and IBM Watson.",
    technologies: [
      "Python",
      "R",
      "Machine Learning",
      "IBM Watson",
      "Exploratory Data Analysis",
      "AI Automation",
    ],
  },
];

export type WorkItem = (typeof work)[number];


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
    title: "Associate Product Manager | Senior Product Analyst",
    company: "Glance Digital Pvt. Ltd.",
    period: "Aug 2023 – Present",
    region: "Bangalore, India",
    description:
      "Launched Bundles content format increasing session depth by 22% and swipe sessions by 8%. Drove 2× revenue per Mn impressions and +59% eCPM uplift via Quiz Time value prop. Boosted engagement through UI experiments yielding 8× fast card entries, +50% session depth, and 47% fewer dormant users. Improved LEU→MEU user transition by 3% via cohort analysis and TOFU funnel optimization.",
    technologies: [
      "SQL",
      "BigQuery",
      "Looker Studio",
      "A/B Testing",
      "Cohort Analysis",
      "Figma",
      "JIRA",
      "Agile",
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


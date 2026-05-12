import MixpanelIcon from '../assets/logos/Mixpanel-logo.svg?raw';
import MetabaseIcon from '../assets/logos/Metabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import SQLIcon from '../assets/logos/SQL-logo.svg?raw';
import GoogleAnalyticsIcon from '../assets/logos/GoogleAnalytics-logo.svg?raw';


export const projects = [
	{
		title: "Value Prop Landing Page — Glance News Tab",
		techStack: "Product Design • API Integration • A/B Testing • Figma",
		description: "Designed a unified discovery hub for India's News tab surfacing Bundles, Video Binge, People in Focus, and Fast Cards. Swiping sessions jumped from 7% → 23.4% (+17pp) and click rate from 6% → 19% (+13pp) by simplifying entry points to already-existing content.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: MixpanelIcon
	},
	{
		title: "Bundle Explore Page V2 — Personalized Discovery",
		techStack: "Personalization • A/B Testing • BigQuery • Figma",
		description: "Redesigned the Bundle explore surface with Trending, Curated Just for You, Bundle Preview, and Explore More sections. Achieved +9% landing rate vs V1, +10% sessions scrolling beyond first fold, +12% cards per session; curated section drove 46% of all clicks.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: GoogleAnalyticsIcon
	},
	{
		title: "Video Card Launch — Reducing Cognitive Load",
		techStack: "Content Format • Matching Logic • A/B Testing • Engagement Analytics",
		description: "Introduced video cards within Bundle feeds using existing content-matching logic to reduce text-heavy cognitive load. Cards per session increased ~55% (2.2 → 3.4 peak) with overall engagement up despite a slight article CTR dip — validated total engagement over single-metric optimization.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: SQLIcon
	},
	{
		title: "Bundles Content Format — Glance Digital",
		techStack: "A/B Testing • BigQuery • Looker Studio • Figma",
		description: "Defined Bundles as a user-intent–led, multi-format content unit to solve weak session continuity (~2 pieces/session). Drove 8 shipped experiments across format, discoverability, and video — delivering +4% session depth, +16% swiping sessions, and +17% cards per session.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: MetabaseIcon
	},
	{
		title: "Quiz Time Monetization — Glance Digital",
		techStack: "A/B Testing • SQL • Periscope • Behavioral Analytics",
		description: "Launched Quiz Time value proposition driving +122.5% CTR vs SHP, +171% revenue per Mn impressions, and +59% eCPM. Reduced ad requests/CTA by 32%. Identified automation gap as the scaling constraint and made the informed call to deprioritize.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: GoogleAnalyticsIcon
	},
	{
		title: "Gari Quest Feature Revamp — Chingari",
		techStack: "SQL • Python • Dashboard Automation • Web3",
		description: "Owned end‑to‑end revamp of the Gari Quest feature, delivering the correct value proposition to users. Achieved 3.5× revenue impact within a month of implementation.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: PosthogIcon
	},
	{
		title: "User Transition Funnel Optimization — Glance Digital",
		techStack: "Cohort Analysis • SQL • BigQuery • TOFU Funnel",
		description: "Improved LEU→MEU user transition rate by 3% through cohort analysis and TOFU funnel optimization, enabling targeted high‑impact content delivery to the right user segments.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: SQLIcon
	},
	{
		title: "Shipment BI Dashboards — Shadowfax",
		techStack: "SQL • BI Dashboards • Python • Process Automation",
		description: "Decreased debit percentage from 12% to 7% via node‑level alert mechanisms. Reduced last‑mile partner costs per order from ₹18.5 to ₹17.3 through data‑driven partner optimization.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: MetabaseIcon
	},
	{
		title: "A/B Testing Analytics — Gameberry Labs",
		techStack: "SQL • Python • Retention Analysis • Behavioral Analytics",
		description: "Built a comprehensive analytics layer around A/B tests for a 2.5Mn+ DAU gaming platform with $25Mn ARR, driving data‑informed feature decisions on player behavior and monetization.",
		ctaText: "Case Study →",
		ctaLink: "#",
		icon: PythonIcon
	},
	{
		title: "This Portfolio — Built with Claude Code",
		techStack: "Astro • Claude Code • Tailwind CSS • GitHub",
		description: "Designed and shipped this portfolio site using Claude Code as a development co-pilot. Used AI to scaffold components, write and debug Astro/TypeScript, and iterate on UI — compressing weeks of dev work into days. A practical example of using AI as a builder's multiplier.",
		ctaText: "View Source →",
		ctaLink: "https://github.com/abhisheksaxenainfy/my-portfolio",
		icon: MixpanelIcon
	},
];
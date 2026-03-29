export const studies = [
  {
    title: "Post Graduate Diploma in Data Science",
    institution: "International Institute of Information Technology Bangalore (IIIT-B)",
    description:
      "Intensive program covering statistical modeling, machine learning, data wrangling, and business analytics. Graduated with a GPA of 3.56/4 (2018–2019).",
    tags: [
      "Machine Learning",
      "Statistics",
      "Python",
      "Data Wrangling",
      "Business Analytics",
    ],
  },
  {
    title: "B.E. in Mechanical Engineering",
    institution: "RNS Institute of Technology, Bangalore",
    description:
      "Strong foundation in engineering principles, mathematics, and analytical problem-solving. Graduated with 67.17% (2012–2016).",
    tags: [
      "Engineering Mathematics",
      "Analytical Thinking",
      "Problem Solving",
    ],
  },
];

export type StudyItem = (typeof studies)[number];


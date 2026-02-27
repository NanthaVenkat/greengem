export const careerJobs = [
  {
    slug: "director-operations",
    title: "Director Operations",
    posted: "Posted 2 days ago. 1 seat available",
    summary:
      "We seek a Director of Operations to lead high-performing teams, drive process improvements, and enhance customer experience. The role involves managing 100+ reports, optimizing operations, and strategizing for business growth. 6-10 years of leadership experience and an MBA required.",
    country: "India",
    industry: "IT, Green Gem Energy & Office",
    responsibilities: [
      "To lead, motivate, and develop high performing teams within a time-sensitive and demanding environment in order to deliver on meeting the team’s KPIs.",
      "You will build and manage an organisation that operates with reliable operating standards.",
      "You will strengthen culture by example and be accountable for the delivery of results by your teams.",
      "You will interact and collaborate with Solar Square”s leadership, constantly improving our level of service to customers whether through exceeding on agreed service levels, suggesting improvements to support logic, or designing structures to best run our operations.",
      "You will own the customer experience through our resolution channels. You will be responsible for achieving overall satisfaction of our customers along with compliance.",
      "Leading and managing 6-9 direct reports and 100+ indirect reportees to offer the best Customer experience.",
      "Manage the administration and execution of the team’s goals, measurement of goal attainment, evolving and driving various sales processes involving alignment between multiple teams",
      "Strategizing and executing projects aligned with the company vision and setting timelines to reach those goals.",
      "Drives creation of quality initiatives, process change initiatives, and other Change SixSigma initiatives to enable the Functional Areas to meet and exceed Business Plan.",
      "Measures performance, provides feedback, and holds Operations Manager accountable for their performance and the performance of their lines of business.",
      "Takes proactive steps to ensure that best practices are shared across all departments and among the network.",
      "Works on improving process efficiency and setting up new processes required for operations.",
      "Setting the vision and direction of the team by managing individual and team performance expectations and goals.",
      "Monitoring real time service levels and schedule adherence.",
      "Exhibits sound business judgment, a proven ability to influence others, strong analytical skills, and a proven track record of taking ownership, leading data-driven analyses, and influencing results."
    ],
    responsibleSkill: [
      "6 -10 years of direct management experience, managing teams of 100+ reportees including leadership roles.",
      "We are looking for highly engaged people managers and you must be passionate about coaching and mentoring.",
      "MBA or other relevant advanced degree",
      "Experience working within a high-growth, technology company would be highly beneficial",
      "Proven ability to manage competing priorities simultaneously and drive projects to completion.",
      "Proven written and verbal communication skills, with a track record of presenting to senior management.",
      "Ability to handle changing priorities and use good judgment in stressful situations.",
      "Excellent communications skills with an ability to convey strategic direction to all levels within the organisation and senior leadership.",
      "Business process and system design experience.",
      "Proven history of complex program management and organisational change management",
      "Experience leading the development of department strategy prioritisation of deliverables and tasks.",
      "Able to operate successfully in a lean, fast-paced organisation, and to create a vision and organisation that can scale quickly."
    ]
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    posted: "Posted 2 days ago. 1 seat available",
    summary:
      "We are looking for a Project Manager to oversee solar PV projects, ensuring they stay on budget and schedule. The role involves managing stakeholders, coordinating teams, and handling project execution from start to finish. 7-10 years of experience in construction project management required.",
    country: "India",
    industry: "Solar EPC & Infrastructure",
    responsibilities: [
      "The Project Manager will be responsible for executing solar PV projects while maintaining budget and schedule.",
      "The position will manage and direct project management activities, act as liaison between client, stakeholders, engineers, contractors, third-party construction managers and other consultants during the execution phase of a project. This position will also be responsible for the coordination during the execution phase and close out of projects. This position may have little-to-full responsibility for projects in entitlement, design, and preconstruction.",
      "The candidate must deliver positive results and assume accountability for delivering projects on an approved schedule and on budget to maintain value and protect profitability.",
    ],
    responsibleSkill: [
      "7 to 10 years of experience or equivalent.Track record of achievement and career progression.",
      "Ability to travel 25 % with short overnight trips.",
      "Strong leadership, diplomatic and motivational skills including the ability to lead up, across and down the organization.",
      "Experience leading, motivating and managing various project and program team sizes, including internal and external resources, while holding the team accountable for performance.",
      "Successfully led and managed complex portfolios valued at $30 million.",
      "Demonstrated success in the Project Management function of a construction firm.",
      "Proven success managing subcontractors and developing and executing innovative project changes.",
      "Success developing cost to complete, costing and pricing Change Orders, and maximizing profits.",
      "Demonstrated ability to read, understand and interpret contract and insurance documents and forms, and make appropriate recommendations.",
      "Background in project start- up meetings, subcontractor and vendor buyouts, owner estimates, sub / vendor requisitions and cost to complete.",
      "Experience in successfully leading projects and programs to on - time, on - schedule and within budget close.",
      "Experience influencing and gaining buy -in from senior leadership, team members, and peers.",
      "Entrepreneurial with a well - rounded business perspective.",
      "Excellent teamwork, communication, and people skills are a must.",
      "Has a solid time management system and demonstrates excellent organizational skills.",
      "Working Knowledge of MS Word, Excel, Project, SharePoint, Wrike software with experience presenting to Senior Leadership.",
      "Demonstrated decisiveness in resolving project issues, making decisions, and identifying priorities."
    ]
  },
  {
    slug: "product-marketing-manager",
    title: "Product Marketing Manager",
    posted: "Posted 2 days ago. 1 seat available",
    summary:
      "We seek a Product Marketing Manager to drive marketing strategies, branding, and digital campaigns. The role involves content creation, market research, and coordinating trade shows. MBA with 5+ years of experience required.",
    country: "India",
    industry: "Marketing, Brand & Growth",
    responsibilities: [
      "Develop marketing implementation strategies and carry - out marketing initiatives to support rapid sales growth.",
      "Lead creative efforts such as writing, designing, managing and updating marketing collateral including producing articles, presentations, datasheets, press releases, newsletters, website, etc.and organize distribution of the same.",
      "Develop new advertising material and execute campaigns and plans.",
      "Manage relationships across all company departments to ensure seamless and consistent branding, marketing messaging and communications from a corporate marketing perspective.",
      "Plan, organize and execute company participation in and marketing strategy for industry trade shows, conferences, and events.",
      "Create social media communication strategy and implement actions to increase brand awareness and support overarching marketing campaigns and objectives through social media platforms.",
      "Engage in market research and analytics to capture industry trends, project pipeline, potential leads, and direct competitor analysis and apply intel to marketing strategies.",
      "Maintain marketing collateral, branded merchandising, advertising and media files.",
      "Create digital marketing strategies, including e- mail blasts, website updates, e - mail signature messaging, social media and advertisements to enact real - time campaigns."
    ],
    responsibleSkill: [
      "Self-motivated and capable of working independently.",
      "A team player and ability to build relationships.",
      "Detail and deadline oriented.",
      "Ability to prioritize multiple tasks and complete on a timely basis.",
      "Excellent planning and organizational skills.",
      "Creative, innovative and pro-active.",
      "We look for 5yrs of experience in the same field and educational qualification must be MBA."
    ]
  },
];

export function getCareerJobBySlug(slug) {
  return careerJobs.find((job) => job.slug === slug);
}

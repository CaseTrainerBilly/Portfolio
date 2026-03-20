export const projects = [
  {
    title: 'Recruitment Web App',
    description:
      'A full-stack recruitment platform built to streamline candidate pipelines, team collaboration, and hiring workflows.',
    longDescription:
      'This recruitment platform brings together candidate tracking, interview coordination, and internal collaboration in one place. It focuses on giving recruiters a faster way to review applicants, keep hiring teams aligned, and manage the process from first contact to offer stage.',
    image: '/Images/_Transparent-logo.png',
    link: 'https://casetrainerbilly.github.io/OverBuildRec/',
    slug: 'recruitment-web-app',
    accent: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    technologies: [
      { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Clerk', image: 'https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=format' },
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    imageSections: [
      {
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Hiring Dashboard',
        description:
          'The main dashboard gives recruiters a fast overview of live roles, candidate stages, and upcoming interview activity.',
        details: [
          'Clear pipeline summaries for active roles',
          'Quick visibility into interview scheduling',
          'Designed to reduce context switching for hiring teams',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Candidate Collaboration Flow',
        description:
          'This section focuses on internal collaboration, making it easier for recruiters and stakeholders to review feedback in one place.',
        details: [
          'Centralised comments and hiring notes',
          'Shared visibility across team members',
          'Better handoff between screening and interview stages',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Pipeline Management',
        description:
          'Each step of the process is structured to make candidate movement and status updates feel fast and predictable.',
        details: [
          'Simple movement between hiring stages',
          'Status tracking that stays readable at scale',
          'Built to support a smoother recruiter workflow',
        ],
      },
    ],
    github: 'https://github.com/CaseTrainerBilly/OverBuildRec',
    live: 'https://casetrainerbilly.github.io/OverBuildRec/',
  },
  {
    title: 'eBay Marketplace Scraper',
    description:
      'A research-focused scraper that captures eBay listings, pricing, seller details, and market signals for faster product analysis.',
    longDescription:
      'This project is designed to speed up marketplace research by collecting listing data from eBay search results and turning it into something easier to compare. It is set up to surface titles, prices, shipping costs, seller information, and useful patterns that help with resale, sourcing, or competitor research. The entry is ready for your exact repo, screenshots, and final tech stack once you share the attached project details.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://github.com/yourusername/ebay-scraper',
    slug: 'ebay-marketplace-scraper',
    accent: 'from-amber-500/30 via-orange-500/10 to-transparent',
    technologies: [
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'BeautifulSoup', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Pandas', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'CSV Export', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg' },
    ],
    gallery: [
      'https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    imageSections: [
      {
        image: 'https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Search Capture',
        description:
          'The scraper starts by targeting search result pages and collecting the core listing data needed for comparison.',
        details: [
          'Collects titles, prices, and listing URLs',
          'Designed for repeatable marketplace research',
          'Keeps the output focused on actionable listing data',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Listing Breakdown',
        description:
          'Each item can be enriched with extra information like shipping, seller details, and listing condition to improve decision making.',
        details: [
          'Adds context beyond headline pricing',
          'Makes product sourcing easier to compare',
          'Supports richer data analysis after collection',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Export and Analysis',
        description:
          'The final stage turns raw scraped data into something usable, ready for spreadsheets, reporting, or further automation.',
        details: [
          'Prepared for CSV or dataframe output',
          'Useful for resale, trend, or competitor research',
          'Easy to extend once your real project files are added',
        ],
      },
    ],
    github: 'https://github.com/yourusername/ebay-scraper',
    live: '',
  },
  {
    title: 'AI Analytics Dashboard',
    description:
      'An analytics experience that turns complex datasets into clear visual reporting and predictive insight.',
    longDescription:
      'This dashboard pairs machine learning-driven analysis with approachable visualisation so teams can move from raw data to decisions more quickly. It is built around real-time metrics, trend exploration, and a presentation layer that makes advanced reporting easier to consume.',
    image: 'https://picsum.photos/seed/project3/400/400',
    link: 'https://github.com/yourusername/project3',
    slug: 'project-3',
    accent: 'from-fuchsia-500/20 via-violet-500/10 to-transparent',
    technologies: [
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
    gallery: [
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    imageSections: [
      {
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Insight Overview',
        description:
          'The landing view is designed to surface the most important KPIs and trends without overwhelming the user.',
        details: [
          'High-level business metrics at a glance',
          'Visual priority on trend movement',
          'Built to support fast decision making',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Interactive Reporting',
        description:
          'Users can drill into the dataset through charts and filters that keep the dashboard flexible for different reporting needs.',
        details: [
          'Filterable charts and reporting slices',
          'Flexible enough for multiple stakeholder views',
          'Keeps complex data easier to read',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Predictive Layer',
        description:
          'A machine learning layer adds forward-looking insight so the dashboard is not limited to historical reporting alone.',
        details: [
          'Blends visualisation with prediction',
          'Adds forward-looking business context',
          'Connects analytics output to action',
        ],
      },
    ],
    github: 'https://github.com/yourusername/project-3',
    live: 'https://yourusername.github.io/project-3/',
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);

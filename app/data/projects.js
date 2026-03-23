export const projects = [
  {
    title: 'Recruitment Web App',
    description:
      'A full-stack recruitment platform built to streamline candidate pipelines, team collaboration, and hiring workflows.',
    longDescription:
      'This recruitment platform brings together candidate tracking, interview coordination, and internal collaboration in one place. It focuses on giving recruiters a faster way to review applicants, keep hiring teams aligned, and manage the process from first contact to offer stage.',
    image: '/Portfolio/Images/_Main square logo.png',
    link: 'https://github.com/CaseTrainerBilly/OverBuildRec',
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
    title: 'eBay Sold Items Research App',
    description:
      'A Flask app that uses a real Playwright Chromium session to research sold eBay listings, filter noisy results, calculate reseller metrics, and export the visible set to XLSX.',
    longDescription:
      'This app solves a practical resale research problem: standard HTTP scraping is unreliable on eBay, so the workflow opens a real Playwright-powered Chromium browser with a persistent profile and lets the user complete challenge pages once in a normal browser window. From there, the app searches sold items on eBay UK or US, filters irrelevant cards, applies reseller-oriented pricing assumptions, shows market metrics in a Flask UI, and exports the current result set to an XLSX file with embedded images.',
    image: '/Portfolio/Images/Ebay_Web.png',
    link: 'https://github.com/CaseTrainerBilly/ebay_playwright_app',
    slug: 'ebay-marketplace-scraper',
    accent: 'from-amber-500/30 via-orange-500/10 to-transparent',
    technologies: [
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Flask', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'Playwright', image: 'https://playwright.dev/img/playwright-logo.svg' },
      { name: 'Jinja', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    gallery: [
      'https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    imageSections: [
      {
        image: 'https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Persistent Browser Search Flow',
        description:
          'The app launches a real Chromium window with a saved Playwright profile so challenge pages can be cleared once and later searches feel much more reliable.',
        details: [
          'Uses headful Playwright with a persistent browser profile',
          'Supports sold listing searches on eBay UK and eBay US',
          'Lets the user recover from challenge pages in a real browser session',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Filtering and Pricing Logic',
        description:
          'Raw sold cards are cleaned and filtered, then reseller-focused calculations estimate average pricing, spread, ROI, and a recommended max buy price.',
        details: [
          'Removes mismatched or irrelevant sold listings',
          'Applies UK-specific buyer-protection and payout assumptions',
          'Calculates median, average, spread, ROI, and buy ceiling guidance',
        ],
      },
      {
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Flask UI and XLSX Export',
        description:
          'The Flask interface shows cached result sets, item detail pages, and an XLSX export flow that reuses the current search without rerunning the scraper.',
        details: [
          'Renders results in server-side Flask templates with Jinja',
          'Includes item-level market context from cached results',
          'Exports spreadsheets with embedded images from the current visible result set',
        ],
      },
    ],
    github: 'https://github.com/CaseTrainerBilly/ebay_playwright_app',
    live: 'https://casetrainerbilly.github.io/ebay_playwright_app/',
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

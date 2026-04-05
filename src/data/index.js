export const PERSONAL = {
  name: 'Adarsh Tiwari',
  title: 'Software Engineer',
  company: 'Automaton AI Infosystem Pvt. Ltd.',
  email: 'adarshtiwari2at@gmail.com',
  phone: '+91 77392 70766',
  linkedin: 'https://linkedin.com/in/adarsh-tiwari',
  github: 'https://github.com/adarshtiwari',
  summary:
    "I'm a passionate Software Engineer specializing in building beautiful, high-performance React and React Native applications. With a strong foundation in TypeScript and modern React patterns, I design reusable component architectures that scale effortlessly.",
  summary2:
    "I thrive at the intersection of AI technologies and frontend engineering — collaborating with backend and ML teams to ship products that make real-world impact.",
}

export const STATS = [
  { value: '2.5+', label: 'Years Exp.' },
  { value: '10+',   label: 'Projects Shipped' },
  { value: '14+',  label: 'Technologies' },
]

export const TYPED_ROLES = [
  'React.js Expert',
  'Frontend Developer',
  'React Native Dev',
  'UI/UX Enthusiast',
  'Full-Stack Developer',
]

export const SKILLS = [
  { label: 'JavaScript',        icon: '⚡', color: '#f7df1e' },
  { label: 'TypeScript',        icon: '🔷', color: '#3178c6' },
  { label: 'React.js',          icon: '⚛️', color: '#61dafb' },
  { label: 'Next.js',           icon: '▲',  color: '#a8b3cf' },
  { label: 'React Native',      icon: '📱', color: '#00d8ff' },
  { label: 'HTML / CSS',        icon: '🎨', color: '#e34f26' },
  { label: 'Material UI',       icon: '🧊', color: '#007fff' },
  { label: 'Bootstrap',         icon: '🅱️', color: '#7952b3' },
  { label: 'Redux',             icon: '🔄', color: '#764abc' },
  { label: 'Context API',       icon: '🌐', color: '#61dafb' },
  { label: 'Python',            icon: '🐍', color: '#3776ab' },
  { label: 'Flask APIs',        icon: '🌶️', color: '#ff6b6b' },
  { label: 'Docker',            icon: '🐳', color: '#2496ed' },
  { label: 'Git / GitHub',      icon: '🔀', color: '#f05032' },
  { label: 'REST API',          icon: '🔗', color: '#00b4d8' },
  { label: 'Postman',           icon: '📮', color: '#ff6c37' },
  { label: 'Agile / Scrum',     icon: '🏃', color: '#4caf50' },
  { label: 'Performance Optim.', icon: '⚡', color: '#ffd600' },
]

export const SKILL_BARS = [
  { label: 'Frontend Architecture', pct: 92, color: '#00e5ff' },
  { label: 'React Native Mobile',   pct: 85, color: '#7c4dff' },
  { label: 'TypeScript & Patterns', pct: 88, color: '#ff4081' },
  { label: 'REST API Integration',  pct: 90, color: '#4caf50' },
  { label: 'Performance Optim.',    pct: 83, color: '#ff9800' },
  { label: 'Python / Flask',        pct: 70, color: '#e91e63' },
]

export const EXPERIENCE = {
  role: 'Software Engineer',
  company: 'Automaton AI Infosystem Pvt. Ltd.',
  period: 'Jan 2024 – Present',
  type: 'Full-Time',
  icon: '🤖',
  description:
    'Building production-ready React & React Native applications, integrating AI/ML features, and collaborating cross-functionally to deliver quality software.',
  responsibilities: [
    {
      icon: '🎨',
      text: 'Built and maintained multiple production-ready React and React Native screens, improving UI consistency and reducing post-release defects.',
    },
    {
      icon: '🏗️',
      text: 'Designed reusable component architecture using TypeScript, reducing code duplication and improving feature delivery speed.',
    },
    {
      icon: '🔗',
      text: 'Integrated REST APIs with proper loading states, error handling, and basic caching strategies to improve stability and user experience.',
    },
    {
      icon: '🤝',
      text: 'Worked closely with backend and AI teams to integrate document processing, analytics, and ML-driven features into frontend applications.',
    },
    {
      icon: '✅',
      text: 'Implemented frontend-side data validation and request handling to reduce invalid API calls and backend load.',
    },
    {
      icon: '⚡',
      text: 'Improved mobile performance using memoization, optimized component re-rendering, and efficient list rendering techniques.',
    },
  ],
}

export const PROJECTS = [
  {
    title: 'DocuGPT',
    subtitle: 'Web + Mobile · In-house AI Product',
    desc: 'Full-stack AI-powered document analysis platform. Built React & React Native apps for uploading and analyzing documents via GPT-based APIs. Implemented structured state management and reusable UI components handling complex async workflows.',
    highlight: 'Automated document summarization & key data extraction',
    tags: ['React', 'React Native', 'GPT APIs', 'TypeScript', 'Redux'],
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accentColor: '#764ba2',
  },
  {
    title: 'Machine Monitoring Dashboard',
    subtitle: 'Client: Apollo Tyres · Real-Time',
    desc: 'Real-time monitoring dashboard tracking machine alerts, operational status, and production performance metrics at manufacturing plants. Dynamic charts and visual indicators for faster troubleshooting. Integrated with Flask + MongoDB backend.',
    highlight: 'Live data visualization across manufacturing plants',
    tags: ['React', 'Material UI', 'Flask', 'MongoDB', 'Real-Time'],
    icon: '🏭',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accentColor: '#f5576c',
  },
  {
    title: 'Tyre Inspection App',
    subtitle: 'Client: Apollo Tyres · Mobile',
    desc: 'Full-featured React Native mobile app with camera integration and API-based image analysis for on-site tyre inspection. Designed intuitive flows for technicians to capture, review, and submit inspection data directly from factory floors.',
    highlight: 'On-site inspection with AI-powered image analysis',
    tags: ['React Native', 'Camera API', 'Image Analysis', 'Performance'],
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    accentColor: '#00f2fe',
  },
    {
    title: 'Weather App',
    subtitle: 'API Integration · Real-Time Data',
    desc: 'Responsive weather application fetching real-time data using public weather APIs. Displays temperature, humidity, wind speed, and forecast details with dynamic UI updates based on location search.',
    highlight: 'Real-time weather updates with location-based search',
    tags: ['React', 'API Integration', 'JavaScript', 'CSS'],
    icon: '🌦️',
    gradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    accentColor: '#185a9d',
  },
  {
    title: 'Meal Finder',
    subtitle: 'Food Recipe Explorer · API-Based',
    desc: 'Interactive recipe search application allowing users to explore meals by ingredients. Integrated third-party API to fetch meal details, instructions, and images with smooth UI rendering.',
    highlight: 'Search meals dynamically by ingredients',
    tags: ['React', 'API', 'JavaScript', 'UI/UX'],
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    accentColor: '#ff6b6b',
  },
  {
    title: 'Tic Tac Toe',
    subtitle: 'Game Logic · Interactive UI',
    desc: 'Classic Tic Tac Toe game with optimized state management and winner detection logic. Designed responsive UI with smooth user interactions and instant game state updates.',
    highlight: 'Efficient game logic with real-time state updates',
    tags: ['React', 'Game Logic', 'JavaScript', 'State Management'],
    icon: '❌',
    gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    accentColor: '#3f5efb',
  },
  {
    title: 'Calculator',
    subtitle: 'Utility App · Precision Handling',
    desc: 'Functional calculator supporting basic arithmetic operations with clean UI and precise input handling. Implemented efficient expression parsing and edge-case handling.',
    highlight: 'Accurate calculation with optimized input handling',
    tags: ['JavaScript', 'React', 'Logic Building', 'UI'],
    icon: '🧮',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    accentColor: '#f7971e',
  },
  {
    title: 'Expense Tracker',
    subtitle: 'Finance Management · Data Tracking',
    desc: 'Expense tracking application to manage income and expenses with real-time balance updates. Implemented local storage persistence and categorized transaction history.',
    highlight: 'Track income & expenses with persistent storage',
    tags: ['React', 'Local Storage', 'State Management', 'Finance'],
    icon: '💰',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    accentColor: '#11998e',
  },
  {
    title: 'Tender Management App',
    subtitle: 'Mobile · Business Workflow Automation',
    desc: 'React Native-based mobile application for managing tenders, including creation, tracking, and status updates. Implemented structured workflows for submitting and reviewing tenders with API integration and role-based access handling.',
    highlight: 'Streamlined tender lifecycle management on mobile',
    tags: ['React Native', 'API Integration', 'Workflow Management', 'TypeScript'],
    icon: '📄',
    gradient: 'linear-gradient(135deg, #667db6 0%, #0082c8 100%)',
    accentColor: '#0082c8',
  }
]

export const EDUCATION = {
  degree: "Bachelor's of Technology (CSE)",
  university: 'Kurukshetra University',
  period: '2019 – 2023',
  cgpa: '7.90',
  icon: '🎓',
}

export const CONTACT_LINKS = [
  {
    icon: '📧',
    label: 'Email',
    value: 'adarshtiwari2at@gmail.com',
    href: 'mailto:adarshtiwari2at@gmail.com',
    color: '#ff4081',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 77392 70766',
    href: 'tel:+917739270766',
    color: '#00e5ff',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/adarsh-tiwari',
    href: 'https://www.linkedin.com/in/adarsh-tiwari-859640249/',
    color: '#0077b5',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/adarshtiwari',
    href: 'https://github.com/aadi0608',
    color: '#a8b3cf',
  },
]

export const NAV_ITEMS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

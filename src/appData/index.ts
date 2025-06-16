// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'BroFessor',
    shortDescription:
      'A AI companion to help you study anything, anywhere in the best way ever, Conversational.',
    cover: '/brofessor.png',
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: 'Beta phase',
  },
  {
    priority: 2,
    title: 'nazoke',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'SynctechX heii',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
  // --- Software Development ---
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
    category: 'development',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
    category: 'development',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
    category: 'development',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
    category: 'development',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
    category: 'development',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
    category: 'development',
  },

  // --- Ethical Hacking ---
  {
    // icon: Terminal, // substitute with a hacking-related icon
    title: 'Vulnerability Assessment',
    shortDescription: 'Identifying and analyzing security weaknesses in systems and applications.',
    category: 'hacking',
  },
  {
    // icon: Bug, // substitute with a suitable bug or pentest icon
    title: 'Penetration Testing',
    shortDescription: 'Simulating cyberattacks to assess the strength of security defenses.',
    category: 'hacking',
  },
  {
    // icon: Lock, // substitute as needed
    title: 'Web App Security Testing',
    shortDescription:
      'Testing web applications for common security flaws like XSS and SQL injection.',
    category: 'hacking',
  },

  // --- Networking & Security ---
  {
    // icon: Network, // swap with router/switch icon
    title: 'Network Configuration',
    shortDescription: 'Designing and configuring secure and efficient network infrastructures.',
    category: 'networking',
  },
  {
    // icon: ShieldCheckIcon, // placeholder for a firewall/security icon
    title: 'Firewall Setup & Hardening',
    shortDescription: 'Implementing firewall rules to protect networks from unauthorized access.',
    category: 'networking',
  },
  {
    // icon: WifiIcon, // adjust icon to match
    title: 'Secure Wi-Fi Deployment',
    shortDescription: 'Setting up and securing wireless networks for performance and safety.',
    category: 'networking',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
  {
    name: 'Nmap',
    icon: SocketIcon,
  },
  {
    name: 'Kali Linux',
    icon: SocketIcon,
  },
  {
    name: 'C++',
    icon: SocketIcon,
  },
  {
    name: 'C',
    icon: SocketIcon,
  },
  {
    name: 'Pyhton (Network Programming)',
    icon: SocketIcon,
  },
  {
    name: 'MongoDB',
    icon: SocketIcon,
  },
  {
    name: 'MySQL',
    icon: SocketIcon,
  },
  {
    name: 'PostgreSQL',
    icon: SocketIcon,
  },
  {
    name: 'Airmong',
    icon: SocketIcon,
  },
  {
    name: 'Black Arch',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']

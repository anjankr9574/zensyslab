import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Search,
  Megaphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  short: string
  description: string
  benefits: string[]
  process: string[]
  technologies: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'website-development',
    icon: Globe,
    title: 'Website Development',
    short: 'Fast, accessible, SEO-ready websites that convert.',
    description:
      'We design and engineer responsive, high-performance websites built on modern frameworks. Every site is accessible, search-optimized, and architected to scale with your business.',
    benefits: [
      'Lighthouse scores of 90+ out of the box',
      'WCAG 2.1 AA accessibility compliance',
      'SEO-ready with structured data',
      'Built to scale with your growth',
    ],
    process: [
      'Discovery & requirements',
      'Design & prototyping',
      'Engineering & QA',
      'Launch & optimization',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    short: 'Native-quality cross-platform mobile experiences.',
    description:
      'From concept to App Store, we build secure, performant mobile applications for iOS and Android with shared codebases that reduce cost without compromising quality.',
    benefits: [
      'Single codebase for iOS & Android',
      'Secure authentication & data handling',
      'Offline-first architecture',
      'Continuous delivery pipelines',
    ],
    process: [
      'Product strategy',
      'UX & interface design',
      'Development & testing',
      'Store deployment & support',
    ],
    technologies: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    slug: 'software-development',
    icon: Code2,
    title: 'Software Development',
    short: 'Custom software and platforms engineered to last.',
    description:
      'We build robust backend systems, APIs, and SaaS platforms with clean architecture, automated testing, and observability so your software stays reliable as it grows.',
    benefits: [
      'Clean, maintainable architecture',
      'Automated testing & CI/CD',
      'Scalable cloud infrastructure',
      'Security baked into every layer',
    ],
    process: [
      'Architecture & planning',
      'Iterative development',
      'Testing & hardening',
      'Deployment & monitoring',
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    short: 'Human-centered design that earns trust.',
    description:
      'Our design process puts your users first. We craft intuitive, accessible interfaces backed by research, prototyping, and usability testing.',
    benefits: [
      'Research-driven decisions',
      'Accessible by design',
      'Interactive prototypes',
      'Consistent design systems',
    ],
    process: [
      'User research',
      'Wireframing',
      'Visual design',
      'Usability testing',
    ],
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'WCAG'],
  },
  {
    slug: 'seo-services',
    icon: Search,
    title: 'SEO Services',
    short: 'Sustainable organic growth that compounds.',
    description:
      'We improve your visibility with technical SEO, content strategy, and performance optimization grounded in measurable results, not gimmicks.',
    benefits: [
      'Technical SEO audits',
      'Content & keyword strategy',
      'Core Web Vitals optimization',
      'Transparent reporting',
    ],
    process: [
      'Audit & analysis',
      'Strategy & roadmap',
      'Implementation',
      'Measure & refine',
    ],
    technologies: ['Search Console', 'Analytics', 'Structured Data', 'Lighthouse'],
  },
  {
    slug: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    short: 'Data-driven campaigns that reach the right people.',
    description:
      'We help you grow with targeted campaigns, marketing automation, and analytics that turn attention into measurable business outcomes.',
    benefits: [
      'Multi-channel campaigns',
      'Marketing automation',
      'Conversion optimization',
      'Clear ROI tracking',
    ],
    process: [
      'Goal setting',
      'Campaign design',
      'Launch & optimize',
      'Analyze & scale',
    ],
    technologies: ['Analytics', 'Email Automation', 'Ads', 'A/B Testing'],
  },
  {
    slug: 'maintenance-support',
    icon: Wrench,
    title: 'Maintenance & Support',
    short: 'Long-term care that keeps systems healthy.',
    description:
      'Software is never finished. We provide proactive monitoring, security updates, and dedicated support to keep your products secure and performant for years.',
    benefits: [
      'Proactive monitoring',
      'Security patching',
      'Performance tuning',
      'Dedicated support SLAs',
    ],
    process: [
      'Onboarding & audit',
      'Monitoring setup',
      'Ongoing maintenance',
      'Continuous improvement',
    ],
    technologies: ['Monitoring', 'CI/CD', 'Backups', 'Incident Response'],
  },
]

export const CORE_VALUES = [
  'Security First',
  'Transparency',
  'Accessibility',
  'Reliability',
  'Sustainability',
  'Long-Term Relationships',
  'Engineering Excellence',
] as const

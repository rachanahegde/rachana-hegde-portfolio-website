import {
  Palette,
  Layout,
  Atom,
  Braces,
  Database,
  Sparkles,
  Server,
  Boxes,
  Code2,
  Cpu,
  Globe,
} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Rasoi: AI Recipe App",
    technologies: ["Next.js", "Tailwind CSS", "Gemini SDK", "React Context", "NLP"],
    image: "/projects_imgs/rasoi_app/rasoi_app_overview.png",
    images: ["/projects_imgs/rasoi_app/rasoi_app_overview.png", "/projects_imgs/rasoi_app/Rasoi_chocolate_recipe.png", "/projects_imgs/rasoi_app/Rasoi_pesto_pasta_recipe.png", "/projects_imgs/rasoi_app/Rasoi_calendar.png"],
    demoUrl: "https://rasoi-app.vercel.app/",
    githubUrl: "https://github.com/rachanahegde/rasoi-app",
    overview:
      "An offline-first, AI-powered recipe application that enables users to generate, organize, and schedule recipes and grocery lists. Built with a focus on high-performance interactions and secure client-side AI integration.",
    features: [
      "AI-driven recipe generation using Next.js Server Actions and Gemini SDK",
      "Offline-first state architecture with React Context and persistent local storage",
      "Automatic recipe tagging system using Compromise NLP library",
      "Secure API key encryption (AES-256-GCM) with HTTP-only cookie storage",
      "Drag-and-drop meal reordering and advanced ingredient filtering"
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "Gemini AI", icon: Sparkles },
      { name: "Tailwind CSS", icon: Layout },
      { name: "NLP", icon: Cpu }
    ],
    implementation:
      "Utilized Next.js 15 Server Actions for secure AI processing and React Context for managing offline state. Implemented lightweight lexical analysis for tagging and optimized bundle size through lazy loading."
  },
  {
    id: 2,
    title: "eCommerce Website (React & Tailwind)",
    technologies: ["React", "Vite", "HTML", "CSS", "Tailwind CSS"],
    image: "/projects_imgs/boba_website/boba_website_overview.png",
    images: [
      "/projects_imgs/boba_website/boba_website_overview.png",
      "/projects_imgs/boba_website/ecommerce_shop.jpg",
      "/projects_imgs/boba_website/drinks_menu.jpg",
      "/projects_imgs/boba_website/shop_checkout.jpg",
    ],
    demoUrl: "https://bobakitty-ecommerce-app.vercel.app/",
    githubUrl: "https://github.com/rachanahegde/bobakitty-ecommerce-app/tree/main",
    overview:
      "A bubble tea kitty café eCommerce website built with React with Vite and Tailwind CSS. Features include responsive layout; product listings, shopping cart, and checkout process. This project involved understanding how to design and build reusable components in React, work with hooks and implement state management, create a responsive layout that ensures the website looks amazing across multiple devices and screen sizes, and set up router-based navigation (with React Router).",
    features: [
      "Responsive layout for mobile, tablet, desktop.",
      "Shop page with product listings, shopping cart, and checkout process",
      "Drinks menu page featuring different categories of drinks (i.e. milk tea, fruit tea, etc.). The drinks images are generated with ChatGPT and Dall E.",
      "Contact page",
      "Home page with featured drinks, about section, and buttons linking to other important website pages",
    ],
    techStack: [
      { name: "React", icon: Atom },
      { name: "Tailwind CSS", icon: Layout },
    ],
    implementation:
      "Built with React with Vite and Tailwind CSS. Used Tailwind's utility-first workflow for responsive design. Implemented router-based navigation (with React Router).",
    challenges:
      "Successfully navigated Vercel deployment complexities, including resolving React Router 404 errors and optimizing asset pathing for production. Mastered the fundamentals of React and Tailwind CSS through rapid development, while identifying key areas for future growth such as persistent state management and enhanced security.",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    technologies: ["Next.js", "React 19", "Framer Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"],
    demoUrl: "https://rachanahegde.com/",
    githubUrl: "https://github.com/rachanahegde/rachana-hegde-portfolio-website",
    overview:
      "A high-performance portfolio platform designed to showcase professional engineering projects. Features immersive project storytelling through advanced UI patterns and hardware-accelerated animations.",
    features: [
      "Modular frontend architecture using Next.js App Router and React 19",
      "Interactive project showcase with multi-step modals and custom carousel",
      "Fluid UI transitions using Framer Motion's AnimatePresence",
      "Responsive glassmorphic design optimized for cross-device consistency"
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "React 19", icon: Atom },
      { name: "Framer Motion", icon: Sparkles },
      { name: "Tailwind CSS", icon: Layout }
    ],
    implementation:
      "Architected with a strict separation of concerns between project metadata and presentation. Leveraged modern CSS grid systems and Next.js Image optimization for rapid load times."
  },
  {
    id: 4,
    title: "Tarot Card Reader Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    demoUrl: "https://tinyurl.com/2nbu5csz",
    githubUrl: "https://tinyurl.com/tarot-code",
    overview:
      "An interactive web experience delivering virtual tarot readings. Combines traditional mysticism with modern web animation techniques for an engaging user journey.",
    features: [
      "Three-card selection system for Past, Present, and Future readings",
      "Interactive card flip animations using CSS 3D transforms",
      "Mobile-first responsive design ensuring seamless usage on all devices",
      "Dynamic reading logic implemented with vanilla JavaScript"
    ],
    techStack: [
      { name: "JavaScript", icon: Braces },
      { name: "Tailwind CSS", icon: Layout },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette }
    ],
    implementation:
      "Focused on vanilla JS for DOM manipulation and event handling to keep the application lightweight. Used Tailwind CSS 4 features for modern, aesthetic styling."
  },
  {
    id: 5,
    title: "IT Dashboard Website",
    technologies: ["React", "Figma", "Tailwind CSS", "Context API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
    demoUrl: "https://it-dashboard-final.vercel.app/",
    githubUrl: "https://github.com/rachanahegde/it-dashboard-final",
    overview:
      "A comprehensive internal IT management dashboard developed to streamline employee directories, request submissions, and ticket tracking workflows. Focused on utility-first design and responsive accessibility.",
    features: [
      "Employee directory with advanced search and filtering",
      "IT request submission and real-time ticket status tracking",
      "Global state management for consistent session data across routes",
      "High-fidelity UI designed in Figma with bespoke component library"
    ],
    techStack: [
      { name: "React", icon: Atom },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Context API", icon: Braces },
      { name: "Figma", icon: Palette }
    ],
    implementation:
      "Designed and built from the ground up using React's functional component model. Used Tailwind for responsive layouts and Context API to manage complex global states without prop drilling."
  }
];

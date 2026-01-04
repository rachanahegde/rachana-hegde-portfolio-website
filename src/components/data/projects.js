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
    title: "eCommerce Website (React & Tailwind)",
    technologies: ["React", "Vite", "HTML", "CSS", "Tailwind CSS"],
    image: "/projects_imgs/boba_website_overview.png",
    images: [
      "/projects_imgs/boba_website_overview.png",
      "/projects_imgs/ecommerce_shop.jpg",
      "/projects_imgs/drinks_menu.jpg",
      "/projects_imgs/shop_checkout.jpg",
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
  }
];

import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Railey Pacheco — Mobile & Web Developer",
  author: "Railey Pacheco",
  description:
    "Freelancer based in Manila City, Philippines. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/Railey.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/miracle_soo" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/railey-pacheco-938217248",
    },
    { text: "Github", href: "https://github.com/Railey29?tab=repositories" },
    { text: "Facebook", href: "https://www.facebook.com/railey.pacheco.2025" },
    {
      text: "Certificate",
      href: "https://drive.google.com/file/d/1rnQOz0WF5NVC-gR35-_8-T5eF9Q0vXMs/view?usp=sharing",
    },
    {
      text: "Resume",
      href: "https://drive.google.com/file/d/1OUuBeV2FCDHZvpkH4OVbeS1fwLYbz7ZU/view?usp=sharing",
    },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Railey Pacheco",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in Manila City , Philippines, web and mobile application development and maintenance.",
    email: "RaileyPacheco099@Gmail.com",
  },
  experience: [
    {
      company: "Freelancing",
      position: "Mobile Developer",
      startDate: "Sept 2025",
      endDate: "Present",
      summary: [
        "Experienced in building cross-platform mobile applications using React Native with the Expo framework, ensuring faster development and deployment. Skilled in creating responsive UI components, integrating APIs, and optimizing performance for both Android and iOS platforms. Familiar with using Expo’s ecosystem for simplified app testing, debugging, and publishing, resulting in efficient and user-friendly mobile solutions.",
      ],
    },
    {
      company: "Freelancing",
      position: "Web Developer",
      startDate: "May 2024",
      endDate: "Present",
      summary: [
        "Experienced in developing modern, scalable, and responsive web applications using ReactJS with the NextJS framework for optimized performance and SEO. Skilled in building dynamic front-end interfaces, implementing server-side rendering (SSR), and handling API integrations. Proficient in working with MongoDB as a database solution to design and manage data efficiently, ensuring seamless full-stack development from front-end to back-end.",
      ],
    },
  ],
  projects: [
    {
      name: "Expenses Tracker",
      summary:
        "A finance app for adding expenses, tracking history, and managing balance to stay organized.",
      linkPreview: "https://expenses-tracker-u2u8.vercel.app/login",
      linkSource: "https://github.com/Railey29/expenses-tracker",
      image: "/Expenses.png",
    },
    {
      name: "Alphabot",
      summary:
        "Alphabot is a robot that uses computer vision and games to make preschool learning fun and interactive.",
      linkPreview: "https://thesis-mk3-0.vercel.app/home",
      linkSource: "https://github.com/Railey29/Thesis-mk3.0",
      image: "/Alphabot.png",
    },
    {
      name: "PhotoBoot",
      summary:
        "Photobooth is an app that captures four webcam shots and merges them into one creative photo layout.",
      linkPreview: "https://photo-boot.vercel.app",
      linkSource: "https://github.com/Railey29/PhotoBoot",
      image: "/Photoboot.png",
    },
  ],
  about: {
    description: `
     I’m Joseph Railey J. Pacheco, a passionate Freelance Web and Mobile Developer who helps businesses and individuals build modern, responsive, and user-friendly applications. I specialize in creating cross-platform mobile apps using React Native with Expo, ensuring smooth performance on both Android and iOS. For web projects, I develop fast, scalable, and SEO-ready websites with ReactJS and NextJS, and I use MongoDB for secure and efficient data management. I take pride in delivering clean code, modern designs, and reliable solutions tailored to my clients’ needs. With a strong focus on problem-solving and creativity, I aim to turn ideas into digital solutions that help clients grow their online presence. If you’re looking for someone to build or improve your app or website, I’d love to collaborate with you.
    `,
    image: "/Railey.jpg",
  },
};

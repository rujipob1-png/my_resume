// ============================================================
// data.js — ข้อมูลทั้งหมดของคุณ แก้ไขตรงนี้เพื่อเปลี่ยนเนื้อหาเว็บ
// ============================================================

export const personalInfo = {
  name: "รุจิภพ ชูสัตย์",
  nameEn: "Rujipob Chusat",
  titles: [
    "Frontend Developer",
    "Full Stack Developer",
    "IT Student @ Kasetsart University",
  ],
  email: "rujipob1@gmail.com",
  phone: "+66 81-167-5573",
  location: "Thalingchan, Bangkok, Thailand",
  bio: "IT student passionate about frontend development and modern web technologies. Skilled in building responsive applications using modern frameworks and collaborating effectively in teams with a strong growth mindset.",
  resumeUrl: "/Resume.pdf",
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "",
    facebook: "",
  },
};

export const aboutData = {
  description:
    "An IT student from Kasetsart University with an interest in frontend development and modern web technologies. Skilled in building responsive applications using modern frameworks, able to work well in a team, and committed to continuous learning and self-improvement.",
  gpa: "3.02",
  languages: [
    { name: "ไทย", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
  softSkills: [
    "Time Management",
    "Communication",
    "Collaboration & Teamwork",
    "Problem-Solving",
  ],
};

export const skills = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "MySQL", level: 65, category: "Database" },
  { name: "Supabase", level: 60, category: "Database" },
  { name: "JWT / RBAC", level: 70, category: "Auth" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "GitHub", level: 80, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
  { name: "Postman", level: 75, category: "Tools" },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Electronic Leave Management System — Government Internship",
    date: "Jan 2026 – Present",
    points: [
      "Developed a full-stack leave management system with multi-level approval workflow and role-based access control",
      "Implemented real-time request tracking, notifications, and reporting dashboard",
      "Designed system to support real-world organizational workflows and approval processes",
    ],
    tags: ["React", "Node.js", "Full Stack", "RBAC"],
  },
  {
    title: "Full Stack Developer",
    company: "B2B Chinese Food Ingredient Supply Management System",
    date: "Sep 2025 – Nov 2025",
    points: [
      "Developed a full-stack B2B platform with online ordering, real-time booking, and PromptPay QR payment integration",
      "Built admin dashboard for order management and sales analytics",
      "Improved user experience by aligning system design with real business requirements",
    ],
    tags: ["React", "Node.js", "Full Stack", "PromptPay"],
  },
  {
    title: "Frontend Developer",
    company: "IoT Environmental Monitoring System",
    date: "May 2025 – July 2025",
    points: [
      "Developed a web dashboard for monitoring real-time temperature and humidity data from IoT sensors",
      "Implemented alert system integrated with LINE Notify for abnormal condition notifications",
    ],
    tags: ["React", "IoT", "LINE Notify", "Dashboard"],
  },
];

export const education = [
  {
    degree: "คณะศิลปศาสตร์และวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ (Bachelor of Liberal Arts Science in Information Technology)",
    school: "มหาวิทยาลัยเกษตรศาสตร์ (Kasetsart University)",
    date: "2022 – Present",
    description: "GPA 3.02",
  },
  {
    degree: "มัธยมศึกษา (High School)",
    school: "โรงเรียนแสงอรุณ (Sang Arun School)",
    date: "2007 – 2021",
    description: "GPA 3.40",
  },
];

export const projects = [
  {
    title: "Electronic Leave Management System",
    description:
      "Full-stack leave management system with multi-level approval workflow, role-based access control, real-time request tracking, notifications and reporting dashboard — developed for a government organization during internship",
    image: "E_leave.jpg",
    tags: ["React", "Node.js", "Full Stack", "RBAC"],
    github: "https://github.com/rujipob1-png/intern_project_demo",
    demo: "intern-project-demo.vercel.app",    docs: "/\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e01\u0e32\u0e23\u0e25\u0e32\u0e2d\u0e34\u0e40\u0e25\u0e47\u0e01\u0e17\u0e23\u0e2d\u0e19\u0e34\u0e01\u0e2a\u0e4c.pdf",    featured: true,
  },
  {
    title: "B2B Chinese Food Ingredient Supply Management System",
    description:
      "Full-stack B2B platform with online ordering, real-time table booking, PromptPay QR payment integration and admin dashboard for order management and sales analytics",
    image: "B2B.jpg",
    tags: ["React", "Node.js", "Full Stack", "PromptPay"],
    github: "https://github.com/",
    demo: "https://spoon2-duojeng.vercel.app/",
    featured: true,
  },
  {
    title: "IoT Environmental Monitoring System",
    description:
      "Web dashboard for monitoring real-time temperature and humidity data from IoT sensors with LINE Notify alert system for abnormal condition notifications",
    image: "IoT.jpg",
    tags: ["React", "IoT", "LINE Notify", "Dashboard"],
    github: "https://github.com/",
    demo: "",
    featured: true,
  },
  {
    title: "GAME 24",
    description:
      "A number puzzle game where players combine randomly generated numbers using addition, subtraction, multiplication, and division to reach a total of 24.",
    image: "game24.jpg",
    tags: ["HTML", " CSS", "JS"],
    github: "https://github.com/rujipob1-png/game_24",
    demo: "https://game-24-three.vercel.app/",
    featured: false,
  },
  {
    title: "FOOTBALL FIELD BOOKING",
    description:
      "A football field booking web application developed during my second year as part of an academic project. Built using HTML and CSS, the system allows users to browse available football fields, make reservations, and complete payments online. It also includes an admin panel for managing bookings, monitoring user reservations, and handling system data efficiently.",
    image: "FOOTBALL.jpg",
    tags: ["HTML", " CSS"],
    github: "https://github.com/rujipob1-png/ERP",
    demo: "https://erp-murex-theta.vercel.app/homepage.html",
    featured: false,
  },
  {
    title: "VENDING MACHINE",
    description:
      "A vending machine simulation project developed during my first year (second semester) as part of an academic assignment. The system simulates a detergent vending machine where users can insert money and select products to purchase. Built using HTML, CSS, and JavaScript, the project focuses on basic user interaction, product selection, and simple transaction logic.",
    image: "VENDING_MACHINE.jpg",
    tags: ["HTML", " CSS", "JS"],
    github: "https://github.com/rujipob1-png/vending-machine",
    demo: "https://vending-machine-flax.vercel.app/",
    featured: false,
  },
];

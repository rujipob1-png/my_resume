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
  phone: "081-167-5573",
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
    "นักศึกษา IT ที่มหาวิทยาลัยเกษตรศาสตร์ มีความหลงใหลในการพัฒนา Frontend และเทคโนโลยีเว็บสมัยใหม่ สามารถสร้างแอปพลิเคชันที่ responsive ด้วย framework ยุคใหม่ และทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ พร้อมเติบโตและเรียนรู้สิ่งใหม่ๆ อยู่เสมอ",
  highlights: [
    { label: "GPA", value: "3.02" },
    { label: "โปรเจกต์", value: "2+" },
    { label: "ทักษะ", value: "8+" },
    { label: "ภาษา", value: "TH/EN" },
  ],
};

export const skills = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "GitHub", level: 80, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "B2B Chinese Food Ingredient Supply Management System",
    date: "Sep 2025 – Present",
    points: [
      "ออกแบบเว็บไซต์ที่ใช้งานง่ายตามความต้องการของอาจารย์ที่ปรึกษา",
      "พัฒนาระบบสั่งซื้อออนไลน์และจองโต๊ะ real-time",
      "สร้างระบบชำระเงินหลายช่องทาง รวมถึง PromptPay QR Code",
      "พัฒนา Admin Dashboard พร้อมวิเคราะห์ยอดขาย",
    ],
    tags: ["React", "Node.js", "Full Stack", "PromptPay"],
  },
  {
    title: "Frontend Developer",
    company: "IoT Environmental Monitoring System",
    date: "May 2025 – July 2025",
    points: [
      "พัฒนา Web Dashboard สำหรับ monitor อุณหภูมิและความชื้นจาก IoT sensors แบบ real-time",
      "สร้างระบบแจ้งเตือนผ่าน LINE Notify เมื่อค่าเกินเกณฑ์ที่กำหนด",
      "ออกแบบ UI/UX สำหรับแสดงผลข้อมูล sensor ในรูปแบบกราฟ",
    ],
    tags: ["React", "IoT", "LINE Notify", "Dashboard"],
  },
];

export const education = [
  {
    degree: "ศิลปศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ (Bachelor of Liberal Arts Science in Information Technology)",
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
    title: "B2B Chinese Food Ingredient Supply Management System",
    description:
      "ระบบจัดการวัตถุดิบอาหารจีน B2B ที่มีฟีเจอร์สั่งซื้อออนไลน์, จองโต๊ะ real-time, ชำระเงินผ่าน PromptPay QR Code และ admin dashboard วิเคราะห์ยอดขาย",
    image: "B2B.jpg",
    tags: ["React", "Node.js", "Full Stack", "PromptPay"],
    github: "https://github.com/",
    demo: "https://spoon2-duojeng.vercel.app/",
    featured: true,
  },
  {
    title: "IoT Environmental Monitoring System",
    description:
      "Web dashboard สำหรับ monitor อุณหภูมิและความชื้นจาก IoT sensors แบบ real-time พร้อมระบบแจ้งเตือนผ่าน LINE Notify เมื่อค่าเกินเกณฑ์ที่กำหนด",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
    tags: ["React", "IoT", "LINE Notify", "Dashboard"],
    github: "https://github.com/",
    demo: "",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "เว็บไซต์ Portfolio ส่วนตัว พร้อม 3D animation, dark mode, smooth scrolling และ responsive design สร้างด้วย React + Three.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/",
    demo: "",
    featured: false,
  },
];

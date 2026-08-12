import silentScope from "../assets/images/projects/silent-scope.png";
import tcpHawk from "../assets/images/projects/tcp-hawk.png";
import kbcListen from "../assets/images/projects/kbc-listen.png";
import nimba from "../assets/images/projects/nimba.png";
import fuzuSchool from "../assets/images/projects/fuzu-school.png";
import asyncScanX from "../assets/images/projects/asyncscanx.png";
import findWifi from "../assets/images/projects/find-wifi.png";
import metasploitable2 from "../assets/images/projects/metasploitable2.png";

export const profile = {
  name: "Pritt Nyerere",

  titles: [
    "Cybersecurity Analyst",
    "Cyber Threat Intelligence (CTI)",
    "Digital Forensics",
    "Security Engineer",
    "Python Developer",
    "Full Stack Developer",
  ],

  tagline:
    "Building secure systems, investigating threats, and developing modern web applications.",

  description:
    "I'm a cybersecurity professional passionate about threat detection, digital forensics, security automation, and full-stack development. I enjoy building practical tools that solve real-world problems while continuously expanding my skills through hands-on projects.",

  email: "prittnyerere@gmail.com",

  github: "https://github.com/Pritt014",

  linkedin: "https://linkedin.com/in/prittnyereredfir/",

  resume: "/Pritt_Nyerere_Cybersecurity_Analyst_Resume.pdf",
};

export const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "6+",
    label: "Certifications",
  },
  {
    value: "3+",
    label: "Years Building",
  },
];

export const featuredProjects = [
  {
    id: 1,

    title: "Silent-Scope",

    type: "cli",

    category: "Cybersecurity",

    description:
      "A passive reconnaissance tool built in Python that gathers DNS records, WHOIS intelligence, and subdomain information using open-source intelligence sources.",

    tech: [
      "Python",
      "OSINT",
      "DNS",
      "WHOIS",
      "JSON Reporting",
    ],

    github:
      "https://github.com/Pritt014/silent-scope",

    page:
      "/projects/silent-scope",

    live: "",

    image: silentScope,

    featured: true,
  },

  {
    id: 2,

    title: "TCP Hawk",

    type: "cli",

    category: "Networking",

    description:
      "A Python-based TCP port scanner that uses concurrent scanning techniques to identify open ports and analyze network exposure.",

    tech: [
      "Python",
      "Socket Programming",
      "TCP/IP",
      "Multithreading",
    ],

    github:
      "https://github.com/Pritt014/tcp-hawk",

    page:
      "/projects/tcp-hawk",

    live: "",

    image: tcpHawk,

    featured: true,
  },

  {
    id: 3,

    title: "KBC Listen",

    type: "web",

    category: "Full Stack",

    description:
      "A modern radio and podcast streaming application built to deliver digital audio experiences through a responsive web platform.",

    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "REST APIs",
    ],

    github:
      "https://github.com/Pritt014/kbc-listen",

    page:
      "/projects/kbc-listen",

    live:
      "https://kbc-listen.netlify.app/",

    image: kbcListen,

    featured: true,
  },

  {
    id: 4,

    title: "NIMBA",

    type: "web",

    category: "Full Stack",

    description:
      "A weather intelligence application providing current conditions, forecasts, and hourly weather data through a FastAPI backend integrated with OpenWeather services.",

    tech: [
      "Python",
      "FastAPI",
      "Jinja2",
      "HTTPX",
      "OpenWeather API",
    ],

    github:
      "https://github.com/Pritt014/nimba",

    page:
      "/projects/nimba",

    live: "",

    image: nimba,

    featured: false,
  },

  {
    id: 5,

    title: "FUZU School",

    type: "web",

    category: "Web Development",

    description:
      "A responsive school website built to present academic programs, admissions information, school offerings, key dates, and contact information through a modern interactive interface.",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
    ],

    github:
      "https://github.com/Pritt014/fuzu-school-app",

    page:
      "/projects/fuzu-school",

    live:
      "https://www.fuzuschool.sc.ke",

    image: fuzuSchool,

    featured: false,
  },

  {
    id: 6,

    title: "AsyncScanX",

    type: "cli",

    category: "Network Security",

    description:
      "A fast asynchronous TCP port scanner built with Python asyncio, capable of scanning the full TCP port range while limiting concurrency and identifying common services.",

    tech: [
      "Python",
      "AsyncIO",
      "Sockets",
      "Concurrency",
      "Networking",
    ],

    github:
      "https://github.com/Pritt014/asyncscanX",

    page:
      "/projects/asyncscanx",

    live: "",

    image: asyncScanX,

    featured: false,
  },

  {
    id: 7,

    title: "Find-WiFi",

    type: "cli",

    category: "Networking",

    description:
      "A lightweight Windows utility that retrieves and displays nearby wireless networks using Python and the Windows netsh networking interface.",

    tech: [
      "Python",
      "Windows",
      "Subprocess",
      "netsh",
      "Wi-Fi",
    ],

    github:
      "https://github.com/Pritt014/Find-WiFi",

    page:
      "/projects/find-wifi",

    live: "",

    image: findWifi,

    featured: false,
  },

  {
    id: 8,

    title: "Metasploitable2 Pentest",

    type: "lab",

    category: "Penetration Testing",

    description:
      "A documented internal black-box penetration testing lab covering reconnaissance, enumeration, vulnerability discovery, exploitation, post-exploitation, evidence collection, remediation, and professional reporting.",

    tech: [
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Gobuster",
      "Nikto",
      "Enum4linux",
    ],

    github:
      "https://github.com/Pritt014/metasploitable2-pentest",

    page:
      "/projects/metasploitable2-pentest",

    live: "",

    image: metasploitable2,

    featured: false,
  },
];
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anurag Munde",
  nickname: "(a.k.a Anar0gk)",
  initials: "AM",
  url: "https://anuragmun.dev",
  location: "Pune, India",
  locationLink: "https://maps.app.goo.gl/VA6LxJc6RnmtfWjg6",
  description:
    "I'm a Software Engineer, System Programmer, interested in security development.",
  summary:
    "Helping Build a Code2Cloud security platform [@cloudanix](https://www.cloudanix.com/) since sept 2024, I always wanted to be a Software Engineer. Initially, I was into gaming and video games were my driving force but I quickly fell in love with software development and here I am now.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "AppSec",
    "AWS",
    "Azure",
    "Neo4j",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anuragmunde002@gmail.com",
    tel: "+91-7038872898",
    social: {
      GitHub: {
        name: "anarogk",
        url: "https://github.com/anarogk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anuragmunde",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AnuragMunde",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "anuragmunde002@gmail.com",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cloudanix",
      href: "https://www.cloudanix.com/",
      badges: [],
      location: "San Francisco, CA",
      title: "SWE (Remote)",
      logoUrl: "/cloudanix.png",
      start: "Sept 2024",
      end: "Present",
      description: [
        "Contributed and maintained <span class='highlight'>cloud-native</span> <span class='highlight'>code security</span> platform supporting <span class='highlight'>SCA</span>, <span class='highlight'>SAST</span>, and <span class='highlight'>secret scanning</span>, enabling proactive vulnerability management for <span class='highlight'>thousands</span> of GitHub, GitLab, Bitbucket, and Azure DevOps repositories, including large mono-repos.",
        "Migrated internal services and cloud APIs from Azure to AWS, re-architecting workloads onto <span class='highlight'>Amazon EKS</span>.",
        "Worked with leading <span class='highlight'>AppSec and SCA</span> tools including Semgrep, CycloneDX, Trivy, OSVscanner, Deps.dev, and more.",
        "Independently developed a Azure DevOps extension and GitLab component for <span class='highlight'> container security</span>, integrating into CI/CD pipelines and scaling to secure <span class='highlight'>Thousands of customer repositories.</span>",
      ],
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "http://www.unipune.ac.in/",
      degree: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
      logoUrl: "/sppu.png",
      start: "2020",
      end: "2024",
      description: "",
    },
    
  ],
  projects: [
    {
      title: "SecureSend",
      href: "https://github.com/Anarogk/SecureSend",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "a robust, feature-packed SFTP (SSH File Transfer Protocol) client and server implementation. It's like a secret tunnel for your files, but with fewer moles and more encryption!",
      technologies: [
        "python",
        "Paramiko",
        "Cryptography",
        "Gzip",
        "Tkinter",
        "Unittest",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Anarogk/SecureSend",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Hand+ctrl",
      href: "https://github.com/Anarogk/HandNav",
      dates: "June 2023 - Dec 2023",
      active: true,
      description:
        "Developed a computer vision-based system to simulate system navigation using hand gesture for robotic applications.",
      technologies: ["Python, ", "MediaPipe", "OpenCV", "rsautogui"],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Anarogk/HandNav",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Resolver",
      href: "https://github.com/Anarogk/Resolver",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Built a Robust DNS server in Golang processing DNS queries and responses.",
      technologies: ["Go", "net", "go-cache", "zap", "go-test"],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Anarogk/Resolver",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
} as const;

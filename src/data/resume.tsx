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
    "I'm a 22 year old Software Engineer, System Programmer,  and a Full Stack Developer, overall technology obsessed Guy from Pune, India.",
  summary:
    "SWE [@cloudanix](https://www.cloudanix.com/) since sept 2024, I always wanted to be a Software Engineer. Initially, I was into gaming and video games were my driving force but I quickly fell in love with software development and here I am now.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
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
      title: "SWE (Software Engineer)",
      logoUrl: "/cloudanix.png",
      start: "Sept 2024",
      end: "Present",
      description:
        "Worked on Code security platform and its suite of softwares. Implemented various new Features for Github, Bitbucket and Gitlab hosted code security and monitoring.",
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
      degree: "B.E in Artificial Intelligence & Machine Learning",
      logoUrl: "/sppu.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Vaidyanath College, Parli",
      href: "https://vaidyanathcollege.org.in/",
      degree: "Higher Secondary Education",
      logoUrl: "/vaidyanath.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Foundation School, Parli",
      href: "https://schools.org.in/bid/27270800154/foundation-school-parli-v.html",
      degree: "Primary and secondary education",
      logoUrl: "/foundation.png",
      start: "2007",
      end: "2018",
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
          icon: <Icons.github className="size-3" />,
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
          icon: <Icons.github className="size-3" />,
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
          icon: <Icons.github className="size-3" />,
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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
//   {
//     title: "FirstNet Public Safety Hackathon",
//     dates: "March 23rd - 24th, 2018",
//     location: "San Francisco, California",
//     description:
//       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
//     icon: "public",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
//     links: [],
//   },
//   {
//     title: "DeveloperWeek Hackathon",
//     dates: "February 3rd - 4th, 2018",
//     location: "San Francisco, California",
//     description:
//       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
//     links: [
//       {
//         title: "Github",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/cryptotrends/cryptotrends",
//       },
//     ],
//   },
//   {
//     title: "HackDavis",
//     dates: "January 20th - 21st, 2018",
//     location: "Davis, California",
//     description:
//       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
//     win: "Best Data Hack",
//     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
//     links: [
//       {
//         title: "Devpost",
//         icon: <Icons.globe className="h-4 w-4" />,
//         href: "https://devpost.com/software/my6footprint",
//       },
//       {
//         title: "ML",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/Wallet6/my6footprint-machine-learning",
//       },
//       {
//         title: "iOS",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/Wallet6/CarbonWallet",
//       },
//       {
//         title: "Server",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/Wallet6/wallet6-server",
//       },
//     ],
//   },
//   {
//     title: "ETH Waterloo",
//     dates: "October 13th - 15th, 2017",
//     location: "Waterloo, Ontario",
//     description:
//       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
//     links: [
//       {
//         title: "Organization",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/ethdocnet",
//       },
//     ],
//   },
//   {
//     title: "Hack The North",
//     dates: "September 15th - 17th, 2017",
//     location: "Waterloo, Ontario",
//     description:
//       "Developed a virtual reality application allowing users to see themselves in third person.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//     links: [
//       {
//         title: "Streamer Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/justinmichaud/htn2017",
//       },
//       {
//         title: "Client Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/RTSPClient",
//       },
//     ],
//   },
//   {
//     title: "Hack The 6ix",
//     dates: "August 26th - 27th, 2017",
//     location: "Toronto, Ontario",
//     description:
//       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
//     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/ShareShip/ShareShip",
//       },
//       {
//         title: "Site",
//         icon: <Icons.globe className="h-4 w-4" />,
//         href: "https://share-ship.herokuapp.com/",
//       },
//     ],
//   },
//   {
//     title: "Stupid Hack Toronto",
//     dates: "July 23rd, 2017",
//     location: "Toronto, Ontario",
//     description:
//       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/nsagirlfriend/nsagirlfriend",
//       },
//     ],
//   },
//   {
//     title: "Global AI Hackathon - Toronto",
//     dates: "June 23rd - 25th, 2017",
//     location: "Toronto, Ontario",
//     description:
//       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
//     win: "1st Place Winner",
//     links: [
//       {
//         title: "Article",
//         icon: <Icons.globe className="h-4 w-4" />,
//         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
//       },
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/TinySamosas/",
//       },
//     ],
//   },
//   {
//     title: "McGill AI for Social Innovation Hackathon",
//     dates: "June 17th - 18th, 2017",
//     location: "Montreal, Quebec",
//     description:
//       "Developed realtime facial microexpression analyzer using AI",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
//     links: [],
//   },
//   {
//     title: "Open Source Circular Economy Days Hackathon",
//     dates: "June 10th, 2017",
//     location: "Toronto, Ontario",
//     description:
//       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
//     win: "1st Place Winner",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/genecis",
//       },
//     ],
//   },
//   {
//     title: "Make School's Student App Competition 2017",
//     dates: "May 19th - 21st, 2017",
//     location: "International",
//     description: "Improved PocketDoc and submitted to online competition",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
//     win: "Top 10 Finalist | Honourable Mention",
//     links: [
//       {
//         title: "Medium Article",
//         icon: <Icons.globe className="h-4 w-4" />,
//         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
//       },
//       {
//         title: "Devpost",
//         icon: <Icons.globe className="h-4 w-4" />,
//         href: "https://devpost.com/software/pocketdoc-react-native",
//       },
//       {
//         title: "YouTube",
//         icon: <Icons.youtube className="h-4 w-4" />,
//         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//       },
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/pocketdoc-react-native",
//       },
//     ],
//   },
//   {
//     title: "HackMining",
//     dates: "May 12th - 14th, 2017",
//     location: "Toronto, Ontario",
//     description: "Developed neural network to optimize a mining process",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
//     links: [],
//   },
//   {
//     title: "Waterloo Equithon",
//     dates: "May 5th - 7th, 2017",
//     location: "Waterloo, Ontario",
//     description:
//       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
//     links: [
//       {
//         title: "Devpost",
//         icon: <Icons.globe className="h-4 w-4" />,
//         href: "https://devpost.com/software/pocketdoc-react-native",
//       },
//       {
//         title: "YouTube",
//         icon: <Icons.youtube className="h-4 w-4" />,
//         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//       },
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/pocketdoc-react-native",
//       },
//     ],
//   },
//   {
//     title: "SpaceApps Waterloo",
//     dates: "April 28th - 30th, 2017",
//     location: "Waterloo, Ontario",
//     description:
//       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/earthwatch",
//       },
//     ],
//   },
//   {
//     title: "MHacks 9",
//     dates: "March 24th - 26th, 2017",
//     location: "Ann Arbor, Michigan",
//     description:
//       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
//     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/threejs-planes",
//       },
//     ],
//   },
//   {
//     title: "StartHacks I",
//     dates: "March 4th - 5th, 2017",
//     location: "Waterloo, Ontario",
//     description:
//       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
//     win: "1st Place Winner",
//     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//     links: [
//       {
//         title: "Source (Mobile)",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/mattBlackDesign/recipic-ionic",
//       },
//       {
//         title: "Source (Server)",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/mattBlackDesign/recipic-rails",
//       },
//     ],
//   },
//   {
//     title: "QHacks II",
//     dates: "February 3rd - 5th, 2017",
//     location: "Kingston, Ontario",
//     description:
//       "Developed a mobile game which enables city-wide manhunt with random lobbies",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
//     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//     links: [
//       {
//         title: "Source (Mobile)",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/dillionverma/human-huntr-react-native",
//       },
//       {
//         title: "Source (API)",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/mattBlackDesign/human-huntr-rails",
//       },
//     ],
//   },
//   {
//     title: "Terrible Hacks V",
//     dates: "November 26th, 2016",
//     location: "Waterloo, Ontario",
//     description:
//       "Developed a mock of Windows 11 with interesting notifications and functionality",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
//       },
//     ],
//   },
//   {
//     title: "Portal Hackathon",
//     dates: "October 29, 2016",
//     location: "Kingston, Ontario",
//     description:
//       "Developed an internal widget for uploading assignments using Waterloo's portal app",
//     image:
//       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
//     links: [
//       {
//         title: "Source",
//         icon: <Icons.github className="h-4 w-4" />,
//         href: "https://github.com/UWPortalSDK/crowmark",
//       },
//     ],
//   },
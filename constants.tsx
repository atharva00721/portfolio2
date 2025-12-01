import React from 'react';
import { Project, Experience, Social, SkillCategory, BlogPost } from './types';

export const EMAIL = "atharvaraj@gmail.com";
export const PHONE = "+91 7471134354";

export const SOCIALS: Social[] = [
  { name: "GitHub", link: "https://github.com/atharva00721", label: "@atharva00721" },
  { name: "LinkedIn", link: "https://linkedin.com/in/atharvarajthakur", label: "Atharva Raj Singh Thakur" },
  { name: "Twitter", link: "https://x.com/codepaglu", label: "@codepaglu" },
  { name: "Email", link: `mailto:${EMAIL}`, label: EMAIL },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Upsurge Labs",
    role: "Jr. Developer",
    date: "Sept. 2025 – Present",
    location: "Bengaluru/ India",
    description: [
      "Worked on the product's client-side, contributing to features, UI improvements, and codebase stability.",
      "Served as QA for Bhindi and OpenBio, ensuring smooth workflows, regression testing, and bug verification.",
      "Collaborated in a fast-paced startup environment, maintaining clean code practices."
    ]
  },
  {
    company: "Play-In Trampoline Park",
    role: "Freelance Web Developer",
    date: "Jan. 2024 – Feb. 2024",
    location: "Indore/ India",
    description: [
      "Engineered and launched a responsive business website using WordPress.",
      "Customized themes and integrated plugins to support booking, location services, and event listings.",
      "Enhanced site speed and delivered a CMS tutorial to streamline content updates."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    slug: "presently",
    title: "PresentLy",
    description:
      "An AI-powered presentation generator making it easy to create presentations effortlessly.",
    longDescription:
      "PresentLy transforms presentation workflows by combining intuitive design with AI-powered capabilities. Built with TypeScript and Next.js alongside the Gemini AI API for content generation, it offers real-time editing, AI-based content suggestions, and a library of premade themes to streamline the presentation creation process.",
    techStack: [
      "TypeScript",
      "Next.js",
      "WebSocket",
      "Zustand",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "BunJS",
      "Gemini AI",
      "Pexel API",
    ],
    imageUrl: "/presently/hero.webp",
    screenshots: [
      {
        url: "/presently/auth.webp",
        alt: "PresentLy auth interface made with BetterAuth",
      },
      {
        url: "/presently/outlines.webp",
        alt: "Generate outlines with one prompt",
      },
      {
        url: "/presently/themes.webp",
        alt: "Choose from a variety of premade themes",
      },
      {
        url: "/presently/ppt.webp",
        alt: "Edit presentations",
      },
    ],
    demoUrl: "https://presntlypro.vercel.app/",
    codeUrl: "https://github.com/atharva00721/presntly",
    featured: true,
    category: "Productivity",
    ctaText: "Try PresentLy",
    ctaLink: "https://presntlypro.vercel.app/",
    features: [
      "AI-powered content generation based on user input prompts.",
      "Real-time collaboration allowing multiple users to edit presentations simultaneously using WebSockets.",
      "Pre-made themes for easy selection and consistent design quality.",
      "Intuitive user interface for creating slides efficiently and quickly.",
      "Responsive design ensuring cross-platform usability.",
      "Secure database layer powered by PostgreSQL and Prisma.",
    ],
    futureGoals: [
      "AI-powered advanced presentation templates.",
      "Multi-language support for global usability.",
      "Implementing real-time collaboration without performance degradation.",
      "AI-generated images for enhancing slide aesthetics.",
    ],
    highlights: [
      "Streamlined the presentation creation process with AI-powered content.",
      "Real-time collaborative editing backed by WebSocket integration.",
      "Premade themes that allow users to save hours on design.",
    ],
    challenges: [
      "Optimizing the image-fetching pipeline via Pexel API.",
      "Enhancing performance for handling large presentation files.",
    ],
    metrics: {
      performance: {
        loadTime: "Average page load time reduced to under 500ms.",
        apiResponse: "Average Presentation Generation Time: 10.5s",
      },
      development: {
        timeToComplete: "3 days",
        commitCount: 61,
        bugsFixed: 7,
        featuresDelivered: 6,
      },
      learning: {
        newTechnologies: [
          "WebSocket",
          "Zustand",
          "BunJS",
          "Pexel API",
          "React-dnd",
        ],
        technicalChallenges: [
          "Implemented real-time collaboration with WebSockets.",
          "Built custom state management with Zustand.",
          "Optimized rendering performance for large presentations.",
          "Developed AI content suggestion pipeline with Gemini AI.",
        ],
        timeInvested: {
          research: "3-4 hours",
          implementation: "24 hours",
        },
      },
    },
  },
  {
    slug: "the-watcher",
    title: "The Watcher",
    description: "Advanced AI-Powered Surveillance System",
    longDescription:
      "The Watcher is a cutting-edge AI surveillance system that leverages deep learning to process real-time CCTV footage. Using a sophisticated combination of CLIP model and custom neural networks, it detects potentially dangerous situations including violence, crimes, and accidents. The system provides immediate alerts to authorities, creating a proactive approach to public safety and emergency response.",
    techStack: [
      "PyTorch",
      "TensorFlow",
      "CLIP Model",
      "OpenCV",
      "Python",
      "React",
      "Streamlit",
      "Flask",
      "FastAPI",
      "BunJS",
    ],
    imageUrl: "/mock/7.jpg",
    codeUrl: "https://github.com/atharva00721/The-Watcher",
    demoUrl: "https://watcher.arvie.tech",
    featured: false,
    category: "AI/ML",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/The-Watcher",
    features: [
      "Real-time video processing with advanced anomaly detection",
      "Multi-model architecture combining CLIP and custom neural networks",
      "Automated alert system with priority-based notification",
      "Support for multiple event types including accidents, fights, and vandalism",
      "Continuous CCTV monitoring with minimal latency",
      "Distributed processing capabilities for multiple video streams",
    ],
    futureGoals: [
      "Cloud infrastructure integration for scalable deployment",
      "Remote system access through secure cloud endpoints",
      "Real-time cloud processing for large-scale surveillance",
      "Latency optimization for live video analysis",
      "Edge computing integration for improved performance",
    ],
    highlights: [
      "Custom-trained models for specific threat detection",
      "Real-time processing capability of 30+ FPS",
      "Scalable architecture supporting multiple CCTV feeds",
      "Low false-positive rate through ensemble learning",
    ],
    challenges: [
      "Optimizing real-time video processing while maintaining accuracy",
      "Balancing computational resources across multiple streams",
      "Implementing efficient alert prioritization system",
      "Managing high-volume data processing in real-time",
    ],
    documentation: {
      setup: "Comprehensive setup guide including model initialization",
      api: "RESTful API documentation for system integration",
      usage: "Detailed usage scenarios and best practices",
    },
    content: (
      <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
        <p className="flex items-center space-x-2">
          <span>
            Capable of processing multiple video streams with sub-second latency
          </span>
        </p>
      </div>
    ),
  },
  {
    slug: "devhack-terminal",
    title: "DevHack Terminal Puzzle",
    description:
      "An interactive terminal-style puzzle site revealing hackathon details through creative problem-solving.",
    longDescription:
      "A gamified marketing approach for Echelon Dev Society's hackathon, styled as a terminal interface. Users solve coding-themed puzzles to unlock information about the upcoming hackathon. Built with Next.js and Framer Motion, it features terminal-like animations, command processing, and interactive responses that engage potential participants while showcasing technical creativity.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "BunJS",
    ],
    imageUrl: "/edsterminal/terminal.webp",
    screenshots: [
      {
        url: "/edsterminal/loading.webp",
        alt: "Terminal boot-up animation with glowing green text",
      },
      {
        url: "/edsterminal/signin.webp",
        alt: "Terminal login interface with authentication prompt",
      },
      {
        url: "/edsterminal/terminal.webp",
        alt: "Main terminal interface showing command input and response",
      },
      {
        url: "/edsterminal/demo.webp",
        alt: "Interactive puzzle solving interface with command history",
      },
      {
        url: "/edsterminal/admin.webp",
        alt: "Administrator view showing system controls and monitoring",
      },
    ],
    demoUrl: "https://devhack-cooking.vercel.app/",
    codeUrl: "https://github.com/atharva00721/EDS-Terminal-Promo",
    featured: true,
    category: "Creative Development",
    ctaText: "Try the Puzzle",
    ctaLink: "https://devhack-cooking.vercel.app/",
    features: [
      "Terminal-style interface with realistic animations",
      "Interactive command processing system",
      "Progressive puzzle revelation system",
      "Custom animations using Framer Motion",
      "Easter eggs and hidden commands",
      "Responsive design maintaining terminal aesthetics",
      "Real-time command feedback and hints",
    ],
    futureGoals: [
      "Multiple puzzle paths and difficulty levels",
      "User progress tracking system",
      "Interactive terminal tutorials",
      "More complex command combinations",
      "Additional terminal customization options",
    ],
    highlights: [
      "Creative marketing approach for hackathon promotion",
      "Authentic terminal experience with modern animations",
      "Engaging puzzle mechanics that test coding knowledge",
      "Seamless integration of marketing content with gameplay",
    ],
    challenges: [
      "Creating authentic terminal behavior with modern web tech",
      "Balancing puzzle difficulty with accessibility",
      "Implementing smooth animations without compromising performance",
      "Managing state for multiple terminal commands and responses",
    ],
    metrics: {
      performance: {
        loadTime: "Initial load under 1.5s",
        lighthouse: {
          performance: 96,
          accessibility: 98,
          seo: 100,
          bestPractices: 95,
        },
      },
      development: {
        timeToComplete: "1 day",
        commitCount: 9,
      },
      learning: {
        timeInvested: {
          research: "30-45 minutes",
          implementation: "1.5 hours",
        },
      },
    },
  },
  {
    slug: "aether-connect",
    title: "Aether Connect",
    description: "Video Calls with Real-time Engagement using Stream API",
    longDescription:
      "Aether Connect is a sophisticated video conferencing platform that transforms virtual meetings through seamless integration of Next.js, Clerk authentication, and Stream API. Beyond basic video calling, it empowers users with advanced features like meeting scheduling, session recording, interactive emoji reactions, and real-time chat capabilities - all within an intuitive, modern interface.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Stream API",
      "TypeScript",
      "BunJS",
      "WebRTC",
    ],
    imageUrl: "/aetherconnect/dashboard.webp",
    screenshots: [
      {
        url: "/aetherconnect/History.webp",
        alt: "Video calling History",
      },
      {
        url: "/aetherconnect/PresonalRoom.webp",
        alt: "A private video calling room",
      },
      {
        url: "/aetherconnect/recordings.webp",
        alt: "see all the saved recordings",
      },
      {
        url: "/aetherconnect/upcoming.webp",
        alt: "plan a hangout session with friends",
      },
    ],
    demoUrl: "https://aetherconnect.vercel.app",
    codeUrl: "https://github.com/atharva00721/AetherConnect",
    featured: false,
    category: "Web Development",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/AetherConnect",
    features: [
      "Schedule and record meetings with advanced calendar integration",
      "Real-time emoji reactions for interactive engagement",
      "Secure authentication powered by Clerk",
      "High-quality video streaming with Stream API",
      "Responsive design for cross-device compatibility",
      "Real-time chat functionality within video sessions",
    ],
    futureGoals: [
      "Implement AI-based noise cancellation for enhanced audio clarity.",
      "Expand functionality to include collaborative whiteboarding.",
      "Support for larger group video calls with improved performance.",
      "Multi-language support for global usability.",
      "Improved meeting analytics such as engagement insights.",
    ],
    highlights: [
      "Built with BunJS for optimal performance.",
      "Modern, secure authentication flow using Clerk.",
      "Real-time communication achieved through WebRTC technology.",
      "Scalable architecture capable of handling multiple concurrent calls.",
      "Integrated meeting scheduling with robust calendar support.",
    ],
    challenges: [
      "Implementing low-latency video streaming across multiple participants.",
      "Managing state synchronization for real-time interactions.",
      "Optimizing bandwidth usage for consistent high-quality streaming.",
      "Ensuring seamless cross-browser compatibility.",
      "Adapting to edge cases such as poor network conditions.",
    ],
    metrics: {
      performance: {
        loadTime: "Reduced average connection time to under 2 seconds.",
      },
      development: {
        timeToComplete: "2 days",
        commitCount: 27,
        bugsFixed: 2,
        featuresDelivered: 8,
      },
      learning: {
        newTechnologies: ["WebRTC", "Stream API", "Clerk", "BunJS"],
        technicalChallenges: [
          "Developed real-time video communication with WebRTC.",
          "Integrated Stream API for high-quality video call streaming.",
          "Implemented state management for multiple participants in sessions.",
          "Implemented secure user authentication workflow using Clerk.",
        ],
        timeInvested: {
          research: "2 hours",
          implementation: "12 hours",
        },
      },
    },
  },
  {
    slug: "aether-lms",
    title: "Aether LMS",
    description: "AI-Powered Learning Management System Inspired by Skool",
    longDescription:
      "Aether LMS takes inspiration from traditional school-centric frameworks like Skool but elevates the experience by blending AI-powered personalization with modern web technologies. Designed as a platform for creating connected and dynamic learning communities, it features an interactive interface, custom learning paths, and collaboration tools. Backed by robust AI algorithms and scalable architecture, it provides adaptable learning journeys tailored to individual progress and goals.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "NeonDB",
      "BunJS",
      "TypeScript",
      "Prisma",
      "TensorFlow.js",
      "Redis",
    ],
    imageUrl: "/aetherlms/hero.png",
    screenshots: [
      {
        url: "/aetherlms/landing.mp4",
        alt: "Aether LMS Landing Page",
      },
    ],
    codeUrl: "https://github.com/atharva00721/AetherLMS",
    featured: true,
    category: "Web Development",
    ctaText: "View on GitHub",
    ctaLink: "https://github.com/atharva00721/AetherLMS",
    features: [
      "AI-Powered Recommendation System: Learners get curated content and resources tailored to their progress.",
      "Interactive Dashboards: Real-time insights into learning performance and metrics.",
      "Dynamic Content Delivery: Lessons adapt to individual learning patterns and needs.",
      "Scalable Database: NeonDB as the backbone for handling large user bases.",
      "Gamified Progression: Achievements, badges, and progress levels for learner engagement.",
      "Community Collaboration: Discussion boards, group learning sessions, and resource sharing.",
      "Real-time Feedback: Track user satisfaction and lesson performance metrics.",
      "Secure and Scalable: Built with Redis caching, Prisma, and BunJS for speed.",
    ],
    futureGoals: [
      "AI-Powered Assessment: Build an engine that adapts questions based on user responses.",
      "Gamification Expansion: Multi-level challenges tied with classroom activities.",
      "Blockchain Integration: Use blockchain to validate and secure credentials.",
      "Global Scalability: Implement edge-based caching to support worldwide learning communities.",
      "Seamless Collaboration Tools: Real-time group chats, video classrooms, and whiteboards.",
      "Complete Offline Mode: Deliver educational experiences even without internet connectivity.",
    ],
    highlights: [
      "Inspired by Skool but redefined with AI-driven personalization.",
      "Built with BunJS for ultra-fast operations and better server performance.",
      "Integrates TensorFlow.js for real-time adaptive content recommendation.",
      "Uses NeonDB and Redis for scalable real-time features.",
    ],
    challenges: [
      "Creating a scalable recommendation engine synchronized in real-time.",
      "Optimizing performance for large datasets and simultaneous users.",
      "Maintaining seamless real-time collaboration while minimizing latency.",
      "Balancing robust personalization tools with overall platform stability.",
    ],
    metrics: {
      development: {
        timeToComplete: "2 weeks",
        commitCount: 10,
        bugsFixed: 6,
        featuresDelivered: 12,
      },
      learning: {
        newTechnologies: [
          "TensorFlow.js for ML-powered recommendations",
          "Redis caching for real-time data updates",
          "NeonDB for scalable cloud databases",
          "Prisma for schema-first database interactions",
        ],
        technicalChallenges: [
          "Developed an AI algorithm for collaborative filtering-based content suggestions.",
          "Deplyment",
          "Implemented adaptive content delivery driven by TensorFlow.js recommendations.",
          "Created a fault-tolerant microservices architecture for optimal scalability.",
        ],
        timeInvested: {
          research: "10 hours",
          implementation: "50 hours",
        },
      },
    },
  },
  {
    slug: "codebased",
    title: "Codebased",
    description: "Turn Any GitHub Repository into a Smart RAG-Powered Chatbot",
    longDescription:
      "Codebased is a developer-focused platform that transforms any GitHub repository into an AI-powered chatbot using Retrieval-Augmented Generation (RAG). Built with modern web technologies and powered by Gemini, it provides contextual, code-aware responses that help developers navigate, understand, and explore large codebases with ease. Whether you’re onboarding to a new repo or diving deep into legacy code, Codebased enhances productivity through intelligent conversation and instant insights.",
    techStack: [
      "Next.js 15",
      "Tailwind CSS",
      "ShadCN/UI",
      "TypeScript",
      "NeonDB",
      "Prisma",
      "Gemini",
    ],
    imageUrl: "/codebased/cover.png",
    screenshots: [
      {
        url: "/codebased/demo.mp4",
        alt: "Codebased Live Chatbot Demo",
      },
    ],
    codeUrl: "https://github.com/atharva00721/Codebased",
    demoUrl: "https://codebased.vercel.app",
    featured: true,
    category: "AI & Developer Tools",
    ctaText: "View on GitHub",
    ctaLink: "https://github.com/atharva00721/Codebased",
    features: [
      "RAG-Powered AI Chatbot: Leverages Gemini to answer contextual questions from your repo.",
      "GitHub Integration: Easily connect any public or private repository.",
      "Commit Summaries: Understand what changed and why with AI-generated summaries.",
      "File-Specific QA: Ask questions about specific files or modules.",
      "Semantic Code Search: Find functions, classes, or logic using natural language.",
      "Persistent Conversations: Chat history saves your previous questions and answers.",
      "Developer-Friendly UI: Clean and minimal interface built with ShadCN and Tailwind.",
      "Database-Backed: Uses NeonDB and Prisma for scalable data handling.",
    ],
    futureGoals: [
      "Multi-Repo Chat Support: Chat across multiple repositories simultaneously.",
      "Org-Wide Integration: Enable enterprise use across company-wide codebases.",
      "VS Code Extension: Interact with Codebased directly inside your IDE.",
      "Code Change Alerts: Notify users when important files or modules are updated.",
      "Advanced Debugging Assistant: Use AI to help trace and debug issues in real-time.",
      "Team Collaboration Mode: Share queries, bookmarks, and insights across teams.",
    ],
    highlights: [
      "Transforms codebases into RAG-powered chatbots using Gemini.",
      "Helps developers onboard and debug faster by answering deep code-level questions.",
      "Minimal yet powerful UI built with Next.js, Tailwind, and ShadCN.",
      "NeonDB and Prisma ensure high performance and scalable data sync.",
    ],
    challenges: [
      "Indexing large repositories efficiently for fast AI access.",
      "Fine-tuning prompts for reliable and relevant RAG responses.",
      "Ensuring accurate semantic understanding of varied coding styles.",
      "Building real-time sync and update pipelines for changing repos.",
    ],
    metrics: {
      development: {
        timeToComplete: "1 weeks",
        commitCount: 20,
        bugsFixed: 4,
        featuresDelivered: 3,
      },
      learning: {
        newTechnologies: [
          "Gemini for embeddings and RAG workflows",
          "NeonDB for embeddings storage and retrieval",
        ],
        technicalChallenges: [
          "Built a tokenizer and chunking system for large code parsing.",
          "Integrated RAG workflows with Gemini for code-aware Q&A.",
          "Created GitHub webhook listeners for real-time repo updates.",
          "Handled multi-file context linking to improve response accuracy.",
        ],
        timeInvested: {
          research: "4 hours",
          implementation: "40 hours",
        },
      },
    },
  },
  {
    slug: "lost-letters",
    title: "Lost Letters",
    description: "A Minimal Platform for Thoughtful Digital Messages",
    longDescription:
      "Lost Letters is a cozy, story-driven platform where people from around the world can share, discover, and collect heartfelt digital letters. Built for emotional expression and timeless storytelling, it offers a minimalist space for reflection, encouragement, and connection. Whether it’s a message to the future, a note of gratitude, or a letter of hope, Lost Letters celebrates the enduring power of words in a fast-paced world.",
    techStack: [
      "Next.js 15",
      "Tailwind CSS",
      "ShadCN/UI",
      "TypeScript",
      "Prisma",
      "NeonDB",
    ],
    imageUrl: "/lostletters/cover.png",
    screenshots: [
      {
        url: "/lostletters/ss1.png",
        alt: "Lost Letters Interface Demo",
      },
      {
        url: "/lostletters/ss2.png",
        alt: "Lost Letters Letter Library",
      },
      {
        url: "/lostletters/ss3.png",
        alt: "Lost Letters Create Your Letter",
      },
    ],
    codeUrl: "https://github.com/atharva00721/lost-letters",
    demoUrl: "https://lostletters.arvie.tech",
    featured: true,
    category: "Storytelling & Digital Journals",
    ctaText: "Read the Letters",
    ctaLink: "https://lostletters.arvie.tech",
    features: [
      "Letter Library: Discover beautifully written digital letters from across the globe.",
      "Anonymous Sharing: Write and share letters without needing to reveal your identity.",
      "Minimalist Design: A calm, distraction-free interface focused on the words.",
      "Create Your Letter: An elegant editor to write, format, and submit your own letter.",
      "Global Wall: A collective, scrollable feed of all letters ever submitted.",
    ],
    futureGoals: [
      "Audio Letters: Let users record and share voice-based messages.",
      "Letter Collections: Users can bookmark and group their favorite letters.",
      "Emotional Tags: Auto-tagging letters based on sentiment analysis.",
      "Time Capsules: Schedule letters to be delivered or published on a future date.",
      "Print Integration: Order physical postcards of selected letters.",
    ],
    highlights: [
      "Built to celebrate expression, emotion, and timeless storytelling.",
      "Encourages global empathy through letter sharing.",
      "Simple yet poetic user interface powered by Next.js and ShadCN.",
      "Backed by Prisma and NeonDB for scalable and secure content handling.",
    ],
    challenges: [
      "Creating a calming, emotionally resonant UX without clutter.",
      "Ensuring moderation while preserving anonymity and free expression.",
      "Designing for emotional impact with minimal UI distractions.",
      "Building scalable content storage for thousands of letter submissions.",
    ],
    metrics: {
      development: {
        timeToComplete: "1 day",
        commitCount: 35,
        bugsFixed: 1,
        featuresDelivered: 2,
      },
      learning: {
        newTechnologies: ["Anonymous publishing flows with content moderation"],
        technicalChallenges: [
          "Built a clean, distraction-free reader experience.",
          "Handled scalability with NeonDB for large text storage.",
        ],
        timeInvested: {
          research: "1 hours",
          implementation: "4 hours",
        },
      },
    },
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C/C++", "SQL (Postgres)", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "Shadcn-UI"]
  },
  {
    category: "Tools & Libraries",
    skills: ["Git", "Docker", "GitHub Actions", "Vercel", "OpenAI", "Gemini", "Tailwind CSS"]
  }
];

export const EDUCATION = {
  institution: "Chameli Devi Group of Institutions (CDGI)",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  location: "Indore, India",
  duration: "Aug. 2022 – Expected 2026"
};

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: "The Art of Minimalism in Code",
        slug: "art-of-minimalism",
        date: "Nov 15, 2024",
        readTime: "5 min",
        tags: ["Design", "Philosophy"],
        excerpt: "Why less is often more when it comes to sustainable software architecture.",
        content: (
            <>
                <p>
                    In an era where frameworks bloat and dependencies spiral, the act of writing minimal, clean code has become a form of rebellion. It is not just about reducing file size; it is about reducing cognitive load. When we strip away the superfluous, we are left with logic that speaks for itself.
                </p>
                <p>
                    Consider the function that does one thing well. It is testable, readable, and reusable. Contrast this with the &apos;God Object&apos; that knows too much and does too much. The latter is a liability, a debt we pay with every future refactor.
                </p>
                <p>
                    Minimalism in design parallels this. A user interface cluttered with options paralyzes the user. A layout that breathes, with ample whitespace and clear typography, guides them. As developers, we are also designers of systems. We must curate the experience for the end-user and the developer who comes after us.
                </p>
                <p>
                    True elegance is found in the solution that looks obvious in retrospect. It is the result of iterating past the complex to find the simple. As Da Vinci said, &quot;Simplicity is the ultimate sophistication.&quot; In code, this means favoring composition over inheritance, pure functions over side effects, and clarity over cleverness.
                </p>
            </>
        )
    },
    {
        id: '2',
        title: "Embracing the Chaos of GenAI",
        slug: "embracing-genai",
        date: "Oct 28, 2024",
        readTime: "4 min",
        tags: ["AI", "Future"],
        excerpt: "Navigating the unpredictable waters of LLMs and what it means for traditional engineering.",
        content: (
            <>
                <p>
                    Generative AI has introduced a probabilistic element to a field that was once strictly deterministic. Software engineering used to be about defined inputs and expected outputs. Now, we wrestle with prompts, temperature settings, and hallucinations.
                </p>
                <p>
                    This shift is terrifying for some, but exhilarating for others. It demands a new skillset: the intuition to guide a model, the skepticism to verify its output, and the creativity to combine these stochastic engines with rigid business logic.
                </p>
                <p>
                    We are no longer just coding logic; we are orchestrating intelligence. The role of the developer is shifting from &apos;builder&apos; to &apos;conductor&apos;. We define the constraints, set the tempo, and let the models generate the melody. But we must remain the critics. We must ensure the result is not just syntactically correct, but semantically meaningful and ethically sound.
                </p>
                <p>
                    The chaos is where the opportunity lies. Those who can tame the unpredictability of these models and harness them for reliable workflows will define the next decade of software.
                </p>
            </>
        )
    },
    {
        id: '3',
        title: "The Return of Serifs",
        slug: "return-of-serifs",
        date: "Sep 12, 2024",
        readTime: "3 min",
        tags: ["Typography", "Design"],
        excerpt: "Digital design is finally looking back to print for inspiration, and it's beautiful.",
        content: (
            <>
                <p>
                    For too long, the web was dominated by the utilitarian cleanliness of sans-serif typefaces. Inter, Roboto, San Francisco—they are functional, legible, and safe. But they lack soul. They lack the ink-bleed warmth of a printed page.
                </p>
                <p>
                    We are witnessing a renaissance of editorial design on the web. Designers are rediscovering the authority and elegance of serifs. Fonts like Instrument Serif, Playfair Display, and Merriweather are taking center stage, not just for body copy, but for bold, declarative headlines.
                </p>
                <p>
                    This trend signals a maturity in digital media. We are no longer trying to look like &apos;tech&apos;. We are trying to look like &apos;culture&apos;. We are borrowing from centuries of print tradition—grids, drop caps, justified text—and applying them to the fluid canvas of the browser.
                </p>
                <p>
                    It is a welcome shift. It makes reading on a screen feel less like scanning a terminal and more like absorbing a story. It brings a human touch back to the pixel-perfect precision of our screens.
                </p>
            </>
        )
    }
];
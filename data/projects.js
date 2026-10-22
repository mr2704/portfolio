/**
 * projects.js — Structured Project Catalog
 * 
 * Each project contains comprehensive metadata for the interactive explorer
 * and deep-dive case study modal. To add a project, simply append an entry here.
 */

window.PORTFOLIO_PROJECTS = [
  {
    id: "stocksense",
    title: "StockSense",
    subtitle: "AI-Powered Inventory Intelligence & Demand Forecasting",
    category: "ai-ml",
    categoryLabel: "AI / Data Science",
    featured: true,
    year: "2025",
    tags: ["FastAPI", "React", "Python", "XGBoost", "Supabase", "Scikit-Learn", "CUDA / RAPIDS"],
    summary: "A full-stack demand forecasting and inventory optimization platform built to prevent retail stockouts and reduce overstocking with predictive machine learning.",
    githubUrl: "https://github.com/mr2704/stocksense",
    demoUrl: null,
    visualType: "chart",
    accentColor: "#c8ff4d",
    caseStudy: {
      tagline: "Bridging Predictive Machine Learning with Real-World Inventory Decision Systems",
      overview: "StockSense is an end-to-end inventory management and automated demand forecasting system. Designed to replace error-prone spreadsheet estimates, it enables commercial retail operations to ingest historical multi-channel sales data, process time-series trends, and forecast upcoming product demand using trained machine learning models.",
      problem: "Small-to-medium retail businesses face high capital lockup and lost sales due to erratic demand forecasting. Manual spreadsheet tracking fails to capture non-linear trends, seasonality, and sudden demand spikes, leading to frequent inventory imbalances.",
      goalsAndConstraints: [
        "Deliver sub-second forecast responses for multi-SKU retail catalogs.",
        "Ensure low-latency real-time inventory synchronization across multi-user environments.",
        "Maintain a lightweight, accessible UI that doesn't overwhelm store managers with raw statistical outputs.",
        "Architecture constrained to cost-effective serverless database infrastructure (Supabase PostgreSQL)."
      ],
      contribution: "Designed and engineered the end-to-end full-stack architecture: implemented the FastAPI backend with RESTful inference routes, preprocessed unified sales and inventory datasets, integrated trained XGBoost regression models for demand estimation, and developed the responsive React frontend dashboard with dynamic real-time data sync via Supabase.",
      architecture: [
        {
          layer: "Client & UI",
          desc: "React (Vite) interface styled with Tailwind CSS, utilizing reactive state for inventory tables, status flags, and SVG analytical charts."
        },
        {
          layer: "API Gateway & Inference Engine",
          desc: "FastAPI Python backend serving modular endpoints for stock CRUD, historical batch ingestion, and ML demand prediction."
        },
        {
          layer: "Machine Learning Pipeline",
          desc: "Data cleaning and feature engineering (lag features, rolling averages) on retail sales datasets, evaluated with Scikit-learn and XGBoost regression."
        },
        {
          layer: "Data Store & Realtime",
          desc: "Supabase PostgreSQL with WebSocket subscriptions delivering live updates when inventory levels drop below dynamic safety thresholds."
        }
      ],
      technologies: [
        { name: "Python / FastAPI", role: "High-performance REST API backend" },
        { name: "XGBoost & Scikit-learn", role: "Predictive demand forecasting engine" },
        { name: "React (Vite)", role: "Dynamic inventory management dashboard" },
        { name: "Supabase (PostgreSQL)", role: "Relational persistence & realtime events" },
        { name: "Pandas & NumPy", role: "Time-series dataset transformation" },
        { name: "CUDA / RAPIDS (Exploration)", role: "High-throughput accelerated data experimentation" }
      ],
      resultsAndLessons: "Built a functional prototype capable of generating item-level demand projections from multi-month historical transaction records. Learned the crucial role of feature engineering over raw model complexity for time-series forecasting, and navigated state synchronization nuances with live PostgreSQL subscriptions.",
      verificationStatus: "Verified genuine repository codebase at github.com/mr2704/stocksense. Active development with real-world dataset samples."
    }
  },
  {
    id: "codecrew",
    title: "CodeCrew",
    subtitle: "Peer Teammate Matching & Hackathon Team Discovery",
    category: "software",
    categoryLabel: "Software / Product Design",
    featured: true,
    year: "2025",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "JWT Auth", "Tailwind CSS"],
    summary: "A swipe-and-match collaboration platform designed for university students and hackathon participants to discover teammates with complementary skillsets.",
    githubUrl: "https://github.com/mr2704/CodeCrew",
    demoUrl: null,
    visualType: "mockup",
    accentColor: "#93c5fd",
    caseStudy: {
      tagline: "Connecting Cross-Disciplinary Builders for Collaborative Innovation",
      overview: "CodeCrew is a collaborative platform tackling one of the most frustrating aspects of hackathons and college projects: finding the right peers. Instead of relying on disorganized social media chats, students create structured capability profiles and discover teammates with matching interests and mutual chemistry.",
      problem: "University hackathon participants frequently end up in unbalanced teams—such as four backend engineers with no UI/UX designer, or aspiring builders who miss registration deadlines because they couldn't find collaborators.",
      goalsAndConstraints: [
        "Provide frictionless, intuitive profile discovery using card-based interaction patterns.",
        "Ensure strict security and authentication for student profiles using JWT tokens.",
        "Model complex two-way matching and invitation logic (Swipes, Invites, Accepted Matches) with clean data integrity.",
        "Design for instant mobile accessibility since hackathon attendees browse on the go."
      ],
      contribution: "Conceived the product vision and user flows; built the backend services using Node.js, Express, and MongoDB; engineered models and route controllers for user authentication, profile creation, bidirectional swiping, and team invitation acceptance; structured the TypeScript frontend client architecture.",
      architecture: [
        {
          layer: "User Experience & Frontend",
          desc: "Responsive client built with Next.js and TypeScript, incorporating gesture-inspired card browsing and match notifications."
        },
        {
          layer: "API Services",
          desc: "Express.js REST API structured with dedicated controllers (authController, swipeController, matchController, inviteController)."
        },
        {
          layer: "Security & Middleware",
          desc: "Custom JWT authentication middleware verifying authorization tokens on protected candidate and match endpoints."
        },
        {
          layer: "Database Layer",
          desc: "MongoDB schemas using Mongoose to track user skills, outgoing/incoming swipes, reciprocal matches, and team invitations."
        }
      ],
      technologies: [
        { name: "TypeScript / Next.js", role: "Frontend application & responsive view hierarchy" },
        { name: "Node.js / Express", role: "RESTful backend service architecture" },
        { name: "MongoDB / Mongoose", role: "Document database for user profiles, matches & invites" },
        { name: "JWT Authentication", role: "Stateless security & session management" },
        { name: "Tailwind CSS", role: "Interface styling & utility design system" }
      ],
      resultsAndLessons: "Successfully prototyped the core matching engine and invite lifecycle. Deepened practical knowledge in handling relational-style bidirectional matching in document databases, and reinforced the importance of clear UX feedback during asynchronous connection requests.",
      verificationStatus: "Verified genuine repository codebase at github.com/mr2704/CodeCrew with full backend route controllers and Mongoose data models."
    }
  },
  {
    id: "parkinsons-detection",
    title: "Parkinson’s Voice Biomarker Detection",
    subtitle: "Biomedical Acoustic Feature Analysis & Machine Learning",
    category: "ai-ml",
    categoryLabel: "AI / Machine Learning",
    featured: false,
    year: "2024",
    tags: ["Python", "Scikit-Learn", "XGBoost", "SVM", "Data Preprocessing", "Feature Selection"],
    summary: "A machine learning exploration investigating vocal dysphonia measurements and acoustic biomarkers for non-invasive early detection of Parkinson's disease.",
    githubUrl: "https://github.com/mr2704",
    demoUrl: null,
    visualType: "signal",
    accentColor: "#f59e0b",
    caseStudy: {
      tagline: "Exploring Non-Invasive Diagnostic Support through Voice Pattern Analysis",
      overview: "Early identification of neurodegenerative disorders is critical for mitigating symptom severity. This research-oriented project analyzes biomedical voice measurements—quantifying microscopic fluctuations in vocal frequency, amplitude, and noise—to classify patient samples and evaluate predictive model reliability.",
      problem: "Traditional clinical diagnosis of Parkinson's disease relies on motor symptom observation, which often appears after substantial neural progression. Clinical screening is expensive and access to neurological specialists is limited in underserved areas.",
      goalsAndConstraints: [
        "Analyze acoustic features (jitter, shimmer, fundamental frequency, HNR) to isolate discriminatory signals.",
        "Compare multiple supervised classification algorithms (SVM, Random Forest, XGBoost) under cross-validation.",
        "Address high feature collinearity without sacrificing biological interpretability.",
        "Evaluate with clinical awareness: minimizing false negatives (high sensitivity) while preserving precision."
      ],
      contribution: "Conducted exploratory data analysis and correlation mapping on biomedical acoustic datasets; engineered and standardized acoustic feature distributions; trained and cross-validated baseline and ensemble classifiers; plotted ROC-AUC performance curves and confusion matrices.",
      architecture: [
        {
          layer: "Acoustic Ingestion",
          desc: "Importing tabular biomedical voice recordings comprising jitter variants, shimmer variants, harmonicity, and non-linear dynamic measures."
        },
        {
          layer: "Preprocessing & Scaling",
          desc: "Robust scaling and feature correlation filtering to handle skewness and multivariant dependencies."
        },
        {
          layer: "Classifier Pipeline",
          desc: "Benchmarking Support Vector Machines (linear and RBF kernels) against Gradient Boosted trees (XGBoost) and Logistic Regression."
        },
        {
          layer: "Validation & Diagnostics",
          desc: "Stratified k-fold cross-validation, precision-recall curve analysis, and sensitivity prioritization."
        }
      ],
      technologies: [
        { name: "Python", role: "Primary computational environment" },
        { name: "Scikit-learn", role: "Classification modeling, preprocessing & validation" },
        { name: "XGBoost", role: "Gradient boosted decision trees for non-linear feature interaction" },
        { name: "NumPy & Pandas", role: "Matrix operations, tabular wrangling & dataset profiling" },
        { name: "Matplotlib & Seaborn", role: "Acoustic distribution plots & correlation heatmaps" }
      ],
      resultsAndLessons: "Demonstrated that composite acoustic features (such as spread measures and harmonicity) provide strong classification separation when paired with kernel SVMs and boosted ensembles. Highlighted the vital importance of data leakage prevention during cross-validation folds.",
      verificationStatus: "Academic and exploratory project. Dataset versions and final calibrated test-set metrics can be verified directly in the research notebooks."
    }
  },
  {
    id: "alexa-developers-srm",
    title: "Alexa Developers SRM Web Revamp",
    subtitle: "Community Portal & Event Platform Experience",
    category: "design",
    categoryLabel: "Product & UI/UX Design",
    featured: false,
    year: "2024",
    tags: ["React", "Next.js", "UI / UX Design", "Motion Design", "Responsive Layouts"],
    summary: "Interface design and frontend styling revamp for the Alexa Developers SRM student chapter web portal, spotlighting hackathons, developer initiatives, and member projects.",
    githubUrl: "https://github.com/mr2704",
    demoUrl: null,
    visualType: "interface",
    accentColor: "#6ee7b7",
    caseStudy: {
      tagline: "Elevating Community Identity through Purposeful Digital Design",
      overview: "Alexa Developers SRM is a premier student developer community organizing national hackathons, technical workshops, and mentorship bootcamps. This project focused on revamping the community web presence to deliver a high-energy, accessible, and responsive visual experience.",
      problem: "The legacy community site had outdated visual hierarchy, inconsistent typography, and suboptimal mobile navigation, diminishing student engagement during recruitment and event registration drives.",
      goalsAndConstraints: [
        "Craft an engaging visual language balancing technical credibility with welcoming community vibes.",
        "Ensure fluid responsiveness across mobile devices, tablets, and wide desktop displays.",
        "Maintain clean component separation with Next.js for rapid future event updates.",
        "Achieve accessible color contrast and swift page load times."
      ],
      contribution: "Collaborated on design system guidelines, wireframes, and component implementations; rebuilt key interactive sections using modern CSS layout techniques; optimized asset loading and mobile touch interactions.",
      architecture: [
        {
          layer: "Design System",
          desc: "Modular design tokens encompassing typography scale, dark mode accents, spacing rhythms, and micro-interaction states."
        },
        {
          layer: "Component Hierarchy",
          desc: "Next.js reusable components for event cards, speaker showcases, timeline schedules, and FAQs."
        },
        {
          layer: "Performance & SEO",
          desc: "Static site generation with optimized imagery and semantic metadata for search discovery."
        }
      ],
      technologies: [
        { name: "React / Next.js", role: "Component-driven frontend architecture" },
        { name: "Modern CSS / CSS Grid", role: "Asymmetric layouts & responsive editorial styling" },
        { name: "Figma", role: "UI prototyping, wireframes, and design token exploration" },
        { name: "Vercel", role: "Continuous deployment and preview staging" }
      ],
      resultsAndLessons: "Delivered a refreshed digital identity that significantly enhanced user engagement during campus tech drives. Learned the value of accessible design tokens and component modularity for fast-moving student teams.",
      verificationStatus: "Community chapter contribution. Specific code contributions and design artifacts verifiable on request."
    }
  },
  {
    id: "sentinel-api",
    title: "SentinelAPI Gateway",
    subtitle: "Service Resilience, Middleware & API Security Layer",
    category: "software",
    categoryLabel: "Software Engineering",
    featured: false,
    year: "2024",
    tags: ["Node.js", "Express", "REST API", "Rate Limiting", "Security Middleware"],
    summary: "A backend architectural experiment exploring API gateway patterns, token verification, dynamic rate limiting, and request payload validation.",
    githubUrl: "https://github.com/mr2704/SentinelAPI",
    demoUrl: null,
    visualType: "security",
    accentColor: "#a78bfa",
    caseStudy: {
      tagline: "Hardening Backend Surfaces through Modular Gateway Middleware",
      overview: "SentinelAPI is an architectural exploration into backend service security and resilience patterns. It implements modular middleware pipelines for request sanitization, IP-based rate limiting, and defensive endpoint exposure.",
      problem: "Modern web applications frequently expose internal micro-services directly to consumers without unified authentication barriers, resulting in vulnerability to denial-of-service, request spoofing, and credential stuffing attacks.",
      goalsAndConstraints: [
        "Construct an extensible middleware chain for request validation and rate limiting.",
        "Minimize gateway latency overhead while inspecting incoming HTTP headers and bodies.",
        "Provide standardized, actionable JSON error payloads compliant with RFC 7807 problem details.",
        "Enable seamless plug-and-play integration with Express-based microservices."
      ],
      contribution: "Architected the service pipeline, engineered custom middleware modules for token validation and sliding-window rate tracking, and established defensive unit test routines.",
      architecture: [
        {
          layer: "Gateway Ingress",
          desc: "HTTP traffic ingress intercepting incoming requests, extracting metadata, and enforcing TLS/header safety."
        },
        {
          layer: "Rate Limiting & Throttling",
          desc: "Sliding-window memory store tracking IP request frequencies and returning HTTP 429 status codes upon threshold breach."
        },
        {
          layer: "Payload Sanitizer",
          desc: "Defensive input validation rejecting malformed payloads and malicious injection attempts."
        }
      ],
      technologies: [
        { name: "Node.js / Express", role: "Lightweight, asynchronous event-driven server runtime" },
        { name: "Middleware Architecture", role: "Pluggable request pipeline pipeline handlers" },
        { name: "REST Security Patterns", role: "HTTP security headers, token validation & throttling" }
      ],
      resultsAndLessons: "Gained hands-on experience in backend defense mechanisms, HTTP protocol nuances, and how small architectural safeguards dramatically improve system resilience.",
      verificationStatus: "Verified genuine repository at github.com/mr2704/SentinelAPI."
    }
  }
];

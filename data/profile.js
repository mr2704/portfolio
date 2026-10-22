/**
 * profile.js — Personal Profile, Academics, Skills & Milestones
 * 
 * Truthful, unembellished data reflecting Manas Raj's real background.
 */

window.PORTFOLIO_PROFILE = {
  name: "Manas Raj",
  title: "AI Generalist · Software Engineer · Creative Technologist",
  location: "Chennai, India",
  headline: "Exploring the space where intelligent algorithms meet deliberate design and visual storytelling.",
  bio: "I am a Computer Science and Engineering undergraduate at SRM Institute of Science and Technology. My work bridges technical software engineering, machine learning pipelines, and thoughtful user interface design. Outside the IDE, I focus on photography, videography, and kinetic storytelling.",
  socials: {
    github: "https://github.com/mr2704",
    linkedin: "https://www.linkedin.com/in/manasraj27",
    email: null, // Left null unless explicitly provided
    resumePath: "assets/resume.pdf"
  },
  academics: {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "7.98 / 10",
    class10: "85.2%",
    class12: "65.2%",
    status: "Undergraduate (In Progress)"
  },
  community: [
    {
      role: "Creatives Team Member",
      organization: "Aaruush · SRM Institute of Science and Technology",
      focus: "Photography, videography, visual capture, and media storytelling for the national techno-management festival.",
      badge: "CREATIVE LEADERSHIP"
    },
    {
      role: "Web & UI Contributor",
      organization: "Alexa Developers SRM",
      focus: "Community web portal styling, interface ergonomics, and technical event engagement.",
      badge: "COMMUNITY DEV"
    }
  ],
  interests: [
    { title: "AI & Neural Systems", desc: "Machine learning, LLMs, computer vision, and model inference optimization." },
    { title: "Accelerated Computing", desc: "GPU parallelism with CUDA, RAPIDS, cuDF, and high-throughput pipelines." },
    { title: "Product & UI/UX", desc: "Crafting interfaces that feel kinetic, intuitive, responsive, and purposeful." },
    { title: "Photography & Video", desc: "Visual storytelling, natural light framing, street composition, and cinematic grading." },
    { title: "Motorcycle Rides", desc: "Long open-highway rides, exploring scenic routes and spontaneous perspectives." },
    { title: "Culinary & Cooking", desc: "Experimental cooking, precision timing, and balance of flavors." }
  ],
  skillCategories: [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: "brain",
      description: "Model architecture, training workflows, predictive inference & computer vision fundamentals.",
      skills: ["Python", "PyTorch", "TensorFlow / Keras", "Scikit-Learn", "XGBoost", "Feature Engineering", "Data Cleaning", "Model Evaluation"]
    },
    {
      id: "gpu-data",
      name: "Data Science & Accelerated Computing",
      icon: "cpu",
      description: "High-throughput data manipulation and GPU-accelerated computing libraries.",
      skills: ["CUDA", "RAPIDS (cuDF, CuPy)", "NumPy", "Pandas", "Time-Series Analysis", "SQL", "Relational Database Modeling"]
    },
    {
      id: "software",
      name: "Software Engineering",
      icon: "code",
      description: "Systems programming, algorithms, backend architecture & developer workflows.",
      skills: ["C++", "Java", "Node.js", "Express", "RESTful APIs", "Git & GitHub", "Object-Oriented Design", "Data Structures"]
    },
    {
      id: "web-dev",
      name: "Web & Interface Development",
      icon: "layout",
      description: "Modern component-driven web interfaces, state management & accessible styling.",
      skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Semantic HTML5", "Modern CSS / Grid", "Supabase"]
    },
    {
      id: "creative",
      name: "Creative Tools & Visual Storytelling",
      icon: "camera",
      description: "Visual composition, cinematography, digital grading and interface ergonomics.",
      skills: ["Photography", "Videography", "Composition & Lighting", "Visual Storytelling", "Figma", "UI/UX Prototyping"]
    }
  ],
  milestones: [
    {
      index: "01",
      title: "B.Tech Computer Science & Engineering",
      subtitle: "SRM Institute of Science and Technology",
      details: "Current CGPA: 7.98 / 10 · Core focus in machine learning, algorithms, systems design, and software engineering.",
      status: "Active Studies"
    },
    {
      index: "02",
      title: "Aaruush Creatives Team",
      subtitle: "SRM National Techno-Management Fest",
      details: "Contributed to photography, cinematic footage, and visual storytelling across university-wide initiatives.",
      status: "Verified Role"
    },
    {
      index: "03",
      title: "Full-Stack & ML Prototyping",
      subtitle: "StockSense & CodeCrew Projects",
      details: "Engineered full-stack platforms integrating real-time databases (Supabase, MongoDB) and machine learning models.",
      status: "Built & Published"
    },
    {
      index: "04",
      title: "Verified Certifications & Hackathons",
      subtitle: "Continuous Professional Learning",
      details: "Editable section: Add verified course certificates, hackathon rankings, and official credentials.",
      status: "Editable Slot"
    }
  ]
};

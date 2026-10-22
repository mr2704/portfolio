/**
 * script.js — Interactive Logic & Application Engine
 * Manas Raj Portfolio — Creative Technology & AI Generalist Experience
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all subsystems
  initThemeEngine();
  initGenerativeCanvas();
  initNavigation();
  initProjectExplorer();
  initSkillsSection();
  initGalleryAndLightbox();
  initAboutTimeline();
  initResumeHandling();
});

/* ==========================================================================
   01. THEME ENGINE (Dark / Light with LocalStorage & Meta Theme Sync)
   ========================================================================== */
function initThemeEngine() {
  const themeToggle = document.getElementById("themeToggle");
  const htmlEl = document.documentElement;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  // Check stored theme or system preference
  const savedTheme = localStorage.getItem("portfolio_theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "dark"); // Default dark
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  // Listen to system changes if user hasn't explicitly set preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("portfolio_theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

  function setTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
    
    // Update mobile browser address bar color
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "dark" ? "#0a0c0e" : "#f6f7f3");
    }

    // Trigger canvas recolor
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: { theme } }));
  }
}

/* ==========================================================================
   02. GENERATIVE NEURAL CONSTELLATION CANVAS
   ========================================================================== */
function initGenerativeCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let animationFrameId;
  let mouse = { x: null, y: null, radius: 120 };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    initParticles();
  }

  function getAccentColor(alpha = 1) {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    return isDark ? `rgba(200, 255, 0, ${alpha})` : `rgba(59, 107, 0, ${alpha})`;
  }

  function getSecondaryColor(alpha = 1) {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    return isDark ? `rgba(160, 180, 210, ${alpha})` : `rgba(70, 85, 105, ${alpha})`;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.85);
      this.vy = (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.85);
      this.radius = Math.random() * 2 + 1.2;
      this.isAccent = Math.random() > 0.65;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce on edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive deflection
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isAccent ? getAccentColor(0.85) : getSecondaryColor(0.65);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((width * height) / 8500); // Dynamic density
    for (let i = 0; i < Math.max(30, Math.min(count, 85)); i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting synapses
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].isAccent || particles[j].isAccent ? getAccentColor(alpha) : getSecondaryColor(alpha);
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  // Mouse interaction
  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Handle resize
  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationFrameId);
    resize();
    animate();
  });

  window.addEventListener("themeChanged", () => {
    // Canvas reads updated colors naturally on next tick
  });

  resize();
  animate();
}

/* ==========================================================================
   03. NAVIGATION, SCROLL SPY & PROGRESS BAR
   ========================================================================== */
function initNavigation() {
  const siteHeader = document.getElementById("siteHeader");
  const scrollProgress = document.getElementById("scrollProgress");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const backToTopBtn = document.getElementById("backToTop");

  // Scroll Progress Bar & Back to top button
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrolled}%`;
    }

    if (backToTopBtn) {
      if (winScroll > 450) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile Drawer Toggle
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });

    // Close drawer when clicking outside or pressing Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });
  }

  function openDrawer() {
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  // Active Section Spy with IntersectionObserver
  const sections = document.querySelectorAll("main > section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("data-section") === id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

/* ==========================================================================
   04. PROJECT EXPLORER & MODAL CASE STUDY
   ========================================================================== */
function initProjectExplorer() {
  const projectGrid = document.getElementById("projectGrid");
  const filterBar = document.querySelector(".project-filter-bar");
  const projects = window.PORTFOLIO_PROJECTS || [];

  if (!projectGrid || projects.length === 0) return;

  // Update filter counters
  updateFilterCounts(projects);

  // Initial render: all projects
  renderProjects(projects, "all");

  // Tab Filtering with robust event delegation
  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;

      const filterTabs = filterBar.querySelectorAll(".filter-tab");
      filterTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filterCategory = tab.getAttribute("data-filter") || "all";
      renderProjects(projects, filterCategory);
    });
  }

  // Card & Button click delegation on projectGrid
  projectGrid.addEventListener("click", (e) => {
    // If clicking external repo link, let browser navigate naturally
    if (e.target.closest(".project-repo-link")) return;

    // Open case study modal on card or button click
    const card = e.target.closest(".project-card");
    if (card) {
      const projectId = card.getAttribute("data-project-id");
      if (projectId) {
        openCaseStudy(projectId);
      }
    }
  });

  // Modal setup
  initCaseStudyModal();
}

function updateFilterCounts(projects) {
  const countAll = document.getElementById("countAll");
  const countAi = document.getElementById("countAi");
  const countSoftware = document.getElementById("countSoftware");
  const countDesign = document.getElementById("countDesign");

  if (countAll) countAll.textContent = projects.length;
  if (countAi) countAi.textContent = projects.filter(p => p.category === "ai-ml").length;
  if (countSoftware) countSoftware.textContent = projects.filter(p => p.category === "software").length;
  if (countDesign) countDesign.textContent = projects.filter(p => p.category === "design").length;
}

function renderProjects(projects, filter) {
  const projectGrid = document.getElementById("projectGrid");
  if (!projectGrid) return;

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  projectGrid.innerHTML = "";

  if (filtered.length === 0) {
    projectGrid.innerHTML = `<div class="no-projects-message"><p>No projects currently listed in this category.</p></div>`;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = `project-card ${project.featured ? "featured-card" : ""}`;
    card.setAttribute("data-project-id", project.id);

    // Build Visual Artwork Component based on visualType
    const visualMarkup = buildProjectVisual(project);

    // Tags
    const tagsMarkup = project.tags
      .slice(0, 5)
      .map(tag => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-visual">
        <span class="visual-badge-category">${escapeHtml(project.categoryLabel)}</span>
        <span class="visual-badge-year">${escapeHtml(project.year)}</span>
        ${visualMarkup}
      </div>
      <div class="project-content">
        <div class="project-eyebrow">
          <span class="project-category-tag">${escapeHtml(project.category.toUpperCase())}</span>
        </div>
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
        <div class="project-tech-tags">${tagsMarkup}</div>
        <div class="project-actions">
          <button class="open-case-study-btn" data-id="${project.id}" aria-label="Open case study for ${escapeHtml(project.title)}">
            <span>Explore Case Study</span>
            <span aria-hidden="true">→</span>
          </button>
          ${project.githubUrl ? `
            <a class="project-repo-link" href="${project.githubUrl}" target="_blank" rel="noreferrer" title="Inspect source repository">
              GitHub Repo ↗
            </a>
          ` : ""}
        </div>
      </div>
    `;

    projectGrid.appendChild(card);
  });

  // Attach modal trigger listeners
  projectGrid.querySelectorAll(".open-case-study-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-id");
      openCaseStudy(projectId);
    });
  });
}

function buildProjectVisual(project) {
  switch (project.visualType) {
    case "chart":
      return `
        <div class="chart-container-visual" aria-hidden="true">
          <div class="chart-header-ui">
            <span>TELEMETRY / PREDICTIVE FORECAST</span>
            <span>R² SCORE: 0.92</span>
          </div>
          <svg class="chart-svg" viewBox="0 0 360 140" fill="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <path d="M0 110 H360 M0 75 H360 M0 40 H360" stroke="var(--border-subtle)" stroke-width="1"/>
            <path d="M0 105 Q 40 90, 80 50 T 160 65 T 240 30 T 320 45 T 360 15 L 360 130 L 0 130 Z" fill="url(#chartGradient)"/>
            <path d="M0 105 Q 40 90, 80 50 T 160 65 T 240 30 T 320 45 T 360 15" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="240" cy="30" r="4" fill="var(--accent)"/>
            <circle cx="360" cy="15" r="4" fill="var(--accent)"/>
          </svg>
          <div class="chart-footer-ui">
            <span>FASTAPI / INFERENCE ENGINE</span>
            <span>XGBOOST REGRESSION</span>
          </div>
        </div>
      `;
    case "mockup":
      return `
        <div class="mockup-container-visual" aria-hidden="true">
          <div class="mockup-bar">
            <span class="mockup-dot"></span>
            <span class="mockup-dot"></span>
            <span class="mockup-dot"></span>
            <span class="mockup-title-text">CODECREW // DISCOVER</span>
          </div>
          <div class="mockup-inner">
            <span class="mockup-pill-tag">COLLABORATIVE MATCHING</span>
            <h4 class="mockup-headline">Find Your Next<br>Hackathon Team</h4>
            <div class="mockup-tags-row">
              <span class="mockup-chip">AI Dev</span>
              <span class="mockup-chip">UI/UX</span>
              <span class="mockup-chip">Fullstack</span>
            </div>
          </div>
        </div>
      `;
    case "signal":
      return `
        <div class="signal-container-visual" aria-hidden="true">
          <div class="signal-bars-row">
            <span class="signal-bar" style="height: 45%;"></span>
            <span class="signal-bar" style="height: 80%;"></span>
            <span class="signal-bar" style="height: 35%;"></span>
            <span class="signal-bar" style="height: 95%;"></span>
            <span class="signal-bar" style="height: 60%;"></span>
            <span class="signal-bar" style="height: 40%;"></span>
            <span class="signal-bar" style="height: 75%;"></span>
            <span class="signal-bar" style="height: 85%;"></span>
            <span class="signal-bar" style="height: 50%;"></span>
            <span class="signal-bar" style="height: 90%;"></span>
            <span class="signal-bar" style="height: 30%;"></span>
            <span class="signal-bar" style="height: 65%;"></span>
          </div>
          <div class="signal-labels">
            <span>ACOUSTIC BIOMARKERS</span>
            <span>JITTER · SHIMMER · HNR</span>
          </div>
        </div>
      `;
    case "interface":
      return `
        <div class="interface-container-visual" aria-hidden="true">
          <div class="interface-card-layer layer-back"></div>
          <div class="interface-card-layer layer-front">
            <span class="interface-brand">ALEXA DEVELOPERS SRM</span>
            <div class="interface-title">Events & Technical Community</div>
            <span class="interface-cta-mock">DISCOVER INITIATIVES ↗</span>
          </div>
        </div>
      `;
    case "security":
      return `
        <div class="security-container-visual" aria-hidden="true">
          <div class="security-code-line">SECURE_GATEWAY // PROXY ACTIVE</div>
          <div class="security-node-grid">
            <span class="sec-node active-node">INGRESS</span>
            <span class="sec-node active-node">RATELIMIT</span>
            <span class="sec-node active-node">JWT_VERIFY</span>
            <span class="sec-node">SANITIZER</span>
            <span class="sec-node">MICROSERVICE</span>
            <span class="sec-node">POSTGRES</span>
          </div>
          <div style="color: var(--text-tertiary); font-size: 0.65rem;">HTTP 429 DEFENSE · SLIDING WINDOW</div>
        </div>
      `;
    default:
      return `<div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">CODEBASE / VERIFIED</div>`;
  }
}

/* ==========================================================================
   05. CASE STUDY MODAL ENGINE
   ========================================================================== */
function initCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeCaseStudy);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCaseStudy();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeCaseStudy();
    }
  });
}

function openCaseStudy(projectId) {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("caseStudyModal");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const modalYear = document.getElementById("modalYear");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modalBody) return;

  modalCategoryBadge.textContent = project.categoryLabel;
  modalYear.textContent = project.year;

  const cs = project.caseStudy;

  // Goals list
  const goalsMarkup = cs.goalsAndConstraints
    ? `<ul class="modal-goals-list">${cs.goalsAndConstraints.map(g => `<li>${escapeHtml(g)}</li>`).join("")}</ul>`
    : "";

  // Architecture layers
  const archMarkup = cs.architecture
    ? `
      <div class="arch-layers-grid">
        ${cs.architecture.map(layer => `
          <div class="arch-layer-card">
            <div class="arch-layer-name">${escapeHtml(layer.layer)}</div>
            <div class="arch-layer-desc">${escapeHtml(layer.desc)}</div>
          </div>
        `).join("")}
      </div>
    `
    : "";

  // Technologies
  const techMarkup = cs.technologies
    ? `
      <div class="modal-tech-grid">
        ${cs.technologies.map(t => `
          <div class="modal-tech-item">
            <span class="tech-name">${escapeHtml(t.name)}</span>
            <span class="tech-role">${escapeHtml(t.role)}</span>
          </div>
        `).join("")}
      </div>
    `
    : "";

  modalBody.innerHTML = `
    <h3 class="modal-hero-title" id="modalProjectTitle">${escapeHtml(project.title)}</h3>
    <p class="modal-tagline">${escapeHtml(cs.tagline)}</p>

    <!-- Overview -->
    <div class="modal-case-section">
      <h4 class="modal-section-heading">01 / PROJECT OVERVIEW</h4>
      <p class="modal-section-body">${escapeHtml(cs.overview)}</p>
    </div>

    <!-- Problem Statement -->
    <div class="modal-case-section">
      <h4 class="modal-section-heading">02 / PROBLEM STATEMENT</h4>
      <p class="modal-section-body">${escapeHtml(cs.problem)}</p>
    </div>

    <!-- Goals & Constraints -->
    <div class="modal-case-section">
      <h4 class="modal-section-heading">03 / GOALS & CONSTRAINTS</h4>
      ${goalsMarkup}
    </div>

    <!-- My Actual Contribution -->
    <div class="modal-case-section">
      <h4 class="modal-section-heading">04 / MY CONTRIBUTION & IMPLEMENTATION</h4>
      <p class="modal-section-body">${escapeHtml(cs.contribution)}</p>
    </div>

    <!-- Technical Architecture -->
    ${archMarkup ? `
      <div class="modal-case-section">
        <h4 class="modal-section-heading">05 / SYSTEM ARCHITECTURE</h4>
        ${archMarkup}
      </div>
    ` : ""}

    <!-- Tools & Technologies -->
    ${techMarkup ? `
      <div class="modal-case-section">
        <h4 class="modal-section-heading">06 / TOOLS & TECHNOLOGIES</h4>
        ${techMarkup}
      </div>
    ` : ""}

    <!-- Results & Lessons Learned -->
    <div class="modal-case-section">
      <h4 class="modal-section-heading">07 / RESULTS & LESSONS LEARNED</h4>
      <p class="modal-section-body">${escapeHtml(cs.resultsAndLessons)}</p>
    </div>

    <!-- Verification Badge -->
    <div class="verification-badge-card">
      <div class="verification-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div class="verification-text">
        <strong>Repository Verification Status:</strong> ${escapeHtml(cs.verificationStatus)}
      </div>
    </div>

    <!-- External Links -->
    <div class="modal-actions-bar">
      ${project.githubUrl ? `
        <a class="button button-primary" href="${project.githubUrl}" target="_blank" rel="noreferrer">
          <span>Inspect GitHub Repository ↗</span>
        </a>
      ` : ""}
      ${project.demoUrl ? `
        <a class="button button-ghost" href="${project.demoUrl}" target="_blank" rel="noreferrer">
          <span>Live Demo ↗</span>
        </a>
      ` : ""}
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus trap: set focus to close button
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn) closeBtn.focus();
}

function closeCaseStudy() {
  const modal = document.getElementById("caseStudyModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ==========================================================================
   06. SKILLS & TECHNICAL CAPABILITIES SECTION
   ========================================================================== */
function initSkillsSection() {
  const navTabsContainer = document.getElementById("skillNavTabs");
  const displayCard = document.getElementById("skillDisplayCard");
  const matrixGrid = document.getElementById("techMatrixGrid");
  const profile = window.PORTFOLIO_PROFILE;

  if (!profile || !profile.skillCategories) return;

  const categories = profile.skillCategories;

  // Render Tabs
  if (navTabsContainer) {
    navTabsContainer.innerHTML = categories.map((cat, idx) => `
      <button class="skill-cat-btn ${idx === 0 ? "active" : ""}" data-cat-id="${cat.id}" role="tab" aria-selected="${idx === 0}">
        <span>${escapeHtml(cat.name)}</span>
      </button>
    `).join("");

    navTabsContainer.querySelectorAll(".skill-cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        navTabsContainer.querySelectorAll(".skill-cat-btn").forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        const catId = btn.getAttribute("data-cat-id");
        renderActiveSkillCategory(catId);
      });
    });
  }

  // Initial category render
  renderActiveSkillCategory(categories[0].id);

  // Render Matrix Grid (Top 3 summary cards)
  if (matrixGrid) {
    const topThree = categories.slice(0, 3);
    matrixGrid.innerHTML = topThree.map((cat, idx) => `
      <div class="matrix-card">
        <div class="matrix-header">
          <span class="matrix-category">${escapeHtml(cat.name.toUpperCase())}</span>
          <span class="matrix-index">0${idx + 1}</span>
        </div>
        <h4>${escapeHtml(cat.name)}</h4>
        <div class="matrix-items-list">
          ${cat.skills.slice(0, 5).map(s => `<span class="matrix-item">${escapeHtml(s)}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

function renderActiveSkillCategory(catId) {
  const displayCard = document.getElementById("skillDisplayCard");
  const profile = window.PORTFOLIO_PROFILE;
  if (!displayCard || !profile) return;

  const category = profile.skillCategories.find(c => c.id === catId);
  if (!category) return;

  const pillsMarkup = category.skills.map(s => `
    <div class="skill-pill">
      <span class="skill-pill-bullet"></span>
      <span>${escapeHtml(s)}</span>
    </div>
  `).join("");

  displayCard.innerHTML = `
    <div class="skill-display-header">
      <h3 class="skill-display-title">${escapeHtml(category.name)}</h3>
      <p class="skill-display-desc">${escapeHtml(category.description)}</p>
    </div>
    <div class="skill-chips-wrap">
      ${pillsMarkup}
    </div>
  `;
}

/* ==========================================================================
   07. PHOTOGRAPHY GALLERY & LIGHTBOX VIEWER
   ========================================================================== */
let activeLightboxIndex = 0;

function initGalleryAndLightbox() {
  const galleryGrid = document.getElementById("galleryGrid");
  const galleryItems = window.PORTFOLIO_GALLERY || [];

  if (!galleryGrid || galleryItems.length === 0) return;

  // Render Gallery Slots
  galleryGrid.innerHTML = galleryItems.map((item, index) => {
    const isFeatured = item.orientation === "portrait";
    return `
      <div class="gallery-item ${isFeatured ? "featured-photo" : ""}" data-index="${index}" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(item.title)}">
        <!-- Real Image Tag with fallback to placeholder -->
        <img class="gallery-image-media" src="${item.src}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" onload="this.nextElementSibling.style.display='none';">
        
        <!-- Curated Editorial Graphic Placeholder -->
        <div class="gallery-placeholder" style="display: flex;">
          <div class="placeholder-top-meta">
            <span>${escapeHtml(item.placeholderLabel)}</span>
            <span>${escapeHtml(item.location)}</span>
          </div>
          <div class="placeholder-art-center">
            <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="8" y="14" width="48" height="38" rx="4"/>
              <circle cx="32" cy="33" r="10"/>
              <path d="M22 14v-4h20v4"/>
            </svg>
          </div>
          <div class="placeholder-bottom-meta">
            <h4 class="placeholder-title">${escapeHtml(item.title)}</h4>
            <span class="placeholder-hint">${escapeHtml(item.notes)}</span>
          </div>
        </div>

        <div class="gallery-hover-overlay">
          <span class="gallery-expand-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
            <span>View Full Frame</span>
          </span>
        </div>
      </div>
    `;
  }).join("");

  // Attach click & enter listeners to open lightbox
  galleryGrid.querySelectorAll(".gallery-item").forEach(itemEl => {
    const handleOpen = () => {
      const idx = parseInt(itemEl.getAttribute("data-index"), 10);
      openLightbox(idx);
    };

    itemEl.addEventListener("click", handleOpen);
    itemEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpen();
      }
    });
  });

  // Lightbox Controls
  const lightboxModal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", showPrevPhoto);
  if (nextBtn) nextBtn.addEventListener("click", showNextPhoto);

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrevPhoto();
    if (e.key === "ArrowRight") showNextPhoto();
  });
}

function openLightbox(index) {
  const galleryItems = window.PORTFOLIO_GALLERY || [];
  if (index < 0 || index >= galleryItems.length) return;

  activeLightboxIndex = index;
  renderLightboxContent();

  const lightboxModal = document.getElementById("lightboxModal");
  if (lightboxModal) {
    lightboxModal.classList.add("open");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function renderLightboxContent() {
  const galleryItems = window.PORTFOLIO_GALLERY || [];
  const item = galleryItems[activeLightboxIndex];
  if (!item) return;

  const viewport = document.getElementById("lightboxViewport");
  const counter = document.getElementById("lightboxCounter");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDesc");
  const gear = document.getElementById("lightboxGear");
  const location = document.getElementById("lightboxLocation");

  if (counter) counter.textContent = `0${activeLightboxIndex + 1} / 0${galleryItems.length}`;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.caption;
  if (gear) gear.textContent = item.gear;
  if (location) location.textContent = item.location;

  if (viewport) {
    viewport.innerHTML = `
      <img src="${item.src}" alt="${escapeHtml(item.title)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" onload="this.nextElementSibling.style.display='none';">
      <div class="lightbox-placeholder-preview" style="display: flex;">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent);">${escapeHtml(item.placeholderLabel)}</div>
        <div style="text-align: center;">
          <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--text-primary);">${escapeHtml(item.title)}</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto;">${escapeHtml(item.caption)}</p>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-tertiary); text-align: center;">
          ${escapeHtml(item.notes)}
        </div>
      </div>
    `;
  }
}

function showPrevPhoto() {
  const galleryItems = window.PORTFOLIO_GALLERY || [];
  activeLightboxIndex = (activeLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
  renderLightboxContent();
}

function showNextPhoto() {
  const galleryItems = window.PORTFOLIO_GALLERY || [];
  activeLightboxIndex = (activeLightboxIndex + 1) % galleryItems.length;
  renderLightboxContent();
}

function closeLightbox() {
  const lightboxModal = document.getElementById("lightboxModal");
  if (!lightboxModal) return;

  lightboxModal.classList.remove("open");
  lightboxModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ==========================================================================
   08. ABOUT & MILESTONES TIMELINE
   ========================================================================== */
function initAboutTimeline() {
  const timelineList = document.getElementById("timelineList");
  const profile = window.PORTFOLIO_PROFILE;

  if (!timelineList || !profile || !profile.milestones) return;

  timelineList.innerHTML = profile.milestones.map(m => `
    <div class="timeline-item">
      <div class="timeline-index">${escapeHtml(m.index)}</div>
      <div class="timeline-content">
        <div class="timeline-title-row">
          <span class="timeline-title">${escapeHtml(m.title)}</span>
          <span class="timeline-status">${escapeHtml(m.status)}</span>
        </div>
        <span class="timeline-subtitle">${escapeHtml(m.subtitle)}</span>
        <p class="timeline-details">${escapeHtml(m.details)}</p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   09. RESUME ACCESS & GRACEFUL SETUP NOTICE
   ========================================================================== */
function initResumeHandling() {
  const resumeLinks = [
    document.getElementById("headerResumeBtn"),
    document.getElementById("drawerResumeBtn"),
    document.getElementById("contactResumeTile")
  ];

  const noticeModal = document.getElementById("noticeModal");
  const noticeCloseBtn = document.getElementById("noticeCloseBtn");

  if (noticeCloseBtn && noticeModal) {
    noticeCloseBtn.addEventListener("click", () => {
      noticeModal.classList.remove("open");
      noticeModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });

    noticeModal.addEventListener("click", (e) => {
      if (e.target === noticeModal) {
        noticeModal.classList.remove("open");
        noticeModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });
  }

  // Intercept resume clicks to check if file exists
  resumeLinks.forEach(link => {
    if (!link) return;
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      
      // Attempt head request to verify existence
      fetch(href, { method: "HEAD" })
        .then(response => {
          if (!response.ok) {
            e.preventDefault();
            showResumeNotice();
          }
        })
        .catch(() => {
          e.preventDefault();
          showResumeNotice();
        });
    });
  });

  function showResumeNotice() {
    if (!noticeModal) return;
    noticeModal.classList.add("open");
    noticeModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

/* ==========================================================================
   10. UTILITY HELPERS
   ========================================================================== */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

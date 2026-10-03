// Datos de proyectos
// Cada proyecto extiende la estructura con: deployed (bool), liveUrl (string|null), githubUrl (string|null)
const projects = [
    {
        id: 1,
        title: "CSMS - Sistema de Gestión de Estaciones de Carga",
        titleEn: "CSMS - Charging Station Management System",
        description: "Backend desarrollado con Node.js y NestJS para gestionar el proceso de facturación y pago de un Sistema de Gestión de Estaciones de Carga de vehículos eléctricos, parte del proyecto Phase creado por el centro VERTEX de la UCI. Incluye autenticación JWT, gestión de usuarios, estaciones y reservas con PostgreSQL.",
        descriptionEn: "Backend developed with Node.js and NestJS to manage the billing and payment process of a Charging Station Management System for electric vehicles, part of the Phase project created by the VERTEX center at UCI. Includes JWT authentication, user management, stations and reservations with PostgreSQL.",
        image: "assets/images/proyecto-csms.jpg",
        tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "JWT", "REST API"],
        deployed: false,
        liveUrl: null,
        githubUrl: "https://github.com/Marlondamian26/Mis_proyectos/tree/CSMS/backend-csms",
        viewProjectEs: "Ver proyecto",
        viewProjectEn: "View project",
        viewGithubEs: "Ver en GitHub",
        viewGithubEn: "View on GitHub"
    },
    {
        id: 2,
        title: "🏥 Gestion-Saude - Sistema de Gestión Médica",
        titleEn: "🏥 Gestion-Saude - Medical Management System",
        description: "Plataforma médica full-stack para clínica y sitio web Consultorio Dra. Belkis Morejón Acosta (Luanda-Angola). Autenticación JWT con roles, sistema de citas en tiempo real, notificaciones con polling, panel de enfermería, chatbot, CRUD completo, modo oscuro automático, diseño responsive. Backend: Django REST Framework. Frontend: React con Context API.",
        descriptionEn: "Full-stack medical platform for a clinic and Dr. Belkis Morejón Acosta's website (Luanda-Angola). JWT auth with roles, real-time appointment scheduling, polling notifications, nursing panel, chatbot, complete CRUD, auto dark mode, responsive design. Backend: Django REST Framework. Frontend: React with Context API.",
        image: "assets/images/proyecto-belkis-saude.jpg",
        tags: ["Django", "React", "PostgreSQL", "Django REST Framework", "JWT", "Context API", "Full Stack", "Healthcare"],
        deployed: true,
        liveUrl: "https://gestion-saude.onrender.com",
        githubUrl: "https://github.com/Marlondamian26/Gestion-Saude",
        viewProjectEs: "Ver proyecto",
        viewProjectEn: "View project",
        viewGithubEs: "Ver en GitHub",
        viewGithubEn: "View on GitHub"
    },
    {
        id: 3,
        title: "Mi-Pyme - Autogestión de Negocios",
        titleEn: "Mi-Pyme - Business Self-Management Platform",
        description: "Plataforma web full-stack para autogestión de pymes con roles ADMIN, NEGOCIO y CLIENTE. Gestión de negocios, productos, servicios, inventario, pedidos, reservas, facturación con IVA cubano (10%), y pagos múltiples (efectivo, transferencia, pago móvil). Arquitectura de servicios framework-agnostic preparada para migración a microservicios Nest.js. Auth con NextAuth, base de datos PostgreSQL con Prisma, testing con Vitest/Playwright/Storybook.",
        descriptionEn: "Full-stack web platform for SME self-management with ADMIN, BUSINESS and CLIENT roles. Manages businesses, products, services, inventory, orders, reservations, Cuban VAT invoicing (10%) and multi-method payments (cash, transfer, mobile). Architecture uses framework-agnostic services designed for migration to Nest.js microservices. Auth with NextAuth, PostgreSQL database with Prisma, testing with Vitest/Playwright/Storybook.",
        image: "",
        placeholder: "MP",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Node.js", "Software Empresarial", "SaaS", "Facturación", "Testing"],
        deployed: false,
        liveUrl: null,
        githubUrl: "https://github.com/Marlondamian26/Proyectos_Comerciales/tree/Proyecto-Mi-Pyme/mi-pyme",
        viewProjectEs: "Ver proyecto",
        viewProjectEn: "View project",
        viewGithubEs: "Ver en GitHub",
        viewGithubEn: "View on GitHub"
    }
    // ... otros proyectos
];

// Iconos SVG reutilizables (inline, sin dependencias externas)
const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.299 3.356 9.798 7.995 11.364.587.107.793-.252.793-.561 0-.277-.01-1.012-.015-1.996-3.242.694-5.31-1.291-5.31-1.291-.69 1.75-1.677 2.207-1.677 2.207-1.38.94.11.92.11.92 1.52.085 2.306 1.54 2.306 1.54 1.365 2.34 3.58 1.68 4.46.998.14-.99 1.52-1.68 2.85-2.07-2.553-.295-5.227-1.28-5.227-5.68 0-1.243.44-2.268 1.14-3.068-.11-.295-.495-1.49.11-3.12 0 0 .93-.296 3.05 1.63.87-.24 1.78-.36 2.7-.36 0 .01 1.82.01 3.77 1.63.87-1.92 2.37-3.19 4.2-3.19.49 0 .96.04 1.4.12-1.07.97-1.88 2.23-1.88 3.62 0 2.65 1.34 4.86 3.2 6.21.83-.07 1.6-.1 2.4-.1 0 .92.02 1.86-.02 2.82-1.85-.43-3.43-1.38-4.6-2.55-.02 2.84.62 5.59 1.91 7.37.92-.15 1.83-.22 2.75-.22.92 0 1.83.07 2.75.22 1.29-1.78 1.93-4.53 1.91-7.37.88-.16 1.93-.38 3.2-.13.07-.81.11-1.66.11-2.51 0-3.76-3.04-6.81-7.44-6.81z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3"/><polyline points="21 3 21 9"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="11" width="14" height="11" rx="2"/><path d="M10 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/></svg>'
};

// Función para renderizar proyectos
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const currentLang = localStorage.getItem('language') || 'es';

    if (!grid) return;

    // Limpiar placeholder
    const placeholder = grid.querySelector('.projects-placeholder');
    if (placeholder) placeholder.remove();

    grid.innerHTML = projects.map(project => {
        const title = currentLang === 'en' ? project.titleEn : project.title;
        const desc = currentLang === 'en' ? project.descriptionEn : project.description;
        const viewText = currentLang === 'en' ? project.viewProjectEn : project.viewProjectEs;
        const githubText = currentLang === 'en' ? project.viewGithubEn : project.viewGithubEs;

        // Manejar imagen: usar fallback CSS si la imagen no existe
        const imageExists = project.image && project.image !== "";
        const imageHtml = imageExists
            ? `<img src="${project.image}" alt="${title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'project-placeholder\\'><span class=\\'project-placeholder-text\\'>${project.placeholder || title.substring(0, 2)}</span></div>'>"`
            : `<div class="project-placeholder"><span class="project-placeholder-text">${project.placeholder || title.substring(0, 2)}</span></div>`;

        // Construir botones condicionalmente
        // Regla 1: deployed + github → ambos botones
        // Regla 2: no deployed + github → solo GitHub
        // Regla 3: deployed + no github → solo Live
        // Regla 4: no deployed + no github → badge privado (sin botones)
        let buttonsHtml = '';

        if (project.deployed && project.liveUrl) {
            buttonsHtml += `
                <a href="${project.liveUrl}" class="btn btn-primary btn-small" target="_blank" rel="noopener noreferrer">
                    <span>${viewText}</span>
                    <span class="icon-external">${icons.external}</span>
                </a>`;
        }

        if (project.githubUrl) {
            buttonsHtml += `
                <a href="${project.githubUrl}" class="btn btn-github btn-small" target="_blank" rel="noopener noreferrer">
                    <span class="icon-github">${icons.github}</span>
                    <span>${githubText}</span>
                </a>`;
        }

        if (!project.deployed && !project.githubUrl) {
            buttonsHtml = `<span class="badge-private"><span class="icon-lock">${icons.lock}</span> <span data-es="Código privado" data-en="Private code">Código privado</span></span>`;
        }

        return `
            <article class="project-card" role="article">
                <div class="project-image">
                    ${imageHtml}
                </div>
                <div class="project-content">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        ${buttonsHtml}
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// Función para renderizar skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const placeholder = container.querySelector('.skills-placeholder');
    if (placeholder) placeholder.remove();

    const skills = [
        { name: "HTML", category: "frontend" },
        { name: "CSS", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "React", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "NestJS", category: "backend" },
        { name: "Django", category: "backend" },
        { name: "Python", category: "backend" },
        { name: "Java", category: "backend" },
        { name: "PostgreSQL", category: "database" },
        { name: "Docker", category: "devops" },
        { name: "Git", category: "tools" },
        { name: "VS Code", category: "tools" },
        { name: "Responsive Design", category: "frontend" }
    ];

    container.innerHTML = skills.map(skill =>
        `<span class="skill-tag" data-category="${skill.category}">${skill.name}</span>`
    ).join('');
}

// ========== SISTEMA DE TEMAS ==========
(function() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    let userForced = false;

    let themeButton = document.querySelector('.theme-toggle');
    if (!themeButton) {
        themeButton = document.createElement('button');
        themeButton.className = 'theme-toggle';
        themeButton.setAttribute('aria-label', 'Cambiar tema');
        document.body.appendChild(themeButton);
    }

    function applyTheme(theme, isForced = false) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-theme');
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.classList.remove('dark-theme');
        }
        if (isForced) userForced = true;
    }

    function getSystemTheme() {
        return prefersDark.matches ? 'dark' : 'light';
    }

    // Aplicar tema inicial del sistema
    applyTheme(getSystemTheme());
    userForced = false;

    themeButton.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        applyTheme(isDark ? 'light' : 'dark', true);
    });

    // Escuchar cambios del sistema (solo si no fue forzado por usuario)
    prefersDark.addEventListener('change', (e) => {
        if (!userForced) applyTheme(e.matches ? 'dark' : 'light');
    });
})();

// ========== SISTEMA DE IDIOMAS ==========
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);

    const langButton = document.querySelector('.language-toggle');
    if (langButton) {
        updateLanguageButtonText(savedLanguage);
        langButton.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'es';
            changeLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.textContent = lang === 'es' ? element.getAttribute('data-es') : element.getAttribute('data-en');
    });

    renderProjects();
    updateLanguageButtonText(lang);
}

function updateLanguageButtonText(lang) {
    const langButton = document.querySelector('.language-toggle');
    if (langButton) {
        const text = langButton.querySelector('.lang-text');
        if (text) text.textContent = lang === 'es' ? 'EN' : 'ES';
        langButton.title = lang === 'es' ? 'Change to English' : 'Cambiar a Español';
    }
}

// ========== MENÚ HAMBURGUESA ==========
(function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    initializeLanguage();
    console.log('Portafolio cargado correctamente');
});

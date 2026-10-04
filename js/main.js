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
        liveUrl: "https://gestion-saude-promo.onrender.com",
        githubUrl: "https://github.com/Marlondamian26/Gestion-Saude.git",
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

const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.14-.99 1.52-1.68 2.85-2.07-2.553-.295-5.227-1.28-5.227-5.68 0-1.243.44-2.268 1.14-3.068-.11-.295-.49-.49-.11-3.12 0 0 .93-.296 3.05 1.142.86-.24 1.77-.36 2.67-.36 0 .01 1.82.01 3.77 1.63.87-1.92 2.37-3.19 4.2-3.19.49 0 .96.04 1.4.12-1.07.97-1.88 2.23-1.88 3.62 0 2.65 1.34 4.86 3.2 6.21.83-.07 1.6-.1 2.4-.1 0 .92.02 1.86-.02 2.82-1.85-.43-3.43-1.38-4.6-2.55-.02 2.84.62 5.59 1.91 7.37.92-.15 1.83-.22 2.75-.22.92 0 1.83.07 2.75.22 1.29-1.78 1.93-4.53 1.91-7.37.88-.16 1.93-.38 3.2-.13.07-.81.11-1.66.11-2.51 0-3.76-3.04-6.81-7.44-6.81z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="11" rx="2"/><path d="M10 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/></svg>'
};

// Función para renderizar proyectos — plantilla canónica única para todas las tarjetas
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const currentLang = localStorage.getItem('language') || 'es';

    if (!grid) return;

    const placeholder = grid.querySelector('.projects-placeholder');
    if (placeholder) placeholder.remove();

    grid.innerHTML = projects.map(project => {
        const title = currentLang === 'en' ? project.titleEn : project.title;
        const desc = currentLang === 'en' ? project.descriptionEn : project.description;
        const viewText = currentLang === 'en' ? project.viewProjectEn : project.viewProjectEs;
        const githubText = currentLang === 'en' ? project.viewGithubEn : project.viewGithubEs;

        // Imagen: fallback CSS si no existe
        const imageExists = project.image && project.image !== "";
        const placeholderText = project.placeholder || title.substring(0, 2);
        let imageHtml;
        if (imageExists) {
            imageHtml = `<img src="${project.image}" alt="${title}" loading="lazy">`;
        } else {
            imageHtml = `<div class="project-placeholder"><span class="project-placeholder-text">${placeholderText}</span></div>`;
        }

        // Construir botones condicionalmente
        let actionsHtml = '';

        if (project.deployed && project.liveUrl) {
            actionsHtml += `
                <a href="${project.liveUrl}" class="btn btn--primary btn-small" target="_blank" rel="noopener noreferrer">
                    <span>${viewText}</span>
                    <span class="icon-external" aria-hidden="true">${icons.external}</span>
                </a>`;
        }

        if (project.githubUrl) {
            actionsHtml += `
                <a href="${project.githubUrl}" class="btn btn--ghost btn-small" target="_blank" rel="noopener noreferrer">
                    <span class="icon-github" aria-hidden="true">${icons.github}</span>
                    <span>${githubText}</span>
                </a>`;
        }

        if (!project.deployed && !project.githubUrl) {
            actionsHtml = `<span class="badge-private"><span class="icon-lock" aria-hidden="true">${icons.lock}</span> <span data-es="Código privado" data-en="Private code">Código privado</span></span>`;
        }

        return `
            <article class="project-card" role="article">
                <div class="project-card__media">
                    ${imageHtml}
                </div>
                <div class="project-card__body">
                    <h3 class="project-card__title">${title}</h3>
                    <p class="project-card__description">${desc}</p>
                    <ul class="project-card__tags" aria-label="Tecnologías">
                        ${project.tags.map(tag => `<li class="tag">${tag}</li>`).join('')}
                    </ul>
                    <footer class="project-card__actions">
                        ${actionsHtml}
                    </footer>
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
        { name: "HTML", category: "Frontend" },
        { name: "CSS", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "React", category: "Frontend" },
        { name: "Responsive Design", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "NestJS", category: "Backend" },
        { name: "Django", category: "Backend" },
        { name: "Python", category: "Backend" },
        { name: "Java", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Docker", category: "DevOps" },
        { name: "Git", category: "Tools" },
        { name: "VS Code", category: "Tools" }
    ];

    const grouped = {};
    skills.forEach(skill => {
        if (!grouped[skill.category]) grouped[skill.category] = [];
        grouped[skill.category].push(skill.name);
    });

    let html = '';
    for (const [category, items] of Object.entries(grouped)) {
        html += `<div class="skills-group"><span class="skills-category">${category}</span>`;
        html += items.map(name => `<span class="skill-tag" data-category="${category}">${name}</span>`).join('');
        html += `</div>`;
    }
    container.innerHTML = html;
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

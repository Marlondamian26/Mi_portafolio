// Datos de proyectos
const projects = [
    {
        id: 1,
        title: "CSMS - Sistema de Gestión de Estaciones de Carga",
        titleEn: "CSMS - Charging Station Management System",
        description: "Backend desarrollado con Node.js y NestJS para gestionar el proceso de facturación y pago de un Sistema de Gestión de Estaciones de Carga de vehículos eléctricos como parte del proyecto ¨Phase¨; plataforma nacional creada por el centro VERTEX de la Univercidad de Ciencias Informáticas de la Habana (UCI). Orientada a ofrecer servicios de electromovilidad en Cuba, incluye autenticación JWT, gestión de usuarios, estaciones y reservas con PostgreSQL.",
        descriptionEn: "Backend developed with Node.js and NestJS to manage the billing and payment process of a Charging Station Management System for electric vehicles as part of the 'Phase' project; national platform created by the VERTEX center of the University of Computer Sciences of Havana (UCI). Aimed at offering e-mobility services in Cuba, includes JWT authentication, user management, stations and reservations with PostgreSQL.",
        image: "assets/images/proyecto-csms.jpg", // O usa placeholder
        tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "JWT", "REST API"],
        viewProjectEs: "Ver proyecto",
        viewProjectEn: "View project",
        link: "https://github.com/Marlondamian26/Mis_proyectos/tree/CSMS/backend-csms"
    },

    {
    id: 2,
    title: "🏥 Gestion-Saude - Sistema de Gestión Médica",
    titleEn: "🏥 Gestion-Saude - Medical Management System",
    description: "Plataforma de gestión médica para clínica o consultorio y sitio web Consultorio Dra. Belkis Morejón Acosta, Luanda-Angola. Características principales: 🔐 Autenticación JWT con roles (Admin, Doctor, Enfermería y Paciente) • 📅 Sistema de citas con disponibilidad en tiempo real • 🔔 Notificaciones automáticas con polling • 👩‍⚕️ Panel específico para enfermería con registro de signos vitales • 💬 Chatbot integrado para la gestión de citas • 📊 Panel de administración con CRUD completo • 🌓 Modo oscuro/claro con detección automática • 📱 Diseño responsive y accesible • 🛢️ Base de Datos PostgreSQL • Backend: Django REST Framework. Frontend: React con Context API y CSS variables.",
    descriptionEn: "Medical management platform for a clinic or office and website Consultorio Dra. Belkis Morejón Acosta, Luanda-Angola. Main features: 🔐 JWT authentication with roles (Admin, Doctor, Nursing and Patient) • 📅 Appointment system with real-time availability • 🔔 Automatic notifications with polling • 👩‍⚕️ Specific panel for nursing with vital signs registration • 💬 Integrated chatbot for appointment management • 📊 Administration panel with complete CRUD • 🌓 Dark/light mode with automatic detection • 📱 Responsive and accessible design • 🛢️ PostgreSQL Database • Backend: Django REST Framework. Frontend: React with Context API and CSS variables.",
    image: "assets/images/proyecto-belkis-saude.jpg",
    tags: [
        "Django", 
        "React", 
        "PostgreSQL", 
        "Django REST Framework", 
        "JWT", 
        "Context API", 
        "CSS Variables", 
        "Full Stack",
        "Healthcare",
        "Responsive Design"
    ],
    viewProjectEs: "Ver proyecto",
    viewProjectEn: "View project",
    link: "https://gestion-saude.onrender.com"
}
    // ... otros proyectos
];

// Función para renderizar proyectos
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const currentLang = localStorage.getItem('language') || 'es';
    
    if (grid) {
        grid.innerHTML = projects.map(project => `
            <article class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${currentLang === 'es' ? project.title : project.titleEn}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="project-content">
                    <h3>${currentLang === 'es' ? project.title : project.titleEn}</h3>
                    <p>${currentLang === 'es' ? project.description : project.descriptionEn}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn-primary btn-small">${currentLang === 'es' ? project.viewProjectEs : project.viewProjectEn}</a>
                </div>
            </article>
        `).join('');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initializeLanguage();
    console.log('Portafolio cargado correctamente 🚀');
});



// ========== MODO OSCURO - COMPORTAMIENTO EXACTO ==========
(function() {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Variable para controlar si el usuario forzó manualmente
    let userForced = false;
    
    // Crear botón si no existe
    let themeButton = document.querySelector('.theme-toggle');
    if (!themeButton) {
        themeButton = document.createElement('button');
        themeButton.className = 'theme-toggle';
        document.body.appendChild(themeButton);
    }
    
    // Función para aplicar tema
    function applyTheme(theme, isForced = false) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            themeButton.innerHTML = '☀️';
            themeButton.style.background = '#ffb74d';
            console.log('Tema OSCURO aplicado' + (isForced ? ' (forzado)' : ''));
        } else {
            document.body.classList.remove('dark-theme');
            themeButton.innerHTML = '🌙';
            themeButton.style.background = 'var(--accent)';
            console.log('Tema CLARO aplicado' + (isForced ? ' (forzado)' : ''));
        }
        
        // Si es forzado por usuario, marcar variable
        if (isForced) {
            userForced = true;
        }
    }
    
    // Función para obtener tema del sistema
    function getSystemTheme() {
        return prefersDark.matches ? 'dark' : 'light';
    }
    
    // APLICAR TEMA INICIAL - SIEMPRE TEMA DEL SISTEMA
    console.log('Inicializando - Tema del sistema:', getSystemTheme());
    applyTheme(getSystemTheme());
    userForced = false; // Asegurar que empieza en false
    
    // EVENTO CLICK DEL BOTÓN - FORZAR CAMBIO MANUAL
    themeButton.addEventListener('click', () => {
        // Detectar tema ACTUAL
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        
        console.log('Usuario forzó cambio a:', newTheme);
        applyTheme(newTheme, true); // true = es forzado por usuario
    });
    
    // Escuchar cambios del sistema SOLO si el usuario NO ha forzado
    prefersDark.addEventListener('change', (e) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        console.log('Cambio en sistema detectado. Forzado por usuario?:', userForced);
        
        // Solo cambiar automáticamente si el usuario NO ha forzado manualmente
        if (!userForced) {
            console.log('Cambiando automáticamente a tema del sistema:', systemTheme);
            applyTheme(systemTheme);
        } else {
            console.log('Cambio ignorado - usuario forzó tema manual');
        }
    });
    
    // (OPCIONAL) Detectar cuando se cierra/abre el navegador
    // No necesitamos hacer nada especial porque siempre iniciamos con tema del sistema
    
    // Para debug - mostrar estado actual
    console.log('Modo oscuro inicializado. Estado inicial - Forzado por usuario:', userForced);
})();

// ========== SISTEMA DE IDIOMAS ==========
function initializeLanguage() {
    // Obtener idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('language') || 'es';
    
    // Aplicar idioma al cargar la página
    changeLanguage(savedLanguage);
    
    // Crear botón de idioma si no existe
    let langButton = document.querySelector('.language-toggle');
    if (langButton) {
        // Mostrar el idioma actual en el botón
        updateLanguageButtonText(savedLanguage);
        
        // Event listener para cambiar idioma
        langButton.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
}

function changeLanguage(lang) {
    // Guardar preferencia
    localStorage.setItem('language', lang);
    
    // Cambiar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Cambiar todos los elementos con atributos data-es y data-en
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        const text = lang === 'es' ? element.getAttribute('data-es') : element.getAttribute('data-en');
        
        // Para elementos con contenido de texto
        if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'P') {
            // Si tiene elementos hijos, actualizar solo el texto directo
            if (element.childNodes.length > 0) {
                const firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                if (firstTextNode) {
                    firstTextNode.textContent = text;
                } else {
                    element.textContent = text;
                }
            } else {
                element.textContent = text;
            }
        } else if (element.tagName === 'SPAN' && (element.getAttribute('data-es').includes('Mi nombre') || element.classList.contains('highlight') || element.tagName === 'STRONG')) {
            // Para spans que son solo texto
            element.textContent = text;
        } else {
            // Para otros elementos
            element.textContent = text;
        }
    });
    
    // Re-renderizar proyectos con nuevo idioma
    renderProjects();
    
    // Actualizar botón de idioma
    updateLanguageButtonText(lang);
}

function updateLanguageButtonText(lang) {
    const langButton = document.querySelector('.language-toggle');
    if (langButton) {
        langButton.textContent = lang === 'es' ? '🌐 EN' : '🌐 ES';
        langButton.title = lang === 'es' ? 'Change to English' : 'Cambiar a Español';
    }
}

// ========== MENÚ HAMBURGUESA ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}


// ========== SKILLS ==========
const skills = [
    "HTML", "CSS", "Java", "JavaScript", "Git",  
    "Node", "Nest.js", "Next.js" , "PostgreSQL", "Python",
    "Responsive Design", "Docker", "VS Code", "React",
];

const skillsContainer = document.getElementById('skills-container');
if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
}


// ========== EFECTO SPOTLIGHT (OPCIONAL) ==========
const createSpotlight = () => {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    document.body.appendChild(spotlight);
    
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = e.clientX - 200 + 'px';
        spotlight.style.top = e.clientY - 200 + 'px';
    });
};


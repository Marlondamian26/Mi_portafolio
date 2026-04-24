// Datos de proyectos
const projects = [
    {
        id: 1,
        title: "CSMS - Sistema de Gestión de Estaciones de Carga",
        description: "Backend desarrollado con Node.js y NestJS para gestionar el proceso de facturación y pago de un Sistema de Gestión de Estaciones de Carga de vehículos eléctricos como parte del proyecto ¨Phase¨; plataforma nacional creada por el centro VERTEX de la Univercidad de Ciencias Informáticas de la Habana (UCI). Orientada a ofrecer servicios de electromovilidad en Cuba, incluye autenticación JWT, gestión de usuarios, estaciones y reservas con PostgreSQL.",
        image: "assets/images/proyecto-csms.jpg", // O usa placeholder
        tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "JWT", "REST API"],
        link: "https://github.com/Marlondamian26/Mis_proyectos/tree/CSMS/backend-csms"
    },

    {
    id: 2,
    title: "🏥 Gestion-Saude - Sistema de Gestión Médica",
    description: "Plataforma de gestión médica para clínica o consultorio y sitio web Consultorio Dra. Belkis Morejón Acosta, Luanda-Angola. Características principales: 🔐 Autenticación JWT con roles (Admin, Doctor, Enfermería y Paciente) • 📅 Sistema de citas con disponibilidad en tiempo real • 🔔 Notificaciones automáticas con polling • 👩‍⚕️ Panel específico para enfermería con registro de signos vitales • 💬 Chatbot integrado para gestión de citas • 📊 Panel de administración con CRUD completo • 🌓 Modo oscuro/claro con detección automática • 📱 Diseño responsive y accesible • 🛢️ Base de Datos PostgreSQL • Backend: Django REST Framework. Frontend: React con Context API y CSS variables.",
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
    link: "https://gestion-saude.onrender.com"
}
    // ... otros proyectos
];

// Función para renderizar proyectos
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    
    if (grid) {
        grid.innerHTML = projects.map(project => `
            <article class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn-primary btn-small">Ver proyecto</a>
                </div>
            </article>
        `).join('');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
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
    "Responsive Design", "VS Code", "React",
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


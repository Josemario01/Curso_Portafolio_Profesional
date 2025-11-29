// Año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Diccionario simple de traducciones
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.skills": "Skills",
        "nav.contact": "Contacto",

        "hero.title": "[Tu Nombre]",
        "hero.subtitle": "Service Delivery Manager / IT Professional",
        "hero.description": "Breve descripción profesional de 2–3 líneas sobre quién eres, qué haces y qué tipo de oportunidades buscas.",
        "hero.cv_es": "Descargar CV (ES)",
        "hero.cv_en": "Download CV (EN)",

        "about.title": "Sobre mí",
        "about.text": "Desarrollador de Software con experiencia en proyectos que integran front-end y back-end, metodologías ágiles y gestión de tareas en Azure DevOps. Cuento con bases sólidas en programación, manejo de bases de datos, diseño de funcionalidades y resolución de problemas técnicos. Además, poseo experiencia en soporte TI, configuración de software, gestión de incidentes y organización de recursos tecnológicos. Me interesa continuar fortaleciendo mis habilidades técnicas en desarrollo, arquitecturas modernas y computación en la nube, aportando valor a equipos de TI a través de soluciones eficientes, escalables y orientadas al usuario.",
        "about.highlight1": "+X años en IT",
        "about.highlight2": "Gestión de proyectos / Service Delivery",
        "about.highlight3": "Enfoque en banca / fintech / cloud",

        "experience.title": "Experiencia",
        "experience.role1": "Service Delivery Manager",
        "experience.company1": "Temenos – [País / Región]",
        "experience.dates1": "202X – Actualidad",
        "experience.role1_desc1": "Lideré la entrega de servicios cloud para bancos en LATAM, coordinando equipos multidisciplinarios (soporte, producto, seguridad, etc.).",
        "experience.role1_desc2": "Gestión de incidentes críticos, CRs y optimización de costos de infraestructura.",
        "experience.role1_desc3": "Seguimiento con stakeholders de alto nivel y comités ejecutivos (SteerCo, CAB).",

        "projects.title": "Proyectos",
        "projects.project1_title": "Proyecto 1",
        "projects.project1_desc": "Breve descripción del proyecto: objetivo, tu rol y resultados alcanzados.",
        "projects.project1_tech": "Tecnologías: Angular, Azure, SQL",

        "skills.title": "Skills",
        "skills.tech_title": "Skills Técnicos",
        "skills.tech1": "Gestión de entornos: DEV, UAT, Pre-Prod, Prod",
        "skills.tech2": "Cloud (Azure, SaaS)",
        "skills.tech3": "ITSM / JIRA / seguimiento de tickets",
        "skills.soft_title": "Skills Blandos",
        "skills.soft1": "Comunicación con clientes",
        "skills.soft2": "Liderazgo y coordinación de equipos",
        "skills.soft3": "Orientación a resultados",

        "contact.title": "Contacto",
        "contact.text": "Si quieres ponerte en contacto conmigo para oportunidades laborales, proyectos o networking:"
    },

    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        "hero.title": "[Your Name]",
        "hero.subtitle": "Service Delivery Manager / IT Professional",
        "hero.description": "A brief 2–3 line professional summary about who you are, what you do, and the kind of opportunities you are looking for.",
        "hero.cv_es": "Download CV (ES)",
        "hero.cv_en": "Download CV (EN)",

        "about.title": "About Me",
        "about.text": "Software Developer with experience in front-end and back-end projects, Agile methodologies, and task management through Azure DevOps. I possess strong foundations in programming, database handling, feature implementation, and technical problem-solving. Additionally, I bring experience in IT support, software configuration, incident handling, and technology asset organization. I am motivated to further develop my skills in software development, modern architectures, and cloud computing while contributing to IT teams through efficient, scalable, and user-focused solutions.",
        "about.highlight1": "+X years in IT",
        "about.highlight2": "Project / Service Delivery Management",
        "about.highlight3": "Focus on banking / fintech / cloud",

        "experience.title": "Experience",
        "experience.role1": "Service Delivery Manager",
        "experience.company1": "Temenos – [Country / Region]",
        "experience.dates1": "202X – Present",
        "experience.role1_desc1": "Led cloud service delivery for LATAM banks, coordinating multidisciplinary teams (support, product, security, etc.).",
        "experience.role1_desc2": "Managed critical incidents, CRs and infrastructure cost optimization.",
        "experience.role1_desc3": "Engaged with senior stakeholders and executive committees (SteerCo, CAB).",

        "projects.title": "Projects",
        "projects.project1_title": "Project 1",
        "projects.project1_desc": "Short description of the project: objective, your role, and achieved results.",
        "projects.project1_tech": "Technologies: Angular, Azure, SQL",

        "skills.title": "Skills",
        "skills.tech_title": "Technical Skills",
        "skills.tech1": "Environment management: DEV, UAT, Pre-Prod, Prod",
        "skills.tech2": "Cloud (Azure, SaaS)",
        "skills.tech3": "ITSM / JIRA / ticket tracking",
        "skills.soft_title": "Soft Skills",
        "skills.soft1": "Client communication",
        "skills.soft2": "Team leadership and coordination",
        "skills.soft3": "Results-oriented mindset",

        "contact.title": "Contact",
        "contact.text": "If you would like to reach out regarding job opportunities, projects, or networking:"
    }
};

let currentLang = "es";

function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const text = dict[key];
        if (text) {
            el.textContent = text;
        }
    });

    // Actualizar estado visual de los botones
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Actualizar atributo lang en html
    document.documentElement.lang = lang === "es" ? "es" : "en";
}

// Eventos de los botones de idioma
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
    });
});

// Idioma por defecto
setLanguage("es");

// Manejo del formulario de contacto
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener valores
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validaciones simples
        if (!name || !email || !message) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Por favor completa todos los campos antes de enviar.",
                confirmButtonText: "Entendido"
            });
            return;
        }

        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Correo no válido",
                text: "Por favor ingresa un correo electrónico válido.",
                confirmButtonText: "Corregir"
            });
            return;
        }

        // Simulación de envío (aquí podrías integrar EmailJS o un backend real)
        Swal.fire({
            icon: "success",
            title: "Mensaje enviado",
            text: "Gracias por contactarme, pronto revisaré tu mensaje.",
            confirmButtonText: "Cerrar"
        }).then(() => {
            contactForm.reset();
        });
    });
}
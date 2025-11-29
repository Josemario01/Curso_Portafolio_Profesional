// -------------------- i18n / Traducciones --------------------
const translations = {
    es: {
        // Nav
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.skills": "Skills",
        "nav.contact": "Contacto",

        // Hero
        "hero.name": "José Mario Salazar",
        "hero.tagline": "Desarrollador de Software · Cloud Enthusiast",
        "hero.subtitle": "Construyendo soluciones modernas, escalables y orientadas al usuario.",
        "hero.text": "Desarrollador de Software con experiencia en proyectos que integran front-end y back-end, metodologías ágiles y gestión de tareas en Azure DevOps. Cuento con bases sólidas en programación, manejo de bases de datos y resolución de problemas técnicos. Me interesa seguir creciendo en arquitecturas modernas y computación en la nube.",
        "hero.cv_es": "Descargar CV (ES)",
        "hero.cv_en": "Download CV (EN)",

        // About
        "about.title": "Sobre mí",
        "about.text": "Desarrollador de Software con experiencia en proyectos que integran front-end y back-end, metodologías ágiles y gestión de tareas en Azure DevOps. Cuento con bases sólidas en programación, manejo de bases de datos, diseño de funcionalidades y resolución de problemas técnicos. Además, poseo experiencia en soporte TI, configuración de software, gestión de incidentes y organización de recursos tecnológicos. Me interesa continuar fortaleciendo mis habilidades técnicas en desarrollo, arquitecturas modernas y computación en la nube, aportando valor a equipos de TI a través de soluciones eficientes, escalables y orientadas al usuario.",

        // Experience
        "experience.title": "Experiencia",

        // Projects
        "projects.title": "Proyectos",
        "projects.text": "Algunos de los proyectos en los que he trabajado, integrando desarrollo front-end, back-end y buenas prácticas de colaboración.",

        // Skills
        "skills.title": "Skills",

        // Contact
        "contact.title": "Contacto",
        "contact.text": "Si deseas contactarme por oportunidades laborales, proyectos o networking, puedes escribirme directamente a mi correo, conectar en LinkedIn o enviarme un mensaje mediante el siguiente formulario.",

        "contact.form.title": "Formulario de contacto",
        "contact.form.text": "Completa el formulario y simularé el envío de tu mensaje utilizando JavaScript y una librería web para mostrar la confirmación.",
        "contact.form.name.label": "Nombre completo",
        "contact.form.email.label": "Correo electrónico",
        "contact.form.message.label": "Mensaje",
        "contact.form.button": "Enviar mensaje",
        "contact.form.name.placeholder": "Tu nombre",
        "contact.form.email.placeholder": "tucorreo@ejemplo.com",
        "contact.form.message.placeholder": "Escribe tu mensaje aquí...",

        "contact.other.title": "Otros medios de contacto",
        "contact.other.text": "También puedes contactar conmigo directamente por correo, WhatsApp o conectar en LinkedIn y GitHub para coordinar entrevistas o compartir información.",
        "contact.other.phone.label": "Teléfono / WhatsApp:",
        "contact.other.email.label": "Email:",
        "contact.other.linkedin.label": "LinkedIn:",
        "contact.other.github.label": "GitHub:",

        // Form alerts
        "alert.success.title": "Mensaje enviado",
        "alert.success.text": "¡Gracias por tu mensaje! Te responderé lo antes posible.",
        "alert.error.title": "Error",
        "alert.error.text": "Ocurrió un problema al enviar el mensaje.",
        "alert.validation.title": "Formulario incompleto",
        "alert.validation.text": "Por favor completa todos los campos antes de enviar."
    },

    en: {
        // Nav
        "nav.home": "Home",
        "nav.about": "About me",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        // Hero
        "hero.name": "José Mario Salazar",
        "hero.tagline": "Software Developer · Cloud Enthusiast",
        "hero.subtitle": "Building modern, scalable and user-focused solutions.",
        "hero.text": "Software Developer with experience in projects that integrate front-end and back-end, Agile methodologies and task management using Azure DevOps. I have a strong foundation in programming, databases and technical problem-solving, and I am interested in continuing to grow in modern architectures and cloud computing.",
        "hero.cv_es": "Download CV (ES)",
        "hero.cv_en": "Download CV (EN)",

        // About
        "about.title": "About me",
        "about.text": "Software Developer with experience in projects that integrate front-end and back-end, Agile methodologies and task management in Azure DevOps. I have solid foundations in programming, database design and technical problem solving, as well as experience in IT support, software configuration and incident management. I am focused on strengthening my technical skills in development, modern architectures and cloud computing, adding value to IT teams through efficient and scalable solutions.",

        // Experience
        "experience.title": "Experience",

        // Projects
        "projects.title": "Projects",
        "projects.text": "Some of the projects I have worked on, combining front-end, back-end and good collaboration practices.",

        // Skills
        "skills.title": "Skills",

        // Contact
        "contact.title": "Contact",
        "contact.text": "If you want to contact me for job opportunities, projects or networking, you can write directly to my email, connect on LinkedIn or send me a message using the form below.",

        "contact.form.title": "Contact form",
        "contact.form.text": "Fill out the form and I will simulate sending your message using JavaScript and a web library to show the confirmation.",
        "contact.form.name.label": "Full name",
        "contact.form.email.label": "Email",
        "contact.form.message.label": "Message",
        "contact.form.button": "Send message",
        "contact.form.name.placeholder": "Your name",
        "contact.form.email.placeholder": "youremail@example.com",
        "contact.form.message.placeholder": "Write your message here...",

        "contact.other.title": "Other contact options",
        "contact.other.text": "You can also contact me directly by email, WhatsApp or connect with me on LinkedIn and GitHub to coordinate interviews or share information.",
        "contact.other.phone.label": "Phone / WhatsApp:",
        "contact.other.email.label": "Email:",
        "contact.other.linkedin.label": "LinkedIn:",
        "contact.other.github.label": "GitHub:",

        // Form alerts
        "alert.success.title": "Message sent",
        "alert.success.text": "Thank you for your message! I will get back to you as soon as possible.",
        "alert.error.title": "Error",
        "alert.error.text": "There was a problem sending your message.",
        "alert.validation.title": "Incomplete form",
        "alert.validation.text": "Please fill in all fields before sending."
    }
};

let currentLang = "es";

function setLanguage(lang) {
    currentLang = lang;

    // Actualizar textos normales
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const translation = translations[lang][key];
        if (translation) {
            el.textContent = translation;
        }
    });

    // Actualizar placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        const translation = translations[lang][key];
        if (translation) {
            el.placeholder = translation;
        }
    });

    // Botones de idioma activos
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

// Inicializar idioma por defecto
document.addEventListener("DOMContentLoaded", () => {
    // Idioma inicial
    setLanguage(currentLang);

    // Listeners botones ES / EN
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });

    // Año en el footer, si existe
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // -------------------- Formulario de contacto --------------------
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                Swal.fire({
                    icon: "warning",
                    title: translations[currentLang]["alert.validation.title"],
                    text: translations[currentLang]["alert.validation.text"]
                });
                return;
            }

            // Simulación de envío
            Swal.fire({
                icon: "success",
                title: translations[currentLang]["alert.success.title"],
                text: translations[currentLang]["alert.success.text"]
            });

            form.reset();
        });
    }
});
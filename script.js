document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flag');
    const texts = document.querySelectorAll('.text');

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        texts.forEach(text => {
            const content = text.getAttribute(`data-lang-${lang}`);
            if (text.tagName === 'H1') {
                text.textContent = content;
            } else {
                text.textContent = content;
            }
        });
        // Changer la langue du document
        document.documentElement.lang = lang;

        // Mettre à jour les liens de navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.textContent === 'À propos' && lang === 'en') {
                link.textContent = 'About';
            } else if (link.textContent === 'About' && lang === 'fr') {
                link.textContent = 'À propos';
            }
        });
    }

    // Écouteur d'événements pour les drapeaux
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Par défaut, charger la langue française
    changeLanguage('fr');
});

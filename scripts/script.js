document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flag');
    const texts = document.querySelectorAll('.text');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Traductions pour les liens de navigation
    const navTranslations = {
        'Home': { fr: 'Home', en: 'Home' },
        'Panoramix Engine': { fr: 'Moteur Panoramix', en: 'Panoramix Engine' },
        'Avionics': { fr: 'Avionique', en: 'Avionics' },
        'Structure': { fr: 'Structure', en: 'Structure' },
        'Gallus 5': { fr: 'Gallus 5', en: 'Gallus 5' },
        'R & D': { fr: 'R & D', en: 'R & D' },
        'Gallery': { fr: 'Galerie', en: 'Gallery' },
        'About': { fr: 'À propos', en: 'About' }
    };

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        // Changer le contenu des éléments .text
        texts.forEach(text => {
            const content = text.getAttribute(`data-lang-${lang}`);
            if (content) {
                text.textContent = content;
            }
        });

        // Changer la langue des liens de navigation
        navLinks.forEach(link => {
            const originalText = link.getAttribute('data-original-text') || link.textContent;
            link.setAttribute('data-original-text', originalText); // Stocker le texte original
            const translation = navTranslations[originalText];
            if (translation) {
                link.textContent = translation[lang];
            }
        });

        // Changer la langue du document
        document.documentElement.lang = lang;
    }

    // Écouteur d'événements pour les drapeaux
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Par défaut, charger la langue française
    changeLanguage('en');
});

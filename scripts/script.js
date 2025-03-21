document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé !');

    const flags = document.querySelectorAll('.flag');
    const texts = document.querySelectorAll('.text');
    const navLinks = document.querySelectorAll('.nav-links a');

    console.log('Flags trouvés :', flags.length);
    console.log('Textes trouvés :', texts.length);
    console.log('Liens de navigation trouvés :', navLinks.length);

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

    function changeLanguage(lang) {
        console.log('Changement de langue vers :', lang);

        texts.forEach(text => {
            const content = text.getAttribute(`data-lang-${lang}`);
            if (content) {
                // Trouver la balise enfant (h1 ou p) et mettre à jour son contenu
                const child = text.querySelector('h1, p');
                if (child) {
                    child.textContent = content;
                } else {
                    console.warn('Balise enfant (h1 ou p) non trouvée dans', text);
                }
            } else {
                console.warn('Contenu non trouvé pour', text, `data-lang-${lang}`);
            }
        });

        navLinks.forEach(link => {
            const originalText = link.getAttribute('data-original-text') || link.textContent;
            link.setAttribute('data-original-text', originalText);
            const translation = navTranslations[originalText];
            if (translation) {
                link.textContent = translation[lang];
            } else {
                console.warn('Traduction non trouvée pour', originalText);
            }
        });

        document.documentElement.lang = lang;

        // Sauvegarder la langue dans localStorage
        localStorage.setItem('language', lang);
    }

    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            console.log('Clic sur drapeau, langue :', lang);
            changeLanguage(lang);
        });
    });

    // Charger la langue sauvegardée ou utiliser le français par défaut
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);

});


const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlideIndex = 0; // Index du slide actuel

// Gestionnaire d'événement pour la flèche gauche
document.querySelector('.arrow_left').addEventListener('click', function() {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1; // Revenir à la fin si on est au début
    } else {
        currentSlideIndex--;
    }
    updateCarousel();
});

// Gestionnaire d'événement pour la flèche droite
document.querySelector('.arrow_right').addEventListener('click', function() {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0; // Revenir au début si on est à la fin
    } else {
        currentSlideIndex++;
    }
    updateCarousel();
});

// Création des bullet points
const dotsContainer = document.querySelector('.dots');
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot_selected');
    dotsContainer.appendChild(dot);
});

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    // Mise à jour de l'image
    document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;

    // Mise à jour du texte
    document.querySelector('#banner p').innerHTML = slides[currentSlideIndex].tagLine;

    // Mise à jour des bullet points
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

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
]

document.querySelector('.arrow_left').addEventListener('click', function() {
    console.log('Flèche gauche cliquée');
});

document.querySelector('.arrow_right').addEventListener('click', function() {
    console.log('Flèche droite cliquée');
});

const dotsContainer = document.querySelector('.dots');
console.log(dotsContainer.classList);
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot_selected');
    dotsContainer.appendChild(dot);
});

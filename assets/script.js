const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0;
const nbImages = slides.length;

const imageSlider = document.querySelector("#img");
const tagLines=document.querySelector("#banner-p")
const suivant = document.querySelector(".arrow_left");
const precedent = document.querySelector(".arrow_right");

const elementBanner = document.querySelectorAll("#banner");
const dotSelected = document.querySelector(".dot_selected")
const dots = document.querySelectorAll(".dot");






suivant.addEventListener("click", 
function () {
	i++;
	if (i >= nbImages) {
		i = 0;
	}
	imageSlider.src = slides[i].image;
	tagLines.innerHTML = slides[i].tagLine;
	dotSelected.classList.toggle("dot_selected");
	console.log("image suivant");
	
	
	
},true);

precedent.addEventListener("click", function () {
	i--;
	if (i< 0) {
		i = nbImages - 1;
	}
	imageSlider.src = slides[i].image;
	tagLines.innerHTML = slides[i].tagLine;
	console.log("image precedent");
	dotSuivant();
}, true);



/***** Dots *****/
let selected ="";
let dot="";

dots.forEach(function(dot, index){
	dot.addEventListener("click",function(){
		imageSlider.src=slides[index].image;
	})
})




/*
setInterval("afficherImage()", 3000);
 /**/


function afficherImage() {
	i++;
	if (i > nbImages-1) {
		i = 0;
	}
	imageSlider.src = slides[i].image;
}

let dott="";
function dotSuivant(){

}

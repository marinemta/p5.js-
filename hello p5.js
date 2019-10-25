//HELLO P5.JS

// éxécutée au démarrage
function setup() {
  createCanvas(640, 480); 
  capture = createCapture(VIDEO); 
	capture.size(width,height); // mettre capture à la même taille que le canvas
}

// éxécutée en boucle après la fonction setup
function draw() {
	background (0) //noir
  noStroke(); // pas de contour
  fill(random(255)); // remplissage aléatoire
  ellipse(mouseX, mouseY, random(5, 20)); // créer un rond qui suit la souris de taille aléatoire

function setup() {
  createCanvas(550, 400);
  somTrilha.loop ();
}

function draw() {
  background(imagemEstrada);
  mostraAtor ();
  mostraCorredor (); 
  movimentaAtor ();
  movimentaCorredor ();
  verificaColisao ();
 voltaPosicaoInicialCorredor ();
 incluiPontos ();
 marcaPonto ();
}  



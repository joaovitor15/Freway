// Imagem e som
var imagemEstrada;
var imagemAtor;
var imagemCorredor;
var imagemCorredor2;
var imagemCorredor3;

var somTrilha;
var somPonto;
var somColisao;

function preload (){
  imagemEstrada =loadImage ("imagem/estrada.png");
  imagemAtor = loadImage ("imagem/ator.png");
  imagemCorredor = loadImage ("imagem/corredor.png");
  imagemCorredor2 = loadImage ("imagem/corredor2.png");
  imagemCorredor3 = loadImage ("imagem/corredor3.png");
  imagemCorredor4 = loadImage ("imagem/corredor4.png");
  imagemCorredor5 = loadImage ("imagem/corredor5.png");
  imagemCorredor6 = loadImage ("imagem/corredor6.png");
  imagemCorredores =[imagemCorredor, imagemCorredor2, imagemCorredor3, imagemCorredor4, imagemCorredor5, imagemCorredor6]

  somTrilha = loadSound ("som/trilha.mp3");
  somPonto = loadSound ("som/pontos.wav");
  somColisao = loadSound ("som/colidiu.mp3");
}
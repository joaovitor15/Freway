//Ator
var xAtor = 100;
var yAtor = 345;

var colisao = false;

var pontos = 0;

function mostraAtor (){
    image (imagemAtor, xAtor, yAtor, 105, 80)
}

function movimentaAtor (){
    if (keyIsDown (UP_ARROW)){
        yAtor -= 3;
    }

    if (keyIsDown (DOWN_ARROW)){
        if (podeSeMover()){
            yAtor +=3;
        }
    }
}

 function voltaAtorParaPosicaoInicial(){
    yAtor = 345;
  }

 function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCorredores.length; i++){
      colisao = collideRectCircle(xCorredor[i], yCorredor[i], comprimentoCorredor, alturaCorredor, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorParaPosicaoInicial();
        somPonto.play ();
        if (pontoMaiorQueZero()){
          pontos -=1;
        }

        }
    }
  }
  
function incluiPontos (){
  textAlign (CENTER);
  textSize (25);
  fill (color (255,0,0));
  text (pontos, width / 25, 30);
} 
  
function marcaPonto (){
  if (yAtor<20) {
    pontos +=1;
    somPonto.play ();
    voltaAtorParaPosicaoInicial (); 
  }
}

function pontoMaiorQueZero (){
  return pontos > 0;
}

function podeSeMover (){
  return yAtor < 345;
}
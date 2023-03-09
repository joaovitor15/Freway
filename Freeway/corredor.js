var xCorredor = [600,600,600, 600, 600, 600];
var yCorredor = [29, 73, 150, 233, 277, 325];
var velocidadeCorredor = [2, 2.5, 3.2, 5, 3.3, 2.3];
var comprimentoCorredor = 50;
var alturaCorredor = 40;

function mostraCorredor (){
    for (var i =0; i < imagemCorredores.length; i =  i+1 ) {
        image (imagemCorredores [i], xCorredor [i], yCorredor [i], comprimentoCorredor, alturaCorredor);
    }
}
  
function movimentaCorredor (){
    for (var i =0; i< imagemCorredores.length; i = i +1) {
         xCorredor [i] -= velocidadeCorredor [i];
    } 
}

function voltaPosicaoInicialCorredor (){
    for (var i =0; i< imagemCorredores.length; i = i +1){
         if (pasouTodaATela(xCorredor[i])){
             xCorredor [i] = 600;
         }
     }
 }

 function pasouTodaATela (xCorredor){
    return xCorredor  < -50;
}
// posiçao bolinha 

let xBolinha = 300;
let yBolinha = 200;
let diametro =  13;
let raio = diametro / 2 ;

// velocidade Bolinha

let velocidadeXbolinha = 2;
let velocidadeYbolinha = 6;

// posiçao raquete 

let xRaquete = 3;
let yRaquete = 150
let comprimentoRaquete = 10 
let alturaRaquete = 90

// raquete oponente 

let xRaqueteOponente = 583;
let yRaqueteOponente = 150
let velocidadeYoponente; 
let raqueteOponenteComprimento = 10
let raqueteOponenteAltura = 90

let superiorRaquete = yRaquete
let inferiorRaquete = yRaquete
 

let colidiu = false 



//placar do jogo 

 let meusPontos = 0
 let pontosDoOponente = 0 

// sons Do Jogo 

//let raquetada 
let trilha 
let ponto


function preload(){
  raquetada = loadSound ("raquetada.mp3")
  trilha = loadSound  ("trilha.mp3")
  ponto = loadSound ("ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
// trilha.loop()

}

function draw() {
  background(0);
  mostrarBolinha();
 movimentaBolinha();
  colisaoBolinhaBorda();
 // bolinhaNaoFicaPresa()
  mostrarRaquete(xRaquete, yRaquete);
  movimentaRaquete();
 // movimentaRaqueteOponenteDupla()
  movimentaRaqueteOponenteSozinho()
 verificaColisaoRaquete()
  verificaColisaoRaqueteOponente()
  //verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete)
  //verificaColisaoRaqueteBiblioteca( xRaqueteOponente, yRaqueteOponente)
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente) 
  incluiPlacar()
  marcarPontos()
  bolinhaNaoFicaPresaOponente()
  

}



function mostrarBolinha(){
  
  circle (xBolinha, yBolinha,  diametro);
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXbolinha;
 yBolinha  += velocidadeYbolinha;
}

function colisaoBolinhaBorda(){
  
    if (xBolinha + raio > width 
        || xBolinha - raio < 0){
     velocidadeXbolinha *= -1
  }
 
  if (yBolinha + raio > height 
     || yBolinha - raio < 0){
    velocidadeYbolinha *= -1
  }
    
} 

function mostrarRaquete(x, y){
  
  rect (x, y, comprimentoRaquete, alturaRaquete)
}

function movimentaRaquete(){
  
 if (keyIsDown(UP_ARROW) ){
   yRaquete -= 10
   
 }
  if  (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
  
 yRaquete = constrain (yRaquete,3,310)
   
 
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0) {
    xBolinha += 15
    }
}

 function bolinhaNaoFicaPresaOponente(){
    if (xBolinha + raio < 5){
      xBolinha += -15
    }
  }

function movimentaRaqueteOponenteDupla(){
  
  if (keyIsDown(87)){
   yRaqueteOponente -= 10
   
 }
  if  (keyIsDown(83)){
    yRaqueteOponente += 10
  }
  
   constrain (superiorRaquete,0 ,355)
 
}

function movimentaRaqueteOponenteSozinho(){
  velocidadeYoponente = yBolinha - yRaqueteOponente -
  comprimentoRaquete / 2  - 86.9
  yRaqueteOponente += velocidadeYoponente  
  
 yRaqueteOponente = constrain (yRaqueteOponente,3,310)
}

function verificaColisaoRaquete(x, y){
   if (xBolinha - raio < xRaquete + comprimentoRaquete & 
    yBolinha - raio < yRaquete + alturaRaquete & 
    yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1 
  raquetada.play()
      
}
  
}

function verificaColisaoRaqueteOponente(){
  
  if (xBolinha + raio > xRaqueteOponente + raqueteOponenteComprimento &
      yBolinha - raio < yRaqueteOponente + raqueteOponenteAltura &
  yBolinha + raio > yRaqueteOponente - raqueteOponenteAltura
  ){
    
    velocidadeXbolinha *= -1
    raquetada.play()
  }
}

    
/*
function verificaColisaoRaqueteBiblioteca(x,y){
  colidiu = 
  collideRectCircle (x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha,diametro, raio ) 
  if (colidiu){
    velocidadeXbolinha *= -1 
    raquetada.play()
  }
}
*/

function incluiPlacar(){
  
  stroke (255)
  textAlign (CENTER)
  textSize (16)
  fill (color (0,128,0) )
  rect (150, 10, 40, 20)
  fill (255)
  text (meusPontos, 170,  26)
  fill (color (0,128,0) )
  rect (450, 10, 40, 20)
  fill(255)
  text (pontosDoOponente, 470,  26)
}

function marcarPontos(){
  
  if (xBolinha > 593){
    meusPontos += 1
    ponto.play()
    
  }
      
  if (xBolinha < 7){
    pontosDoOponente += 1
    ponto.play()
  }
    
}


 
  


  







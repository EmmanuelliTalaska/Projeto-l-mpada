var $ligar = document.getElementById("ligar")
var $desligar = document.getElementById("desligar")
var $lampada = document.getElementById("lampada")
var $verde = document.getElementById("verde")
var $vermelha = document.getElementById("vermelha")
var $azul = document.getElementById("azul")

function ligarLampada(){
    $lampada.src="./img/amarelo.jpg"
}
function desligarLampada(){
    $lampada.src="./img/branca.jpg"
}
function verde(){
    $lampada.src="./img/verde.jpg"
}
function azul(){
    $lampada.src="./img/azul.jpg"
}

$azul.addEventListener('click',azul)
$verde.addEventListener('click',verde)
$ligar.addEventListener('click',ligarLampada)
$desligar.addEventListener('click',desligarLampada)
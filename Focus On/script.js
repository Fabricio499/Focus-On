const audio = document.getElementById('som')

const rel = document.getElementById('rel')
rel.disabled = true;

function startTime(duration, display){
    let timer = duration, minutes, seconds;
    
    var intt;
    intt = setInterval(() => {
            minutes =  parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds


            display.textContent = minutes + ":" + seconds;
            
            if(--timer < 0) {
                clearTimeout(intt);
                audio.play()
                audio.volume = 0.2;
                rel.disabled = false;
                rel.style.color = "#184e77";

            }

        }, 1000);
}

let botao = document.getElementsByClassName('inc')

var jaFoiClicado = false;
var np

let n1 = 60;
let n2 = 0.2;


function iniciar(){
    for(np = 0; np < 1; np++) {

        if (!jaFoiClicado) {
            console.log("primeira vez");
            
            const duration = n1 * n2 //conversão para segundos
            const display = document.querySelector("#timer") 
    
            startTime(duration, display); 
    
            jaFoiClicado = true;
            n1 * 0
            n2 * 0

          } else {
            
            }
    }
    
}

function atualizar(){
    document.location.reload(true);
}











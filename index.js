function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
}






const bntstart = document.getElementById('btn-star');

bntstart.addEventListener ('click', () => {
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const secons = document.getElementById('second');

    let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60 ) + parseInt(secons.value);


    display = document.getElementById('timer');
    timer(duration, display);
})

function mostrarModal() {
    
        document.getElementById('meuModal').style.display ="block";
}
function setTimeout(){
    alarme.play();
}
const alarme = document.getElementById('alarme');

const timer = (duration, display) => {
    let timer = duration;
    let hours, minutes, secons;

        let interval = setInterval(() => {
            hours = Math.floor((timer / 60) / 60);
            minutes = Math.floor(timer /60 - (hours * 60)); 
            secons = Math.floor(timer % 60);

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            secons = secons < 10 ? '0' + secons : secons; 

            display.innerHTML = `${hours}:${minutes}:${secons}`;

            timer -= 1;
            if(timer <0){
                display.innerHTML ='00:00:00';
                clearInterval (interval);
                alarme.play();
                mostrarModal();
            }
        }
    , 1000);

    
    
}








function stopTimerPopUp() {

    document.getElementById('meuModal').style.display = "none";

    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const secons = document.getElementById('second');

    let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60 ) + parseInt(secons.value);


    display = document.getElementById('timer');
    timer(duration, display);
}





let tempo = 1;
let segundos = 1;
let isRunning = false;


function stopTimer() {
      
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const secons = document.getElementById('second');

    let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60 ) + parseInt(secons.value);


    display = document.getElementById('timer');
    timer(duration, display);
    
}


function resetPage() {
    window.location.reload(); 
}












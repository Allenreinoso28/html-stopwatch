let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let [Emilliseconds, Eseconds, Eminutes, Ehours] = [0,0,0,0];
let changeText = document.querySelector("button-start");
let int = null;
const isRunning = false;
var intervalId;
let lapNum = 0;
let lapNow = null

function stopwatchTime() {
    milliseconds++;
    if (milliseconds == 100){
        milliseconds = 0;
        seconds++;
        if (seconds == 60){
            seconds = 0;
            minutes++;
            if (minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    document.getElementById("timerdisplay").innerHTML = `${h}:${m}:${s}:${ms}`;

    Emilliseconds++;
    if (Emilliseconds == 100){
        Emilliseconds = 0;
        Eseconds++;
        if (Eseconds == 60){
            Eseconds = 0;
            Eminutes++;
            if (Eminutes == 60){
                Eminutes = 0;
                Ehours++;
            }
        }
    }



    //document.getElementById("lap-records").innerHTML = `${Eh}:${Em}:${Es}:${Ems}`;
} 


const reset = () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    document.getElementById("timerdisplay").innerHTML = '00:00:00:00';
    document.getElementById("button-start").innerHTML = "Start";
    int = null;
    lapNum = 0;
    document.getElementById("laps").innerHTML = "";
    [Emilliseconds, Eseconds, Eminutes, Ehours] = [0,0,0,0];
}

const lap = () => {
    let Eh = Ehours < 10 ? "0" + Ehours : Ehours;
    let Em = Eminutes < 10 ? "0" + Eminutes : Eminutes;
    let Es = Eseconds < 10 ? "0" + Eseconds : Eseconds;
    let Ems = Emilliseconds < 10 ? "0" + Emilliseconds : Emilliseconds;
    lapNum ++;
    const lapList = document.getElementById('laps');
    const listItem = document.createElement('div');
    listItem.classList.add('newLap');
    listItem.textContent = `Lap ${lapNum} - ${Eh}:${Em}:${Es}:${Ems}`;
    lapList.appendChild(listItem);
    lapList.insertBefore(listItem, lapList.firstChild);
    
    // document.getElementById("lap-records").innerHTML += "<li>" + "Lap " + lapNum + " - " + Eh + ":" + Em + ":" + Es + ":" + Ems + "</li>";
    [Emilliseconds, Eseconds, Eminutes, Ehours] = [0,0,0,0];
    
}

function change() // no ';' here
{
    if (!int){
        int = setInterval(stopwatchTime, 10);
        document.getElementById("button-start").innerHTML = "Stop";
    } else {
        clearInterval(int);
        int = null;
        document.getElementById("button-start").innerHTML = "Start";
    }
}



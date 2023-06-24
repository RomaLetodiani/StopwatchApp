const timeEl = document.querySelector('.timer'),
startBtn = document.querySelector('.start'),
resetBtn = document.querySelector('.reset'),
startText = document.querySelector('.start h3');

timeEl.innerHTML = '00:00:00';

console.log(timeEl)

let seconds = 0,
tens = 0,
int = null;


resetBtn.addEventListener('click', reset);
startBtn.addEventListener('click', start);

function timer() {
    tens++

    tens < 10 ? tens = '0' + tens :'';

    if(tens > 99) {
    seconds++;
    tens ='00';
}
    
    let mins = Math.floor((seconds)/60),
    secs = seconds % 60;

    secs < 10 ? secs = '0' + secs :'';
    mins < 10 ? mins = '0' + mins:'';

    timeEl.innerText = `${mins}:${secs}:${tens}`;
}

function start() {
        if (int) {
          clearInterval(int);
          int = null;
          startText.innerHTML = 'RESUME';
        } else {
          int = setInterval(timer, 10);
          startText.innerHTML = 'STOP';
        }
      }

function reset() {

    clearInterval(int);
    int = null;
    seconds = 0;
    timeEl.innerHTML = '00:00:00';
    startText.innerHTML = 'START';
    
    resetBtn.style.height = '150px';
    setTimeout(function() {
        resetBtn.style.height = '235px';
    }, 500);
  }
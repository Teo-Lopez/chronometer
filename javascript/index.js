const chronometer = new Chronometer();

///elementos del DOM
const startButton = document.querySelector('#btnLeft');
const resetButton = document.querySelector('.btn.reset');
const decSecs = document.querySelector('#secDec');
const uniSecs = document.querySelector('#secUni');
const decMins = document.querySelector('#minDec');
const uniMins = document.querySelector('#minUni');
const splitList = document.querySelector('#splits');

//listeners
startButton.addEventListener('click', (event) => {
  //console.log(event.currentTarget);
  if (startButton.textContent === 'START') {
    chronometer.start(printTime);
    setSplitBtn();
    setStopBtn();
  } else {
    chronometer.stop();
    setResetBtn();
    setStartBtn();
  }
});

resetButton.addEventListener('click', () => {
  if (resetButton.textContent === 'RESET') {
    resetTime();
  } else {
    printSplit();
  }
});

///////functions
function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  const mins = chronometer.getMinutes();
  const formatMins = chronometer.computeTwoDigitNumber(mins);
  decMins.textContent = formatMins[0];
  uniMins.textContent = formatMins[1];
}

function printSeconds() {
  const secs = chronometer.getSeconds();
  const formatSecs = chronometer.computeTwoDigitNumber(secs);
  decSecs.textContent = formatSecs[0];
  uniSecs.textContent = formatSecs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = chronometer.split();

  const liElement = document.createElement('li');
  liElement.textContent = split;
  splitList.appendChild(liElement);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  startButton.classList.add('stop');
  startButton.classList.remove('start');
  startButton.textContent = 'STOP';
}

function setSplitBtn() {
  resetButton.textContent = 'SPLIT';
  resetButton.classList.toggle('split');
  resetButton.classList.toggle('reset');
}

function setStartBtn() {
  startButton.classList.add('start');
  startButton.classList.remove('stop');
  startButton.textContent = 'START';
}

function setResetBtn() {
  resetButton.textContent = 'RESET';
  resetButton.classList.toggle('split');
  resetButton.classList.toggle('reset');
}

function resetTime() {
  chronometer.reset();
}

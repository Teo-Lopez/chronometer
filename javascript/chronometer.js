class Chronometer {
  constructor() {
    this.intervalId = null;
    this.currentTime = 0;
  }

  start(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      
      if (printTime) {
        printTime();
      }
    }, 10);
  }

  getMinutes() {
    const min = this.currentTime / 60 / 100;
    const minInteger = Math.floor(min);
    return minInteger;
  }

  getSeconds() {
    const secs = (this.currentTime % 60) / 100;
    return secs;
  }

  getMilliseconds() {
    const millSecs = this.currentTime % 100;
    console.log(millSecs);
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mins = this.getMinutes();
    const secs = this.getSeconds();

    return (
      this.computeTwoDigitNumber(mins) + ':' + this.computeTwoDigitNumber(secs)
    );
  }
}

if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes;
  }
  getSeconds() {
    const seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }
  twoDigitsNumber(num) {
    if(num.toString().length < 2) {return `0${num}`}
    else {return num}
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
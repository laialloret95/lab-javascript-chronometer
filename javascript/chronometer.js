class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return this.twoDigitsNumber(minutes);
  }
  getSeconds() {
    const seconds = this.currentTime - this.getMinutes() * 60;
    return this.twoDigitsNumber(seconds);
  }
  twoDigitsNumber(num) {
    if(num.toString().length < 2) {return num = `0${num}`}
    else {return num}
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.getMinutes()}:${this.getSeconds()}`;
  }
}

export class TimeRemainingCalculator {

  constructor(private totalSeconds: number, private remainingSeconds: number) {}

  getRemainingTime() {
    // debugger;
    console.log('remaining seconds in getRemainingTime: ' + this.remainingSeconds);
    let time = this.remainingSeconds;
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    let percent = ((this.totalSeconds - this.remainingSeconds) / this.totalSeconds) * 100;
    if (this.remainingSeconds === this.totalSeconds) {
      percent = 0;
    }

    this.remainingSeconds--;
    return {hours: hours, minutes: minutes, seconds: seconds, percent: percent};
  }

}

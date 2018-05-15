import { Component, OnInit } from '@angular/core';
import { RemainingTimeCalculator } from './remaining-time-calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  timerId: any;
  totalSeconds: number;
  remainingSeconds: number;
  hours: number;
  minutes: number;
  seconds: number;
  percent: number;

  ngOnInit(): void {
  }

  onStartTimer() {
    console.log('TotalSeconds: ' + this.totalSeconds);
    console.log('remainingSeconds: ' + this.remainingSeconds);
    const remainingTimeCalculator = new RemainingTimeCalculator(this.totalSeconds, this.remainingSeconds);
    this.timerId = setInterval((totalSeconds, remainingSeconds) => {
        console.log('Loop in setInterval');
        const timeRemaining = remainingTimeCalculator.getRemainingTime();
        this.hours = timeRemaining.hours;
        this.minutes = timeRemaining.minutes;
        this.seconds = timeRemaining.seconds;
        this.percent = timeRemaining.percent;
        if (timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
          clearInterval(this.timerId);
        }
    } , 1000);
  }
}

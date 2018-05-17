import { Component, OnInit } from '@angular/core';
import { TimeData } from './time-data';
import { RemainingTimeCalculator } from '../shared/remaining-time-calculator';

@Component({
  selector: 'app-implementation-two',
  templateUrl: './implementation-two.component.html',
  styleUrls: ['./implementation-two.component.css']
})
export class ImplementationTwoComponent implements OnInit {

  timerId: any;
  totalSeconds: number;
  remainingSeconds: number;
  hours: number;
  minutes: number;
  seconds: number;
  percent: number;

  isError: boolean;
  errorMsg: string;
  isSubmitted: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(timeData: TimeData) {
    this.isSubmitted = true;
    this.isError = false;
    this.errorMsg = '';
    this.startCounting(timeData);

  }

  onUpdate(timeData: TimeData) {
    // When an update occurs just kill the timer and send in new data.
    // kill timer:
    clearInterval(this.timerId);
    this.startCounting(timeData);
  }

  startCounting(timeData: TimeData) {
    const startTime = this.makeTimeOrError(timeData.startTime, 'Start Time');
    const currentTime = this.makeTimeOrError(timeData.currentTime, 'Current Time');
    const endTime = this.makeTimeOrError(timeData.endTime, 'End Time');
    if (startTime.hasError || currentTime.hasError || endTime.hasError) {
      return;
    }

    // From the data above need total seconds and remaining seconds and then it becomes the same as
    // implementation one.
    this.remainingSeconds = Math.abs((endTime.date.getTime() - currentTime.date.getTime()) / 1000);
    // tslint:disable-next-line:max-line-length
    this.totalSeconds = Math.abs(endTime.date.getTime() / 1000 - (startTime.date.getTime() / 1000 + timeData.pauseSeconds + timeData.errorSeconds));


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
          this.isSubmitted = false;
          clearInterval(this.timerId);
        }
    } , 1000);

  }

  makeTimeOrError(timeString: string, whichTime: string) {
    const dateTimeString = '05-15-2018 ' + timeString;
    const timeStamp = Date.parse(dateTimeString);
    if (isNaN(timeStamp)) {
      this.isError = true;
      this.errorMsg = whichTime + ' is not valid.';
      return {
        hasError: true,
        date: null
      };
    }

    return {
      hasError: false,
      date: new Date(timeStamp)
    };

  }
}

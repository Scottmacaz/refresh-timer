import { Component, OnInit, Output, Input } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { TimeData } from '../time-data';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.css']
})
export class TimeFormComponent implements OnInit {
  model = new TimeData('7:00:00', '7:00:00', '7:00:03', 0, 0);

  @Output() submitEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Input() isSubmitted: boolean;

  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.isSubmitted = true;
    this.submitEvent.emit(this.model);
   }

   onUpdate() {
    this.updateEvent.emit(this.model);
   }
}

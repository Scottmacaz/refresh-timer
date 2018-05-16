export class TimeData {
  constructor (
    public startTime: string,
    public currentTime: string,
    public endTime: string,
    public pauseSeconds: number,
    public errorSeconds: number
  ) {}
}

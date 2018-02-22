export class WindEntity {
  
  private deg: number;
  private speed: number;

  constructor(deg: number,
              speed: number) {
    this.deg = deg;
    this.speed = speed;
  }

  public setDeg(deg: number) {
    this.deg = deg;
  }

  public getDeg(): number {
    return this.deg;
  }

  public setSpeed(speed: number) {
    this.speed = speed;
  }

  public getSpeed(): number {
    return this.speed;
  }

}
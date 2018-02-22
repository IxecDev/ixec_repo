export class CloudsEntity {
  
  private all: number;

  constructor(all: number) {
    this.all = all;
  }

  public setAll(all: number) {
    this.all = all;
  }

  public getAll(): number {
    return this.all;
  }

}
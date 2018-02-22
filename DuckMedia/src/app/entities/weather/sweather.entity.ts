export class SWeatherEntity {
  
  private description: string;
  private icon: string;
  private id: number;
  private main: string;

  constructor(description: string,
              icon: string,
              id: number,
              main: string) {
    this.description = description;
    this.icon = icon;
    this.id = id;
    this.main = main;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public setIcon(icon: string) {
    this.icon = icon;
  }

  public getIcon(): string {
    return this.icon;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public setMain(main: string) {
    this.main = main;
  }

  public getMain(): string {
    return this.main;
  }

}
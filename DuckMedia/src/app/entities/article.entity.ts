export class ArticleEntity {

  private active: boolean;
  private author: string;
  private content: string;
  private contentId: number;
  private contentRaw: string;
  private createdTime: number;
  private description: string;
  private image: string;
  private noted: boolean;
  private platformId: number;
  private principal: boolean;
  private sectionId: number;
  private tags: string;
  private title: string;
  private updatedTime: number;
  private url: string;

  constructor(active: boolean,
              author: string,
              content: string,
              contentId: number,
              contentRaw: string,
              createdTime: number,
              description: string,
              image: string,
              noted: boolean,
              platformId: number,
              principal: boolean,
              sectionId: number,
              tags: string,
              title: string,
              updatedTime: number,
              url: string) {
    this.active = active;
    this.author = author;
    this.content = content;
    this.contentId = contentId;
    this.contentRaw = contentRaw;
    this.createdTime = createdTime;
    this.description = description;
    this.image = image;
    this.noted = noted;
    this.platformId = platformId;
    this.principal = principal;
    this.sectionId = sectionId;
    this.tags = tags;
    this.title = title;
    this.updatedTime = updatedTime;
    this.url = url;
  }

  public setActive(active: boolean) {
    this.active = active;
  }

  public getActive(): boolean {
    return this.active;
  }

  public setAuthor(author: string) {
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setContent(content: string) {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

  public setContentId(contentId: number) {
    this.contentId = contentId;
  }

  public getContentId(): number {
    return this.contentId;
  }

  public setContentRaw(contentRaw: string) {
    this.contentRaw = contentRaw;
  }

  public getContentRaw(): string {
    return this.contentRaw;
  }

  public setCreatedTime(createdTime: number) {
    this.createdTime = createdTime;
  }

  public getCreatedTime(): number {
    return this.createdTime;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public setImage(image: string) {
    this.image = image;
  }

  public getImage(): string {
    return this.image;
  }

  public setNoted(noted: boolean) {
    this.noted = noted;
  }

  public getNoted(): boolean {
    return this.noted;
  }

  public setPlatformId(platformId: number) {
    this.platformId = platformId;
  }

  public getPlatformId(): number {
    return this.platformId;
  }

  public setPrincipal(principal: boolean) {
    this.principal = principal;
  }

  public getPrincipal(): boolean {
    return this.principal;
  }

  public setSectionId(sectionId: number) {
    this.sectionId = sectionId;
  }

  public getSectionId(): number {
    return this.sectionId;
  }

  public setTags(tags: string) {
    this.tags = tags;
  }

  public getTags(): string {
    return this.tags;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

  public setUpdatedTime(updatedTime: number) {
    this.updatedTime = updatedTime;
  }

  public getUpdatedTime(): number {
    return this.updatedTime;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public getUrl(): string {
    return this.url;
  }

}
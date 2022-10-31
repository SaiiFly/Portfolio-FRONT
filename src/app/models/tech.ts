export class Tech {
  id?: number;
  name: string;
  imgLink: string;

  constructor(name: string, imgLink: string) {
      this.name = name;
      this.imgLink = imgLink;
  }
}
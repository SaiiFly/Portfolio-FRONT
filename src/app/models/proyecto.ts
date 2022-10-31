export class Proyecto {
  id?: number;
  name: string;
  imgLink: string;
  description: string

  constructor(name: string, imgLink: string, des: string) {
      this.name = name;
      this.imgLink = imgLink;
      this.description = des;
  }
}
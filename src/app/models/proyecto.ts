export class Proyecto {
  id?: number;
  nombreE: string;
  imgLink: string;

  constructor(name: string, imgLink: string) {
      this.nombreE = name;
      this.imgLink = imgLink;
  }
}
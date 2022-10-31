export class Tech {
  id?: number;
  nombre: string;
  imgLink: string;

  constructor(name: string, imgLink: string) {
      this.nombre = name;
      this.imgLink = imgLink;
  }
}
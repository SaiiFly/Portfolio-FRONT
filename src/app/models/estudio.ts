export class Estudio {
    id?: number;
    institucion: string;
    titulo: string;
    fechaIn: number;
    fechaFin: number;
    imgLink: string;

    constructor(institucion: string, titulo: string, fechaIn: number, fechaFin: number, imgLink: string) {
        this.institucion = institucion;
        this.titulo = titulo;
        this.fechaIn = fechaIn;
        this.fechaFin = fechaFin;
        this.imgLink = imgLink;
    }
}
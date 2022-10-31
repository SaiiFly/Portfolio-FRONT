export class Estudio {
    id?: number;
    institucionE: string;
    tituloE: string;
    fechaInE: number;
    fechaFinE: number;
    imgLinkE: string;

    constructor(institucion: string, titulo: string, fechaIn: number, fechaFin: number, imgLink: string) {
        this.institucionE = institucion;
        this.tituloE = titulo;
        this.fechaInE = fechaIn;
        this.fechaFinE = fechaFin;
        this.imgLinkE = imgLink;
    }
}
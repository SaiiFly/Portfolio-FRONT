export class Estudio {
    id?: number;
    institucion: string;
    titulo: string;
    fechaIn: number;
    fechaFin: number;

    constructor(institucion: string, titulo: string, fechaIn: number, fechaFin: number) {
        this.institucion = institucion;
        this.titulo = titulo;
        this.fechaIn = fechaIn;
        this.fechaFin = fechaFin;
    }
}
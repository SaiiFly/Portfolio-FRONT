import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  datos: Estudio[] = [];

  constructor() { }

  ngOnInit(): void {
    this.callData();
  }

  callData() {
    //this.datos = [];

    this.datos.push(
      new Estudio("Universidad Nacional de Avellaneda",
        "Lic. en Gerencia de Empresas",
        2022,
        0,
        "https://www.undav.edu.ar/landing/img/logo1.png"
      )
    );
    this.datos.push(
      new Estudio("Inst. San Fco. Solano",
        "Bachiller en Economía y Administración",
        2019,
        2013,
        "https://iili.io/b7pBsf.jpg"
      )
    );
  }

}
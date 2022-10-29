import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  datos : Estudio[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
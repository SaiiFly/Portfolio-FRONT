import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  active: string[] = [];
  data: Proyecto[] = [];

  activeDescription: string = "";


  constructor() { }

  ngOnInit(): void {
    this.callData();
    this.data.forEach((_, index)=>{
      if(index==0) {
        this.active.push("active");
        console.log("active funciona " + index);
        console.log(this.active);
      } else {
        this.active.push("");
        console.log("funciona " + index);
      }
    })
  }

  callData() {
    this.data.push(
      new Proyecto("Violin Sightreading Practice", "https://iili.io/bYH25B.png", "Proyecto"),
      new Proyecto("Otro proyecto 1", "https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000", "Proyecto"),
      new Proyecto("Otro proyecto 2", "https://c0.wallpaperflare.com/preview/986/182/524/brilliant-bokeh-gold-multi-color-thumbnail.jpg", "Proyecto")
    );
  }

}

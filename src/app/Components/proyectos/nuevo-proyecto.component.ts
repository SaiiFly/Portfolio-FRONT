import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.scss']
})
export class NuevoProyectoComponent implements OnInit {

  nombreE: string = "";
  imgLink: string = "";

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreE, this.imgLink);
    this.proyectoS.save(proyecto).subscribe({
      next: (data) => {
        alert("Proyecto guardado");
        this.router.navigate(['']);
      }, 
      error: (error) => {
        alert("Error");
        this.router.navigate(['']);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.scss']
})
export class EditarProyectoComponent implements OnInit {

  data: Proyecto = new Proyecto("","");

  constructor(
    private proyectoS: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        alert("Error");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.update(id, this.data).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, 
      error: (err) => {
        alert("Error");
        this.router.navigate(['']);
      }
    })
  }

}

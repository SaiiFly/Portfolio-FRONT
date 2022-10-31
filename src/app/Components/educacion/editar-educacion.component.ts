import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudio';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.scss']
})
export class EditarEducacionComponent implements OnInit {
  educacion: Estudio = new Estudio("","",0,0,"");

  constructor(
    private educacionS: EducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe({
      next: (data) =>{
        this.educacion = data;
      }, 
      error: (err) =>{
         alert("Error");
         this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe({
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

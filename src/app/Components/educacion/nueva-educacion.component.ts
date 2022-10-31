import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudio';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.scss']
})
export class NuevaEducacionComponent implements OnInit {
  institucionE!: string;
  tituloE!: string;
  fechaInE!: number;
  fechaFinE!: number;
  imgLinkE!: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Estudio(this.institucionE, this.tituloE, this.fechaInE, this.fechaFinE, this.imgLinkE);
    this.educacionS.save(educacion).subscribe({
      next: (data) =>{
        alert("Estudio añadido");
        this.router.navigate(['']);
      }, error: (err) =>{
        alert("error");
        this.router.navigate(['']);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  datos: Estudio[] = [];
  isLogged = false;

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.callData();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  callData() {
    this.educacionS.lista().subscribe(
      data =>{
        this.datos = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe({
        next: (data) => {
          this.callData();
        }, 
        error: (err) => {
          alert("Error");
        }
      })
    }
  }

}
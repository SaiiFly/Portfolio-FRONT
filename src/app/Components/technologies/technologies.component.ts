import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/app/models/tech';
import { TechnologiesService } from 'src/app/services/technologies.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  data: Tech[] = [];
  isLogged = false;

  constructor(private techS: TechnologiesService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.callData();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  callData() {
    this.techS.lista().subscribe(
      data => {
        this.data = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.techS.delete(id).subscribe({
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

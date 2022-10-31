import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import animateScrollTo from 'animated-scroll-to';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    AOS.init();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  scrollFunction() {
    animateScrollTo(document.getElementById('target')!);
  }

  onLogOut() {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }

}

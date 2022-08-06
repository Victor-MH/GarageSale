import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imageLogo: string;

  constructor() { 
    this.imageLogo = 'assets/images/Logo.png';
  }

  ngOnInit(): void {
  }

}

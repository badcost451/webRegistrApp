
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Location } from '@angular/common';
// import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-registro-asis',
  templateUrl: './registro-asis.page.html',
  styleUrls: ['./registro-asis.page.scss'],
})
export class RegistroAsisPage implements OnInit {

  constructor(private router :Router,
    private location : Location,
    // private auth: Auth
    ) { }

  ngOnInit() {
  }
  
  goBack(){
    window.history.back();
  }
  irAsistencia(){
    this.router.navigate(['/profe'])
  }
  cerrarSesion(){
    this.router.navigate(['/login-profe']);
    this.location.replaceState('/login');
  }
  // async logout(){
  //   await signOut(this.auth).then(()=>this.router.navigate(['/login']));
  //   this.router.navigate(['/login-profe']);
  // }

}

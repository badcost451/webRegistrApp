import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  constructor(private router: Router,
    private location: Location,
    // private auth: Auth,
    // private servApi: ServDjangoService
  ) { }

  // listar_seccion: SeccionApi[] = [];

  ngOnInit() {
    // this.listarSeccion();
  }
  goBack() {
    window.history.back()
  }
  irAsistencia() {
    this.router.navigate(['/profe'])
  }
  cerrarSesion() {
    this.router.navigate(['/login-profe']);
    this.location.replaceState('/login');
    this.location.replaceState('/login-profe');
  }


  // async logout() {
  //   await signOut(this.auth).then(() => this.router.navigate(['/login']));
  //   this.router.navigate(['/login-profe']);
  // }
  // listarSeccion() {
  //   this.servApi.listar_seccion().subscribe((data) => {
  //     console.log(data);
  //     this.listar_seccion = JSON.parse(JSON.stringify(data));
  //   });

  }

  
  






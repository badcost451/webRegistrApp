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
}

  
  






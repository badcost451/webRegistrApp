import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  correo: string = '';
  passs: string = "";

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private routerRC: Router,
    // private auth: Auth,
    private navCtrl: NavController) {

  }

  ngOnInit() {
  }
  irMenu(){
    this.routerRC.navigate(['/menu']);
  }
  


  // async crear() {
  //   // await createUserWithEmailAndPassword(this.auth,this.correo,this.pass).then(()=>{
  //   //   console.log("SOS")    });
  //   const user = await createUserWithEmailAndPassword(this.auth, this.correo, this.passs);
  //   console.log(user)
  // }

  // async login() {
  //   const user = await signInWithEmailAndPassword(this.auth, this.correo, this.passs); console.log(user);
  //   this.router.navigate(['/profe']);
  //   localStorage.setItem('ingresado', 'true');
  //   this.navCtrl.navigateRoot('profe');
  // }

  // async logut() {
  //   await signOut(this.auth).then(() => this.router.navigate(['/login-profe']))
  // }
}






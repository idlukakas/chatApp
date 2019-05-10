import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value;
  user="GUEST01";
  constructor(public navCtrl: NavController) {

  }
entrar(){
  this.navCtrl.push("PrimeiratelaPage",{
    nome: this.user,
    sala: this.value
  });
  console.log(this.value)
}
}

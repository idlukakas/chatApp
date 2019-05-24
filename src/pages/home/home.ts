import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value;
  user="GUEST01";
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase) { 
    console.log(db);
  }

entrar(){
  this.navCtrl.push("PrimeiratelaPage",{
    nome: this.user,
    sala: this.value
  });
  console.log(this.value)
}
}

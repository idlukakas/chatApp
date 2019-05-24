import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value;
  user="GUEST01";
  
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams) { 
    this.user = this.navParams.get("username");
  }

entrar(){
  this.navCtrl.push("PrimeiratelaPage",{
    nome: this.user,
    sala: this.value
  });
  console.log(this.value)
}
}

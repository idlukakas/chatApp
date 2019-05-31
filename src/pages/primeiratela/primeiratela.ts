import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatService } from '../../app/chat.service';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the PrimeiratelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primeiratela',
  templateUrl: 'primeiratela.html',
})
export class PrimeiratelaPage {
  nome;
  sala;
  mensagem;
  username;
  
  msg="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private chatService: ChatService, private db: AngularFireDatabase) {
    this.nome = this.navParams.get("nome");
    this.sala = this.navParams.get("sala");
    // this.username = this.navParams.get("username");
    if(this.sala=="Cinema"){
      this.mensagem = this.db.list("/chats/cinema/");
      // this.mensagem = this.chatService.fetchNotes();
    }  
    else if(this.sala=="Esportes"){
      this.mensagem = this.db.list("/chats/esporte/");
    }
    else if(this.sala=="Diversos"){
      this.mensagem = this.db.list("/chats/diversos/");
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimeiratelaPage');
  }
  enviar(){
    var local = new Date();
    var localdatetime = local.getHours() + ":" + local.getMinutes() + ":" + local.getSeconds();
    this.chatService.addNote({nome:this.nome,mensagem:this.msg, date: localdatetime},this.sala)
    // console.log({nome:this.nome,mensagem:this.msg})
  }
}

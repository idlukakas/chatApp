import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatService } from '../../app/chat.service';

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
  msg="";
  constructor(public navCtrl: NavController, public navParams: NavParams, private chatService: ChatService) {
    this.nome = this.navParams.get("nome");
    this.sala = this.navParams.get("sala");
    if(this.sala=="Cinema"){
      this.mensagem = this.chatService.chats[0].cinema;
    }  
    else if(this.sala=="Esportes"){
      this.mensagem = this.chatService.chats[1].esportes;
    }
    else if(this.sala=="Diversos"){
      this.mensagem = this.chatService.chats[2].diversos;
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimeiratelaPage');
  }
  enviar(){
    this.chatService.addNote({nome:this.nome,mensagem:this.msg},this.sala)
    // console.log({nome:this.nome,mensagem:this.msg})
  }
}

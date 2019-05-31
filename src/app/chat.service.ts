import { AngularFireDatabase } from 'angularfire2/database'
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
    constructor(private db: AngularFireDatabase) {

    }

    chats = [ 
        {
            cinema: [
                {
                    nome: 'Roberto',
                    mensagem: 'Teste'
                    },
                    {
                    nome: 'Roberto',
                    mensagem: 'Teste'
                    }
            ]
        },
        {
            esportes: [
                {
                    nome: 'Carlos',
                    mensagem: 'Teste'
                    },
                    {
                    nome: 'Carlos',
                    mensagem: 'Teste'
                    }
            ]
        },
        {
            diversos: [
                {
                    nome: 'Daise',
                    mensagem: 'Teste'
                    },
                    {
                    nome: 'Daise',
                    mensagem: 'Teste'
                    }
            ]
        }
    ]
    addNote (mensagem, sala){
        if(sala=="Cinema"){
            this.db.list("/chats/cinema/").push ({mensagem: mensagem.mensagem, nome: mensagem.nome, date: mensagem.date});
          }  
          else if(sala=="Esportes"){
            this.db.list("/chats/esporte/").push ({mensagem: mensagem.mensagem, nome: mensagem.nome, date: mensagem.date});
          }
          else if(sala=="Diversos"){
            this.db.list("/chats/diversos/").push ({mensagem: mensagem.mensagem, nome: mensagem.nome, date: mensagem.date});
          }

        // console.log(this.chats[0].cinema)
       }
    //    fetchNotes(){
    //         return this.db.list("/chats/");
    //    }
}
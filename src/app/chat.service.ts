export class ChatService{
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
            this.chats[0].cinema.push(mensagem);
          }  
          else if(sala=="Esportes"){
            this.chats[1].esportes.push(mensagem);
          }
          else if(sala=="Diversos"){
            this.chats[2].diversos.push(mensagem);
          }
        
        console.log(this.chats[0].cinema)
       }
   }
var res = document.getElementById('resultado')
var res1 = document.getElementById('resultado1')
var res2 = document.getElementById('resultado2')
var res3 = document.getElementById('resultado3')


let database = firebase.database();  // instacia para ler ou escrever dados no firebase



function status(){  // chamada no body  onlond chama as demais funçoes 

status_escritorio()  
status_varanda()
status_placateste()

}



function desligar_escritorio(){
    database.ref('Controle/').set(1);  /// muda o banco e desliga o rele 
 //  status()
 
}


function ligar_escritorio(){
    database.ref('Controle/').set(0);   // muda o banco e Liga  o rele
  //  status()

}



function status_escritorio(){    ///função responsavel por atualizar os estados do rele 
    
res.innerHTML = `INICIANDO...`   ///teste se função foi acionada 
res.style.background = 'green'

database.ref('Controle/').on('value', snapshot => {    ///essa para é mais importante pois é aqui que a magica acontece 
   var  buttonState = snapshot.val();  //// snapshot é referencia 

   switch(buttonState){
       case 0:
        res.innerText = "LIGADO"
        res.style.background = 'red'
            break;
        case 1:
        res.innerText = "DESLIGADO"
        res.style.background = 'black'
            break;
        default:
         res.innerText = "[ERRO]"
            break;
    }});

}


function desligar_varanda(){
    database.ref('luzVaranda/').set(1);  /// muda o banco e desliga o rele 
 //  status()
 
}


function ligar_varanda(){
    database.ref('luzVaranda/').set(0);   // muda o banco e Liga  o rele
  //  status()

}



function status_varanda(){    ///função responsavel por atualizar os estados do rele 
    
    res1.innerHTML = `INICIANDO...`   ///teste se função foi acionada 
    res1.style.background = 'green'
    
    database.ref('luzVaranda/').on('value', snapshot => {    ///essa para é mais importante pois é aqui que a magica acontece 
       var  buttonState = snapshot.val();  //// snapshot é referencia 
    
       switch(buttonState){
           case 0:
            res1.innerText = "LIGADO"
            res1.style.background = 'red'
                break;
            case 1:
            res1.innerText = "DESLIGADO"
            res1.style.background = 'black'
                break;
            default:
             res1.innerText = "[ERRO]"
                break;
        }});
}



         

function desligar_placateste(){
    database.ref('placateste/').set(1);   // muda o banco e Liga  o rele
  //  status()

}



function ligar_placateste(){
    database.ref('placateste/').set(0);   // muda o banco e Liga  o rele
  //  status()

}



function status_placateste(){    ///função responsavel por atualizar os estados do rele 
    
    res2.innerHTML = `INICIANDO...`   ///teste se função foi acionada 
    res2.style.background = 'green'
    
    database.ref('placateste/').on('value', snapshot => {    ///essa para é mais importante pois é aqui que a magica acontece 
       var  buttonState = snapshot.val();  //// snapshot é referencia 
    
       switch(buttonState){
           case 0:
            res2.innerText = "LIGADO"
            res2.style.background = 'red'
                break;
            case 1:
            res2.innerText = "DESLIGADO"
            res2.style.background = 'black'
                break;
            default:
             res2.innerText = "[ERRO]"
                break;
        }});
}
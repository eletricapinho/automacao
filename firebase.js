var res = document.getElementById('resultado')
let lamp = document.querySelector('#lamp');
let lamp1 = document.querySelector('#lamp1');



let database = firebase.database();  // instacia para ler ou escrever dados no firebase


function desligar(){
    database.ref('Controle/').set(1);  /// muda o banco e desliga o rele 
 //  status()
}


function ligar(){
    database.ref('Controle/').set(0);   // muda o banco e Liga  o rele
  //  status()

}




function status(){    ///função responsavel por atualizar os estados do rele 
    
res.innerHTML = `Iniciando...`   ///teste se função foi acionada 

database.ref('Controle/').on('value', snapshot => {    ///essa para é mais importante pois é aqui que a magica acontece 
   var  buttonState = snapshot.val();  //// snapshot é referencia 

   switch(buttonState){
       case 0:
        res.innerText = "ligado"
            break;
        case 1:
        res.innerText = "desligado"
            break;
        default:
         res.innerText = "[ERRO]"
            break;
   }



/*

    if (buttonState == '1') {    /// condicional para veridicar se esta ligado os desligado
       res.innerText = "desligado"
    }else{
      res.innerText = "ligado"
    }

*/





});




}

function atv5(){
    var Num = Number(prompt("Escreva o número desejado: "));
  
     if(Num % 2 == 0 && Num % 3 == 0){
        alert("O número digitado é divisível por 2 e por 3! \n" + Num);
    }
    else if(Num % 2 == 1 && Num % 3 == 1){
        alert("O número digitado não é divisível por 2 e nem por 3! \n" + Num);
    }
    else if(Num % 2 == 0){
        alert("O número digitado é divisível por 2! \n" + Num);
    }
    else if(Num % 3 == 0){
        alert("O número digitado é divisível por 3! \n" + Num);
    }
}

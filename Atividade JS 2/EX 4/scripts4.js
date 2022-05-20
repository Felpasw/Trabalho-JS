function atv4(){
    var Num = Number(prompt("Digite o número desejado: "));
    if(Num > 0 && Num % 2 == 0 ){
        alert("O número digitado é positivo e par!");
    }
    else if(Num > 0 && Num % 2 == 1 ){
        alert("O número digitado é positivo e ímpar! \n " + Num);
    }
    else{
        alert("Número digitado é negativo! \n " + Num);
    }

}
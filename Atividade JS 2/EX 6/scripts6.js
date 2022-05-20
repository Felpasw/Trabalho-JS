function atv6(){
    var Num = Number(prompt("Digite o número desejado: "));
    if(Num % 2 == 0 && Num %7 == 0 ){
        alert("Número é divisível por 2 e por 7!");
    }
    else if(Num % 7 == 0){
        alert("Número é divisível somente por 7!");
    }
    else if(Num % 2 == 0){
        alert("Número é divisível somente por 2!");
    }
    else{
        alert("Número não é divisível nem por 2 nem por 7!");
    }
}
  
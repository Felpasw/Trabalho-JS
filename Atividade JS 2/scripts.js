function atv1(){
        var Num1 = Number(prompt("Envie o primeiro número: "));
        var Num2 = Number(prompt("Envie o segundo número: "));
        if(Num1 > Num2){
            alert("Aparentemente, " +Num1+ " é maior que " + Num2+"!");

        }
        else{
            alert("Aparentemente, " +Num2+ " é maior que " + Num1+"!");
        }
}

function atv2(){
    var Genre = Number(prompt("Envie seu gênero: \n1-M \n 2-F"));
    var altura =  parseFloat(prompt("Envie sua altura: "));
    //altura.replace(",",".");
    if(Genre = 1){
        pesoIdeal = (72.7*altura) - 58;
    }
    else{
        pesoIdeal = (62.1*altura) - 44.7;
    }
   
    alert("Peso ideal: " + pesoIdeal);
}

function atv3(){
    let menor = 3782139;
    let vet = [];
  
   
    for(i=0;i<3;i++){
        vet[i] = Number(prompt(" Digite o  "+ i + "numero: "));

    }
    for(i=0;i<3;i++){
        if(vet[i]>maior){

        }

    }

}
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

function atv7(){
    var NUm = Number(prompt("Digite um número entre 1 e 7: "));
    switch(NUm){
        case 1: 
            alert("Este dia da semana se refere ao domingo!"+"("+ NUm + ")");
            break;
        case 2:
            alert("Este dia da semana se refere a segunda-feira!"+"(" + NUm + ")");
            break;
        case 3:  
            alert("Este dia da semana se refere a terça-feira"+"(" + NUm + ")");
            break;
        case 4: 
            alert("Este dia da semana se refere a quarta-feira"+"("+ NUm +")");
            break;
        case 5: 
            alert("Este dia da semana se refere a quinta-feira"+"("+ NUm +")");
            break;
        case 6: 
            alert("Este dia da semana se refere a sexta-feira"+"(" +NUm +")");
            break;
        case 7: 
            alert("Este dia da semana se refere a sábado"+"("+ NUm + ")");
            break;
    }

}

function atv8(){
    var i;
    var soma = 0;
    for(i=0;i<=20;i++){
        soma = soma + i;

    }
    alert("Soma de 1 até 20: "+ soma);
}

function atv9(){
    num = Number(prompt("Digite o número para a tabuada: "));
    string = "";
    for(i=0;i<=10;i++){
        string += num + "x" + i + "=" + (num *i) + ", "
    }
    alert(string)
}

function atv10(){
    num = Number(prompt("Digite o número para o fatorial: "));
    total = 1;
    for(i=1;i<=num;i++){
        total = total * i;
    }
    alert("Fatorial de" + num  + "=" + total)
    
}
  


function atv3(){
    var Num1 = Number(prompt(" Digite o primeiro número: "));
    var Num2 = Number(prompt(" Digite o segundo número: "));
    var Num3 = Number(prompt(" Digite o terceiro número: "));
    if(Num1>Num2>Num3){
        alert("O número maior entre os digitados é "+ Num1+ "!");
    }
    else if(Num1>Num3>Num2){
        alert("O número maior entre os digitados é "+ Num1+ "!");
    } 
    else if(Num2>Num1>Num3){
        alert("O número maior entre os digitados é "+ Num2+ "!");
    } 
    else if(Num2>Num3>Num1){
        alert("O número maior entre os digitados é "+ Num2+ "!");
    } 
    else if(Num3>Num1>Num2){
        alert("O número maior entre os digitados é "+ Num3+ "!");
    } 
    else{
        alert("O número maior entre os digitados é "+ Num3+ "!");

    }
}

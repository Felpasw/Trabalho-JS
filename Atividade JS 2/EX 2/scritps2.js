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
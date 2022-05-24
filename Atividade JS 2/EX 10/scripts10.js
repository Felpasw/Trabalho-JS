function atv10(){
    num = Number(prompt("Digite o número para o fatorial: "));
    total = 1;
    for(i=1;i<=num;i++){
        total = total * i;
    }
    alert("Fatorial de" + num  + "=" + total)
    
}
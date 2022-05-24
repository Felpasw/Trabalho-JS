function atv9(){
    num = Number(prompt("Digite o número para a tabuada: "));
    string = "";
    for(i=0;i<=10;i++){
        string += num + "x" + i + "=" + (num *i) + ", "
    }
    alert(string)
}
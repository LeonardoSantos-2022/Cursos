function carro(nome,placa){
    this.nome=nome;
    this.placa=placa;
    // this.fabricante="vw"
}
carro.prototype.fabricante="VW"
carro.prototype.ligar=function(){
    console.log("ligando o carro....");
}
var fox = new carro("fox","AAA-1111")
console.log("fox",fox);
var fox = new carro("gol","AAA-2222")
console.log("gol",gol);

console.log("fox.fabricante" ,  fox.fabricante);
console.log("gol.fabricante" ,  gol.fabricante);

fox.ligar();
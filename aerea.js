var readline =require('readline-sync');

var escolha  = 1
while(escolha != 0){
console.log("+_ _ _ _ _ _ Passagens áreas _ _ _ _ _ _ + ")
console.log("|                                          |")
console.log("|      1 - Comprar Passagens               |")
console.log("|      2 - Consultar Voos                  |")
console.log("|      3 - Mapa Assentos                   |")
console.log("|      4 - Emitir Tickit                   |")
console.log("|      0 - Encerrar o progama              |")
console.log("+_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ +")

escolha = readline.question ("Escolha uma opcao...")

if(escolha == 1){
   var nome = readline.question("Informe seu nome")
   var sobrenome = readline.question("Informe seu sobrenome")
   var idade = readline.question("Informe sua idade")
   var assento = readline.question("Informe seu assento")
   var origem = readline.question("Informe sua origem")
   var destino = readline.question("Informe seu destino")
   console.log("+_ _ _ _ _ _ Passagens áereas_ _ _ _ _ _+")
   console.log("                                         ")
   console.log(" Você está em -> comprar Passagem  ")
   console.log("nome :" +nome)
   console.log("sobrenome :" +sobrenome)
   console.log("idade :" +idade)
   console.log("assento :" +assento)
   console.log("origem :" +origem)
   console.log("destino" +destino)

   var certo = readline.question("Informacoes corretas? sim/nao")  
    if(certo = "sim"){
        console.log("+ _ _ _ _ _ _  Passagens Aéreas _ _ _ _ _ _ _ +")
        console.log("Você está em -> comprar Passagem  ")
        console.log("")
        console.log("*Resumo da Compra*")
        console.log("")
        console.log("Cliente: "+ nome +" "+ sobrenome)
        console.log("Idade:"+ idade)
        console.log("Assento: "+ assento)
        console.log("Voo: "+ origem + " x "+ destino  )
        console.log("Status do Voo: confirmado")
        console.log("")
        console.log("Valor: R$1900,00")
    }
    else if(certo = "não"){

    } 
}
else if(escolha == 2){
    console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
    console.log("")
    console.log(" Você está em -> Consulta de Voos ")
    console.log("")
    console.log("Origem             x               Destino")
    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
    console.log("")
    console.log("Presidente Prudente                São Paulo")
    console.log("São Paulo                          Cabo Frio")
    console.log("Presidente Prudente                   Coreia")
    console.log("Presidente Prudente                   Canadá")
}
else if(escolha == 3){
    console.log("+_ _ _ _ _ _ Passagens áereas_ _ _ _ _ _+")
    console.log("Você está em -> mapa de assentos ")
    console.log("")
    console.log(" _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
    console.log(" A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12 ")
    console.log(" B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12 ")
    console.log(" _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
}
else if(escolha == 4){
    console.log("+_ _ _ _ _ _ Passagens áereas_ _ _ _ _ _+")
    console.log("")
    console.log("Você está em -> Emitir ticket            ")
    console.log("")
    console.log("*********************************************")
    console.log("|   Obrigada pela confiança                 |")
    console.log("|   Cliente; "+ nome+"                      |")
    console.log("|   idade: "+idade+"   assento: "+assento+" |")
    console.log("|   Origem/destino: "+origem+" > "+destino+"|")
    console.log("*********************************************")
    
}
else if ( escolha != 1 && escolha !=2 && escolha !=3 && escolha !=4 && escolha !=0){
    console.log("Escolha inexistence")

}

console.log("+_ _ _ _ _ _ Passagens áreas _ _ _ _ _ _ + ")
console.log("|                                          |")
console.log("|      1 - Comprar Passagens               |")
console.log("|      2 - Consultar Voos                  |")
console.log("|      3 - Mapa Assentos                   |")
console.log("|      4 - Emitir Tickit                   |")
console.log("|      0 - Encerrar o progama              |")
console.log("+_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ +")
 
escolha = readline.question("digite uma opcao")
}
    



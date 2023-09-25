function calculaCombustivel(event){
    event.preventDefault()

    let nome, unome, combustivel  = "";
    let preco, gasto, distancia = 0;

    preco = document.getElementById("preco").value;
    gasto = document.getElementById("gasto").value;
    distancia = document.getElementById("distancia").value;
    nome = document.getElementById("pnome").value;
    unome = document.getElementById("unome").value;
    combustivel = document.getElementById("combustivel").value;

    consumo = distancia / gasto;
    gastoTotal = consumo * preco;

document.getElementById("resultado").innerHTML = `${nome} ${unome} você usou ${combustivel} que estava no valor de R$${preco} totabilizando 
um gasto total de: R$${gastoTotal.toFixed(2)}` ;
}
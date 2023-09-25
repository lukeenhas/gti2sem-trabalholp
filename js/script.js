function calculaCombustivel(event){
    event.preventDefault()

    let preco, gasto, distancia = 0
    preco = document.getElementById("preco").value
    gasto = document.getElementById("gasto").value
    distancia = document.getElementById("distancia").value
    consumo = distancia / gasto
    gastoTotal = consumo * preco
  

document.getElementById("resultado").innerHTML = "teste";

}
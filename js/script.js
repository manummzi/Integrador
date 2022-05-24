
function calcularPrecio (){
    let resultado1 = document.getElementById("valorcantidad").value;
   
    let x = document.getElementById("valortipo").value;
    switch (x) {
          
        case "Estudiante":
            document.getElementById("elresult").innerHTML = (resultado1 * 200 * 0.2);
            document.getElementById("resumCant").innerHTML = ("Cantidad de entradas: " + resultado1) ;
            document.getElementById("resumCat").innerHTML = "Categoría: Estudiante";
            document.getElementById("resumTot").innerHTML = ("Total a Pagar: $"+(resultado1 * 200 * 0.2));
            
            break;
        case "1":
            document.getElementById("elresult").innerHTML = (resultado1 * 200 * 0.5);
            document.getElementById("resumCant").innerHTML = ("Cantidad de entradas: " + resultado1) ;
            document.getElementById("resumCat").innerHTML = "Categoría: Trainee";
            document.getElementById("resumTot").innerHTML = ("Total a Pagar: $"+(resultado1 * 200 * 0.5));
            break;
        case "2":
            document.getElementById("elresult").innerHTML = (resultado1 * 200 * 0.85);
            document.getElementById("resumCant").innerHTML = ("Cantidad de entradas: " + resultado1) ;
            document.getElementById("resumCat").innerHTML = "Categoría: Junior";
            document.getElementById("resumTot").innerHTML =  ("Total a Pagar: $"+(resultado1 * 200 * 0.85));
            break;  
}   
}
function calcularPrecio2 (){
    document.getElementById("elresult").innerHTML = " " ;
    document.getElementById("resumCant").innerHTML = "Cantidad de entradas: " ;
    document.getElementById("resumCat").innerHTML = "Categoría: ";
    document.getElementById("resumTot").innerHTML = "Total a Pagar: $";
}
function mostrarResumen(){

    document.getElementById("divResumen").style.display = "block" ;
}
function ocultarResumen(){
    document.getElementById("divResumen").style.display = "none" ;
}
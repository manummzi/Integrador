
function calcularPrecio (){
    let resultado1 = document.getElementById("valorcantidad").value;
   
    let x = document.getElementById("valortipo").value;
    switch (x) {
          
        case "Estudiante":
            document.getElementById("elresult").innerHTML = (resultado1 * 200 * 0.2);
            //alert(resultado1 * 200 * 0.2);
            break;
        case "1":
            document.getElementById("elresult").innerHTML = (resultado1 * 200 * 0.5);
            break;
        case "2":
            document.getElementById("elresult").innerHTML = (resultado1 * 200 * 0.85);
            break;  
}   
}
function calcularPrecio2 (){
    document.getElementById("elresult").innerHTML = " " ;
}
function mostrarResumen(){

    document.getElementById("divResumen").style.display = "block" ;
}
function ocultarResumen(){
    document.getElementById("divResumen").style.display = "none" ;
}
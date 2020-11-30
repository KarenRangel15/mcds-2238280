function operacionRestar(opr){
    var ops = {
        restar: function restarNumero(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        }
    };
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    
    switch(opr) {
    case 'restar':
    var resultadoResta = ops.restar(valor1, valor2);
    console.log("El resultado de la resta es:" +resultadoResta);
    document.getElementById('resultadoResta').innerHTML =("El resultado de la resta es: " +resultadoResta);
    break; }
    
}

function operacionMultiplicar(opm){
    var ops = {
        
        multiplicar: function multiplicarNumero(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
            
        }
    };
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    
    switch(opm) {
    case 'multiplicar':
    var resultadoMultiplicacion = ops.multiplicar(valor1, valor2);
    console.log("El resultado de la multiplicacion es:" +resultadoMultiplicacion);
    document.getElementById('resultadoMultiplicacion').innerHTML =("El resultado de la multiplicacion es: " +resultadoMultiplicacion);
    break; }
    
}
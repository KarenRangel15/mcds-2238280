/* EJERCICIO #1*/
function operacionResta(op){
    var ops = {
        restar: function restarNumeros(n1, n2) {
        return (parseInt(n1) - parseInt(n2));}
    };
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    switch(op) {
    case 'restar':
    var resultado = ops.restar(num1, num2);
    console.log("El resultado de la resta es:" +resultado);
    document.getElementById('resultado').innerHTML =("El resultado de la resta es: " +resultado);
    
    break; }
    
}
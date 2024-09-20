// Solicitar dos valores numéricos
var operando_1 = parseFloat(prompt("Introduce el primer valor numérico:"));
var operando_2 = parseFloat(prompt("Introduce el segundo valor numérico:"));


var resultadoDiv = document.getElementById('resultados');

// Bucle de 5 iteraciones
for (var i = 1; i <= 5; i++) {
    var resultado_logico;
    var mensaje;

    if (i === 1) {
        // Suma en la primera iteración
        resultado_logico = operando_1 + operando_2;
        mensaje = "Iteración " + i + ": SUMA = " + resultado_logico;
    } else if (i === 2) {
        // Resta en la segunda iteración
        resultado_logico = operando_1 - operando_2;
        mensaje = "Iteración " + i + ": RESTA = " + resultado_logico;
    } else if (i === 3) {
        // Multiplicación en la tercera iteración
        resultado_logico = operando_1 * operando_2;
        mensaje = "Iteración " + i + ": MULTIPLICACIÓN = " + resultado_logico;
    } else if (i === 4) {
        // División en la cuarta iteración
        if (operando_2 !== 0) {
            resultado_logico = operando_1 / operando_2;
            mensaje = "Iteración " + i + ": DIVISIÓN = " + resultado_logico;
        } else {
            mensaje = "Iteración " + i + ": Error. No se puede dividir entre 0.";
        }
    } else if (i === 5) {
        // Módulo en la quinta iteración
        if (operando_2 !== 0) {
            resultado_logico = operando_1 % operando_2;
            mensaje = "Iteración " + i + ": MÓDULO = " + resultado_logico;
        } else {
            mensaje = "Iteración " + i + ": Error. No se puede calcular el módulo con divisor 0.";
        }
    }

    // Mostrar el resultado en el div con id="resultados"
    resultadoDiv.innerHTML += "<p>" + mensaje + "</p>";
}

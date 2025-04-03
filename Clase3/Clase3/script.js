function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese números válidos.";
        return;
    }
    
    let resultado = num1 + num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function restar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese números válidos.";
        return;
    }
    
    let resultado = num1 - num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

// Ejemplo de arrow function
let a= 8
let b= 10
const suma= (a,b) => a+b
console.log(suma(a,b))

//Ejemplo If ternario
let edad= 17
let esMayor= edad >= 18 ? true : false
console.log(esMayor)
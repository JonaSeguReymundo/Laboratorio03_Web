const fibonacciCalculate = (num) => {
    /*const fibonacciSequence = [0, 1]; // Iniciamos la secuencia con 0 y 1
    for (let i = 2; i < num; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    return fibonacciSequence.slice(0, n);*/

    let a = 0,
        b = 1,
        result = "0"; // Inicializamos los primeros números y el resultado
    for (let i = 1; i < num; i++) {
        result += `, ${b}`; // Acumular el siguiente número en la cadena
        [a, b] = [b, a + b]; // Actualizar los valores de a y b
    }
    return result; // Devolver la secuencia en formato de cadena
}

const requestQuantity = () => {
    let quantity;
    do {
        quantity = prompt("¿Cuántos números de la secuencia de Fibonacci deseas generar?"); // Se le pide el número.
        if (quantity === null) continue;
        quantity = parseInt(quantity); // Se convierte a entero.
    } while (isNaN(quantity) || quantity <= 0); // Condición que no sea nulo o menor que cero.
    return quantity;
}

const main = () => {
    const quantity = requestQuantity();

    // Si la cantidad es válida, generar la secuencia de Fibonacci
    if (quantity > 0) {
        const fibonacciSequence = fibonacciCalculate(quantity);
        alert(`Los primeros ${quantity} números de Fibonacci son: ${fibonacciSequence.join(', ')}`);
    } else {
        alert("No se generaron números de Fibonacci.");
    }

}

main();
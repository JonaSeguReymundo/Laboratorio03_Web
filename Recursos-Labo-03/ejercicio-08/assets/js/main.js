const fibonacciCalculate = (quantity) => {
    // Se crea la secuencia de Fibonacci con los primeros dos números.
    const sequence = [];
    // Se inicializan los primeros dos números de la secuencia.
    if (quantity >= 1) sequence.push(0);
    if (quantity >= 2) sequence.push(1);

    // Se generan los demás números de la secuencia. Se utiliza la fórmula de la secuencia de Fibonacci. 1er y 2do número: 0, 1. El resto: suma de los dos anteriores.
    for (let i = 2; i < quantity; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    // Retorna la secuencia de Fibonacci.
    return sequence;
}

const requestQuantity = () => {
    let quantity;
    do {
        quantity = parseInt(prompt("¿Cuántos números de la secuencia de Fibonacci deseas generar?")); // Se le pide la secuencia de número, se guarda en una variable y se convierte a entero.
    } while (isNaN(quantity) || quantity < 0); // Condición que la cantidad no sea nula o menor a cero.
    // Retorna la secuencia del número.
    return quantity;
}

const main = () => {
    // Pedir al usuario la cantidad de números de la secuencia de Fibonacci.
    const quantity = requestQuantity();

    // Si la cantidad es 0, no se generan números de Fibonacci.
    if (quantity === 0) {
        alert("No se generaron números de Fibonacci.");
    } else {
        // Generar la secuencia de Fibonacci y mostrarla al usuario.
        const fibonacciSequence = fibonacciCalculate(quantity);
        alert(`Los primeros ${quantity} números de Fibonacci son: ${fibonacciSequence.join(", ")}`);
    }

}

main();
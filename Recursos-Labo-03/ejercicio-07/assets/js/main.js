const requestValue = (message) => {
    let value;
    do {
        value = prompt(message);
    } while (value === null || value.trim() === ""); // Para que no este vacia
    return value;
}

const main = () => {
    // Pedimos los valores de a y b al usuario
    let a = requestValue("Introduce el valor de a:");

    let b = requestValue("Introduce el valor de b:");

    // Intercambio
    [a, b] = [b, a];

    // Mostramos los valores intercambiados al usuario
    alert(`Después del intercambio: a = ${a}, b = ${b}`);
}

main();
const createCounter = () => {
    let counter = 0;
    // La función que incrementa el número y retorna
    return () => {
        counter++;
        return counter;
    }
}

const showCounter = (counter) => {
    alert(counter);
}

const requestNumber = () => {
    let number;
    do {
        number = prompt("Introduce un número entero hasta el cual desee contar:");
        number = parseInt(number); // Se convierte el número a entero
    } while (isNaN(number) || number < 0);

    return number;
}

const main = () => {
    const number = requestNumber();

    const counter = createCounter();

    for (let i = 0; i < number; i++) {
        const currentCount = counter();
        showCounter(currentCount);
    }

}

main();
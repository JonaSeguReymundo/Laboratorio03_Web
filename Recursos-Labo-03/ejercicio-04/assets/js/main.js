const createCounter = () => {
    let counter = 0;
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
        number = parseInt(number, 10);
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
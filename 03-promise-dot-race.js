const drinkFirstBeer = new Promise((resolve, reject) => {
    resolve('First beer.');
});

const drinkSecondBeer = new Promise((resolve, reject) => {
    resolve('Second beer.');
});

const drinkThirdBeer = new Promise((resolve, reject) => {
    resolve('Last one, please.');
});

Promise.race([
    drinkFirstBeer,
    drinkSecondBeer,
    drinkThirdBeer
]).then((message) => {
    console.log(message);
})

//Only returns one value
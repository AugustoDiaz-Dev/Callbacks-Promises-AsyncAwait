const drinkFirstBeer = new Promise((resolve, reject) => {
    resolve('First beer.');
});

const drinkSecondBeer = new Promise((resolve, reject) => {
    resolve('Second beer.');
});

const drinkThirdBeer = new Promise((resolve, reject) => {
    resolve('Last one, please.');
});

Promise.all([
    drinkFirstBeer,
    drinkSecondBeer,
    drinkThirdBeer
]).then((messages) => {
    console.log(messages);
})

//Gives you an array with the messages

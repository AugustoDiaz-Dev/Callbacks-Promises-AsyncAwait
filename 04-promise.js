let promise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

promise.then((message) => {
    console.log('This is in the "then": ' + message)
}).catch((message) => {
    console.log('This is in the "catch": ' + message)
})
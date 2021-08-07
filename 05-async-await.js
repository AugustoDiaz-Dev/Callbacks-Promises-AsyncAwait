function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location} `)
        if (location === "Google") {
            resolve('Google says hello!')
        } else {
            reject('We can only talk to Google.')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Adding some extra information + ${response}`)
    })
}

// makeRequest('Facebook').then(response => {
//     console.log('Response received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

//All our different code is excecuted in order and it's waiting for the previous code to be excecuted.

async function doWork() {
    try {
        const response = await makeRequest('Facebook')
        console.log('Response received')
        const processedResponce = await processRequest(response)
        console.log(processedResponce)
    } catch (err) {
        console.log(err)
    }
    }
   

doWork();

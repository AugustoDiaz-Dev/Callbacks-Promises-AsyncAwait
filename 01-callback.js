const wifeLeft = false;
const meRunningOutOfFood = false;

// function houseSituation(callback, errorCallback) {
//   if (wifeLeft) {
//     errorCallback({
//       name: "Wife Left.",
//       message: ":(",
//     });
//   } else if (meRunningOutOfFood) {
//     errorCallback({
//       name: "Running out of food!",
//       message: "You are done bro",
//     });
//   } else {
//     callback("You don't have any issues!");
//   }
// }

// houseSituation(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

//The previous Callback done in Promise. Promises came to solve the problem of "Callbacks hell" replacing nested callbacks with .then

function houseSituationPromise() {
  return new Promise((resolve, reject) => {
    if (wifeLeft) {
      reject({
        name: "Wife Left.",
        message: ":(",
      });
    } else if (meRunningOutOfFood) {
      reject({
        name: "Running out of food!",
        message: "You are done bro",
      });
    } else {
      resolve("You don't have any issues!");
    }
  });
}

houseSituationPromise().then((message) => {
      console.log("Success: " + message);
    }).catch((error) => {
      console.log(error.name + " " + error.message);
    }
  );
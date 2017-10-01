/*! frontend-nanodegree-mobile-portfolio 01-10-2017 */

importScripts("pizza-generator.js"),onmessage=function(s){var a=s.data;console.log("Data received from main: ",a);var t={status:"",allThesePizzas:"not set"};"START"===a.status?t={status:"STARTED"}:"STOP"===a.status?t={status:"STOPPED"}:"PIZZA-NAME"===a.status?(t.status="PIZZA-NAMED",t.allThesePizzas=makeAllPizzasAsString(),console.log("This is all the pizza: \n",t.allThesePizzas)):t={status:"NOTHING"},postMessage(t)};
//# sourceMappingURL=pizza-worker.js.map
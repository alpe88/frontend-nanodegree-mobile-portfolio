/*! frontend-nanodegree-mobile-portfolio 30-09-2017 */

includeScript("pizza-generator.js"),this.onmessage=function(s){var t=s.data,a=null,e="";"START"===t.status?(e=self.pizzaCompleted,a={status:"STARTED"}):"STOP"===t.status?a={status:"STOPPED"}:"PIZZA-NAME"===t.status?(a={status:"PIZZA-NAMED"},a={rnp:self.randomName()}):a={pizzaOrder:e},this.postMessage(a)};
//# sourceMappingURL=pizza-worker.js.map
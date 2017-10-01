/*! frontend-nanodegree-mobile-portfolio 30-09-2017 */

includeScript("pizza-generator.js"),this.onmessage=function(s){console.log("messageObject received from main thread.\nRequest in process.");var e=s.data,t=null;if("START"===e.status){console.log("messageObject.status === START.\nStarting Worker.");var a=self.pizzaCompleted;t={status:"STARTED"}}else"STOP"===e.status?(console.log("messageObject.status === STOP.\nStopping Worker."),t={status:"STOPPED"}):(console.log("No status sent in message."),t={pizzaOrder:a});this.postMessage(t)};
//# sourceMappingURL=pizza-worker.js.map
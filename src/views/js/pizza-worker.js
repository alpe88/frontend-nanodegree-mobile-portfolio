//Pizza making code
includeScript("pizza-generator.js");

this.onmessage = function(e) {
  var messageObject = e.data;
  var result = null;
  var pizzaReady = "";
  if (messageObject.status === "START"){
	  pizzaReady = self.pizzaCompleted;
	  result = {status: "STARTED"};
  }else if (messageObject.status === "STOP"){
	  result = {status: "STOPPED"};
  }else if (messageObject.status === "PIZZA-NAME"){
	  result = {status: "PIZZA-NAMED"};
	  var rngNamedPizza = self.randomName();
	  result = {rnp: rngNamedPizza};
  }else{
	  result = {pizzaOrder: pizzaReady};
  }
  this.postMessage(result);
};
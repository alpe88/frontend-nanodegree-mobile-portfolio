//Pizza making code
includeScript("pizza-generator.js");

this.onmessage = function(e) {
  console.log('messageObject received from main thread.\nRequest in process.');
  var messageObject = e.data;
  var result = null;
  if (messageObject.status === "START"){
	  console.log('messageObject.status === START.\nStarting Worker.');
	  var pizzaReady = self.pizzaCompleted;
	  result = {status: "STARTED"};
  }else if (messageObject.status === "STOP"){
	  console.log('messageObject.status === STOP.\nStopping Worker.');
	  result = {status: "STOPPED"};
  }else{
	  console.log('No status sent in message.');
	  result = {pizzaOrder: pizzaReady};
  }
  
  this.postMessage(result);
}
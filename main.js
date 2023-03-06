let quoteId = document.getElementById("advice-id");
  quoteId.innerHTML = 1;
  let count = 1;

 
  
  let quote = document.getElementById("quote");
  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      quote.innerHTML = data.slip.advice;
      
    
    })
    
    count += 1
      quoteId.innerHTML = count;
  }
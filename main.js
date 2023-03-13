let quoteId = document.getElementById("advice-id");
quoteId.innerHTML = 1;
let count = 0;
let quote = document.querySelector('q');

let btn = document.querySelector(".btn").addEventListener("click",getAdvice);


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
  
  
(function(){
  getAdvice();
}())
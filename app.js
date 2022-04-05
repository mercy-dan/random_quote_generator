console.log("connected!");
//let btn = document.getElementById ('btn');
//let output = document.getElementById ('output');
//let quotes =
//[
   
//];
//btn.addEvenetListener('click', function(){
   // let randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
   // output.innerHTML = randomQuote;
//})
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector(" #btn")

// randome quoute 
function randomQuote(){
    // feching random quoute 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "Press for a New Quote!";
});
}
quoteBtn.addEventListener("click",randomQuote);
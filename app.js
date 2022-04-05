//console.log("connected!");
let btn = document.getElementById ('btn');
let output = document.getElementById ('output');
let quotes =
[
    "God is good !",
    "All is Well ",
    "Now is the time",
    "I am who I am because of him"
];
btn.addEvenetListener ('click', function(){
    let randomQuote = quotes [Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
})
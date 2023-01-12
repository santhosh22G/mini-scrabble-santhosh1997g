//your code here
let input_text = document.getElementById("evaluatedText");
let charaCount= document.getElementById("letterCount");
input_text.addEventListener("input",()=>{
    charaCount.textContent = input_text.value.length;
});

const ANS1 = document.getElementById("ans1");
const ANS2 = document.getElementById("ans2");
const ANS3 = document.getElementById("ans3");
const ANS4 = document.getElementById("ans4");
const QUESTION = document.getElementById("question")
const addBtn = document.getElementById("next");

let scramble_mcq = 1;

addBtn.addEventListener("click", function(){
   

    let data = {
        q : QUESTION.value,
        a1 : ANS1.value,
        a2 : ANS2.value,
        a3 : ANS3.value,
        a4 : ANS4.value,
    }
    ara.push(data);
    console.log(ara);
})
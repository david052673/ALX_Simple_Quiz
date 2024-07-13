function checkAnswer(correctanswer=4) {
    // Function body
};

const useranswer=
document.querySelector ('input[name="quiz"]:checked').value;
let value = document.querySelector ("quiz");
let userAnswer = value

let feedback = document.getElementById("feedback");
["if(userAnswer===correctAnswer)"]{
   feedback="Correct!Well done"
}else{
    feedback="That's incorrect. Try again"
}

const SubmitAnswer= document.getElementById("submit-answer");
SubmitAnswer.addEventListener("click")
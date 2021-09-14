var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector(".submit-button");
var outputDiv = document.querySelector(".output");

const correctAnswers = ['90°', 'Right-angled', 'One right angle', '12, 16, 20', 'Equilateral triangles', '85°', '40°', 'a + b + c', 'Zero', '45°'];

function calculateScore(){
    var score = 0;
    var index = 0;
    const data = new FormData(quizForm);
    for(var pair of data.entries()){
        
        if(pair[1] === correctAnswers[index]){
            console.log(pair[0] + ": " + pair[1] + " - Correct");
            score++;
        }
        else{
            console.log(pair[0] + ": " + pair[1] + " - Wrong");
        }
        index++;
    }
    console.log("Score: ", score);
    outputDiv.innerHTML = "Your score: " + score;
}

submitButton.addEventListener("click", calculateScore);

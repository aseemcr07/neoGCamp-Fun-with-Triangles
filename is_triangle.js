var angles = document.querySelectorAll(".input-box");
var button = document.querySelector(".submit-button");
var outputDiv = document.querySelector(".output");

function calculateSumOfAngles(listOfAngles){
    var sum = 0;
    for(var angle of listOfAngles){
        sum = sum + Number(angle);
    }
    return sum;
}

function isTriangle(){
    var sumOfAngles = calculateSumOfAngles(angles);
    if(sumOfAngles === 180){
        outputDiv.innerHTML = "Yes! It forms a triangle!";
    }
    else{
        outputDiv.innerHTML = "They don't form a triangle";
    }
}

button.addEventListener("click", isTriangle);
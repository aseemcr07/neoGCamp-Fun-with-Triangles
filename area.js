var sideLengths = document.querySelectorAll(".input-box");
var calculateBtn = document.querySelector(".calculate-button");
var outputDiv = document.querySelector(".output");

function calculateArea(){
    var base = Number(sideLengths[0].value);
    var height = Number(sideLengths[1].value);

    var area = (base * height) / 2;

    outputDiv.innerHTML = "Area of triangle = " + area;
}

calculateBtn.addEventListener("click", calculateArea);
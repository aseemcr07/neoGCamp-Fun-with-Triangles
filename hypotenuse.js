var sideLengths = document.querySelectorAll(".input-box");
var calculateBtn = document.querySelector(".calculate-button");
var outputDiv = document.querySelector(".output");

function calculateHypotenuse(){
    var base = Number(sideLengths[0].value);
    var height = Number(sideLengths[1].value);

    var hypotenuse = Math.sqrt((base*base) + (height*height));
    
    outputDiv.innerHTML = "Length of hypotenuse = " + hypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse);

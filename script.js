let calculateBtn = document.getElementById("calculateBtn");
let radiusInput = document.getElementById("radius");//input
let area = document.getElementById("area");//output
let circumference = document.getElementById("circumference");//output
let resultCard = document.getElementById("resultCard");

function calculate() {
    let radiusValue = parseFloat(radiusInput.value); // Convert input to number
    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }
    else {
        let areaValue = Math.PI * Math.pow(radiusValue, 2);
        area.innerText = `Area: ${areaValue.toFixed(2)}`;
        let circumferenceValue = 2 * Math.PI * radiusValue;
        circumference.innerText = `Circumference: ${circumferenceValue.toFixed(2)}`;

        area.innerText = `Area: ${areaValue.toFixed(2)} cm²`;
        circumference.innerText = `Circumference: ${circumferenceValue.toFixed(2)} cm`;

        resultCard.classList.remove("d-none");
    }
    // alert(`Area: ${areaValue.toFixed(2)} cm^2\nCircumference: ${circumferenceValue.toFixed(2)} cm`);
    // document.getElementById("resultCard").style.display = "block";
    // document.getElementById("resultCard").style.display = "none";

}
calculateBtn.addEventListener("click", calculate);
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    location.reload();

});

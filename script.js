const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const result = document.querySelector('#result');
const clrBtn = document.querySelector('#reset');




weightInput.addEventListener('input', function() {
    const heightValue = heightInput.value;
    const weightValue = weightInput.value;
    const bmi = weightValue / Math.pow(heightValue / 10, 2) * 100;

    if (weightValue >= 30  &&  weightValue <=200) {
        
        result.innerHTML = (bmi.toFixed(1));

        if (result.innerHTML = Infinity) {
            result.innerHTML = "Enter your height";
        }
                
    }

    
    else {
        result.innerHTML = "Uncorrect weight (min 30, max 200)"
    }

    if (weightValue.toString().length === 0) {
        result.innerHTML = "Enter your weight";
    }
});


heightInput.addEventListener('input', function() {
    const heightValue = heightInput.value;
    const weightValue = weightInput.value;
    const bmi = weightValue / Math.pow(heightValue / 10, 2) * 100;

    if (heightValue >=120 && heightValue <=230) {
        result.innerHTML = (bmi.toFixed(1));
    }

    else {
        result.innerHTML = "Uncorrect height (min 120, max 230)"
    }

    if (heightValue.toString().length === 0) {
        result.innerHTML = "Enter your height";

        
    }
    
                   
    
});





clrBtn.addEventListener('click', function() {
    result.innerHTML = "";
});







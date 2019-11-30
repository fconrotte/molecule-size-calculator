const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const result = document.querySelector('#result');
const clrBtn = document.querySelector('#reset');





heightInput.addEventListener('input', function() {
    const heightValue = heightInput.value;
    const weightValue = weightInput.value;
    const bmi = weightValue / Math.pow(heightValue / 10, 2) * 100;

    if (heightValue.toString().length === 3) {
        result.innerHTML = (bmi.toFixed(1));
    };
            
            
            
            
            
    console.log(bmi);
});

    clrBtn.addEventListener('click', function() {
        result.innerHTML = "";
});





    

    

    

    
    









    





const oildropdiameterInput = document.querySelector('#oildropdiameter');
const oilpuddlediameterInput = document.querySelector('#oilpuddlediameter');
const result = document.querySelector('#result');
const clrBtn = document.querySelector('#reset');


oildropdiameterInput.addEventListener('input', function() {
    const oilpuddlediameterValue = oilpuddlediameterInput.value;
    const oildropdiameterValue = oildropdiameterInput.value;
    
	// h = 4/3 (drop diameter/2)³ / (puddle diameter/2)²
	
	const moleculesize = (4/3 * Math.pow(oildropdiameterValue/2,3)) / Math.pow(oilpuddlediameterValue*10/2,2);	

    if (oildropdiameterValue >= 100 && oildropdiameterValue <=1) {
        
        result.innerHTML = (moleculesize.toFixed(1));

        if (result.innerHTML = Infinity) {
            result.innerHTML = "Enter the oil puddle diameter";
        }
    }
    else
	{
        result.innerHTML = "Incorrect oil drop diameter (min 30, max 200)"
    }

    if (oildropdiameterValue.toString().length === 0) {
        result.innerHTML = "Enter the oil drop diameter";
    }
});


oilpuddlediameterInput.addEventListener('input', function() {
    const oilpuddlediameterValue = oilpuddlediameterInput.value;
    const oildropdiameterValue = oildropdiameterInput.value;
	
	const moleculesize = (4/3 * Math.pow(oildropdiameterValue/2,3)) / Math.pow(oilpuddlediameterValue*10/2,2);	

    if (oilpuddlediameterValue >=1 && oilpuddlediameterValue <= 30) {
        result.innerHTML = (moleculesize.toFixed(1));
    }
    else
	{
        result.innerHTML = "Incorrect oil puddle diameter (min 1, max 30)"
    }

    if (oilpuddlediameterValue.toString().length === 0) {
        result.innerHTML = "Enter your oilpuddlediameter";
    }
});

clrBtn.addEventListener('click', function() {
    result.innerHTML = "";
});

const oildropdiameterInput = document.querySelector('#oildropdiameter');
const oilpuddlediameterInput = document.querySelector('#oilpuddlediameter');
const result = document.querySelector('#result');
const clrBtn = document.querySelector('#reset');

oildropdiameterInput.addEventListener('input', function() {
	const oilpuddlediameterValue = document.getElementById("oilpuddlediameter").value;
    const oildropdiameterValue = oildropdiameterInput.value;

    if (oilpuddlediameterValue.toString().length === 0 || oilpuddlediameterValue.value == 0) {
        result.innerHTML = "Enter the oil puddle diameter";
		return;
    }
    
    // h = 4/3 (drop diameter/2)³ / (puddle diameter/2)²
    
    const moleculesize = (4/3 * Math.pow((oildropdiameterValue/2),3)) / Math.pow(((oilpuddlediameterValue*10)/2),2);  

    if (oildropdiameterValue >= 0.1 && oildropdiameterValue <=20) {
        result.innerHTML = (moleculesize.toFixed(10)) + " millimeter<br/><br/>" + (moleculesize.toFixed(10))*1000 + " micrometer<br/><br/>" + (moleculesize.toFixed(10))*1000000 + " nanometer<br/><br/>";
    }
    else
    {
        result.innerHTML = "Incorrect oil drop diameter (min 1mm, max 10mm)"
    }

    if (oildropdiameterValue.toString().length === 0) {
        result.innerHTML = "Enter the oil drop diameter";
    }
});


oilpuddlediameterInput.addEventListener('input', function() {
    const oilpuddlediameterValue = oilpuddlediameterInput.value;
	const oildropdiameterValue = document.getElementById("oildropdiameter").value;

    if (oildropdiameterValue.toString().length === 0 || oildropdiameterValue.value == 0) {
        result.innerHTML = "Enter the oil drop diameter";
		return;
    }
    
    const moleculesize = (4/3 * Math.pow((oildropdiameterValue/2),3)) / Math.pow(((oilpuddlediameterValue*10)/2),2);  

    if (oilpuddlediameterValue >=1 && oilpuddlediameterValue <= 30) {
        result.innerHTML = (moleculesize.toFixed(10)) + " millimeter<br/><br/>" + (moleculesize.toFixed(10))*1000 + " micrometer<br/><br/>" + (moleculesize.toFixed(10))*1000000 + " nanometer<br/><br/>";
    }
    else
    {
        result.innerHTML = "Incorrect oil puddle diameter (min 1cm, max 30cm)"
    }

    if (oilpuddlediameterValue.toString().length === 0) {
        result.innerHTML = "Enter the oil puddle diameter";
    }
});

clrBtn.addEventListener('click', function() {
    result.innerHTML = "";
});

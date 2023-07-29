let kiloMeter = document.getElementById("kiloMeter");
let mileAnswer = document.getElementById("mileAnswer");
let meterAnswer = document.getElementById("meterAnswer");
let yardAnswer = document.getElementById("yardAnswer");

function division() {
    let quotient = (kiloMeter.value) / (1.609)
    console.log(quotient);
    
     mileAnswer.innerHTML = quotient;
}

function multiplication1() {
    let product = (kiloMeter.value) * (1000)
    console.log(product);
    
     meterAnswer.innerHTML = product;
}

function multiplication2() {
    let product = (kiloMeter.value) * (1093.613298)
    console.log(product);
    
     yardAnswer.innerHTML = product;
}
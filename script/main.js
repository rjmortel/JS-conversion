let inputNum = document.querySelector("#num");
let selectMeasure = document.querySelector("#distance");
let selectMeasure2 = document.querySelector("#distance2");
let displayAns = document.querySelector("#answer");


function answer () {
    // console.log(inputNum.value);
    // console.log(selectMeasure.value);
    // console.log(selectMeasure2.value);

    // let inputNum = inputNum.value;
    // let selectMeasure = selectMeasure.value;
    // let selectMeasure2 = selectMeasure2.value;

   if (selectMeasure.value == selectMeasure2.value) {
    let sameVal = parseFloat(inputNum.value)
    alert("dont input same  value!")
 }
    else if (selectMeasure.value == "Kilometer" && selectMeasure2.value == "Mile"){
        let Kilometer = parseFloat (inputNum.value) * 0.62137;
        displayAns.innerHTML = Kilometer
    }

    else if (selectMeasure.value == "Kilometer" && selectMeasure2.value == "Yard"){
        let Kilometer = parseFloat (inputNum.value) * 1093.6;
        displayAns.innerHTML = Kilometer
    }

    else if (selectMeasure.value == "Mile" && selectMeasure2.value == "Kilometer"){
        let Mile = parseFloat (inputNum.value) / 0.62137;
        displayAns.innerHTML = Mile
    }

    else if (selectMeasure.value == "Mile" && selectMeasure2.value == "Mile"){
        alert("dont input same  value!")
    }

    else if (selectMeasure.value == "Mile" && selectMeasure2.value == "Yard"){
        let Mile = parseFloat (inputNum.value) * 1760;
        displayAns.innerHTML = Mile
    }

    else if (selectMeasure.value == "Yard" && selectMeasure2.value == "Kilometer"){
        let Yard = parseFloat (inputNum.value) / 1093.6;
        displayAns.innerHTML = Yard
    }

    else if (selectMeasure.value == "Yard" && selectMeasure2.value == "Mile"){
        let Yard = parseFloat (inputNum.value) * 0.00056818;
        displayAns.innerHTML = Yard
    }

    else if (selectMeasure.value == "Yard" && selectMeasure2.value == "Yard"){
        alert("dont input same  value!")
    }

}
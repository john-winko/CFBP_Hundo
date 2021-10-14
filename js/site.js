//get starting values from the screen
function getValues() {

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter an integer");
    }

}

//Generate numbers based on the start and endvalue
function generateNumbers(startValue, endValue) {

    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;
}


//display the numbers to the screen
function displayNumbers(numbers) {
    let templateRows = "";

    numbers.forEach(element => {
        if (element % 2 == 0) {
            // even
            templateRows += `<tr><td class="even">${element}</td></tr>`;
        } else {
            // odd
            templateRows += `<tr><td>${element}</td></tr>`;
        }

    });
    document.getElementById("results").innerHTML = templateRows;

}
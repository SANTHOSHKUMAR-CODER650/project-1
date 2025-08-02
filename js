const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Evaluate expression safely
        let result = eval(display.value);
        if (result === undefined) {
            display.value = "";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

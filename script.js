document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const buttons = document.querySelectorAll(".number, .operator");
    const clearButton = document.getElementById("clear");
    const resetButton = document.getElementById("reset");
    const calculateButton = document.getElementById("calculate");

    let currentInput = "";

    // Add click event listeners to number and operator buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            currentInput += this.textContent;
            output.value = currentInput;
        });
    });

    // Clear the last character
    clearButton.addEventListener("click", function () {
        currentInput = currentInput.slice(0, -1);
        output.value = currentInput;
    });

    // Reset the calculator
    resetButton.addEventListener("click", function () {
        currentInput = "";
        output.value = "0";
    });

    // Calculate the result
    calculateButton.addEventListener("click", function () {
        if(output.value == 0){
            output.value = 0;
        }
        else{
            try {
                currentInput = eval(currentInput);
                output.value = currentInput;
            } catch (error) {
                output.value = "Error";
            }
        }
    });
});


const themeRadios = document.querySelectorAll('.toggle-input');
        const body = document.body;
        body.className = 'darkblue-mode'

        themeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                body.className = ''; // Reset all classes
                if (radio.checked) {
                    body.classList.add(radio.id);
                }
            });
        });
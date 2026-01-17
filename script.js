const number = document.querySelectorAll('.num');
number.forEach((num) => {
    num.addEventListener('click', function () {
        if (document.getElementById("output").value === '0') {
            document.getElementById("output").value = Number(this.innerHTML);;
        }
        else {
            document.getElementById("output").value += Number(this.innerHTML);
        }
        // let display = document.getElementById("output");
        // try {
        //     display.value = eval(display.value);
        // }
        // catch (e) {
        //     display.value = "Error"
        // }
    });
});

const operator = document.querySelectorAll('.operator');
operator.forEach((num) => {
    num.addEventListener('click', function () {
        document.getElementById("output").value += this.innerHTML;
    });
});

document.getElementById("equlas").addEventListener('click', function () {
    let display = document.getElementById("output");
    try {
        // Create a temporary variable for calculation
        // Replace visual symbols with valid JavaScript operators
        let expression = display.value
            .replace(/−/g, "-")  // Fix subtraction
            .replace(/×/g, "*")  // Fix multiplication
            .replace(/÷/g, "/"); // Fix division

        display.value = eval(expression);
    }
    catch (e) {
        display.value = "Error"
    }
})

document.getElementById("clear").addEventListener('click', function () {
    document.getElementById("output").value = '0';
})

document.getElementById("square").addEventListener('click', function () {
    let display = document.getElementById("output");
    try {
        display.value = eval(display.value) ** 2;
    }
    catch (e) {
        display.value = "Error"
    }
})

document.getElementById("root").addEventListener('click', function () {
    let display = document.getElementById("output");
    try {
        display.value = eval(display.value) ** (0.5);
    }
    catch (e) {
        display.value = "Error"
    }
})
document.getElementById("backspace").addEventListener('click', function () {
    let output = document.getElementById("output");

    output.value = output.value.slice(0, -1);
    if (output.value === '') {
        output.value = "0";
    }
})

window.addEventListener('keydown', function (event) {
    let display = this.document.getElementById("output");
    window.addEventListener('keydown', function (event) {
        let display = this.document.getElementById("output");
        if (event.key === 'Enter') {
            event.preventDefault();
            try {
                // Apply the same replacements here
                let expression = display.value
                    .replace(/−/g, "-")
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                display.value = eval(expression);
            }
            catch (e) {
                display.value = "Error";
            }
        }
    });

    if ("0123456789+-*/.".includes(event.key)) {
        if (display.value === "0") {
            display.value = event.key;
        }
        else {
            display.value += event.key;
        }
    }
    if (event.key === "Backspace") {
        event.preventDefault();
        output.value = output.value.slice(0, -1);
        if (output.value === '') {
            output.value = "0";
        }
    }
});

document.getElementById("ce").addEventListener('click', function () {
    let output = document.getElementById("output");
    let val = output.value;

    let lastOperatorIndex = Math.max(
        val.lastIndexOf('+'),
        val.lastIndexOf('-'),
        val.lastIndexOf('*'),
        val.lastIndexOf('/')
    );
    if (lastOperatorIndex !== -1) {
        output.value = val.substring(0, lastOperatorIndex + 1);
    }
    else {
        output.value = "0";
    }
});

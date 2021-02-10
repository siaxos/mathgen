function main() {
    // Variables for elements that need to be changed
    var input = document.getElementById("number").value;
    var output = document.getElementById("output");

    // Make input a number object
    var inputnumber = new Number(input);

    // Generate all random numbers
    var division = Math.floor(Math.random() * (200 - 50) + 50);
    
    // Generate sub numbers
    var divide = Math.floor(Math.random() * (5 - 1) + 1);
    var multiply = Math.floor(Math.random() * (50 - 20) + 20);
    var add = Math.floor(Math.random() * (200 - 50) + 50);
    
    // Convert numbers into strings
    var divisionstring = new String(division);
    var dividestring = new String(divide);
    var multiplystring = new String(multiply);
    var addstring = new String(add);

    // Calculation
    var divided = division / divide;
    var added = divided + add;
    var multipliedwithminus = added * multiply - inputnumber;
    var multiplied = added * multiply;

    // Outputs
    var divideoutput = divisionstring + " ÷ " + dividestring + " = " + divided;
    var additionoutput = " + " + addstring + " = " + added;
    var multiplyoutput = " x " + multiplystring + " = " + multiplied + " - " + multipliedwithminus + " = " + input;

    // Change the output div's text to the mathematical output
    output.innerHTML = `${divideoutput} ${additionoutput} ${multiplyoutput}`;
}
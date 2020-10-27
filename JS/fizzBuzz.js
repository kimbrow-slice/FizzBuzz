//I need to create a function to write the output of FizzBuzz to HTML

document.getElementById("innerTextOutput").onclick = function changeContent() {
    var sum;
    var i;
    sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.getElementById("innerTextOutput").innerHTML += ('FizzBuzz \n');
        } else if (i % 3 === 0) {
            document.getElementById("innerTextOutput").innerHTML += ('Fizz \n');
        } else if (i % 5 === 0) {
            document.getElementById("innerTextOutput").innerHTML += ('Buzz \n');
        } else {
            document.getElementById("innerTextOutput").innerHTML += (i + '\n');
        }
    }
}
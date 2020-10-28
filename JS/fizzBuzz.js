//I need to create a function to write the output of FizzBuzz to HTML

document.getElementById("innerTextOutput").onclick = function changeContent() {
    // on a click event the content needs to change to the results of my function inside of the Id "innerTextOutput"



    var i;
    //declaring my variable i


    //start for loop
    for (let i = 1; i <= 1000; i++) { //begin with i = 1; my condition is i<= 500; the step is i++ or the postfix form
        //the body of the conidtion, if conidition -> run body and run step
        if (i % 3 === 0 && i % 5 === 0) {
            document.getElementById("innerTextOutput").innerHTML += ('FizzBuzz \n');
        } else if (i % 3 === 0) {
            document.getElementById("innerTextOutput").innerHTML += ('Fizz \n');
        } else if (i % 5 === 0) {
            document.getElementById("innerTextOutput").innerHTML += ('Buzz \n');
        } else {
            document.getElementById("innerTextOutput").innerHTML += (i + '\n');
            //document.getElementById("innerTextOutput").innerHTML += (i + '\n') means the following
            //document.getElementById("innerTextOutput") returns an Element object representing the element whose id property matches the specified string. 
            //.innerHTML is a property used to get or set the HTML content of an element node. It is a part of tthe Document Object Model that allows JavaScript code to manipulate a website being displayed 
            // += adds the value of the right operand to a variable and assigns the result to the variable. In this situation we are using concatenation
            // I had to insert '\n' into the string for the function to add a new line or else it would of been displayed as follows
            /*12Fizz4BuzzFizz78FizzBuzz
             *rather than
             *1
             *2
             *Fizz
             *4
             *Buzz
             *Fizz
             *7
             *8
             *Fizz
             *Buzz
             */
            //Which would make the code more readable. 

        }
    }
}
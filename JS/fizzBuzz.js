//I need to create a function to write the output of FizzBuzz to HTML

document.getElementById("innerTextOutput").onclick = function changeContent() {
    // on a click event the content needs to change to the results of my function inside of the Id "innerTextOutput"



    var i;

    //declaring my variable i

    const output = document.getElementById("innerTextOutput");
    //declaring and assigning the const output to the value of document.getElementById("innerTextOutput") I am doing this to make the code more readable and being less repetitive with the node value of document.getElementById("innerTextOutput")

    //start for loop
    for (let i = 1; i <= 1000; i++) { //begin with i = 1; my condition is i<= 1000; the step is i++ or the postfix form
        //the body of the conidtion, if conidition -> run body and run step
        if (i % 3 === 0 && i % 5 === 0) {
            output.innerHTML += ('FizzBuzz \n');
        } else if (i % 3 === 0) {
            output.innerHTML += ('Fizz \n');
        } else if (i % 5 === 0) {
            output.innerHTML += ('Buzz \n');
        } else {
            output.innerHTML += (i + '\n');
            //output.innerHTML += ('....\n') means the following
            //output returns the const out whose value I set to document.getElementById("innerTextOutput"), I did this follow the DRY ideology
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
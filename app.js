      function checkAnswer() {
        // Get the values of the two numbers and the answer
        var num1 = document.getElementById('num1').innerHTML;
        var num2 = document.getElementById('num2').innerHTML;
        var answer = document.getElementById('answer').value;

        // Convert the strings to numbers
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        answer = parseInt(answer);

        // Perform the addition and check the answer
        if (num1 + num2 == answer) {
          document.getElementById('result').innerHTML = 'Correct!';
        } else {
          document.getElementById('result').innerHTML = 'Incorrect. The correct answer is ' + (num1 + num2);
        }
      }
      
      function generateNumbers() {
  // Generate random numbers for num1 and num2
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);

  // Update the HTML to show the new numbers
  document.getElementById('num1').innerHTML = num1;
  document.getElementById('num2').innerHTML = num2;
}
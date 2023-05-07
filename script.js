// Get the elements from the HTML document
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

// Add a click event listener to the calculate button
calculateBtn.addEventListener("click", calculateBMI);

// Define the function that calculates the BMI
function calculateBMI() {
  // Get the weight and height values from the input fields
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the BMI result on the web page
  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}

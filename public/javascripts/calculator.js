import totalCaloriesBurned from './calculatorFunctions.js';

// Button event listener
const calorieButton = document.getElementById('calorieButton');
calorieButton.addEventListener('click', function () {
    // VARIABLES
    let weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const minutes = document.getElementById('minutes').value;
    var caloriesBurnedTotalText = document.querySelector('h2');

    // Validation text
    var weightValidation = document.getElementById('weightValidation');
    var minutesValidation = document.getElementById('minutesValidation');

    if (isNaN(weight) || weight <= 0 || weight > 300) {
        weightValidation.style.color = "red";
        weightValidation.textContent = "Please enter a valid weight."
        weight = 0
    } else {
        weightValidation.textContent = "";
    }

    if (isNaN(minutes) || minutes <= 0 || minutes >= 1440) {
        minutesValidation.style.color = "red";
        minutesValidation.textContent = "Please enter the amount of time taken in minutes."
        minutes = 0;
    } else {
        minutesValidation.textContent = "";
    }

    // Convert lbs to kg
    const weightButton = document.querySelector('input[name="weight"]:checked').id;
    if (weightButton == 'lbsButton') {
        weight = weight * 0.453592;
    }

    // Get MET (Metabolic Equivalent of Task ) based on activity level
    let met = 0;
    switch (activityLevel) {
        case 'light':
            met = 3;
            break;
        case 'moderate':
            met = 6;
            break;
        case 'intense':
            met = 9;
            break;
        default:
            met = 0;
            break;
    }

    // Call function to calculate the total calories burned
    let totalCalories = totalCaloriesBurned(met, weight, minutes);

    // Add calories variable to the HTML
    caloriesBurnedTotalText.innerHTML = `You have burned <span class="caloriesSpan">${totalCalories}</span> calories!`;
});
export default { totalCaloriesBurned };
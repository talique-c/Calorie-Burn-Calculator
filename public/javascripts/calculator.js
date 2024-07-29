import totalCaloriesBurned from './calculatorFunctions.js';
// import { } from ./

// Button event listener
const calorieButton = document.getElementById('calorieButton');
calorieButton.addEventListener('click', function () {
    // VARIABLES
    const sex = document.querySelector('input[name="sex"]:checked').value;
    let age = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const minutes = document.getElementById('minutes').value;
    var caloriesBurnedTotalText = document.querySelector('h2');

    // Validation text
    var ageValidation = document.getElementById('ageValidation');
    var weightValidation = document.getElementById('weightValidation');
    var minutesValidation = document.getElementById('minutesValidation');

    // VALIDATION
    if (isNaN(age) || age <= 0 || age > 99) {
        ageValidation.style.color = "red";
        ageValidation.textContent = "Please enter a valid age."
        age = 0
    } else {
        ageValidation.textContent = "";
    }

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

    console.log(met);
    console.log(weight);
    console.log(minutes);

    /* Equations Source: https://www.healthline.com/health/fitness-exercise/how-many-calories-do-i-burn-a-day#faq */

    // // Calculate total calories burned
    // function totalCaloriesBurned(met, weight, minutes) {
    //     // Calculate calories burned per minute
    //     const caloriesBurnedInAMinute = (met * weight * 3.5) / 200;
    //     const calories = caloriesBurnedInAMinute * minutes;
    //     return calories;
    // }



    let totalCalories = totalCaloriesBurned(met, weight, minutes);

    caloriesBurnedTotalText.textContent = `You have burned ${totalCalories.toFixed(2)} calories! `;

    //TODO: Add recommended calorie intake

});
export default { totalCaloriesBurned };
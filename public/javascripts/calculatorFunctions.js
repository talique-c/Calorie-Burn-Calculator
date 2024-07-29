// Calculate total calories burned
export function totalCaloriesBurned(met, weight, minutes) {
    if (met <= 0 || weight <= 0 || minutes <= 0) {
        return 0;
    }

    // Calculate calories burned per minute
    let caloriesBurnedInAMinute = (met * weight * 3.5) / 200;
    const calories = caloriesBurnedInAMinute * minutes;
    return Number(calories.toFixed(2));
}

export default totalCaloriesBurned;
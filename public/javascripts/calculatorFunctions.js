// Calculate total calories burned
// function totalCaloriesBurned(met, weight, minutes) {
export function totalCaloriesBurned(met, weight, minutes) {
    // Calculate calories burned per minute
    const caloriesBurnedInAMinute = (met * weight * 3.5) / 200;
    const calories = caloriesBurnedInAMinute * minutes;
    console.log(met);
    console.log(weight);
    console.log(minutes);
    console.log(calories);
    return calories;
}

// module.exports = totalCaloriesBurned;
export default totalCaloriesBurned;
// export { totalCaloriesBurned };
// module.exports = totalCaloriesBurned;
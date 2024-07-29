# Calorie-Burn-Calculator

## Part 1: Downloading file

### 1. Download the ZIP file
### 2. Open in VS Code

## Part 2: Running the application

### 1. Start the application : nodemon
###   - If error with Execution Policies copy and paste: PowerShell -ExecutionPolicy RemoteSigned
### 2. Open web browser and navigate to http://localhost:3000
### 3. Input Your Information: Enter your weight and select the unit (pounds or kgs) - Select your activity level (light, moderate or intense) - Enter the duration of the activity
### 4. Calculate Calories burnt: Click on the "Calculate calories burnt" button to see the total calories burnt

## Part 3: Perform Unit Testing
### 1. Stop the server by doing: Ctrl + C
### 2. Make unit tests in this format:
    Example:
    describe('Calorie Burn Calculator', () => {
      test('should return 0 for negative weight', () => {
        const testMet = 3
        const testWeight = -50
        const testMinutes = 5
 
        let res = totalCaloriesBurned(testMet, testWeight, testMinutes);
        expect(res).toBe(0);
    });
### 3. Run unit tests by doing: npm test

## Part 4: VS Code Extensions
### 1. Jest - Provides support for running and debugging Jest tests directly in VS Code. - Install the extension via the VS Code marketplace: Jest Extension by Orta

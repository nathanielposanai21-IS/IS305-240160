const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const MealBooking = require('./MealBooking');

const rl = readline.createInterface({ input, output });

const bookings = [];

async function main() {
  try {
        console.log("========================================");
        console.log("      DWU DINING MEAL BOOKING");
        console.log("========================================");

        const studentId = await rl.question('Enter your Student ID: ');
        const studentName = await rl.question('Enter your Name: ');
        const mealDate = await rl.question('Enter the Meal Date (YYYY-MM-DD): ');
        const mealTime = await rl.question('Enter the Meal Time (Breakfast/Lunch/Dinner): ');
        const quantity = await rl.question('Enter the Quantity of Meals: ');
        const dietaryNotes = await rl.question('Enter any Dietary Notes (if any): ');

        const booking = new MealBooking(studentId, studentName, mealDate, mealTime, quantity, dietaryNotes);
        bookings.push(booking);

        console.log("\nBooking Successful!");
        console.log("Booking Details:");
        console.log(`Student ID: ${booking.studentId}`);
        console.log(`Name: ${booking.studentName}`);
        console.log(`Meal Date: ${booking.mealDate}`);
        console.log(`Meal Time: ${booking.mealTime}`);
        console.log(`Quantity: ${booking.quantity}`);
        console.log(`Dietary Notes: ${booking.dietaryNotes}`);

  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    rl.close();
  }
}

main();

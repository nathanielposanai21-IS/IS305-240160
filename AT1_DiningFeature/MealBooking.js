class MealBooking {
    constructor(studentID, studentName, mealDate, mealType, quantity, dietaryNote) {
        this.studentID = studentID;
        this.studentName = studentName;
        this.mealDate = mealDate;
        this.mealType = mealType;
        this.quantity = quantity;
        this.dietaryNote = dietaryNote;

        this.bookingStatus = 'Pending'; // Default status

        this.mealPrices = {
            'Breakfast': 10,
            'Lunch': 15,
            'Dinner': 20
        };
    }

    // Appropriate getters for each property
    getstudentID() {
        return this.studentID;
    }

    getstudentName() {
        return this.studentName;
    }

    getmealDate() {
        return this.mealDate;
    }

    getmealType() {
        return this.mealType;
    }

    getquantity() {
        return this.quantity;
    }

    getdietaryNote() {
        return this.dietaryNote;
    }

    getbookingStatus() {
        return this.bookingStatus;
    }
}

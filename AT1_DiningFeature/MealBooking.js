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

    // Appropriate setters for each property
    setstudentID(studentID) {
        if (!/^\d+$/.test(studentID)) {
            throw new Error('Invalid student ID. It should be a numeric value.');
        }
        this.studentID = studentID;
    }

    setstudentName(studentName) {
        if (!/^[a-zA-Z\s]+$/.test(studentName)) {
            throw new Error('Invalid student name. It should only contain letters and spaces.');
        }
        this.studentName = studentName;
    }

    setmealDate(mealDate) {
        if (!mealDate || mealDate.trim() == "") {
            throw new Error("Meal date is required")
        }
        this.mealDate = mealDate;
    }

    setmealType(mealType) {
        const validMealTypes = ['Breakfast', 'Lunch', 'Dinner'];
        if (!validMealTypes.includes(mealType)) {
            throw new Error(`Invalid meal type. It should be one of: ${validMealTypes.join(', ')}`);
        }
        this.mealType = mealType;
    }

    setquantity(quantity) {
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error('Invalid quantity. It should be a positive integer.');
        }
        this.quantity = quantity;
    }

    setdietaryNote(dietaryNote) {
        this.dietaryNote = dietaryNote;
    }

    setbookingStatus(bookingStatus) {
        const validStatuses = ['Pending', 'Confirmed', 'Cancelled'];
        if (!validStatuses.includes(bookingStatus)) {
            throw new Error(`Invalid booking status. It should be one of: ${validStatuses.join(', ')}`);
        }
        this.bookingStatus = bookingStatus;
    }

    // Method to calculate total cost based on meal type and quantity
    calculateTotalCost() {
        const pricePerMeal = this.mealPrices[this.mealType];
        return pricePerMeal * this.quantity;
    }

    // Method to update the booking details
    updateBookingDetails(mealDate, mealType, quantity, dietaryNote) {
        this.setmealDate(mealDate);
        this.setmealType(mealType);
        this.setquantity(quantity);
        this.dietaryNote = dietaryNote;
    }

    getBookingSummary() {
        return ` Booking Summary:
Student ID: ${this.studentID}
Student Name: ${this.studentName}
Meal Date: ${this.mealDate}
Meal Type: ${this.mealType}
Quantity: ${this.quantity}
Dietary Note: ${this.dietaryNote || 'None'}
Booking Status: ${this.bookingStatus}
Total Cost: $${this.calculateTotalCost()}`;
    }
}

GPUShaderModule.exports = MealBooking;

/*
============================================
; Title:  finance-calculator.js
; Author: Hannah Del Real
; Date:   17 April 2023
; Description: JavaScript class named FinanceCalculator to calculate future value from present inputs.
;===========================================
*/
export class FinanceCalculator {
    // Create a variable to represent number of months in a year.
    static MONTHS_IN_YEAR = 12;

    // Create a function with 3 parameters: monthlyPayment, rate, and years.
    static calculateFutureValue(monthlyPayment, rate, years) {
        // Create a variable named month.
        let months = years * this.MONTHS_IN_YEAR;
        
        // Calculate the interest rate.
        let interestRate = 1 + rate / 100;

        // Calculate current value. 
        let presentValue =  monthlyPayment * months;

        // Calculate future value.
        let futureValue = presentValue * (Math.pow(interestRate, months));

        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }); 
        return currencyFormatter.format(field);
    }
}
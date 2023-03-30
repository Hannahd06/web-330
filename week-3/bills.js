/*
============================================
; Title:  appetizer.js
; Author: Hannah Del Real
; Date:   28 March 2023
; Description:JavaScript for delreal-restaurant.html creating a class named Bill and function to calculate total cost.
;===========================================
*/

"use strict";
//Created a class Bill. 
export class Bill {
    constructor() {
        //Properties with empty arrays that will be used to hold selected items.
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    //Add selected beverages.
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    //Add selected appetizers.
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    //Add selected main courses.
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    //Add selected desserts.
    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    //Created a function to find total cost of selected items.
    getTotal() {
       let total = 0;

       let beverageTotal = this._beverages.forEach(function(beverage){
            total += parseFloat(beverage.price);
       })

       let appetizerTotal = this._appetizers.forEach(function(appetizer){
            total += parseFloat(appetizer.price);
       })

       let mainCourseTotal = this._mainCourses.forEach(function(mainCourse){
        total += parseFloat(mainCourse.price);
       })

       let dessertTotal = this._desserts.forEach(function(dessert){
        total += parseFloat(dessert.price);
       })

       return total.toFixed(2);
       
    }
}
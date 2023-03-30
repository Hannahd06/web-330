/*
============================================
; Title:  Product.js
; Author: Professor Krasso
; Date:   28 March 2023
; Modified by: Hannah Del Real
; Description: JavaScript for delreal-restaurant.html creating a class named Product.
;===========================================
*/
"use strict";
// Product class to obtain the name and price of items.
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
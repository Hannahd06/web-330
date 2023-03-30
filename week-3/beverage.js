/*
============================================
; Title:  beverage.js
; Author: Hannah Del Real
; Date:   15 March 2023
; Description: JavaScript for delreal-restaurant.html creating a Class named Beverage.
;===========================================
*/
import { Product } from "./product.js";
//Created a JS class to represent beverage item and price.
export class Beverage extends Product {
    constructor (name, price) {
        super(name, price);
    }
}
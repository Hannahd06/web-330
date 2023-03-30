/*
============================================
; Title:  dessert.js
; Author: Professor Krasso
; Date:   28 March 2023
; Author: Hannah Del Real
; Description: JavaScript for delreal-restaurant.html creating a Class named Dessert.
*/

"use strict";
import { Product } from "./product.js";
export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
/*
============================================
; Title:  appetizer.js
; Author: Professor Krasso
; Date:   28 March 2023
; Author: Hannah Del Real
; Description: JavaScript for delreal-restaurant.html creating a Class named Appetizer.
;===========================================
*/

"use strict";
//Obtain class parameters from Product class using import keyword.
import { Product } from "./product.js";
export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
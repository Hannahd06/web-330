/*
============================================
; Title:  product.js
; Author: Hannah Del Real
; Date:   11 April 2023
; Description: JavaScript class Product 
;===========================================
*/

export class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}


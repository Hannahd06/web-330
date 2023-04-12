/*
============================================
; Title:  shopping-cart.js
; Author: Hannah Del Real
; Date:   11 April 2023
; Description: JavaScript class named ShoppingCart containing an iterator.
;===========================================
*/

export class ShoppingCart {
    constructor() {
       this.products = [];
    }

    count() {
        return this.products.length;
    }

    // Adds products to shopping cart.
    add(product) {
        this.products.push(product);
    }
    // Create Iterator to iterate over products in shoppingCart.
    *[Symbol.iterator]() {
        for(let product of this.products) {
          yield product;
        }    
    }
}
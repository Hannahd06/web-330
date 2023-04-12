/*
============================================
; Title:  cart-component.js
; Author: Hannah Del Real
; Date:   11 April 2023
; Description: JavaScript class named CartComponent extending an HTMLElement.
;===========================================
*/
"use strict";

// Creates a custom cart component.
export class CartComponent extends HTMLElement {
    constructor() {
        super();   
    }
    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
} 

customElements.define("cart-component", CartComponent);


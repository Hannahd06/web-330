/*
============================================
; Title:  main-course.js
; Author: Professor Krasso
; Date:   28 March 2023
; Author: Hannah Del Real
; Description: JavaScript for delreal-restaurant.html creating a Class named MainCourse.
;===========================================
*/

"use strict";
import { Product } from "./product.js";
export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
} 
/*
============================================
; Title:  float-field.js
; Author: Hannah Del Real
; Date:   17 April 2023
; Description: JavaScript class named FloatField.
;===========================================
*/

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        if (!isNaN(this.field)) {
            return true;
        } else {
            return false;
        }
    }

    getMessage() {
        return (`${this.name} must be a float value. You entered ${this.field}`);
    }
}
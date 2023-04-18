/*
============================================
; Title:  float-field.js
; Author: Hannah Del Real
; Date:   17 April 2023
; Description: JavaScript class named FloatMinField.
;===========================================
*/

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
      if (parseFloat(this.field) > this.min) {
        return true;
      } else {
        return false;
      }
    }

    getMessage() {
        return (`${this.name} must be greater than ${this.min}. You entered ${this.field}.`)
    }
}
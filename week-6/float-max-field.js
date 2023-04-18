/*
============================================
; Title:  float-field.js
; Author: Hannah Del Real
; Date:   17 April 2023
; Description: JavaScript class named FloatMaxField.
;===========================================
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
      if (parseFloat(this.field) < this.max) {
        return true;
      } else {
        return false;
      }
    }

    getMessage() {
        return (`${this.name} must be less than ${this.max}. You entered ${this.field}.`)
    }
}
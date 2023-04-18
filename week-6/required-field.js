/*
============================================
; Title:  required-field.js
; Author: Hannah Del Real
; Date:   17 April 2023
; Description: JavaScript class named RequiredField.
;===========================================
*/

export class RequiredField {
    constructor (name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        return (`${this.name} is a required field`);
    }
}
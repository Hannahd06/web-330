/*
============================================
; Title:  validator.js
; Author: Hannah Del Real
; Date:   17 April 2023
; Description: JavaScript class named Validator to validate user inputs.
;===========================================
*/

// Import classes.
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from './float-min-field.js';
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
 validators = [];
 messages = [];

 constructor(name, field) {
    this.name = name;
    this.field = field;
 }
// Create a method to add a required field.
 addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
 }

 //Create a method add a requirement that input is a float.
 addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
 }

 // Create a method to ensure there is a minimum length for field.
 addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
 }

 // Create a method to ensure there is a max length for field.
 addFloatMaxField(max){
    this.validators.push(new FloatMaxField(this.name, this.field, max));
 } 

 validate() {
    for (let validator of this.validators) {
        if (!validator.validate()) {
            this.messages.push(validator.getMessage());
            return false;
        }
        
    }
    return true;
 }

}
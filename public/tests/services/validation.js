"use strict";

describe("services:validation", function() {
	var validation;
	beforeEach(module("game"));
	beforeEach(inject(function(_validation_) {
		validation = _validation_;
	}));

	it("test email validation", function() {
		expect(validation.isValidEmail("zhuen2000@163.com")).toBe(true);
		expect(validation.isValidEmail("@163.com")).toBe(false);
		expect(validation.isValidEmail("1@163.com")).toBe(true);
		expect(validation.isValidEmail("1@")).toBe(false);
	});

	it("test string base on different config", function() {
		expect(validation.isValidStr("").isValid).toBe(true);
		expect(validation.isValidStr("", {required: true}).isValid).toBe(false);
		expect(validation.isValidStr("fdasf", {required: true}).isValid).toBe(true);
		expect(validation.isValidStr("fdasf", {required: true, min: 6}).isValid).toBe(false);
		expect(validation.isValidStr("fdasf", {required: true, min: 5}).isValid).toBe(true);
		expect(validation.isValidStr("fdasf", {required: true, min: 5, max: 10}).isValid).toBe(true);
		expect(validation.isValidStr("fdasffdaffdsa", {required: true, min: 5, max: 10}).isValid).toBe(false);
		expect(validation.isValidStr("fdasff", {required: true, min: 5, max: 10, mix: true}).isValid).toBe(false);
		expect(validation.isValidStr("fdasff28", {required: true, min: 5, max: 10, mix: true}).isValid).toBe(true);
	});

});
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
});
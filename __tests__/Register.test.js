import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Register from "../components/Register";

const userInput = {
	email: "test@gmail.com",
	fname: "Niklas",
	lname: "Albinsson",
	password: "password123",
	confirmPassword: "password123",
	passwordMatch: true
};

describe("<Register />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Register />)));
	// renders to the page
	it("renders to the page and matches snapshot", () => {
		expect(wrapper.find("ModalStyles__LoginForm").exists()).toBe(true);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	// renders all the inputs and handles the change-event
	describe("Email input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#email").length).toEqual(1);
		});

		it("handles the onChange-event on the input", () => {
			wrapper.find("#email").simulate("change", {
				target: { name: "email", value: "test@gmail.com" }
			});
		});
	});

	describe("Firstname input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#fname").length).toEqual(1);
		});

		it("handles the onChange-event on the input", () => {
			wrapper.find("#fname").simulate("change", {
				target: { name: "fname", value: "Niklas" }
			});
		});
	});

	describe("Lastname input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#lname").length).toEqual(1);
		});

		it("handles the onChange-event on the input", () => {
			wrapper.find("#lname").simulate("change", {
				target: { name: "lname", value: "Albinsson" }
			});
		});
	});

	describe("Password input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#password").length).toEqual(1);
		});

		it("handles the onChange-event on the input", () => {
			wrapper.find("#password").simulate("change", {
				target: { name: "password", value: "password123" }
			});
		});
	});

	describe("ConfirmPassword input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#confirmPassword").length).toEqual(1);
		});

		it("handles the onChange-event on the input", () => {
			wrapper.find("#confirmPassword").simulate("change", {
				target: { name: "confirmPassword", value: "password123" }
			});
		});
	});

	// handles the submitevent
	describe("Form submitting", () => {
		it("throws an error without input", () => {
			const mockFn = {
				preventDefault: jest.fn()
			};

			expect(() =>
				wrapper.find("ModalStyles__LoginForm").simulate("submit", mockFn)
			).toThrow();

			expect(mockFn.preventDefault).toHaveBeenCalledTimes(1);
		});

		it("submits the form if the input is correct", () => {
			const mockFn = {
				preventDefault: jest.fn()
			};

			wrapper.setState({ ...userInput });

			wrapper.update();
			expect(
				wrapper.find("ModalStyles__LoginForm").simulate("submit", mockFn)
			).toBeTruthy();
			expect(mockFn.preventDefault).toHaveBeenCalledTimes(1);
		});
	});
});

import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Login from "../components/Login";

describe("<Login />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Login />)));

	it("renders to the page", () => {
		expect(wrapper.find("ModalStyles__LoginForm").exists()).toBe(true);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it("renders an email input", () => {
		expect(wrapper.find("#email").length).toEqual(1);
	});

	it("render an password input", () => {
		expect(wrapper.find("#password").length).toEqual(1);
	});

	it("renders the login-button", () => {
		expect(wrapper.find("#login-button").length).toEqual(1);
	});

	it("renders the register-button", () => {
		expect(wrapper.find("#register-button").length).toEqual(1);
	});

	describe("Email input", () => {
		it("should respond to change event and change the state of the Login-component", () => {
			wrapper.find("#email").simulate("change", {
				target: { name: "email", value: "test@gmail.com" }
			});

			expect(wrapper.state("email")).toEqual("test@gmail.com");
		});
	});

	describe("Password input", () => {
		it("should respond to change event and change the state of the Login-component", () => {
			wrapper.find("#password").simulate("change", {
				target: { name: "password", value: "password123" }
			});

			expect(wrapper.state("password")).toEqual("password123");
		});
	});

	describe("Submit the loginform", () => {
		it("throws error without input", () => {
			const mockFn = {
				preventDefault: jest.fn()
			};
			expect(() =>
				wrapper.find("ModalStyles__LoginForm").simulate("submit", mockFn)
			).toThrow();
			expect(mockFn.preventDefault).toHaveBeenCalledTimes(1);
		});

		it("does not throw error with input from the user", () => {
			const mockFn = {
				preventDefault: jest.fn()
			};
			wrapper.setState({
				email: "niklas@gmail.com",
				password: "secretpassword123"
			});
			wrapper.update();
			wrapper.find("ModalStyles__LoginForm").simulate("submit", mockFn);
			expect(mockFn.preventDefault).toHaveBeenCalledTimes(1);
		});
	});
});

import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import EditProfile from "../components/EditProfile";
import { fakeUser } from "../testUtils";

const fakeId = {
	id: "1234567890"
};

describe("<EditProfile />", () => {
	let wrapper;
	beforeEach(
		() => (wrapper = shallow(<EditProfile user={fakeUser} query={fakeId} />))
	);

	it("renders without errors and matches snapshot", () => {
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	//input fname
	describe("Firstname Input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#fname").length).toEqual(1);
		});

		it("should respond to the change event and change the state of the component", () => {
			wrapper.find("#fname").simulate("change", {
				target: { name: "fname", value: "Niklas" }
			});

			expect(wrapper.state("fname")).toEqual("Niklas");
		});
	});
	//input lname
	describe("Lastname Input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#lname").length).toEqual(1);
		});

		it("should respond to the change event and change the state of the component", () => {
			wrapper.find("#lname").simulate("change", {
				target: { name: "lname", value: "Albinsson" }
			});

			expect(wrapper.state("lname")).toEqual("Albinsson");
		});
	});

	//textarea description
	describe("Textarea", () => {
		it("renders the textarea", () => {
			expect(wrapper.find("#description").length).toEqual(1);
		});

		it("should respond to the change event and change the state of the component", () => {
			wrapper.find("#description").simulate("change", {
				target: { name: "description", value: "This is a test description" }
			});
		});
	});

	//input file name="photo"
	describe("File upload", () => {
		it("renders the upload-input", () => {
			expect(wrapper.find("#file").length).toEqual(1);
		});
	});

	//button submit
	describe("Submitbutton", () => {
		it("renders the button", () => {
			expect(wrapper.find("#submit-button").length).toEqual(1);
		});
	});
});

import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Steg2 from "../components/Steg2";
import NewRecipeForm from "../components/NewRecipeForm";
import { fakeUser } from "../testUtils";

describe("<Steg2 />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Steg2 />)));

	it("renders without error and matches snapshot", () => {
		expect(wrapper.find("FormStyles__StyledForm").exists()).toBe(true);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	describe("Textarea input", () => {
		it("renders without error", () => {
			expect(wrapper.find("#string").length).toBe(1);
		});

		it("handles the onChange event", () => {
			wrapper.find("#string").simulate("change", {
				target: { name: "string", value: "Detta är ett test" }
			});

			expect(wrapper.state().string).toEqual("Detta är ett test");
		});
	});

	describe("Previous / Next buttons", () => {
		it("return button decrements the Step-variable", () => {
			// WORK IN PROGRESS
			// const Parent = shallow(<NewRecipeForm user={fakeUser} />);
			// const mockFn = {
			// 	preventDefault: jest.fn()
			// };
			// Parent.setState({
			// 	step: 2
			// });
			// Parent.find("#button-previous").simulate("click", mockFn);
			// // expect(mockFn.preventDefault).toHaveBeenCalledTimes(1);
			// console.log(Parent.state());
		});
	});
});

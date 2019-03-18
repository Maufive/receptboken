import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Steg3 from "../components/Steg3";
import NewRecipeForm from "../components/NewRecipeForm";
import { fakeUser } from "../testUtils";

describe("<Steg3 />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Steg3 />)));

	it("renders without error and matches snapshot", () => {
		expect(wrapper.find("Steg1Styles__RecipeForm").exists()).toBe(true);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	describe("Time required input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#timeRequired").length).toEqual(1);
		});

		it("handles the onChange event", () => {
			wrapper.find("#timeRequired").simulate("change", {
				target: { name: "timeRequired", value: 60 }
			});
			expect(wrapper.state().timeRequired).toEqual(60);
		});
	});

	describe("File input", () => {
		it("renders the input", () => {
			expect(wrapper.find("#file").length).toEqual(1);
		});
	});
});

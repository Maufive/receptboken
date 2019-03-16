import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Steg1 from "../components/Steg1";
import NewRecipeForm from "../components/NewRecipeForm";
import { fakeUser } from "../testUtils";

describe("<Steg 1/>", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Steg1 />)));

	// renders the component and matches snapshot
	it("renders the component and matches the snapshot", () => {
		expect(wrapper.find("FormStyles__StyledForm").exists()).toBe(true);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	// check that inputs are rendering and responding to onChange event
	describe("Title input", () => {
		const ParentComponent = mount(<NewRecipeForm user={fakeUser} />);
		it("renders without error", () => {
			expect(wrapper.find("#title").length).toEqual(1);
		});

		it("responds to the onChange event", () => {
			ParentComponent.find("#title").simulate("change", {
				target: { name: "title", value: "Test Title" }
			});
			expect(ParentComponent.state("title")).toEqual("Test Title");
		});
	});

	describe("Ingredients inputs", () => {
		it("renders without error", () => {
			expect(wrapper.find("#servings").length).toEqual(1);
			expect(wrapper.find("#item").length).toEqual(1);
			expect(wrapper.find("#numberOfUnits").length).toEqual(1);
			expect(wrapper.find("#units").length).toEqual(1);
		});

		it("responds to the onChange event", () => {
			wrapper.find("#servings").simulate("change", {
				target: { name: "servings", value: "6" }
			});

			wrapper.find("#item").simulate("change", {
				target: { name: "item", value: "Spaghetti" }
			});
			wrapper.find("#numberOfUnits").simulate("change", {
				target: { name: "numberOfUnits", value: 10 }
			});
			wrapper.find("#units").simulate("change", {
				target: { name: "units", value: "tsk" }
			});

			expect(wrapper.state("servings")).toEqual("6");
			expect(wrapper.state().item.input).toEqual("Spaghetti");
			expect(wrapper.state().item.numberOfUnits).toEqual(10);
			expect(wrapper.state().item.units).toEqual("tsk");
		});
	});

	describe("Displays a list of ingredients", () => {
		it("does not render when there are no ingredients in state", () => {
			expect(wrapper.find("List").length).toEqual(0);
		});

		it("does render a list of ingredients when there are ingredients in state", () => {
			const data = [
				{
					input: "Spaghetti",
					numberOfUnits: 1,
					units: "dl"
				}
			];

			wrapper.setState({ arr: data });
			wrapper.update();
			expect(wrapper.find("Steg1Styles__List").length).toEqual(1);
		});
	});
});

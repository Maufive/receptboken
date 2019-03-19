import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NewRecipeForm from "../components/NewRecipeForm";
import { fakeUser } from "../testUtils";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("<NewRecipeForm />", () => {
	let wrapper;
	const setMessage = jest.fn();
	beforeEach(
		() =>
			(wrapper = shallow(
				<NewRecipeForm user={fakeUser} setMessage={setMessage} />
			))
	);

	it("renders to the page and matches snapshot", () => {
		expect(wrapper.find("Steg1Test").length).toEqual(1);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	describe("Renders different components depending on Step-variable", () => {
		it("renders <Steg1 /> when Step is 1", () => {
			expect(wrapper.state().step).toEqual(1);
			expect(wrapper.find("#Steg1").length).toEqual(1);
		});

		it("renders <Steg2 /> when Step is set to 2", () => {
			wrapper.setState({ step: 2 });
			expect(wrapper.state().step).toEqual(2);
			expect(wrapper.find("#Steg2").length).toEqual(1);
		});

		it("renders <Steg3 /> when Step is set to 3", () => {
			wrapper.setState({ step: 3 });
			expect(wrapper.state().step).toEqual(3);
			expect(wrapper.find("#Steg3").length).toEqual(1);
		});
	});

	it("Submit handler working", () => {
		const spy = jest.spyOn(wrapper.instance(), "submitRecipe");

		wrapper.instance().submitRecipe();
		wrapper.update();
		expect(spy).toHaveBeenCalledTimes(1);
	});
});

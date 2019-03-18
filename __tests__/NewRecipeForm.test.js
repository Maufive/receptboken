import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import NewRecipeForm from "../components/NewRecipeForm";
import { fakeUser } from "../testUtils";

describe("<NewRecipeForm />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<NewRecipeForm user={fakeUser} />)));

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
});

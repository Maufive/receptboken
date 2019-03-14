import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import AddToShoppinglist from "../components/AddToShoppinglist";

describe("<AddToShoppinglist />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<AddToShoppinglist />)));

	it("renders to the page and matches the snapshot", () => {
		console.log(wrapper.debug());
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});

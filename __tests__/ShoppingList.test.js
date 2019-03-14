import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import ShoppingList from "../components/ShoppingList";
import { fakeShoppinglist } from "../testUtils";

describe("<ShoppingList />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<ShoppingList />)));

	it("renders without errors", () => {
		console.log(wrapper.debug());
	});
});

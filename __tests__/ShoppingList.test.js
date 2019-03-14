import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import ShoppingList from "../components/ShoppingList";
import { fakeShoppinglist } from "../testUtils";

describe("<ShoppingList />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<ShoppingList />)));

	it("renders without errors without state", () => {
		expect(wrapper.find("p").text()).toBe("Du har inga inköpslistor...");
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it("renders out the shoppinglists when state is set", () => {
		wrapper.setState({ shoppinglists: fakeShoppinglist });
		expect(wrapper.find("ShoppinglistStyles__List").children().length).toBe(1);
		console.log(wrapper.find("ShoppinglistStyles__List").children().length);
	});
});

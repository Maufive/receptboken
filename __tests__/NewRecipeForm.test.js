import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import NewRecipeForm from "../components/NewRecipeForm";
import { fakeUser } from "../testUtils";

describe("<NewRecipeForm />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<NewRecipeForm user={fakeUser} />)));

	it("renders to the page and matches snapshot", () => {
		console.log(wrapper.debug());
	});
});

import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import SingleRecept from "../components/SingleRecept";
import { fakeRecept } from "../testUtils";

describe("<SingleRecept />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<SingleRecept />)));

	it("shows Loader when there is no state", () => {
		expect(wrapper.exists("Loading")).toBe(true);
	});

	it("Renders out after setting state", () => {
		wrapper.setState({ recept: fakeRecept });
		expect(toJSON(wrapper)).toMatchSnapshot();
		expect(wrapper.find("h1").text()).toBe(fakeRecept.title);
		expect(wrapper.find("img").prop("src")).toEqual(fakeRecept.photo);
	});
});

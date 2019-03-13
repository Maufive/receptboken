import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import LoginModal from "../components/LoginModal";

describe("<LoginModal />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<LoginModal />)));

	it("renders with closed state", () => {
		expect(wrapper.find("Button__MinButton").text()).toBe(
			"<LockIcon />Logga in"
		);
		expect(wrapper.find("Modal").prop("isOpen")).toEqual(false);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it("renders with open state", () => {
		wrapper.setState({ isModalOpen: true });
		expect(wrapper.find("Modal").prop("isOpen")).toEqual(true);
	});

	it("opens modal when button is clicked", () => {
		wrapper.find("Button__MinButton").simulate("click");
		wrapper.update();
		expect(wrapper.state("isModalOpen")).toBe(true);
	});
});

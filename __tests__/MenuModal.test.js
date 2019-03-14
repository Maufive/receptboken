import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import MenuModal from "../components/MenuModal";
import { fakeUser } from "../testUtils";

describe("<MenuModal />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<MenuModal user={fakeUser} />)));

	it("renders with closed state", () => {
		expect(wrapper.find("Modal").prop("isOpen")).toEqual(false);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it("renders with open state", () => {
		wrapper.setState({ isModalOpen: true });
		expect(wrapper.find("Modal").prop("isOpen")).toEqual(true);
	});

	it("opens modal when button is clicked", () => {
		const wrapper = shallow(<MenuModal user={fakeUser} />);
		wrapper.find("DropdownStyles__UserItem").simulate("click");
		wrapper.update();
		expect(wrapper.state("isModalOpen")).toBe(true);
	});
});

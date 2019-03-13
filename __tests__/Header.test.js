import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import MenuModal from "../components/MenuModal";
import { fakeUser } from "../testUtils";

describe("<Header />", () => {
	it("renders without user", () => {
		const wrapper = shallow(<Header />);
		expect(toJSON(wrapper)).toMatchSnapshot();
		expect(wrapper.containsMatchingElement(<LoginModal />)).toBe(true);
	});

	it("renders with a user", () => {
		const wrapper = shallow(<Header user={fakeUser} />);
		expect(toJSON(wrapper)).toMatchSnapshot();
		expect(wrapper.containsMatchingElement(<MenuModal user={fakeUser} />)).toBe(
			true
		);
	});
});

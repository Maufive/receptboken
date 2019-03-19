import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Heart from "../components/Heart";

describe("<Heart />", () => {
	let wrapper;
	const setMessage = jest.fn();
	beforeEach(() => (wrapper = shallow(<Heart setMessage={setMessage} />)));

	it("renders without error and matches snapshot", () => {
		expect(wrapper.find("Heart__HeartStyles").length).toEqual(1);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it("runs the Heart-function without error", () => {
		const spy = jest.spyOn(wrapper.instance(), "heartRecept");

		wrapper.instance().heartRecept();
		wrapper.update();
		expect(spy).toHaveBeenCalled();
	});

	describe("Component toggles depending on if the recipe has been hearted", () => {
		it("renders Save", () => {
			expect(wrapper.state().hearted).toBe(false);
			expect(wrapper.find("Heart__HeartStyles").text()).toEqual(
				"<HeartIcon />Spara"
			);
		});
		it("renders Saved", () => {
			wrapper.setState({ hearted: true });
			wrapper.update();
			expect(wrapper.state().hearted).toBe(true);
			expect(wrapper.find("Heart__HeartStyles").text()).toEqual(
				"<HeartIcon />Sparad"
			);
		});
	});
});

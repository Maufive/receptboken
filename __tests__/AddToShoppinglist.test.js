import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import AddToShoppinglist from "../components/AddToShoppinglist";
import { fakeShoppinglist } from "../testUtils";

describe("<AddToShoppinglist />", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<AddToShoppinglist />)));

	it("renders to the page and matches the snapshot", () => {
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	// Stuff to test:
	// Button #open-shoppinglist-modal
	it("opens the modal when the open-modal-button is clicked", () => {
		wrapper.find("#open-shoppinglist-modal").simulate("click");
		wrapper.update();
		expect(wrapper.state("isModalOpen")).toBe(true);
	});

	// Input #title
	describe("Title input", () => {
		it("should respond to change to the input and update the component", () => {
			wrapper.find("#title").simulate("change", {
				target: { name: "title", value: "Testing shoppinglist" }
			});

			expect(wrapper.state("title")).toEqual("Testing shoppinglist");
		});
	});

	it("renders a list of shoppinglists if the user has any", async () => {
		const Component = shallow(<AddToShoppinglist />);
		Component.setState({ isModalOpen: true, shoppinglists: fakeShoppinglist });
		await Component.update();
		expect(Component.find("#shoppinglists").children().length).toBe(1);
	});

	// When there are 1 or more lists in state, make sure they are rendered to the page
	it("does not render shoppinglists if there arent any", () => {
		expect(wrapper.find("List").children().length).toBe(0);
	});
});

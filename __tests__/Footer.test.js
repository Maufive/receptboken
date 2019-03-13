import { shallow } from "enzyme";
import Footer from "../components/Footer";

describe("<Footer />", () => {
	it("renders on the page", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.find("h2").exists());
		expect(wrapper.find("h2").text()).toBe("Receptboken");
	});
});

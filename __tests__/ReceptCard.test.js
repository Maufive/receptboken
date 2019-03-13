import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import ReceptCard from "../components/ReceptCard";

afterEach(() => {
	cleanup();
});

jest.mock("axios", () => ({ get: jest.fn() }));

const data = {
	id: "1234",
	photo: "asdf123.jpg",
	timeRequired: "20 min",
	title: "Mitt jättegoda recept",
	reviews: [{ score: 1 }]
};

const PHOTO_PATH = "http://localhost/";

test("<ReceptCard />", async () => {
	const { getByTestId } = render(
		<ReceptCard
			id={data.id}
			title={data.title}
			photo={data.photo}
			timeRequired={data.timeRequired}
			reviews={data.reviews}
		/>
	);
	await waitForElement(() => getByTestId("recept-card"));
	expect(getByTestId("recept-card-title").textContent).toBe(data.title);
	expect(getByTestId("recept-card-photo").src).toBe(
		`${PHOTO_PATH}` + data.photo
	);
});

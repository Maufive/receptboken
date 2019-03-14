export const fakeRecept = {
	_id: "1234",
	author: "5678436374re67fwuf76",
	created: "Idag",
	description: ["Steg1", "Steg2", "Steg3"],
	id: "1337",
	ingredients: [
		{
			input: "Lök",
			numberOfUnits: "2",
			units: "dl"
		}
	],
	photo: "asdf123.jpg",
	reviews: [{ score: 1 }],
	servings: "2",
	tags: ["Mat", "Gott"],
	timeRequired: "20 min",
	title: "Mitt jättegoda recept"
};

export const fakeUser = {
	_id: "1234",
	username: "fakeuser@gmail.com",
	password: "1234",
	hearts: [],
	fname: "Niklas",
	lname: "Albinsson",
	description: "Hej jag heter Niklas",
	photo: "http://fakephoto.jpg"
};

export const fakeShoppinglist = [
	{
		_id: "34567876543452176",
		title: "My Shoppinglist",
		created: "12/3 2019",
		author: "61386712376576d7q6ewd65",
		list: [
			{
				input: "Lök",
				numberOfUnits: "5",
				units: "dl"
			},
			{
				input: "Tomater",
				numberOfUnits: "10",
				units: "st"
			}
		]
	}
];

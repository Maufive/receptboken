export const calcRating = reviews => {
	let total = 0;
	reviews.map(review => {
		total += review.rating;
	});
	const average = total / reviews.length;
	const rounded = Math.floor(Math.round(average));
	const stars = "★".repeat(rounded);
	const emptyStars = "☆".repeat(5 - rounded);
	return stars.concat(emptyStars);
};

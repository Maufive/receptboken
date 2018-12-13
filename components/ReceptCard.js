import React, { Component } from "react";
import Link from "next/link";
import { Card, SmallCard } from "./styles/Card";

class ReceptCard extends Component {
	calcRating = recipeReviews => {
		const reviews = recipeReviews;
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

	render() {
		const { id, photo, title, timeRequired, reviews } = this.props;
		return (
			<div>
				<Link
					key={id}
					href={{
						pathname: "/recept",
						query: {
							id: id
						}
					}}
				>
					<a>
						{!this.props.small ? (
							<Card>
								<img src={photo} alt="Bild på recept" height="250px" />
								<h3>{title}</h3>
								<div>
									<span>
										<i className="icofont-clock-time" /> {timeRequired}m
									</span>
									<span style={{ color: "#FFCF44" }}>
										{this.calcRating(reviews)}{" "}
										<span style={{ color: "#393939" }}>({reviews.length})</span>
									</span>
								</div>
							</Card>
						) : (
							<SmallCard>
								img src={photo} alt="Bild på recept" height="250px" />
								<h3>{title}</h3>
								<div>
									<span>
										<i className="icofont-clock-time" /> {timeRequired}m
									</span>
									<span style={{ color: "#FFCF44" }}>
										{this.calcRating(reviews)}{" "}
										<span style={{ color: "#393939" }}>({reviews.length})</span>
									</span>
								</div>
							</SmallCard>
						)}
					</a>
				</Link>
			</div>
		);
	}
}

export default ReceptCard;

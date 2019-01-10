import React, { Component } from "react";
import Link from "next/link";
import { Card, SmallCard } from "./styles/Card";
import ClockIcon from "../svg/clock.svg";
import { calcRating } from "../helpers";

class ReceptCard extends Component {
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
						<Card>
							<img src={photo} alt="Bild på recept" />
							<h3>{title}</h3>
							<div>
								<span>
									<ClockIcon /> {timeRequired}m
								</span>
								<span style={{ color: "#FFCF44" }}>
									{reviews && calcRating(reviews)}{" "}
									<span style={{ color: "#393939" }}>
										({reviews && reviews.length})
									</span>
								</span>
							</div>
						</Card>
					</a>
				</Link>
			</div>
		);
	}
}

export default ReceptCard;

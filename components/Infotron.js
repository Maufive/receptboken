import React from "react";
import styled from "styled-components";
import { fadeIn } from "../components/styles/keyframes";

const InfotronWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
`;

const Browser = styled.div`
	background: ${props => props.theme.offWhite};
	padding: 0.3rem;
	display: flex;
	span {
		height: 5px;
		width: 5px;
		border-radius: 50%;
		background: ${props => props.theme.green};
		display: block;
		margin: 0 0.2rem;
	}
`;

const InfotronColumn = styled.div`
	width: 1000px;
	border-radius: ${props => props.theme.bRadius};
	color: ${props => props.theme.black};
	height: 350px;
	display: flex;
	justify-content: space-around;
	padding: 1.5rem 0;
	margin-bottom: 3rem;
	animation: ${fadeIn} 800ms ease 400ms 1 normal forwards running;
	opacity: 0;
	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 50%;
	}
	h2 {
		font-weight: 700;
		font-size: 30px;
		font-family: "Josefin Sans";
		color: #3aaed8;
	}
	p {
		font-family: "Open Sans";
		font-size: 20px;
		padding: 0 2rem;
	}
	@media (max-width: 999px) {
		width: 800px;
		h2 {
			margin-block-end: 0;
			margin-block-start: 0;
			font-size: 24px;
		}
		p {
			padding: 0 4rem;
			font-size: 16px;
		}
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		flex-direction: column;
		align-items: center;
		margin: 5rem 0;
	}
`;

const InfotronContainer = styled.div`
	display: flex;
`;

const DeviceScreen = styled.div`
	img {
		object-fit: cover;
	}
`;
// #E4572E
const Bowser = () => (
	<Browser>
		<span style={{ backgroundColor: "#bc1616" }} />
		<span style={{ backgroundColor: "#FFCF44" }} />
		<span style={{ backgroundColor: "#4eb731" }} />
	</Browser>
);

const IphoneContainer = styled.div`
	font-size: 0.3em;
	display: flex;
	flex-direction: row !important;
	justify-content: space-around !important;
	width: 50%;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin-top: 10rem;
	}
`;

const MacbookContainer = styled.div`
	font-size: 0.5em;
	animation: ${fadeIn} 800ms ease 800ms 1 normal forwards running;
	opacity: 0;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin-bottom: 5rem;
	}
`;

const Infotron = () => (
	<InfotronWrapper>
		<InfotronColumn>
			<MacbookContainer>
				<div className="md-macbook-pro md-glare">
					<div className="md-lid">
						<div className="md-camera" />

						<div className="md-screen">
							<Bowser />
							<DeviceScreen>
								<img
									src="https://res.cloudinary.com/dcgb0fhog/image/upload/v1547898474/recepttt.png"
									alt=""
								/>
							</DeviceScreen>
						</div>
					</div>
					<div className="md-base" />
				</div>
			</MacbookContainer>
			<div>
				<h2>Hitta nya spännande recept</h2>
				<p>
					Bläddra bland massor av personliga recept och hitta något som passar
					just dig.
				</p>
			</div>
		</InfotronColumn>
		<InfotronColumn>
			<div>
				<h2 style={{ color: "#E4572E" }}>Enkla inköpslistor</h2>
				<p>
					Spara receptens ingredienser till en inköpslista som du enkelt kan
					maila till dig själv och ta med på affären!
				</p>
			</div>
			<IphoneContainer>
				<div class="md-iphone-5 md-black-device md-glare">
					<div className="md-body">
						<div className="md-buttons" />
						<div className="md-front-camera" />
						<div className="md-top-speaker" />
						<div className="md-screen">
							<DeviceScreen>
								<img
									src="https://res.cloudinary.com/dcgb0fhog/image/upload/v1547906237/inkop1.png"
									alt=""
								/>
							</DeviceScreen>
						</div>
						<button className="md-home-button" />
					</div>
				</div>
				<span style={{ fontSize: "5rem", color: "#E4572E" }}>→</span>
				<div className="md-iphone-5 md-black-device md-glare">
					<div className="md-body">
						<div className="md-buttons" />
						<div className="md-front-camera" />
						<div className="md-top-speaker" />
						<div className="md-screen">
							<DeviceScreen>
								<img
									src="https://res.cloudinary.com/dcgb0fhog/image/upload/v1547906240/inkop2.png"
									alt=""
								/>
							</DeviceScreen>
						</div>
						<button className="md-home-button" />
					</div>
				</div>
			</IphoneContainer>
		</InfotronColumn>
	</InfotronWrapper>
);

export default Infotron;

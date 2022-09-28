import React from "react";
import clock from "../image/clock.svg";
import diaphragm from "../image/diaphragm.svg";
import money from "../image/money.svg";
import teamwork from "../image/teamwork.svg";
import home2 from "../image/home2.png";

const Services = () => {
	return (
		<div className="services">
			<div className="description">
				<h2>
					High <span>quality</span> service.
				</h2>
				<div className="cards">
					<div className="card">
						<div className="icon">
							<img src={clock} alt="clock" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="card">
						<div className="icon">
							<img src={teamwork} alt="teamwork" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="card">
						<div className="icon">
							<img src={diaphragm} alt="diaphragm" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="card">
						<div className="icon">
							<img src={money} alt="money" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
			<div className="image">
				<img src={home2} alt="camera" />
			</div>
		</div>
	);
};

export default Services;

import React from "react";
import MTN from "../../images/mtn-logo-40644FC8B0-seeklogo.com.png";
import Glo from "../../images/Globacom_Limited_Logo.svg";
import Airtel from "../../images/Airtel.svg.png";
import Etisalat from "../../images/9mobile.png";
import "./home.css";
import { Header, Hero, Idea, Footer, Payment } from "../../components/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
	return (
		<div>
			<Header></Header>
			<Hero></Hero>
			{/* <section className='home__partnersContainer p-12 '>
				<h1 className='text-center my-12'>Our Partners Include</h1>
				<article className='partnersContainer__logo'>
					<div>
						<img
							className='partnersContainer__logo'
							src={MTN}
							alt='Mtn Image'
						></img>
					</div>
					<img
						className='partnersContainer__logo'
						src={Etisalat}
						alt='9mboile Image'
					></img>
					<img
						className='partnersContainer__logo'
						src={Airtel}
						alt='Airtel Image'
					></img>
					<img
						className='partnersContainer__logo'
						src={Glo}
						alt='Glo Image'
					></img>
				</article>
			</section> */}
			<Idea />
			<Payment />
			<Footer />
		</div>
	);
};

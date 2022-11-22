import React from "react";
import "./payment.css";
import Business from "../../images/business-3d-businesswoman-got-a-love-message-online.png";
import Payments from "../../images/servicesrecharge.png";
import Ecommerce from "../../images/bubble-gum-payment-process-1.png";
import Audit from "../../images/juicy-recruitment.png";
import Messaging from "../../images/clip-messages.png";
import Security from "../../images/3d-casual-life-safe-with-security-tag.png";
import PhoneImage from "../../images/attach.webp";
import { Link } from "react-router-dom";
import GoogleStore from "../../images/google-play-store.png";

export const Payment = () => {
	return (
		<div>
			<main className='payment__main__container '>
				<h1 className='text-center'>Connect To Ringo Now...!!!</h1>
				<section className='grid lg:grid-cols-3 md:grid-cols-1 payment__sectionSecondCenter__container gap-10'>
					<article>
						<img src={Payments} alt='' />
						<h2>Pay utility bills</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
							pariatur provident est alias. Lorem ipsum dolor sit amet.
						</p>
					</article>
					<article>
						<img src={Business} alt='' />
						<h2>Virtual Airtime TopUp</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
							pariatur provident est alias. Lorem ipsum dolor sit amet.
						</p>
					</article>
					<article>
						<img src={Ecommerce} alt='' />
						<h2>Ecommerce and Bill Payments</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
							pariatur provident est alias. Lorem ipsum dolor sit amet.
						</p>
					</article>
					<article>
						<img src={Audit} alt='' />
						<h2>Comprehensive Audit Systems and Program</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
							pariatur provident est alias. Lorem ipsum dolor sit amet.
						</p>
					</article>
					<article>
						<img src={Messaging} alt='' />
						<h2>Robust Messaging Service for banks and large companies</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
							pariatur provident est alias. Lorem ipsum dolor sit amet.
						</p>
					</article>
					<article>
						<img src={Security} alt='' />
						<h2>Top Notch Security Oriented Software Design</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
							pariatur provident est alias. Lorem ipsum dolor sit amet.
						</p>
					</article>
				</section>
			</main>
			<main className='payment__itemContainer'>
				<section className='text-center grid lg:grid-cols-2 md:grid-cols-1 gap-10'>
					<img src={PhoneImage} alt='' />
					<article className='text-center p-4 flex justify-center items-center flex-col'>
						<h1 className='text-left'>
							Come on board and experience seamless payments.
						</h1>
						<p className='text-left my-4'>
							Download the app and get commisions on every transaction.
						</p>
						<div className='lg:flex md:grid md:text-center lg:justify-between lg:items-center lg:text-left lg:mr-auto'>
							<img src={GoogleStore} alt='' className='googleImage ' />
							<h2 className='text-2xl'>
								Or <Link to='https://b2b.ringo.com.ng'>Signup </Link> on our web
								app
							</h2>
						</div>
					</article>
				</section>
			</main>
		</div>
	);
};

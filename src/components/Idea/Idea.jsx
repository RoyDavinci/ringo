import React from "react";
import "./idea.css";

export const Idea = () => {
	return (
		<div className='idea__containerItem grid md:grid-cols-1 lg:grid-cols-2 gap-6 py-10 px-8 '>
			<section className='idea__sectionCenter flex flex-col items-center justify-center'>
				<h1>All Your Fintech Issues Solved In One Platform.</h1>
				<p>
					Our application facilitates transactions, such as bill payment,
					airtime and data purchase, fund transfer, withdrawals, account
					opening, transport ticketing, examination result checker, betting,
					on-demand services, e-commerce, flight booking, and more.
				</p>
			</section>
			<section className='idea__sectionCenter grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
				<article>
					<h1>Connectivity and Speed</h1>
					<p>
						Our platform guarantees fast delivery on transactions and
						interconnectivity
					</p>
				</article>
				<article>
					<h1>100% Success Rates On Transactions</h1>
					<p>
						With Direct connection to billers, our service can assure a near
						100% success rate on transactions done on the platform and through
						our API.
					</p>
				</article>
				<article>
					<h1>APIs for your several payment plans</h1>
					<p>
						As we provide businesses for our clients, we have a well documented
						API for your several Fintech needs if you are building a new
						platform.
					</p>
				</article>
				<article>
					<h1>Detailed Audits, Security</h1>
					<p>
						We have a battle tested system that guarantees security, helps with
						your reconciliation and audits for each transaction done on our
						platform.
					</p>
				</article>
			</section>
		</div>
	);
};

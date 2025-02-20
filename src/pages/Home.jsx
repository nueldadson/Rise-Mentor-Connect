import React from "react";
import { Hero } from "../components";
import {
	About,
	Benefits,
	Contact,
	FAQ,
	FinalCallToAction,
	HowItWorks,
	SafetyGuidelines,
	Testimonials,
	WhyBecomeMentor,
} from "../components/Sections";


const Home = () => {
	return (
		<div className="w-[inherit] h-fit">
			<Hero />
			<About />
			<WhyBecomeMentor />
			<HowItWorks />
			<Testimonials />
			<SafetyGuidelines />
			<Benefits />
			<FAQ />
			<Contact />
			<FinalCallToAction />
		</div>
	);
};

export default Home;

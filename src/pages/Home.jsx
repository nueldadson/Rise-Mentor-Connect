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
	WhyGirlsNeedYou,
} from "../components/Sections";


const Home = () => {
	return (
		<div className="w-[inherit] h-fit">
			<Hero />
			<About />
			<WhyGirlsNeedYou />
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

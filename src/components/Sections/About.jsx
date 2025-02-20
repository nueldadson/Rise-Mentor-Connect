import React from "react";
import { Mentor1 } from "../../assets/images";

const About = () => {
	return (
		<section
			id="about"
			className="max-w-[100vw] overflow-x-hidden py-16 px-4 nav-bg border-b-4 border-yellow-500"
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
				<div className="flex flex-col h-full bg-white bg-opacity-50 p-6 rounded-xl shadow-lg w-full md:w-2/3">
					<h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-black">
						What is RISE Mentor Connect?
					</h2>
					<p className="text-2xl md:text-lg mb-4 font-medium text-black">
						RISE Mentor Connect is an SMS-based mentorship program that bridges
						the education gap for African schoolgirls. We pair girls with
						inspiring female mentors who guide them through education, career,
						and personal growth—using simple text messages and scheduled calls.
					</p>
					<blockquote className="border-l-4 border-yellow-500 pl-4 italic font-extrabold text-gray-700">
						"A simple message today can change a girl’s tomorrow. Be the role
						model she needs!"
					</blockquote>

					{/* ✅ STATS SECTION */}
					<div className=" flex flex-wrap gap-6">
						<div className="mt-6 flex gap-6 items-center">
							<div className="bg-yellow-400 text-black p-4 rounded-lg shadow-md md:w-48 w-1/2 text-center">
								<h3 className="text-4xl font-bold">0+</h3>
								<p className="text-lg">Girls Mentored</p>
							</div>
							<div className="bg-yellow-400 text-black p-4 rounded-lg shadow-md md:w-48 w-1/2 text-center">
								<h3 className="text-4xl font-bold">0+</h3>
								<p className="text-lg">Dedicated Mentors</p>
							</div>
						</div>
						<div className="mt-6 flex items-center">
							<div className="bg-yellow-400 text-black p-4 rounded-lg shadow-md w-48 text-center">
								<h3 className="text-4xl font-bold">0+ Countries</h3>
								<p className="text-lg">Reaching Girls Globally</p>
							</div>
						</div>
					</div>

					{/* ✅ CALL-TO-ACTION BUTTON */}
					<a
						href="https://forms.gle/yourGoogleFormLink"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 bg-red-600 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition w-fit"
					>
						Become a Mentor Today!
					</a>
				</div>

				{/* ✅ IMAGE SECTION */}
				<div className="flex items-center justify-center md:w-1/3">
					<img
						// src={Mentor1}
						alt="Mentor texting on a mobile phone"
						className="rounded-3xl shadow-xl shadow-red-500 w-full md:w-[500px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;

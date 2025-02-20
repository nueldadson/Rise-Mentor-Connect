import React from "react";
import { motion } from "framer-motion";
import { Mentor3 } from "../../assets/images";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
	return (
		<section
			id="how-it-works"
			className="max-w-[100vw] overflow-x-hidden py-16 px-6 bg-gradient-to-r from-red-100 to-yellow-100"
		>
			<div className="container mx-auto">
				{/* Section Title */}
				<motion.h2
					className="text-4xl font-bold text-center text-red-700 mb-12"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					How Does RISE Mentor Connect Work?
				</motion.h2>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Steps Section (Now centered better) */}
					<motion.div
						className="space-y-6 md:order-1 flex flex-col justify-center md:pl-12"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						{[
							{
								title: "Sign Up (2 Mins)",
								text: "Fill out a simple Google Form to register.",
							},
							{
								title: "Get Matched (24-48 Hours)",
								text: "We pair you with 3-5 schoolgirls based on interests & location.",
							},
							{
								title: "Guide & Support (Weekly SMS/Calls)",
								text: "Respond to their school, career, and life questions via text.",
							},
							{
								title: "Watch Them Grow!",
								text: "Your support transforms their confidence and future.",
							},
						].map((step, index) => (
							<div key={index} className="flex items-start gap-4">
								<div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
									{index + 1}
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-800">
										{step.title}
									</h3>
									<p className="text-gray-600">{step.text}</p>
								</div>
							</div>
						))}

						{/* CTA Button */}
						<motion.a
							href="https://forms.gle/yourGoogleFormLink"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition shadow-lg mt-6"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							JOIN NOW – BECOME A MENTOR
						</motion.a>
					</motion.div>

					{/* Image Section with Floating Icons */}
					<motion.div
						className="md:order-2 flex justify-center relative"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<img
							src={Mentor3}
							alt="Mentor receiving an SMS notification"
							className="rounded-2xl shadow-lg w-full max-w-md relative"
						/>
						{/* Floating Icons */}
						<motion.div
							className="absolute top-8 left-8 bg-yellow-400 text-red-800 p-3 rounded-full shadow-md"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<FaCheckCircle className="text-2xl" />
						</motion.div>
						<motion.div
							className="absolute bottom-6 right-6 bg-yellow-400 text-red-800 p-3 rounded-full shadow-md"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.7 }}
						>
							<FaCheckCircle className="text-2xl" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;

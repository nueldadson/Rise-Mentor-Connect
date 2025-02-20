import React from "react";
import { motion } from "framer-motion";
import { Parent1 } from "../../assets/images";

const WhyBecomeMentor = () => {
	return (
		<section
			id="why-mentor"
			className="max-w-[100vw] overflow-x-hidden py-16 px-6 bg-[conic-gradient(from_180deg,_orangered,_orange)] bg-cover bg-no-repeat bg-orange-500"
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
				{/* Image Section with Animation */}
				<motion.div
					className="md:w-1/2 w-full"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<img
						src={Parent1}
						alt="Happy African woman smiling while using her phone"
						className="rounded-3xl shadow-lg w-full md:max-w-md mx-auto"
					/>
				</motion.div>

				{/* Text Section - No White Box, Just Better Styling */}
				<motion.div
					className="md:w-1/2 w-full text-white text-lg"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl font-extrabold text-[#ffff00] mb-4">
						Your Guidance Can Change a Life!
					</h2>
					<ul className="space-y-3">
						<li className="flex items-center gap-2">
							<span className="text-yellow-300 text-xl">✔</span>
							<span>
								<strong>Make a Lasting Impact</strong> – Inspire young girls to
								stay in school and pursue their dreams.
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-yellow-300 text-xl">✔</span>
							<span>
								<strong>Flexibility & Convenience</strong> – Only 10 minutes per
								week via SMS or calls.
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-yellow-300 text-xl">✔</span>
							<span>
								<strong>No Cost to You</strong> – It’s 100% free to participate
								as a mentor.
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-yellow-300 text-xl">✔</span>
							<span>
								<strong>Be a Role Model</strong> – Empower the next generation
								of female leaders.
							</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-yellow-300 text-xl">✔</span>
							<span>
								<strong>Join a Community</strong> – Connect with other
								passionate female mentors.
							</span>
						</li>
					</ul>

					{/* Animated CTA Button */}
					<motion.a
						href="https://forms.gle/yourGoogleFormLink"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 inline-block bg-[#ffff00] text-center text-[#ff0000] font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition shadow-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						YES, I WANT TO MENTOR! – SIGN UP NOW
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default WhyBecomeMentor;

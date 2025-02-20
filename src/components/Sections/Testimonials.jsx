import React from "react";
import { motion } from "framer-motion";
import { Mentor4 } from "../../assets/images";

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="max-w-[100vw] overflow-x-hidden py-16 px-6 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white"
		>
			<div className="container mx-auto text-center">
				{/* Section Title */}
				<motion.h2
					className="text-4xl font-bold mb-12 drop-shadow-lg"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					What Our Mentors Say…
				</motion.h2>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{[
						{
							text: "I never imagined how impactful a simple text could be until I joined RISE. My mentees are now confident in school and making big decisions!",
							name: "Fatima, Nurse & Mentor",
						},
						{
							text: "Guiding young girls through SMS is the easiest way to create change. I love being part of this program!",
							name: "Paulina, Teacher & Mentor",
						},
					].map((testimonial, index) => (
						<motion.div
							key={index}
							className="max-w-xl mx-auto bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/30"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.3 }}
						>
							<p className="text-lg italic">"{testimonial.text}"</p>
							<p className="mt-4 font-bold text-yellow-200">
								{testimonial.name}
							</p>
						</motion.div>
					))}
				</div>

				{/* Mentor Image */}
				<motion.div
					className="mt-12 flex justify-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<img
						src={Mentor4}
						alt="Happy mentor texting a student"
						className="rounded-2xl shadow-lg w-full max-w-md border-4 border-white/30"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;

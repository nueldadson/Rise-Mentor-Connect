import React, { useState } from "react";
import { Mentor2 } from "../../assets/images";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(0); // First FAQ auto-opens

	const faqs = [
		{
			question: "Do I need experience to be a mentor?",
			answer: "No! If you’re passionate about guiding girls, you qualify.",
		},
		{
			question: "How much time is required?",
			answer: "Only 10 minutes per week.",
		},
		{
			question: "What if I can’t answer a mentee’s question?",
			answer: "No problem! We provide resources & support to help.",
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id="faq"
			className="max-w-[100vw] overflow-x-hidden py-16 px-6 bg-gradient-to-r from-[#FE5722] to-[#FFFF00]"
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
				{/* Image Section */}
				<div className="w-full md:w-1/2">
					<img
						src={Mentor2}
						alt="Mentor answering a question"
						className="rounded-3xl shadow-lg w-full md:max-w-md mx-auto"
					/>
				</div>

				{/* FAQ Section */}
				<div className="w-full md:w-1/2  bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-3xl font-bold text-center text-red-700 mb-6">
						Have Questions? We Have Answers!
					</h2>

					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div key={index} className="border-b border-gray-300 pb-3">
								<button
									className="flex justify-between items-center w-full text-left text-lg font-bold text-black py-3"
									onClick={() => toggleFAQ(index)}
								>
									{faq.question}
									{openIndex === index ? (
										<FaChevronUp className="text-red-500" />
									) : (
										<FaChevronDown className="text-gray-500" />
									)}
								</button>
								{openIndex === index && (
									<p className="text-gray-600 font-medium mt-2 transition-opacity duration-300">
										{faq.answer}
									</p>
								)}
							</div>
						))}
					</div>

					{/* Contact Button */}
					<div className="text-center mt-6">
						<a
							href="#contact"
							className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition"
						>
							STILL HAVE QUESTIONS? CONTACT US!
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;

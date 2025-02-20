import React from "react";
import { Mentor5 } from "../../assets/images";
import { ShieldCheck, Lock, PhoneIncoming, Users } from "lucide-react";

const SafetyGuidelines = () => {
	return (
		<section
			id="safety"
			className="py-16 px-6 md:px-12 bg-gradient-to-r from-red-100 to-yellow-100 relative z-10"
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl gap-10 md:gap-16">
				{/* Image Section */}
				<div className="md:w-5/12 mb-8 md:mb-0 relative z-10">
					<div className="bg-white p-4 rounded-xl shadow-lg">
						<img
							src={Mentor5}
							alt="Mentor reviewing RISE guidelines"
							className="rounded-xl shadow-md w-full max-w-md mx-auto md:max-w-none md:w-[85%] transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</div>

				{/* Text Section */}
				<div className="md:w-7/12 text-gray-900 relative z-10">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-yellow-500 text-transparent bg-clip-text">
						Safe, Secure & Impactful Mentorship
					</h2>
					<p className="text-lg md:text-xl mb-6 text-gray-700">
						Your security and comfort matter. Here’s how we ensure a safe
						mentorship experience:
					</p>
					<div className="space-y-6">
						<div className="flex items-start space-x-4">
							<ShieldCheck className="text-red-500 w-7 h-7 flex-shrink-0" />
							<p className="text-lg md:text-xl">
								<strong>No Personal Numbers Shared</strong> – Messages go
								through our secure system.
							</p>
						</div>
						<div className="flex items-start space-x-4">
							<Lock className="text-yellow-500 w-7 h-7 flex-shrink-0" />
							<p className="text-lg md:text-xl">
								<strong>Clear Guidelines Provided</strong> – We guide you every
								step of the way.
							</p>
						</div>
						<div className="flex items-start space-x-4">
							<Users className="text-red-500 w-7 h-7 flex-shrink-0" />
							<p className="text-lg md:text-xl">
								<strong>Zero Harassment Policy</strong> – We protect both
								mentors & mentees.
							</p>
						</div>
						<div className="flex items-start space-x-4">
							<PhoneIncoming className="text-yellow-500 w-7 h-7 flex-shrink-0" />
							<p className="text-lg md:text-xl">
								<strong>Support Team Available</strong> – We’re here to assist
								you anytime.
							</p>
						</div>
					</div>

					{/* Call to Action Button */}
					<div className="mt-8">
						<a
							href="#contact"
							className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 text-lg"
						>
							Get Support
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SafetyGuidelines;

import React from "react";
import { Trophy, Users, Star, Briefcase, Network, Book } from "lucide-react";

const MentorBenefits = () => {
	const benefits = [
		{
			id: 1,
			title: "Personal Fulfillment & Legacy Building",
			description:
				"Make a lasting difference in a young girl’s life by shaping her future. Be remembered as the reason a girl dared to dream and succeeded.",
			icon: <Star className="text-yellow-400 w-10 h-10" />,
		},
		{
			id: 2,
			title: "Professional Growth & Leadership Development",
			description:
				"Gain valuable mentorship experience that enhances leadership, communication, and coaching skills. Strengthen your CV and professional profile with community impact experience.",
			icon: <Briefcase className="text-yellow-400 w-10 h-10" />,
		},
		{
			id: 3,
			title: "Recognition & Prestige",
			description:
				"Be honored as a Mentor of Change in your community. Featured in RISE success stories and public recognition events.",
			icon: <Trophy className="text-yellow-400 w-10 h-10" />,
		},
		{
			id: 4,
			title: "Expanded Network & Connections",
			description:
				"Join an exclusive network of like-minded female professionals and leaders. Get opportunities for collaboration, networking, and career advancement.",
			icon: <Network className="text-yellow-400 w-10 h-10" />,
		},
		{
			id: 5,
			title: "Inspire & Empower the Next Generation",
			description:
				"Shape the future of young African girls by guiding them through education, career, and life choices. Help break barriers and build a new generation of strong, confident women.",
			icon: <Users className="text-yellow-400 w-10 h-10" />,
		},
		{
			id: 6,
			title: "Exclusive Mentor Perks",
			description:
				"Access to special training, resources, and mentorship workshops. Potential invitations to leadership programs, seminars, and women empowerment events.",
			icon: <Book className="text-yellow-400 w-10 h-10" />,
		},
	];

	return (
		<section
			id="mentor-benefits"
			className="py-20 px-6 md:px-12 bg-gradient-to-r from-red-700 via-yellow-600 to-red-500 text-white relative"
		>
			{/* Overlay for subtle effect */}
			<div className="absolute inset-0 bg-opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15)_0%,_transparent_60%)]"></div>

			<div className="relative z-10 container mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-extrabold mb-6">
					Why Become a Mentor?
				</h2>
				<p className="text-lg md:text-xl text-gray-200 mb-7">
					By mentoring with RISE Mentor Connect, you’re not just changing a life
					- you’re shaping the future.
				</p>
				<h2 className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 text-2xl mb-7 ">
					Benefits
				</h2>

				{/* Benefits Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{benefits.map((benefit) => (
						<div
							key={benefit.id}
							className="bg-red-600 text-white rounded-lg p-6 shadow-lg backdrop-blur-md flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
							// className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg backdrop-blur-md flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
						>
							<div className="mb-4">{benefit.icon}</div>
							<h3 className="text-xl font-bold text-yellow-300 mb-3">
								{benefit.title}
							</h3>
							<p className="text-gray-200 font-semibold">{benefit.description}</p>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16">
					<a
						href="https://forms.gle/yourGoogleFormLink"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full shadow-lg text-lg md:text-xl hover:bg-yellow-500 transition transform hover:scale-105"
					>
						Become a Mentor Today!
					</a>
				</div>
			</div>
		</section>
	);
};

export default MentorBenefits;

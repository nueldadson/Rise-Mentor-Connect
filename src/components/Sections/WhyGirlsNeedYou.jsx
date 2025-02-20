import React from "react";
import {
	AlertTriangle,
	Book,
	Users,
	Heart,
	Briefcase,
	Scale,
} from "lucide-react";

const WhyGirlsNeedYou = () => {
	return (
		<section
			id="why-girls-need-you"
			className="py-20 px-6 md:px-12 bg-gradient-to-r from-red-100 to-yellow-100 text-gray-900 relative"
		>
			<div className="relative z-10 container mx-auto">
				{/* Section Heading */}
				<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-red-600 to-yellow-500 text-transparent bg-clip-text h-20">
					Why Young Girls Need You
				</h2>
				<p className="text-lg md:text-xl text-gray-800 text-center max-w-2xl mx-auto mb-12">
					Across Africa, millions of young girls struggle with barriers that
					hold them back from reaching their potential. YOU can be the guide
					that helps them overcome these challenges.
				</p>

				{/* Grid Layout - Left: Problems | Right: Impact */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Problems */}
					<div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-red-500">
						<h3 className="text-2xl font-semibold text-red-600 mb-6">
							Challenges They Face
						</h3>
						<ul className="space-y-5">
							<li className="flex items-start space-x-4">
								<AlertTriangle className="text-red-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">Lack of academic support</p>
							</li>
							<li className="flex items-start space-x-4">
								<Briefcase className="text-red-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">Limited career guidance</p>
							</li>
							<li className="flex items-start space-x-4">
								<Heart className="text-red-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">Low self-esteem</p>
							</li>
							<li className="flex items-start space-x-4">
								<Users className="text-red-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">
									Pressures of early marriage or family responsibilities
								</p>
							</li>
							<li className="flex items-start space-x-4">
								<Scale className="text-red-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">Struggles with school-life balance</p>
							</li>
						</ul>
					</div>

					{/* Solutions & Impact */}
					<div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-yellow-500">
						<h3 className="text-2xl font-semibold text-yellow-600 mb-6">
							How You Can Make a Difference
						</h3>
						<p className="text-lg mb-4">
							YOU are here to bridge that gap! Your support can:
						</p>
						<ul className="space-y-5">
							<li className="flex items-start space-x-4">
								<Book className="text-yellow-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">
									Keep a girl in school and improve academic success.
								</p>
							</li>
							<li className="flex items-start space-x-4">
								<Briefcase className="text-yellow-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">
									Fuel her ambitions and help her build a career path.
								</p>
							</li>
							<li className="flex items-start space-x-4">
								<Heart className="text-yellow-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">Boost her self-esteem and confidence.</p>
							</li>
							<li className="flex items-start space-x-4">
								<Users className="text-yellow-500 w-8 h-8 flex-shrink-0" />
								<p className="text-lg">
									Provide guidance to navigate personal and societal challenges.
								</p>
							</li>
						</ul>
					</div>
				</div>

				{/* Highlighted Fact Box */}
				<div className="mt-16 bg-white p-6 rounded-lg text-center shadow-lg max-w-3xl mx-auto border-l-8 border-yellow-500">
					<h4 className="text-yellow-600 text-2xl font-semibold mb-4">
						💡 Did You Know?
					</h4>
					<p className="text-lg text-gray-800">
						Girls who have strong mentors are more likely to complete school,
						delay early marriage, and pursue higher education!
					</p>
				</div>

				{/* Call to Action */}
				<div className="mt-12 flex justify-center">
					<a
						href="https://forms.gle/yourGoogleFormLink"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg md:text-xl hover:opacity-90 transition transform hover:scale-105"
					>
						Be a Mentor & Make an Impact!
					</a>
				</div>
			</div>
		</section>
	);
};

export default WhyGirlsNeedYou;

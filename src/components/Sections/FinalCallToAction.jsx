import React from "react";
import { Student1 } from "../../assets/images";
import { Sparkles, Star } from "lucide-react";

const FinalCallToAction = () => {
	return (
		<section
			id="final-cta"
			className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-red-700 via-yellow-600 to-red-500"
		>
			{/* Floating Decorative Elements */}
			<div className="absolute inset-0 bg-opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15)_0%,_transparent_60%)]"></div>

			<div className="container mx-auto text-center relative z-10">
				{/* Section Title */}
				<h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
					Your Words Can Change a Life{" "}
					<span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
						– Join RISE Mentor Connect Today!
					</span>
				</h2>

				{/* Subtitle */}
				<p className="text-lg md:text-2xl text-white opacity-90 mb-8">
					Be the mentor you wish you had. One text, one girl, one future at a
					time.
				</p>

				{/* Call-to-Action Button */}
				<div className="flex justify-center items-center space-x-3">
					<Sparkles className="text-yellow-300 w-6 h-6 animate-pulse" />
					<a
						href="https://forms.gle/yourGoogleFormLink"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full shadow-lg text-lg md:text-xl hover:bg-yellow-500 transition transform hover:scale-105"
					>
						I WANT TO MENTOR – SIGN UP NOW
					</a>
					<Sparkles className="text-yellow-300 w-6 h-6 animate-pulse" />
				</div>

				{/* Image with Styling */}
				<div className="mt-10 relative flex justify-center">
					<div className="rounded-lg overflow-hidden shadow-xl border-4 border-yellow-400 p-1 bg-white">
						<img
							src={Student1}
							alt="Young girl celebrating her success"
							className="rounded-lg w-full max-w-md transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</div>

				{/* Floating Decorative Stars */}
				<div className="absolute top-10 left-8 opacity-50 animate-pulse">
					<Star className="text-yellow-300 w-8 h-8" />
				</div>
				<div className="absolute bottom-10 right-8 opacity-50 animate-pulse">
					<Star className="text-yellow-300 w-8 h-8" />
				</div>
			</div>
		</section>
	);
};

export default FinalCallToAction;

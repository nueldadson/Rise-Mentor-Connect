import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import {
	Heroimg1,
	Heroimg2,
	Heroimg3,
	Heroimg4,
	Heroimg5,
} from "../../assets/images";

const Hero = () => {
	// Track the current slide
	const [currentIndex, setCurrentIndex] = useState(0);

	// Define your slides here
	// You can customize heading, subtext, etc. per slide or keep them the same
	const sliderContent = [
		{
			image: Heroimg1,
			heading: "Empower a Girl’s Future - One Text at a Time!",
			writeup:
				"Join RISE Mentor Connect and guide young girls in school, career, and life – just through SMS!",
			cta: "BECOME A MENTOR – SIGN UP NOW",
		},
		{
			image: Heroimg2,
			heading: "Be the Mentor You Wish You Had!",
			writeup:
				"Your words have the power to inspire. Support young girls in making bold choices and pursuing their dreams.",
			cta: "BECOME A MENTOR – SIGN UP NOW",
		},
		{
			image: Heroimg3,
			heading: "Change Lives with Just 10 Minutes a Week!",
			writeup:
				"Mentorship is simple but impactful. A few messages each week can shape a young girl's future for the better.",
			cta: "BECOME A MENTOR – SIGN UP NOW",
		},
		{
			image: Heroimg4,
			heading: "Your Guidance Can Create Tomorrow’s Leaders!",
			writeup:
				"Help young girls build confidence, stay in school, and develop career ambitions—all through the power of mentorship.",
			cta: "BECOME A MENTOR – SIGN UP NOW",
		},
		{
			image: Heroimg5,
			heading: "Join a Community of Passionate Female Mentors!",
			writeup:
				"Connect with like-minded women making a real difference in the lives of African schoolgirls. Together, we rise!",
			cta: "BECOME A MENTOR – SIGN UP NOW",
		},
	];

	// Auto-play logic: after a small delay, move to slide 1, then loop every 5s
	useEffect(() => {
		const initialTransition = setTimeout(() => {
			setCurrentIndex(1);
		}, 50); // Move to the second slide quickly (adjust as desired)

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
		}, 5000);

		return () => {
			clearInterval(interval);
			clearTimeout(initialTransition);
		};
	}, [sliderContent.length]);

	return (
		<div
			// Outer container that ensures full height minus any top nav (80px)
			className="flex min-h-[430px]"
			style={{ height: "100vh" }}
			// style={{ height: "calc(100vh - 1px)" }}
		>
			<AwesomeSlider
				// Use cube animation
				animation="cubeAnimation"
				// Bind our custom slide index
				selected={currentIndex}
				// Disable built-in slider arrows & mobile swipe (optional)
				buttons={false}
				mobileTouch={false}
				// Round corners, remove default background, etc.
				className="w-full overflow-hidden bg-transparent min-h-[430px]"
				// Match the container height
				style={{ height: "100vh" }}
				// style={{ height: "calc(100vh - 1px)" }}
				// Loop slides
				infinite
			>
				{sliderContent.map((slide, index) => (
					<div
						key={index}
						className="w-full px-12 max-sm:px-4 h-full relative"
						style={{
							minHeight: "430px",
							height: "100vh",
							// height: "calc(100vh - 1px)",
							backgroundImage: `url(${slide.image})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					>
						{/* Dark overlay to keep text legible */}
						<div className="absolute inset-0 bg-black opacity-50"></div>

						{/* Text content */}
						<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
							<h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
								{slide.heading}
							</h1>
							{/* If you need HTML tags inside the writeup, use dangerouslySetInnerHTML */}
							<p
								className="text-white text-xl mb-6"
								dangerouslySetInnerHTML={{ __html: slide.writeup }}
							/>
							<a
								href="https://forms.gle/yourGoogleFormLink"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#ffcc00] text-black font-bold py-3 px-6 rounded hover:bg-yellow-500 transition hover:text-[#ff0000]"
							>
								{slide.cta}
							</a>
						</div>
					</div>
				))}
			</AwesomeSlider>
		</div>
	);
};

export default Hero;

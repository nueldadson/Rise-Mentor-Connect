import React from "react";
import { Fade } from "react-awesome-reveal";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { Footerbg, Logowhite } from "../../assets/images";
import { routes } from "../../routes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faLinkedin,
	faInstagram,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer
			className="relative w-full bg-cover bg-center text-white py-16"
			style={{
				backgroundImage: `url(${Footerbg})`,
			}}
		>
			{/* Gradient Overlay for better contrast */}
			<div className="absolute inset-0 bg-gradient-to-r from-red-800 via-yellow-600 to-red-600 opacity-70"></div>

			<div className="relative z-10 container mx-auto px-8 md:px-12">
				{/* Top Section: Logo & CTA */}
				<div className="flex flex-col items-center text-center">
					{/* Logo */}
					<Link to="/" className="w-48 max-sm:w-32">
						<img
							src={Logowhite}
							alt="Rise Mentor Connect Logo"
							className="h-full"
						/>
					</Link>

					{/* Call to Action Heading */}
					<p className="font-jost font-extrabold mt-6 text-4xl md:text-5xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						Want to Know More?
					</p>

					{/* Contact Button */}
					<div className="mt-6">
						<a
							href="#contact"
							className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg text-lg md:text-xl hover:bg-yellow-400 transition transform hover:scale-105"
						>
							Contact Us
						</a>
					</div>
				</div>

				{/* Middle Section: Navigation & Socials */}
				<div className="flex flex-wrap justify-between mt-12 gap-12">
					{/* Navigation Links */}
					<ul className="text-lg space-y-4">
						{routes.slice(0, 6).map(({ label, path }) => (
							<li key={path} className="hover:text-yellow-400 transition">
								<Link to={path} className="text-xl font-medium">
									{label}
								</Link>
							</li>
						))}
					</ul>

					{/* Social Media Links */}
					<div className="text-lg">
						<p className="text-xl font-semibold mb-4">Follow Us</p>
						<div className="flex gap-6 text-3xl">
							<a
								href="https://www.facebook.com/booknewspaperadsng"
								title="Facebook"
								aria-label="Facebook"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition"
							>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a
								href="https://x.com/booknewspaperadsng"
								title="Twitter"
								aria-label="Twitter"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								href="https://linkedin.com"
								title="LinkedIn"
								aria-label="LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a
								href="https://www.instagram.com/booknewspaperads.ng"
								title="Instagram"
								aria-label="Instagram"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Section: Copyright */}
				<div className="mt-12 text-center text-gray-300 text-sm">
					&copy; {new Date().getFullYear()} - Rise Mentor Connect. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;

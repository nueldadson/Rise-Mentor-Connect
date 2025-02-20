import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
	return (
		<section
			id="contact"
			className="max-w-[100vw] overflow-x-hidden pb-16 px-6 bg-gradient-to-r from-yellow-100 nav-bg2"
		>
			<div className="container mx-auto text-center max-w-2xl bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-4xl font-bold text-gray-800 mb-6">
					📞 Get in Touch
				</h2>

				<p className="text-lg text-gray-700 mb-2">
					<strong>Phone:</strong> +234 800 123 4567
				</p>
				<p className="text-lg text-gray-700 mb-2">
					<strong>Email:</strong>{" "}
					<a
						href="mailto:info@riseconnect.org"
						className="text-red-500 font-semibold hover:underline"
					>
						info@riseconnect.org
					</a>
				</p>
				<p className="text-lg text-gray-700 mb-6">
					<strong>Website:</strong>{" "}
					<a
						href="http://www.riseconnect.org"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 font-semibold hover:underline"
					>
						www.riseconnect.org
					</a>
				</p>

				{/* Social Media Links */}
				<div className="flex justify-center space-x-6 mt-4">
					<a
						href="https://facebook.com/RiseMentorConnect"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
					</a>
					<a
						href="https://instagram.com/RiseMentorConnect"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="text-pink-600 text-3xl hover:text-pink-800 transition duration-300" />
					</a>
					<a
						href="https://twitter.com/RiseMentorConnect"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter className="text-blue-400 text-3xl hover:text-blue-600 transition duration-300" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;

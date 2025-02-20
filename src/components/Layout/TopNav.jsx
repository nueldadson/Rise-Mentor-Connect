import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TopNav = () => {
  return (
		<div className="w-full bg-yellow-500 text-white flex justify-betwee items-center h-[42px] fixed z-40 px-6">
			<div className="flex items-center w-[inherit] justify-between">
				{/* Phone number: hidden on small screens */}
				<div className="hidden md:flex items-center space-x-2">
					<FaPhone className="text-lg" />
					<span>+234 80 3360 5285</span>
				</div>
				{/* Email always visible */}
				<div className="flex items-center space-x-2">
					<FaEnvelope className="text-lg" />
					<a href="mailto:mentorconnect@gmail.com">mentorconnect@gmail.com</a>
				</div>
				<div className="flex items-center space-x-4">
					<a
						href="https://facebook.com/risementorconnect"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="text-lg hover:text-gray-300" />
					</a>
					<a
						href="https://twitter.com/risementorconn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter className="text-lg hover:text-gray-300" />
					</a>
					<a
						href="https://instagram.com/risementorconnect"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="text-lg hover:text-gray-300" />
					</a>
					<a
						href="https://linkedin.com/company/risementorconnect"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedinIn className="text-lg hover:text-gray-300" />
					</a>
				</div>
			</div>
			{/* Social icons */}
		</div>
	);
};

export default TopNav;

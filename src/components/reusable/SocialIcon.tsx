import type { ISocialIconProps } from "@interfaces/reusable.interface";
import {
	FaEnvelopeOpen,
	FaGithubSquare,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";

const SocialIcon = ({ title, className }: ISocialIconProps) => {
	const getSocialIcon = (icon: string): JSX.Element | null => {
		let output: JSX.Element | null;

		switch (icon) {
			case "github":
				output = <FaGithubSquare className={className} />;
				break;
			case "email":
				output = <FaEnvelopeOpen className={className} />;
				break;
			case "twitter":
				output = <FaTwitterSquare className={className} />;
				break;
			case "linkedin":
				output = <FaLinkedin className={className} />;
				break;

			default:
				output = null;
		}

		return output;
	};

	return <>{getSocialIcon(title)}</>;
};

export default SocialIcon;

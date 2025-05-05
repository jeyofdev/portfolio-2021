import social from "@datas/social";
import type { ISocial } from "@interfaces/items.interface";
import {
	FaEnvelopeOpen,
	FaPhoneSquareAlt,
	FaShareAltSquare,
} from "react-icons/fa";
import "@styles/components/contact.scss";
import Icon from "@components/Contact/icon";
import Link from "@components/reusable/Link";
import SocialIcon from "@components/reusable/SocialIcon";

const Contact = () => {
	return (
		<div className="contact container">
			<h1 className="contact-title">Pour me contacter</h1>

			<div className="content">
				<div className="contact">
					<div className="contact-item social">
						<div className="icon">
							<FaShareAltSquare />
						</div>
						<p>
							{social.map((item: ISocial) => (
								<Link
									key={item.id}
									href={item.href}
									icon={<SocialIcon title={item.title} className="social" />}
								/>
							))}
						</p>
					</div>

					<Icon className="phone" icon={<FaPhoneSquareAlt />}>
						<p>06 71 27 53 21</p>
					</Icon>

					<Icon className="email" icon={<FaEnvelopeOpen />}>
						<a href="mailto:jgregoire.pro@gmail.com">jgregoire.pro@gmail.com</a>
					</Icon>
				</div>
			</div>
		</div>
	);
};

export default Contact;

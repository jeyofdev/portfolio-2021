import Profile from "@assets/img/profile-photo.jpg";
import cv from "@assets/jeremy-gregoire-developpeur-fullstack-cv.pdf";
import Text from "@components/Home/Text";
import aboutDatas from "@datas/about";
import type { IAboutProps } from "@interfaces/reusable.interface";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = ({ aboutIsOpen, handleClose }: IAboutProps) => {
	return (
		<div className={`content-about ${aboutIsOpen}`}>
			<button
				type="button"
				className="modal-close"
				aria-label="modal-close"
				onClick={handleClose}
			>
				<FaTimes />
			</button>

			<div className="container about">
				<div className="about-photo">
					<img src={Profile} alt="jeremy gregoire profil" />
				</div>
				<div className="about-text">
					<h3>Qui suis-je ?</h3>
					<p className="intro">
						Le monde du web est un domaine qui m&apos;a toujours passionné,
						c&apos;est donc tout naturellement que je m&apos;en suis rapproché
						professionnellement.
					</p>

					{aboutDatas.map((data) => (
						<div key={data.id}>
							<Text
								classname={data?.subContent ? "mb-2" : ""}
								title={data.title}
							>
								{data.content}
							</Text>

							{data?.subContent ? <Text>{data.subContent}</Text> : ""}
						</div>
					))}

					<div className="links">
						<Link to="/skills" className="links">
							Compétences
						</Link>
						<Link to="/portfolio" className="links">
							Portfolio
						</Link>
						<a href={cv} className="links" target="_blank" rel="noreferrer">
							CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

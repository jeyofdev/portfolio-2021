import Button from "@components/reusable/Button";
import type { IWorkProps } from "@interfaces/reusable.interface";
import getNumberWithZero from "@utils/numbers";

const Work = ({ data, currentNumber, totalNumber }: IWorkProps) => {
	/**
	 * Return current number and total number
	 */
	const getNumbers = () => {
		return `${getNumberWithZero(currentNumber)}/${getNumberWithZero(
			totalNumber,
		)}`;
	};

	return (
		<div className="work">
			<div
				className="work-image"
				style={{ backgroundImage: `url(${data.image})` }}
			>
				<div className="mask" />
				<img src={data.mockup} alt={`mockup ${data.title}`} />
			</div>
			<div className="work-content">
				<div className="text-inner">
					<span className="number">{getNumbers()}</span>
					<div className="content">
						<h2>{data.title}</h2>
						<p className="description">{data.content}</p>
						<p className="logos">
							{data.techno.map((techno: string, index) => (
								<img key={index} src={techno} alt="icon" />
							))}
						</p>

						<div className="btn-box">
							{data.isOnline ? (
								<Button
									label="voir le site"
									className="btn-more"
									url={data.link ? data.link : undefined}
									isDisable={data.isOnline}
								/>
							) : null}

							{data.primaryCode && (
								<Button
									label={data.secondaryCode ? "Le code front-end" : "Le code"}
									className="btn-more"
									url={data.primaryCode}
									isDisable={false}
								/>
							)}

							{data.secondaryCode && (
								<Button
									label="Le code back-end"
									className="btn-more"
									url={data.secondaryCode}
									isDisable={false}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;

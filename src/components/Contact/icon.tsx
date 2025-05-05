import type { IContactIconProps } from "@interfaces/reusable.interface";

const Icon = ({ className, icon, children }: IContactIconProps) => {
	return (
		<div className={`contact-item ${className}`}>
			<div className="icon">{icon}</div>
			{children}
		</div>
	);
};

export default Icon;

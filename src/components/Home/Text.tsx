import "@styles/components/reusable/Text.scss";
import type { ITextProps } from "@interfaces/reusable.interface";

const Text = ({ title, children, classname }: ITextProps) => {
	return (
		<div className={`content-bloc ${classname}`}>
			{title ? <h4>{title}</h4> : null}
			<p className="content">{children}</p>
		</div>
	);
};

export default Text;

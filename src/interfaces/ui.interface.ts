import type { ReactNode } from "react";

export interface INavLinkProps {
	to: string;
	id: number;
	onClick: () => void;
	title: string;
	subtitle: string;
}

export interface IContactLinkProps {
	href: string;
	icon: ReactNode;
	className?: string;
}

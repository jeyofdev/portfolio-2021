export interface IIcon {
	src: string;
	name: string;
}

export interface ISkill {
	id: number;
	image: string;
	title: string;
	icons: IIcon[];
	prefix: string;
}

export interface IWork {
	id: number;
	image: string;
	title: string;
	content: string;
	techno: string[];
	isOnline: boolean;
	link?: string;
	mockup: string;
	primaryCode?: string;
	secondaryCode?: string;
}

export interface IAbout {
	id: number;
	title: string;
	content: string;
}

export interface ISocial {
	id: number;
	href: string;
	title: string;
}

export interface INavItem {
	id: number;
	title: string;
	subtitle: string;
	href: string;
}

import type { Keyframes } from "@emotion/react";
import type { ISkill, IWork } from "@interfaces/items.interface";

export interface IButtonProps {
	label: string;
	className: string;
	url?: string;
	isDisable: boolean;
}

export interface ITextProps {
	title?: string;
	children: string;
	classname?: string;
}

export interface ISkillProps {
	data: ISkill;
	currentNumber: number;
	totalNumber: number;
	animFullscreen: Keyframes | undefined;
	anim80: Keyframes | undefined;
	animContent: Keyframes | undefined;
}

export interface IWorkProps {
	data: IWork;
	currentNumber: number;
	totalNumber: number;
}

export interface IContactIconProps {
	className: string;
	icon: JSX.Element;
	children: JSX.Element;
}

export interface IAboutProps {
	aboutIsOpen: string;
	handleClose: () => void;
}

export interface ISocialIconProps {
	title: string;
	className: string;
}

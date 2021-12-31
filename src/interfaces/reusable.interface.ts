import { ISkill, IWork } from './items.interface';

export interface IButtonProps {
  label: string;
  className: string;
  url: string;
  isDisable: boolean;
}

export interface IModalTextProps {
  title: string;
  children: string;
}

export interface ISkillProps {
  data: ISkill;
  currentNumber: number;
  totalNumber: number;
  animFullscreen: any;
  anim80: any;
  animContent: any;
}

export interface IWorkProps {
  data: IWork;
  currentNumber: number;
  totalNumber: number;
}

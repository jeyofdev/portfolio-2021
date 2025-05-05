import Skill from "@components/Skills/Skill";
import skills from "@datas/skills";
import type { ISkill } from "@interfaces/items.interface";
import { FadeIn, FadeInWidth, FadeInWidth100 } from "./Skills.animate";
import "@styles/components/skills.scss";

const Skills = () => {
	return (
		<div className="skills container">
			<h1 className="skills-title">compétences</h1>
			<div className="skills-items">
				{skills.map((skill: ISkill) => (
					<Skill
						key={skill.id}
						data={skill}
						currentNumber={skill.id}
						totalNumber={skills.length}
						animFullscreen={FadeInWidth100}
						anim80={FadeInWidth}
						animContent={FadeIn}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;

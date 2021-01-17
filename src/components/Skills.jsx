import React from 'react';
import { keyframes } from '@emotion/react';
import '../styles/components/skills.scss';
import skills from '../datas/skills';
import Skill from './reusable/Skill';

const FadeInWidth = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 80%;
  }
  100% {
    width: 80%;
  }
`;

const FadeInWidth100 = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Skills = () => {
  return (
    <div className="skills container">
      <h1 className="skills-title">compétences</h1>
      <div className="skills-items">
        {skills.map((skill) => (
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

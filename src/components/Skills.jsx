import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import '../styles/components/skills.scss';

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
      <div className="skills-items">
        <div className="skill">
          <Reveal keyframes={FadeInWidth} cascade>
            <div className="skill-image" />
          </Reveal>
          <Reveal delay={500} keyframes={FadeIn} cascade>
            <div className="skill-content">
              <div className="content">
                <span className="number">01</span>
                <h2>Front-end</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores ab unde voluptatibus nostrum. Veniam velit quidem
                  facere vel. Ratione aspernatur ullam unde, natus iste dolorum!
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="skill inverse">
          <Reveal keyframes={FadeInWidth} cascade>
            <div className="skill-image" />
          </Reveal>

          <Reveal delay={500} keyframes={FadeIn} cascade>
            <div className="skill-content">
              <div className="content">
                <span className="number">01</span>
                <h2>Front-end</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores ab unde voluptatibus nostrum. Veniam velit quidem
                  facere vel. Ratione aspernatur ullam unde, natus iste dolorum!
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="skill">
          <Reveal keyframes={FadeInWidth} cascade>
            <div className="skill-image" />
          </Reveal>
          <Reveal delay={500} keyframes={FadeIn} cascade>
            <div className="skill-content">
              <div className="content">
                <span className="number">01</span>
                <h2>Front-end</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores ab unde voluptatibus nostrum. Veniam velit quidem
                  facere vel. Ratione aspernatur ullam unde, natus iste dolorum!
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="skill inverse">
          <Reveal keyframes={FadeInWidth} cascade={false}>
            <div className="skill-image" />
          </Reveal>
          <Reveal delay={500} keyframes={FadeIn} cascade>
            <div className="skill-content">
              <div className="content">
                <span className="number">01</span>
                <h2>Front-end</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores ab unde voluptatibus nostrum. Veniam velit quidem
                  facere vel. Ratione aspernatur ullam unde, natus iste dolorum!
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* <Fade style={{ fontSize: '48px', minHeight: '100vh' }} cascade>
        <p>I enter first...</p>
      </Fade>
      <div style={{ marginTop: '50px', minHeight: '100vh' }}>
        <Fade
          direction="right"
          style={{ minHeight: '100vh', fontSize: '48px' }}
          cascade
        >
          <p>...then comes my turn...</p>
        </Fade>
      </div>

      <Fade style={{ minHeight: '100vh', fontSize: '48px' }} cascade>
        <p>...and finally you see me!</p>
      </Fade>
      <Fade style={{ minHeight: '100vh', fontSize: '48px' }} cascade>
        <p>...and finally you see me!</p>
      </Fade> */}
    </div>
  );
};

export default Skills;

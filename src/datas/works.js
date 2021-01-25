import mysterium from '../img/portfolio/mysterium.png';
import hackathon2021 from '../img/portfolio/hackathon-2.png';
import babyplace from '../img/portfolio/babyplace.png';

import html from '../img/skills/icons/html.svg';
import css from '../img/skills/icons/css.svg';
import react from '../img/skills/icons/react.svg';
import redux from '../img/skills/icons/redux.svg';
import mysql from '../img/skills/icons/mysql.svg';
import nodejs from '../img/skills/icons/node-js.svg';
import figma from '../img/skills/icons/figma.svg';
import express from '../img/skills/icons/express.svg';
import jwt from '../img/skills/icons/jwt.svg';
import javascript from '../img/skills/icons/javascript.svg';

const works = [
  {
    id: 1,
    image: mysterium,
    title: 'Mysterium',
    content: `Projet formation de 2 mois à la Wild Code School de Bordeaux. Digitalisation du jeu de société populaire "Mysterium. Le but était d'adapter le jeu en version navigateur web. Réalisé dans un groupe de 5 personnes.`,
    techno: [html, css, javascript, react],
    isOnline: true,
    link: 'https://mysterium-app.herokuapp.com/',
  },
  {
    id: 2,
    image: babyplace,
    title: 'Babyplace',
    content: `Projet de formation de 2 mois à la Wild Code School de Bordeaux. Réalisation du site internet de Babyplace. Babyplace est une startup dont le but est de faciliter la garde d'enfant entre les parents et les professionnels de la petite enfance. Réalisé en groupe de 5 personnes.`,
    techno: [
      html,
      css,
      javascript,
      react,
      redux,
      nodejs,
      mysql,
      jwt,
      express,
      figma,
    ],
    isOnline: false,
    link: '',
  },
  {
    id: 3,
    image: hackathon2021,
    title: 'Cockeat',
    content: `Projet vainqueur du Hackathon sur 48H organisé par Ekino et la Wild Code School. Hackathon dont le thème était "créer du lien en période de confinement". Nous avions choisis de créer un dérivé de twitch avec comme sujet "le partage de recettes de cuisine" où chaque utilisateurs peut partager un streaming en direct et discuter en direct par chat. Réalisé en groupe de 5 personnes.`,
    techno: [html, css, javascript, react, redux, nodejs],
    isOnline: true,
    link: 'https://cook-eat.netlify.app/',
  },
];

export default works;

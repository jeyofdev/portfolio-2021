import frontEnd from '../img/skills/front-end.jpg';
import backEnd from '../img/skills/back-end.jpg';
import wordpress from '../img/skills/wordpress.jpg';
import design from '../img/skills/design.jpg';
import workflow from '../img/skills/workflow.jpg';

import html from '../img/skills/icons/html.svg';
import css from '../img/skills/icons/css.svg';
import javascript from '../img/skills/icons/javascript.svg';
import sass from '../img/skills/icons/sass.svg';
import react from '../img/skills/icons/react.svg';
import redux from '../img/skills/icons/redux.svg';
import yarn from '../img/skills/icons/yarn.svg';
import npm from '../img/skills/icons/npm.svg';
import webpack from '../img/skills/icons/webpack.svg';

import php from '../img/skills/icons/php.svg';
import symfony from '../img/skills/icons/symfony.svg';
import composer from '../img/skills/icons/composer.svg';
import mysql from '../img/skills/icons/mysql.svg';
import express from '../img/skills/icons/express.svg';
import jwt from '../img/skills/icons/jwt.svg';

import nodejs from '../img/skills/icons/node-js.svg';

import wordpressLogo from '../img/skills/icons/wordpress.svg';

import git from '../img/skills/icons/git.svg';
import trello from '../img/skills/icons/trello.svg';

import photoshop from '../img/skills/icons/photoshop.svg';
import illustrator from '../img/skills/icons/illustrator.svg';
import figma from '../img/skills/icons/figma.svg';

const skills = [
  {
    id: 1,
    image: frontEnd,
    title: 'Développeur front-end',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    gravida, sapien eget eleifend interdum, erat sapien facilisis
    enim, nec accumsan nibh lectus nec nisl. Phasellus fringilla,
    ex ut dictum cursus, dui lorem volutpat nisl, non vulputate
    ante ligula sed urna. Nunc mollis mattis efficitur.`,
    icons: [html, css, sass, javascript, react, redux, yarn, npm, webpack],
  },
  {
    id: 2,
    image: backEnd,
    title: 'Développeur Back-end',
    content: `Duis non lectus non risus bibendum pulvinar eu sit amet erat.
    Curabitur sit amet dui eu nulla tempus eleifend. Quisque vel
    posuere justo, consequat vehicula lacus. Nulla rutrum nulla
    lorem, in vehicula dui condimentum sit amet. Suspendisse
    bibendum quis mi in euismod. Fusce vel congue nisi.`,
    icons: [php, symfony, composer, nodejs, mysql, express, jwt],
  },
  {
    id: 3,
    image: wordpress,
    title: 'Développeur Wordpress',
    content: `Nullam non tellus hendrerit turpis pretium suscipit sit amet a
    nisl. Donec non purus non justo euismod venenatis vel eget
    ligula. Aliquam interdum nec nulla in viverra. Quisque
    ullamcorper purus eget malesuada tempus. Proin vulputate
    ultricies sapien, in vulputate mi imperdiet ac.`,
    icons: [wordpressLogo],
  },
  {
    id: 4,
    image: workflow,
    title: 'Workflow',
    content: `Nullam non tellus hendrerit turpis pretium suscipit sit amet a
    nisl. Donec non purus non justo euismod venenatis vel eget
    ligula. Aliquam interdum nec nulla in viverra. Quisque
    ullamcorper purus eget malesuada tempus. Proin vulputate
    ultricies sapien, in vulputate mi imperdiet ac.`,
    icons: [git, trello],
  },
  {
    id: 5,
    image: design,
    title: 'Design',
    content: `Nullam non tellus hendrerit turpis pretium suscipit sit amet a
    nisl. Donec non purus non justo euismod venenatis vel eget
    ligula. Aliquam interdum nec nulla in viverra. Quisque
    ullamcorper purus eget malesuada tempus. Proin vulputate
    ultricies sapien, in vulputate mi imperdiet ac.`,
    icons: [photoshop, illustrator, figma],
  },
];

export default skills;

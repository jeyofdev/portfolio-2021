// bg
import frontEnd from '../img/skills/front-end.jpg';
import backEnd from '../img/skills/back-end.jpg';
import wordpress from '../img/skills/wordpress.jpg';
import design from '../img/skills/design.jpg';
import workflow from '../img/skills/workflow.jpg';
import next from '../img/skills/next.jpg';

// icons
import html from '../img/skills/icons/html.svg';
import css from '../img/skills/icons/css.svg';
import javascript from '../img/skills/icons/javascript.svg';
import typescript from '../img/skills/icons/typescript.svg';
import sass from '../img/skills/icons/sass.svg';
import tailwindcss from '../img/skills/icons/tailwindcss.svg';
import react from '../img/skills/icons/react.svg';
import nextjs from '../img/skills/icons/nextjs.svg';
import redux from '../img/skills/icons/redux.svg';
import yarn from '../img/skills/icons/yarn.svg';
import npm from '../img/skills/icons/npm.svg';
import webpack from '../img/skills/icons/webpack.svg';

import php from '../img/skills/icons/php.svg';
import symfony from '../img/skills/icons/symfony.svg';
import composer from '../img/skills/icons/composer.svg';
import mysql from '../img/skills/icons/mysql.svg';
import mongoDb from '../img/skills/icons/mongodb.svg';
import express from '../img/skills/icons/express.svg';
import grapQl from '../img/skills/icons/graphQl.svg';
import jwt from '../img/skills/icons/jwt.svg';

import nodejs from '../img/skills/icons/node-js.svg';

import wordpressLogo from '../img/skills/icons/wordpress.svg';

import git from '../img/skills/icons/git.svg';
import docker from '../img/skills/icons/docker.svg';
import trello from '../img/skills/icons/trello.svg';
import postman from '../img/skills/icons/postman.svg';
import slack from '../img/skills/icons/slack.svg';

import photoshop from '../img/skills/icons/photoshop.svg';
import illustrator from '../img/skills/icons/illustrator.svg';
import figma from '../img/skills/icons/figma.svg';

import reactNative from '../img/skills/icons/react-native.svg';
import angular from '../img/skills/icons/angular.svg';

const skills = [
  {
    id: 1,
    image: frontEnd,
    title: 'Développeur front-end',
    icons: [
      html,
      css,
      sass,
      tailwindcss,
      javascript,
      typescript,
      react,
      nextjs,
      redux,
      yarn,
      npm,
      webpack,
    ],
  },
  {
    id: 2,
    image: backEnd,
    title: 'Développeur Back-end',
    icons: [php, symfony, composer, nodejs, mysql, mongoDb, express, jwt],
  },
  {
    id: 3,
    image: wordpress,
    title: 'Développeur Wordpress',
    icons: [wordpressLogo],
  },
  {
    id: 4,
    image: workflow,
    title: 'Workflow',
    icons: [git, trello, postman, slack],
  },
  {
    id: 5,
    image: design,
    title: 'Design',
    icons: [photoshop, illustrator, figma],
  },
  {
    id: 6,
    image: next,
    title: 'Veille actuelle et/ou prochaine',
    icons: [docker, grapQl, reactNative, angular],
  },
];

export default skills;

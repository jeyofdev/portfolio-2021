// bg
import frontEnd from '../img/skills/front-end.jpg';
import backEnd from '../img/skills/back-end.jpg';
import wordpress from '../img/skills/wordpress.jpg';
import design from '../img/skills/design.jpg';
import workflow from '../img/skills/workflow.jpg';
// import next from '../img/skills/next.jpg';

// icons
import html from '../img/skills/icons/html.svg';
import css from '../img/skills/icons/css.svg';
import javascript from '../img/skills/icons/javascript.svg';
import typescript from '../img/skills/icons/typescript.svg';
import sass from '../img/skills/icons/sass.svg';
import tailwindcss from '../img/skills/icons/tailwindcss.svg';
import materialUI from '../img/skills/icons/material-ui.svg';
import react from '../img/skills/icons/react.svg';
// import reactNative from '../img/skills/icons/react-native.svg';
import nextjs from '../img/skills/icons/nextjs.svg';
// import expo from '../img/skills/icons/expo.svg';
import redux from '../img/skills/icons/redux.svg';
import apollo from '../img/skills/icons/apollo.svg';
// import yarn from '../img/skills/icons/yarn.svg';
// import npm from '../img/skills/icons/npm.svg';
// import webpack from '../img/skills/icons/webpack.svg';
import jest from '../img/skills/icons/jest.svg';
import angular from '../img/skills/icons/angular.svg';
import vitejs from '../img/skills/icons/vitejs.svg';

// import php from '../img/skills/icons/php.svg';
// import symfony from '../img/skills/icons/symfony.svg';
// import composer from '../img/skills/icons/composer.svg';
import mysql from '../img/skills/icons/mysql.svg';
import postgreSQL from '../img/skills/icons/postgresql.svg';
import mongoDb from '../img/skills/icons/mongodb.svg';
import express from '../img/skills/icons/express.svg';
import graphQl from '../img/skills/icons/graphQl.svg';
import jwt from '../img/skills/icons/jwt.svg';
import prisma from '../img/skills/icons/prisma.svg';
import docker from '../img/skills/icons/docker.svg';
import nodejs from '../img/skills/icons/node-js.svg';
import java from '../img/skills/icons/java.svg';
import spring from '../img/skills/icons/spring.svg';

import wordpressLogo from '../img/skills/icons/wordpress.svg';

import git from '../img/skills/icons/git.svg';
import github from '../img/skills/icons/github.svg';
import trello from '../img/skills/icons/trello.svg';
import postman from '../img/skills/icons/postman.svg';
import slack from '../img/skills/icons/slack.svg';

import photoshop from '../img/skills/icons/photoshop.svg';
import illustrator from '../img/skills/icons/illustrator.svg';
import figma from '../img/skills/icons/figma.svg';

// import vuejs from '../img/skills/icons/vuejs.svg';

const skills = [
  {
    id: 1,
    image: frontEnd,
    title: 'Développeur front-end',
    prefix: 'front',
    icons: [
      { src: javascript, name: 'javascript' },
      { src: typescript, name: 'typescript' },
      { src: angular, name: 'angular' },
      { src: react, name: 'react' },
      { src: nextjs, name: 'next JS' },
      { src: html, name: 'html' },
      { src: css, name: 'css' },
      { src: sass, name: 'sass' },
      { src: tailwindcss, name: 'tailwind CSS' },
      { src: materialUI, name: 'material UI' },
      { src: redux, name: 'redux' },
      { src: apollo, name: 'apollo client' },
      { src: jest, name: 'jest' },
      { src: vitejs, name: 'vitejs' },
    ],
  },
  {
    id: 2,
    image: backEnd,
    title: 'Développeur Back-end',
    prefix: 'back',
    icons: [
      { src: java, name: 'java' },
      { src: spring, name: 'spring' },
      { src: nodejs, name: 'node js' },
      { src: graphQl, name: 'graphQl' },
      { src: postgreSQL, name: 'postgreSQL' },
      { src: mysql, name: 'mysql' },
      { src: mongoDb, name: 'mongoDb' },
      { src: prisma, name: 'prisma' },
      { src: express, name: 'express' },
      { src: apollo, name: 'apollo server' },
      { src: jwt, name: 'jwt' },
      { src: jest, name: 'jest' },
      { src: docker, name: 'docker' },
    ],
  },
  {
    id: 3,
    image: wordpress,
    title: 'Développeur Wordpress',
    prefix: 'wordpress',
    icons: [{ src: wordpressLogo, name: 'wordpress' }],
  },
  {
    id: 4,
    image: workflow,
    title: 'Workflow',
    prefix: 'workflow',
    icons: [
      { src: git, name: 'git' },
      { src: github, name: 'github' },
      { src: trello, name: 'trello' },
      { src: slack, name: 'slack' },
      { src: postman, name: 'postman' },
      { src: apollo, name: 'apollo studio' },
    ],
  },
  {
    id: 5,
    image: design,
    title: 'Design',
    prefix: 'design',
    icons: [
      { src: figma, name: 'figma' },
      { src: photoshop, name: 'photoshop' },
      { src: illustrator, name: 'illustrator' },
    ],
  },
  // {
  //   id: 6,
  //   image: next,
  //   prefix: 'next',
  //   title: 'Veille actuelle',
  //   icons: [{ src: vuejs, name: 'vue js' }],
  // },
];

export default skills;

// bg
import frontEnd from '@assets/img/skills/front-end.jpg';
import backEnd from '@assets/img/skills/back-end.jpg';
import wordpress from '@assets/img/skills/wordpress.jpg';
import design from '@assets/img/skills/design.jpg';
import workflow from '@assets/img/skills/workflow.jpg';
// import next from '@assets/img/skills/next.jpg';

// icons
import html from '@assets/img/skills/icons/html.svg';
import css from '@assets/img/skills/icons/css.svg';
import javascript from '@assets/img/skills/icons/javascript.svg';
import typescript from '@assets/img/skills/icons/typescript.svg';
import sass from '@assets/img/skills/icons/sass.svg';
import tailwindcss from '@assets/img/skills/icons/tailwindcss.svg';
import materialUI from '@assets/img/skills/icons/material-ui.svg';
import react from '@assets/img/skills/icons/react.svg';
// import reactNative from '@assets/img/skills/icons/react-native.svg';
import nextjs from '@assets/img/skills/icons/nextjs.svg';
// import expo from '@assets/img/skills/icons/expo.svg';
import redux from '@assets/img/skills/icons/redux.svg';
import apollo from '@assets/img/skills/icons/apollo.svg';
// import yarn from '@assets/img/skills/icons/yarn.svg';
// import npm from '@assets/img/skills/icons/npm.svg';
// import webpack from '@assets/img/skills/icons/webpack.svg';
import jest from '@assets/img/skills/icons/jest.svg';
import angular from '@assets/img/skills/icons/angular.svg';
import vitejs from '@assets/img/skills/icons/vitejs.svg';

// import php from '@assets/img/skills/icons/php.svg';
// import symfony from '@assets/img/skills/icons/symfony.svg';
// import composer from '@assets/img/skills/icons/composer.svg';
import mysql from '@assets/img/skills/icons/mysql.svg';
import postgreSQL from '@assets/img/skills/icons/postgresql.svg';
import mongoDb from '@assets/img/skills/icons/mongodb.svg';
import express from '@assets/img/skills/icons/express.svg';
import graphQl from '@assets/img/skills/icons/graphQl.svg';
import jwt from '@assets/img/skills/icons/jwt.svg';
import prisma from '@assets/img/skills/icons/prisma.svg';
import docker from '@assets/img/skills/icons/docker.svg';
import nodejs from '@assets/img/skills/icons/node-js.svg';
import java from '@assets/img/skills/icons/java.svg';
import spring from '@assets/img/skills/icons/spring.svg';

import wordpressLogo from '@assets/img/skills/icons/wordpress.svg';

import git from '@assets/img/skills/icons/git.svg';
import github from '@assets/img/skills/icons/github.svg';
import trello from '@assets/img/skills/icons/trello.svg';
import postman from '@assets/img/skills/icons/postman.svg';
import slack from '@assets/img/skills/icons/slack.svg';

import photoshop from '@assets/img/skills/icons/photoshop.svg';
import illustrator from '@assets/img/skills/icons/illustrator.svg';
import figma from '@assets/img/skills/icons/figma.svg';

// import vuejs from '@assets/img/skills/icons/vuejs.svg';

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
    id: 4,
    image: design,
    title: 'Design',
    prefix: 'design',
    icons: [
      { src: figma, name: 'figma' },
      { src: photoshop, name: 'photoshop' },
      { src: illustrator, name: 'illustrator' },
    ],
  },
];

export default skills;

import mysterium from '../img/portfolio/mysterium.png';
import hackathon2021 from '../img/portfolio/hackathon-2.png';
import babyplace from '../img/portfolio/babyplace.png';
import devchallengeUnsplash from '../img/portfolio/devchallenge-unsplash.png';
import devchallengeWeatherApp from '../img/portfolio/devchallenge-weather-app.png';
import devchallengeWinbnb from '../img/portfolio/devchallenge-windbnb.png';
import devchallengeTodoList from '../img/portfolio/devchallenge-todo-list.png';
import devchallengeEdieHomepage from '../img/portfolio/devchallenge-edie-homepage.png';
import codewars from '../img/portfolio/codewars.png';
import angularAuth from '../img/portfolio/angular-auth-firebase.jpg';
import movieAppReactGraphql from '../img/portfolio/movie-app-react-graphql.png';
import estateMinimalistReact from '../img/portfolio/estate-minimalist-react.jpg';

import mockupMysterium from '../img/portfolio/mockup/mysterium.png';
import mockupBabyplace from '../img/portfolio/mockup/babyplace.png';
import mockupHackathon2021 from '../img/portfolio/mockup/hackathon-2.png';
import mockupDevchallengeUnsplash from '../img/portfolio/mockup/devchallenge-unsplash.png';
import mockupDevchallengeWeatherApp from '../img/portfolio/mockup/devchallenge-weather-app.png';
import mockupDevchallengeWinbnb from '../img/portfolio/mockup/devchallenge-winbnb.png';
import mockupDevchallengeTodoList from '../img/portfolio/mockup/devchallenge-todo-list.png';
import mockupDevchallengeEdieHomepage from '../img/portfolio/mockup/devchallenge-edie-homepage.png';
import mockupCodewars from '../img/portfolio/mockup/codewars.png';
import mockupAngularAuth from '../img/portfolio/mockup/angular-auth-firebase.png';
import mockupMovieAppReactGraphql from '../img/portfolio/mockup/movie-app-react-graphql.png';
import mockupEstateMinimalistReact from '../img/portfolio/mockup/estate-minimalist-react.png';

import html from '../img/skills/icons/html.svg';
import css from '../img/skills/icons/css.svg';
import react from '../img/skills/icons/react.svg';
import redux from '../img/skills/icons/redux.svg';
import mysql from '../img/skills/icons/mysql.svg';
import nodejs from '../img/skills/icons/node-js.svg';
import express from '../img/skills/icons/express.svg';
import jwt from '../img/skills/icons/jwt.svg';
import javascript from '../img/skills/icons/javascript.svg';
import typescript from '../img/skills/icons/typescript.svg';
import nextjs from '../img/skills/icons/nextjs.svg';
import tailwindcss from '../img/skills/icons/tailwindcss.svg';
import webpack from '../img/skills/icons/webpack.svg';
import angular from '../img/skills/icons/angular.svg';
import graphQl from '../img/skills/icons/graphQl.svg';
import materialUI from '../img/skills/icons/material-ui.svg';
import apollo from '../img/skills/icons/apollo.svg';

const works = [
  {
    id: 1,
    image: estateMinimalistReact,
    title: 'Estate minimalist react',
    content:
      "Projet personnel minimaliste basé sur un systême de filtres de maisons et d'appartements.",
    techno: [html, css, javascript, react, nodejs, materialUI],
    isOnline: true,
    link: 'https://estate-minimalist-react.vercel.app/',
    code: 'https://github.com/jeyofdev/estate-minimalist-react',
    mockup: mockupEstateMinimalistReact,
  },
  {
    id: 2,
    image: angularAuth,
    title: 'Angular auth with firebase',
    content:
      "Projet perso sur un systême d'authentification basé sur Angular et firebase.",
    techno: [html, css, javascript, typescript, angular],
    isOnline: true,
    link: 'https://auth-angular-firebase.vercel.app/',
    code: 'https://github.com/jeyofdev/auth-angular-firebase',
    mockup: mockupAngularAuth,
  },
  {
    id: 3,
    image: movieAppReactGraphql,
    title: 'Movie app react graphql',
    content:
      "Projet perso utilisant l'api TMDB et basé sur React, Graphql et Apollo.",
    techno: [
      html,
      css,
      javascript,
      typescript,
      react,
      materialUI,
      graphQl,
      apollo,
    ],
    isOnline: true,
    link: 'https://movie-app-react-graphql.vercel.app/',
    code: 'https://github.com/jeyofdev/movie-app-react-graphql',
    mockup: mockupMovieAppReactGraphql,
  },
  {
    id: 4,
    image: mysterium,
    title: 'Mysterium',
    content:
      'Projet formation de 2 mois à la Wild Code School de Bordeaux. Digitalisation du jeu de société populaire "Mysterium. Le but était d\'adapter le jeu en version navigateur web. Réalisé dans un groupe de 5 personnes.',
    techno: [html, css, javascript, react],
    isOnline: false,
    link: 'https://mysterium-app.herokuapp.com/',
    mockup: mockupMysterium,
  },
  {
    id: 5,
    image: babyplace,
    title: 'Babyplace',
    content:
      "Projet de formation de 2 mois à la Wild Code School de Bordeaux. Réalisation du site internet de Babyplace. Babyplace est une start-up dont le but est de faciliter la garde d'enfant entre les parents et les professionnels de la petite enfance. Réalisé en groupe de 5 personnes.",
    techno: [html, css, javascript, react, redux, nodejs, mysql, jwt, express],
    isOnline: false,
    link: '',
    mockup: mockupBabyplace,
  },
  {
    id: 6,
    image: hackathon2021,
    title: "Cook'eat",
    content:
      'Projet vainqueur du Hackathon sur 48H organisé par Ekino et la Wild Code School. Hackathon dont le thème était "Créer du lien en période de confinement". Nous avions choisi de créer un dérivé de twitch avec comme sujet "le partage de recettes de cuisine" où chaque utilisateur peut partager un streaming en direct et discuter en direct par chat. Réalisé en groupe de 5 personnes.',
    techno: [html, css, javascript, react, redux, nodejs],
    isOnline: true,
    link: 'https://cook-eat.netlify.app/',
    mockup: mockupHackathon2021,
  },
  {
    id: 7,
    image: devchallengeUnsplash,
    title: 'My unsplash',
    content:
      'Petit challenge via le site devChallenge. Le but était de réaliser un petit clone du site d\'images libre de droit "unsplash".',
    techno: [html, css, javascript, react, nextjs, typescript, tailwindcss],
    isOnline: true,
    link: 'https://devchallenges-my-unsplash-pi.vercel.app/',
    mockup: mockupDevchallengeUnsplash,
    externalLink: 'https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP',
    code: 'https://github.com/jeyofdev/devchallenges--my-unsplash',
  },
  {
    id: 8,
    image: devchallengeWeatherApp,
    title: 'Weather app ',
    content:
      "Petit challenge via le site devChallenge. Le but était de mettre en place une petite application permettant de connaître la météo en fonction d'une ville définie par l'utilisateur ou par géolocalisation.",
    techno: [html, css, javascript, react, redux],
    isOnline: false,
    link: 'https://jeyofdev.github.io/devchallenges--weather-app/',
    mockup: mockupDevchallengeWeatherApp,
    code: 'https://github.com/jeyofdev/devchallenges--weather-app',
  },
  {
    id: 9,
    image: devchallengeTodoList,
    title: 'Todo app',
    content:
      'Petit challenge via le site devChallenge. Le but était de mettre en place une simple todo list avec React.',
    techno: [html, css, javascript, react],
    isOnline: true,
    link: 'https://jeyofdev.github.io/devchallenges--todo-app/',
    mockup: mockupDevchallengeTodoList,
    code: 'https://github.com/jeyofdev/devchallenges--todo-app',
  },
  {
    id: 10,
    image: devchallengeWinbnb,
    title: 'Windbnb',
    content:
      "Petit challenge via le site devChallenge. Le but était d'implémenter quelques petites fonctionnalités avec React.",
    techno: [html, css, javascript, react],
    isOnline: true,
    link: 'https://jeyofdev.github.io/devchallenges--windbnb/',
    mockup: mockupDevchallengeWinbnb,
    code: 'https://github.com/jeyofdev/devchallenges--windbnb',
  },
  {
    id: 11,
    image: devchallengeEdieHomepage,
    title: 'Edie homepage',
    content: 'Petit challenge via le site devChallenge.',
    techno: [html, css, javascript, react, webpack],
    isOnline: true,
    link: 'https://jeyofdev.github.io/devchallenges--edie-homepage/',
    mockup: mockupDevchallengeEdieHomepage,
    code: 'https://github.com/jeyofdev/devchallenges--edie-homepage',
  },
  {
    id: 12,
    image: codewars,
    title: 'Codewars',
    content: "Quelques petits exercices d'algo réalisé via codewars.",
    techno: [javascript],
    isOnline: true,
    link: 'https://www.codewars.com/users/jeyofdev/completed',
    mockup: mockupCodewars,
  },
];

export default works;

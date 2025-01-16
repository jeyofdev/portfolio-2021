import mysterium from '@assets/img/portfolio/mysterium.png';
import hackathon2021 from '@assets/img/portfolio/hackathon-2.png';
import babyplace from '@assets/img/portfolio/babyplace.png';
import devchallengeUnsplash from '@assets/img/portfolio/devchallenge-unsplash.png';
import devchallengeWeatherApp from '@assets/img/portfolio/devchallenge-weather-app.png';
import devchallengeWinbnb from '@assets/img/portfolio/devchallenge-windbnb.png';
import devchallengeTodoList from '@assets/img/portfolio/devchallenge-todo-list.png';
import devchallengeEdieHomepage from '@assets/img/portfolio/devchallenge-edie-homepage.png';
import codewars from '@assets/img/portfolio/codewars.png';
import angularAuth from '@assets/img/portfolio/angular-auth-firebase.jpg';
import movieAppReactGraphql from '@assets/img/portfolio/movie-app-react-graphql.png';
import estateMinimalistReact from '@assets/img/portfolio/estate-minimalist-react.jpg';
import springDTOMapper from '@assets/img/portfolio/spring-DTO-mapper.jpg';
import sortieFacileBackend from '@assets/img/portfolio/sortie-facile-backend.jpg';

import mockupMysterium from '@assets/img/portfolio/mockup/mysterium.png';
import mockupBabyplace from '@assets/img/portfolio/mockup/babyplace.png';
import mockupHackathon2021 from '@assets/img/portfolio/mockup/hackathon-2.png';
import mockupDevchallengeUnsplash from '@assets/img/portfolio/mockup/devchallenge-unsplash.png';
import mockupDevchallengeWeatherApp from '@assets/img/portfolio/mockup/devchallenge-weather-app.png';
import mockupDevchallengeWinbnb from '@assets/img/portfolio/mockup/devchallenge-winbnb.png';
import mockupDevchallengeTodoList from '@assets/img/portfolio/mockup/devchallenge-todo-list.png';
import mockupDevchallengeEdieHomepage from '@assets/img/portfolio/mockup/devchallenge-edie-homepage.png';
import mockupCodewars from '@assets/img/portfolio/mockup/codewars.png';
import mockupAngularAuth from '@assets/img/portfolio/mockup/angular-auth-firebase.png';
import mockupMovieAppReactGraphql from '@assets/img/portfolio/mockup/movie-app-react-graphql.png';
import mockupEstateMinimalistReact from '@assets/img/portfolio/mockup/estate-minimalist-react.png';
import mockupSpringDTOMapper from '@assets/img/portfolio/mockup/spring-DTO-mapper.png';
import mockupSortieFacileBackend from '@assets/img/portfolio/mockup/sortie-facile-backend.png';

import html from '@assets/img/skills/icons/html.svg';
import css from '@assets/img/skills/icons/css.svg';
import react from '@assets/img/skills/icons/react.svg';
import redux from '@assets/img/skills/icons/redux.svg';
import mysql from '@assets/img/skills/icons/mysql.svg';
import nodejs from '@assets/img/skills/icons/node-js.svg';
import express from '@assets/img/skills/icons/express.svg';
import jwt from '@assets/img/skills/icons/jwt.svg';
import javascript from '@assets/img/skills/icons/javascript.svg';
import typescript from '@assets/img/skills/icons/typescript.svg';
import nextjs from '@assets/img/skills/icons/nextjs.svg';
import tailwindcss from '@assets/img/skills/icons/tailwindcss.svg';
import webpack from '@assets/img/skills/icons/webpack.svg';
import angular from '@assets/img/skills/icons/angular.svg';
import graphQl from '@assets/img/skills/icons/graphQl.svg';
import materialUI from '@assets/img/skills/icons/material-ui.svg';
import apollo from '@assets/img/skills/icons/apollo.svg';
import java from '@assets/img/skills/icons/java.svg';
import spring from '@assets/img/skills/icons/spring.svg';
import postgresql from '@assets/img/skills/icons/postgresql.svg';
import docker from '@assets/img/skills/icons/docker.svg';

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
    image: sortieFacileBackend,
    title: 'sortie-facile-backend ',
    content:
      "Fork du projet de formation sortie facile. Ce projet est un fork du projet de base que j'ai démarré de zéro avec ma propre vision en termes de développement.",
    techno: [java, spring, mysql, jwt],
    isOnline: false,
    code: 'https://github.com/jeyofdev/sortie-facile-backend',
    mockup: mockupSortieFacileBackend,
  },
  {
    id: 3,
    image: springDTOMapper,
    title: 'Spring DTO Mapper',
    content:
      "Micro-application Spring Boot avec DTO, mappage et relations entre entités.",
    techno: [java, spring, postgresql, docker],
    isOnline: false,
    code: 'https://github.com/jeyofdev/spring-dto-mapper',
    mockup: mockupSpringDTOMapper,
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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

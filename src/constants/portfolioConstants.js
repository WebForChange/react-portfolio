/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

const PORTFOLIO_SECTION_TITLE = "Portfolio";

const CAROUSEL_ITEMS = [
  {
    title: "Educational Game",
    description: `This is a game for Occupational Education I co-developed at 
      beWirken lab. Responsive Development, TypeScript, React, Node, MySQL, Docker, Traefik.`,
    source: "https://rambly.bewirken-lab.org/",
  },
  {
    title: "This Website",
    description: `This portfolio Website was built using React and Material UI. 
    It showcases my React and MUI skills as well as responsive design and development.`,
    source: "https://github.com/thoiar/react-portfolio",
  },
  {
    title: "Hacker News",
    description: `A project showcasing the use of a REST API, axios, react.js, and 
    tailwind CSS. It replicates the Hacker News Website and was an exercise in a
    full-stack web development bootcamp. Please use the search bar to filter results.`,
    source: "https://github.com/WebForChange/hacker-news",
    livePage: "https://webforchange.github.io/hacker-news/",
  },
];

export { PORTFOLIO_SECTION_TITLE, CAROUSEL_ITEMS };

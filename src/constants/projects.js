import ultimateLeague from "../assets/images/ultimate_league.jpg";
import blackjackAPI from "../assets/images/blackjack.jpg";
import pokedex from "../assets/images/pokedex.jpg";
import laphotography from "../assets/images/laphotography.jpg";
import tilevania from "../assets/images/tilevania.jpg";
import spaceBoost from "../assets/images/space_boost.jpg";

export const projects = [
  {
    id: 1,
    image: ultimateLeague,
    year: 2024,
    title: "Ultimate League",
    technologies: ["PHP", "Laravel", "Blade", "MySQL"],
    description: "projects.ultimateLeague.description",
    githubLink: "https://github.com/nachoa88/sprint4-UltimateLeague",
    webLink: "https://ultimateleague.ignacioalbiol.es/",
  },
  {
    id: 2,
    image: blackjackAPI,
    year: 2024,
    title: "Blackjack API",
    technologies: ["PHP", "Laravel", "Swagger", "MySQL"],
    description: "projects.blackjackAPI.description",
    githubLink: "https://github.com/nachoa88/sprint5-blackjackAPI",
    webLink: "https://blackjackapi.ignacioalbiol.es/",
  },
  {
    id: 3,
    image: pokedex,
    year: 2023,
    title: "PokéDex",
    technologies: ["React", "JavaScript", "Bootstrap", "HTML", "CSS"],
    description: "projects.pokedex.description",
    githubLink: "https://github.com/nachoa88/Pokedex-PokeAPI",
    webLink: "https://pokedex.ignacioalbiol.es/",
  },
  {
    id: 4,
    image: laphotography,
    year: 2023,
    title: "Portfolio: LA Photography",
    technologies: ["WordPress", "Elementor"],
    description: "projects.laphotography.description",
    webLink: "https://laphotography.es/",
  },
  {
    id: 5,
    image: tilevania,
    year: 2023,
    title: "Game: TileVania",
    technologies: ["Unity 2D", "C#"],
    description: "projects.tilevania.description",
    githubLink: "https://github.com/nachoa88/TileVania",
    webLink: "https://sharemygame.com/@nachoa88/tilevania",
  },
  {
    id: 6,
    image: spaceBoost,
    year: 2023,
    title: "Game: Project-Boost",
    technologies: ["Unity 3D", "C#"],
    description: "projects.spaceBoost.description",
    githubLink: "https://github.com/nachoa88/SpaceBoost-Prototype",
    webLink: "https://sharemygame.com/@nachoa88/project-boost-prototype",
  },
];

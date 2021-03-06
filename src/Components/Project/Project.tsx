import React from "react";
import "./Project.css";

import Skill from "../Skill/Skill";
import Feature from "../Feature/Feature";
import DemoButton from "../Buttons/DemoButton";
import SourceButton from "../Buttons/SourceButton";

const ScraperImg = require("../../image/project-data.PNG");
const WooferImg = require("../../image/project-woofer.PNG");
const CalculatorImg = require("../../image/project-calculator.png");
const PortfolioImg = require("../../image/project-portfolio.png");

interface ProjectInterface {
  name: string;
  image: string;
  description: string;
  skills: string[];
  features: string[];
  demoLink: string;
  sourceLink: string;
}
class ProjectTemplate {
  constructor(
    public name: string,
    public image: string,
    public description: string,
    public skills: string[],
    public features: string[],
    public demoLink: string,
    public sourceLink: string
  ) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.skills = skills;
    this.features = features;
    this.demoLink = demoLink;
    this.sourceLink = sourceLink;
  }
}

const DataScraper = new ProjectTemplate(
  "Data Scraper",
  ScraperImg,
  "The goal of this project was to make the market data for the game NBA 2K22 easier to access. The data was scraped from the Xbox and Playstation versions of the game using Python and OpenCV then stored it in a database. The data was then used to create a web application that allows users to view the data without having to go to the console.",
  [
    "Python",
    "OpenCV",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  [
    "Automated scraping of data from the game using OpenCV and PyTesseract",
    "Stored scraped data from Python script in MongoDB NoSQL Database",
    "Created web application to access data using React with TypeScript and Node.js",
    "Created development tools to help with testing and debugging",
    "Deployed Front-end with Github Pages",
    "Deployed Back-end with Heroku",
    "Deployed Database with MongoDB Atlas",
  ],
  "https://racorbin23.github.io/MarketSearch-Client/",
  "https://github.com/Racorbin23/MarketSearch-Client"
);
const Woofer = new ProjectTemplate(
  "Woofer",
  WooferImg,
  "This was a project for school in Software Engineering class. The goal was the make a social platform where animal lovers can meet each other quickly and chat with them live. I implemented authentication as well as live chat system using Firebase. I also implemented a user profile page that allows users to view their profile and edit their information and the interaction system to find new users.",
  ["HTML5", "CSS3", "JavaScript", "React", "React Router", "Firebase", "PWA"],
  [
    "Added Authentication with Firebase",
    "Added Live Chat System for users who liked each other",
    "Save user profile information and image to Firebase",
    "Used React Router to navigate between pages",
  ],
  "https://racorbin23.github.io/Woofer/",
  "https://github.com/Racorbin23/Woofer"
);

const Portfolio = new ProjectTemplate(
  "Portfolio",
  PortfolioImg,
  "This is my portfolio website. It is a single page application that allows users to view my projects and contact me. It is built using React with Typescript.",
  ["HTML5", "CSS3", "JavaScript", "React", "Typescript"],
  [
    "Used React with TypeScript to create single page application",
    "Deployed with Github Pages",
  ],
  "https://racorbin23.github.io/portfolio/",
  "https://github.com/Racorbin23/portfolio"
);

const Calculator = new ProjectTemplate(
  "Calculator",
  CalculatorImg,
  "This is a calculator is a remake of the iOS calculator. Its a PWA (Progressive Web App) so it can be installed on any device, even an iPad. It was made as a small project to test my skills in pure Javascript.",
  ["HTML5", "CSS3", "JavaScript", "PWA", "Responsive", "Figma"],
  [
    "Used pure Javascript to create the app",
    "Added PWA functionality and accessible from most devices",
    "Used Figma to create icons and design",
    "Deployed with Github Pages",
  ],
  "https://racorbin23.github.io/iOS-Calculator/",
  "https://github.com/Racorbin23/iOS-Calculator"
);

// List of all my projects
const my_projects: any = [DataScraper, Woofer, Calculator, Portfolio];

function Project({ project }: { project: ProjectInterface }) {
  return (
    <div className="project-wrapper">
      <img className="project-img" src={project.image} alt="Project Example" />
      <div className="project-content">
        <div className="project-title">{project.name}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-features-wrapper">
          <div className="project-features-title">Key Features</div>
          {project.features !== undefined ? (
            project.features.map((features: string, index: number) => {
              return <Feature key={index} feature={features} />;
            })
          ) : (
            <div></div>
          )}
        </div>
        <div className="project-skills-wrapper">
          {project.skills !== undefined ? (
            project.skills.map((skill: string, index: number) => {
              return <Skill key={index} item={skill} />;
            })
          ) : (
            <div></div>
          )}
        </div>
        <div className="project-button-wrapper">
          <DemoButton link={project.demoLink} />
          <SourceButton link={project.sourceLink} />
        </div>
      </div>
    </div>
  );
}

function AllProjects() {
  return (
    <div className="landing-projects-wrapper">
      {my_projects.map((project: ProjectInterface, index: number) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
}

export default AllProjects;

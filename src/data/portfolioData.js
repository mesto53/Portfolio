import portfolioImg01 from "../assets/images/portfolio-04.jpg";
import portfolioImg08 from "../assets/images/portfolio-02.jpg";
import portfolioImg03 from "../assets/images/portfolio-03.jpg";
import portfolioImg04 from "../assets/images/portfolio.png";
import portfolioImg05 from "../assets/images/portfolio-05.jpg";
import portfolioImg06 from "../assets/images/portfolio-06.jpg";
import portfolioImg07 from "../assets/images/portfolio-07.jpg";
import portfolioImg02 from "../assets/images/ux.avif";
import portfolioImg09 from "../assets/images/EJ.png";
const portfolios = [
 
  {
    id: "01",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "Sales mangment",
    description:
      "Web site for shopping with signin and signup with and checkout options with payment and cart.",
    technologies: ["React", "scss", "Nodejs", "Firebase"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg03,
    category: "Mobile",
    title: "Google-search-app",
    description:
      "Google search app for android and ios with the use of google map and expo.",
    technologies: ["React Native", "css", "no", "no"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Cv Form ",
    description:
      "website with an form for submiting Cv's with validation and uploading the cv with the name and other inputs and downloading the cv.",
    technologies: ["asp.net", "bootstrap", "Entity Framwork", "Sql"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "weather app",
    description:
      "weather app",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://weather-app-lucknow.netlify.app/",
   
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Motel_system",
    description:
      "website for hotel and pickup rooms and payment and ordering food with design patterns.",
    technologies: ["Gui", "css", "java", "Sql"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Feedback",
    description:
      "feedback app localy with mysql database",
    technologies: ["Php", "css", "php", "MySql"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Mobile",
    title: "Guess-Game",
    description:"game app for guessing the name of the coutries with the ability to increase the quetions and restarting the game and increasing the number of options country name.",
    technologies: ["Xml", "Xml", "java", "SqlLite"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Restuarant-cms",
    description:"big website for Restuarnt reservation and orders also its two part for the admin that can so all the statics and edit food categories and for Employee to make reservation edit food and feedback",
    technologies: ["Php", "css", "Php", "MySql"],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Database",
    title: "Cenima-Reservation-System",
    description:
      "database for cenima with triggers and function and procedure",
    technologies: ["no", "no", "no", "Sql"],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: portfolioImg09,
    category: "Web Design",
    title: "Emplyees Manger job ",
    description:
      "Website for an admin to manage his employees job with deleteing, creating and Editing jobs with restoring data after delete in adition employee also like job.In addition of assigning jobs for employess and u can't delete employee if he have job also can't delete job if it has employee.With filtering of employee and jobs.",
    technologies: ["asp.net", "bootstrap", "Entity Framwork", "Sql"],
    siteUrl: "#",
  },
];

export default portfolios;

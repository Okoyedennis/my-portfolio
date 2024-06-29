import React from "react";
import "./Portfolio.css";
import IMG1 from "../../asset/HarmonyCare.png";
import IMG3 from "../../asset/rosabon.png";
import IMG5 from "../../asset/fitness-pix.png";
import IMG6 from "../../asset/kunech.png";
import IMG7 from "../../asset/simply-group.png";
import IMG8 from "../../asset/nedgab-consult.png";
import IMG10 from "../../asset/fashion-app.png";
import IMG11 from "../../asset/salariopay.png";
import IMG12 from "../../asset/quicklogisticshub.png";
 
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Harmony Care",
      demo: "https://harmonycares.org/",
    },
    {
      id: 10,
      image: IMG10,
      title: "Fashion app",
      demo: "https://fashion-app-xi.vercel.app/",
    },
    {
      id: 11,
      image: IMG12,
      title: "Quick Logistics Hub",
      demo: "https://www.quicklogisticshub.com/",
    },
    {
      id: 12,
      image: IMG11,
      title: "SalarioPay",
      demo: "https://salariopay.com/",
    },
    {
      id: 9,
      image: IMG8,
      title: "NedGab Consult",
      demo: "https://nedgabconsults.com/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Rosabon",
      // github: "https://github.com/Okoyedennis/real-estate-template",
      demo: "https://rosabon-treasury.optisoft.com.ng/login",
    },
    {
      id: 5,
      image: IMG5,
      title: "Fit Club",
      github: "https://github.com/Okoyedennis/fitclub",
      demo: "https://vermillion-centaur-38b6f9.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Kunech",
      github: "https://github.com/Okoyedennis/kunech",
      demo: "https://curious-bubblegum-48d390.netlify.app",
    },
    {
      id: 7,
      image: IMG7,
      title: "Simply Group",
      demo: "https://www.mysimplygroup.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__irem-cta">
              {github ? (
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              ) : null}

              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

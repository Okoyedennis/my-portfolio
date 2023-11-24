import React from "react";
import "./Portfolio.css";
import IMG1 from "../../asset/HarmonyCare.png";
// import IMG2 from "../../asset/yummy-food-delivery.png";
import IMG3 from "../../asset/real-estate.png";
// import IMG4 from "../../asset/hotelify.png";
import IMG5 from "../../asset/fitness-pix.png";
import IMG6 from "../../asset/kunech.png";
import IMG7 from "../../asset/simply-group.png";
import IMG8 from "../../asset/nedgab-consult.png";
// import IMG9 from "../../asset/p-invent-mgt.png";
import IMG10 from "../../asset/fashion-app.png";
import IMG11 from "../../asset/crypto_hunt.png";
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
      title: "Crypto Hunter",
      demo: "https://crypto-hunt-currency.netlify.app/",
    },
    // {
    //   id: 8,
    //   image: IMG9,
    //   title: "Inventory Mgt App",
    //   demo: "https://inventory-mgt-one.vercel.app/",
    // },
    {
      id: 9,
      image: IMG8,
      title: "NedGab Consult",
      demo: "https://nedgabconsults.com/",
    },
    // {
    //   id: 2,
    //   image: IMG2,
    //   title: "Yummy Food Delivery",
    //   github: "https://github.com/Okoyedennis/yummy_food_delivery", // / not needed in live project
    //   demo: "https://yummy-food-delivery.vercel.app/",
    // },
    {
      id: 3,
      image: IMG3,
      title: "Real Estate Template",
      github: "https://github.com/Okoyedennis/real-estate-template",
      demo: "https://real-estate-template-sooty.vercel.app/",
    },
    // {
    //   id: 4,
    //   image: IMG4,
    //   title: "Hotelify",
    //   github: "https://github.com/Okoyedennis/Hotelify",
    //   demo: "https://hotelify07.netlify.app/",
    // },
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

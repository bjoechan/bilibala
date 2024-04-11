import React from "react";
import { Helmet } from "react-helmet";
import billyCoffee from "../images/billy-coffee.jpg";

const SEO = ({ title, description, keywords, url, image }) => {
  const extraKeywords =
    "Billy Chan, Chan Shu Kong, McGill University, Web Developer, Salt and Light Hour, Salt and Light Media, Billy Drinking Coffee, best programmers, strategic board games, Settlers of Catan, building empires, functional applications, user-friendly applications, 15 years of experience, web development, process automation, AI, problem-solving, logic and creativity, exploration, digital realm, travel, diverse cultures, Montreal native, French flair, virtual challenges, real-world wonders, new experiences, digital world, passions, curiosity," +
    keywords;

  const imageSrc = image || billyCoffee;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={extraKeywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={billyCoffee} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSrc} />
    </Helmet>
  );
};

export default SEO;
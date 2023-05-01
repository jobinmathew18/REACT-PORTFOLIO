import React from "react";
import "./About.scss";
import { useState, useEffect } from "react";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const about = await client.fetch(`*[_type == "abouts"]`); //fetching data from sanity
      setAbouts(about);
    };
    getInfo();
  }, []);
  // console.log(abouts[0].url)

  return (
    <>
      <h2 className="head-text">
        <span> About me</span>
      </h2>
      <div className="desc">
        <p>
          I am a <b>Web Developer</b> with a passion for building beautiful and
          user-friendly websites and webapps. I have an understanding of both
          front-end and back-end development, and I am excited to put my skills
          to use in a professional setting. I am a quick learner and team player
          and I am confident that I can be a valuable asset to any web
          develepment team.
        </p>
        <p>
          My Career objective is to secure position as a developer in a reputed
          organization to expand my learning, knowledge and skills and use them
          to achieve goals of company focusing on customer satisfaction,
          relation and experience.
        </p>
        <span>
          <b>Education: </b> BCA, MCA
        </span>
        <div className="about__button">
        {abouts && (
          <a href={abouts[0]?.url} target="_blank" rel="noreferrer">
            View Resume
          </a>
        )}
        <a className="secondary-anchor" href="#Skills">Go to Skills</a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);

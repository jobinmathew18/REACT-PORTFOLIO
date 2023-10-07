import React from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useState } from "react";
import { useEffect } from "react";

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      let data = await client.fetch(`*[_type == "works"]`); //fetching data from sanity
      const sorted = data.sort((work1, work2) => work1.id - work2.id);
      setWorks(sorted);
      setFilterWork(sorted);
    };
    getInfo();
  }, []);
  // console.log(works);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text" style={{marginTop: "40px"}}>
        My Creative <span>Portfolio</span> section
      </h2>
      <div className="app__work-filter">
        {["Frontend", "Backend", "MERN Webapp", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="info-hover app__flex"
            >
              <a href={`/project/${work.title}`} rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>
            <div className="app__work-content app__flex">
              <div className="link-info">
                <a href={`/project/${work.title}`} className="default">
                  <AiFillEye />
                </a>
                <a href={work.codeLink} className="default">
                  <AiFillGithub />
                </a>
              </div>
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                {work.title}
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "center" }}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__work"),
  "Projects",
  "app__primartbg"
);

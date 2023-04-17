import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { useEffect } from "react";
import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const skillsData = await client.fetch(`*[_type == "skills"]`);
      setSkills(skillsData);
    };
    getInfo();
  }, []);
  // console.log(skills)

  return (
    <div className="app__flex app__skills">
      <h2 className="head-text heading">Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))} 
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'Skills', 'app__whitebg');

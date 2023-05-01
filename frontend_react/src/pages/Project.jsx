import React from "react";
import { useParams } from "react-router-dom";
import images from "../constants/images.js";
import "./project.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../constants/projectData.js";
import { useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";

const Project = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [focusImg, setFocusImg] = useState("");
  const [activeImg, setActiveImg] = useState("");

  //   console.log()

  useEffect(() => {
    const res = projects.find((project) => project.name === params.projectname);
    setData(res);
    res.image && setFocusImg(res?.image[0]);
    res.image && setActiveImg(res?.image[0]);
  }, [params.projectname]);

  return (
    <>
      <div className="app__project">
        <div className="app__wrapper app__flex">
          <div className="project__title">{data?.name}</div>
          <div className="project__overview">
            <div className="points">
              <BsPencilSquare className="icon" />
              <span>
                {" "}
                <u>Overview</u>{" "}
              </span>
            </div>
            <p>{data?.overview}</p>
            {data?.url && (
              <p>
                Project Link: <a href={data.url}> {data?.name}</a>
              </p>
            )}
          </div>
          { data?.image && <div className="project__image">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <div className="project__image-focus app__flex">
                <img src={focusImg} />
              </div>
            </motion.div>
            <div className="project__images app__flex">
              {data?.image?.map((img) => (
                <div key={img}
                  className={`image ${activeImg === img ? "image-active" : ""}`}
                >
                  <img
                    src={img}
                    alt=""
                    onClick={() => {
                      setFocusImg(img);
                      setActiveImg(img);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>}
          {data?.features && (
            <div className="project__bottom">
              <div className="points">
                <BsPencilSquare className="icon" />
                <span>
                  {" "}
                  <u>Key features</u>{" "}
                </span>
              </div>
              <ul>
                {data?.features?.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;

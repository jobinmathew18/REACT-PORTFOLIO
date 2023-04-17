import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";
import { useState } from "react";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getInfo = async () => {
      const testimonialsData = await client.fetch(`*[_type == "testimonials"]`);
      setTestimonials(testimonialsData);
      const brandsData = await client.fetch(`*[_type == "brands"]`);
      setBrands(brandsData);
    };
    getInfo();
  }, []);

  return (
    <>{testimonials.length && (
      <>
        <div className="app__testimonial-item app__flex">
          <img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonial" />
        </div>
      </>
    )}</>
  )
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "Testimonials",
  "app__primarybg"
);

import React from "react";

//importing all our components in a single line.
import {About, Footer, Header, Skills, Work} from '../container'

import { Navbar } from "../components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;

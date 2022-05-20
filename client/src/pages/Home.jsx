import React from "react";
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer
} from "../components/index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

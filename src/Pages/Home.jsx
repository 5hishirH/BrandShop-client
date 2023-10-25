import React from "react";
import OurBrands from "../Components/Header/OurBrands";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import FrequentQ from "../Components/FrequentQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurBrands></OurBrands>
      <Contact></Contact>
      <FrequentQ></FrequentQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;

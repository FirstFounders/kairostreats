import React from "react";
import ShowCase from "../Layouts/Showcase/ShowCase";
import CakeItem from "../Layouts/CakeItem/CakeItem";
import CustomCake from "../Layouts/CustomCake/CustomCake";
import Special from "../Layouts/Specials/Specials";

function Home() {
  return (
    <div>
      <ShowCase />
      <CakeItem />
      <CustomCake />
      <Special />
    </div>
  );
}

export default Home;

import React from "react";
import ShowCase from "../Layouts/Showcase/ShowCase";
import CakeItem from "../Layouts/CakeItem/CakeItem";
import CustomCake from "../Layouts/CustomCake/CustomCake";
import Specials from "../Layouts/Specials/specials";

function Home() {
  return (
    <div>
      <ShowCase />
      <CakeItem />
      <CustomCake />
      <Specials />
    </div>
  );
}

export default Home;

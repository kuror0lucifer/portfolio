import React from "react";
import AboutListItem from "./AboutListItems";

export default function About() {
  return (
    <div className="about__wrapper" id="about">
      <h2 className="title">Обо мне</h2>
      <div className="about__flex">
        <AboutListItem />
      </div>
    </div>
  );
}

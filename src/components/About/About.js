import React from "react";
import AboutListItem from "./AboutListItems";

export default function About() {
  return (
    <div className="about__wrapper">
      <h2 className="about__title">Обо мне</h2>
      <div className="about__flex">
        <AboutListItem />
      </div>
    </div>
  );
}

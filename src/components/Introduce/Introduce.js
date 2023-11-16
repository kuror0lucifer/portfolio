import React from "react";
import ButtonResume from "./ButtonResume";

export default function Introduce() {
  return (
    <>
      <div className="intro__wrapper">
        <div className="intro__flex">
          <h1 className="intro__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ButtonResume />
        </div>
        <div className="intro__img">
          <img
            src="https://assets.vogue.ru/photos/5dc548b51d459d0008f2e53c/2:3/w_2560%2Cc_limit/c1d28f9747fe6ed38bfc1eed8c3397ae.jpg"
            alt="Селфи"
          />
        </div>
      </div>
    </>
  );
}

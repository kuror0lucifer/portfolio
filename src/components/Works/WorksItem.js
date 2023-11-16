import React from "react";

const works = [
  {
    id: 1,
    title: "Tic-Tac-Toe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: `${process.env.PUBLIC_URL}/assets/Rectangle30.jpg`,
  },
  {
    id: 2,
    title: "Calculator",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: `${process.env.PUBLIC_URL}/assets/Rectangle32.jpg`,
  },
  {
    id: 3,
    title: "Quiz",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: `${process.env.PUBLIC_URL}/assets/Rectangle34.jpg`,
  },
];

export default function WorksItem() {
  return works.map((el) => {
    return (
      <section className="works__flex">
        <img src={el.img} alt="" className="works__img" />
        <div className="works__flex-content">
          <h2 className="works__title">{el.title}</h2>
          <p className="works__content">{el.content}</p>
        </div>
      </section>
    );
  });
}

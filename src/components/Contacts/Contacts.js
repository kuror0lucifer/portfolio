import React from "react";

const contacts = [
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/assets/telegram.png`,
    title: "telegram",
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL}/assets/vk.jpg`,
    title: "vk",
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/assets/in.jpg`,
    title: "linkedin",
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL}/assets/hh.jpg`,
    title: "headhunter",
  },
];

export default function Contacts() {
  return (
    <div className="contacts__block" id="contacts">
      <h2>Для связи со мной</h2>
      <div className="contacts__logos">
        {contacts.map((el) => {
          return (
            <a href="###">
              <img
                src={el.img}
                alt={el.title + " logo"}
                className="contacts__logo"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

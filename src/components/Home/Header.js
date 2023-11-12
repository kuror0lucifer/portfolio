import React from "react";

const headerList = [
  {
    title: "Обо мне",
    link: "about",
    id: 1,
  },
  {
    title: "Проекты",
    link: "works",
    id: 2,
  },
  {
    title: "Контакты",
    link: "contacts",
    id: 3,
  },
];

export default function Header() {
  return (
    <header>
      <ul>
        {headerList.map((el) => {
          return (
            <li key={el.id} className="header__list">
              <a href={"#" + el.link}>{el.title}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

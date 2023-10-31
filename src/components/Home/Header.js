import React from "react";

const headerList = [
  {
    title: "Обо мне",
    id: 1,
  },
  {
    title: "Проекты",
    id: 2,
  },
  {
    title: "Контакты",
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
              {el.title}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

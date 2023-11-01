import React from "react";

const data = [
  {
    id: 1,
    title: "Anim labore sint eiusmod reprehenderit consequat irure.",
    content:
      "Nisi eu magna do et tempor veniam cupidatat nulla duis esse nulla laboris labore magna. Nostrud anim officia dolore nostrud voluptate ea esse voluptate magna enim consectetur minim ex ea. Ad incididunt proident labore duis dolor consequat dolore duis commodo ad non nulla deserunt.",
  },
  {
    id: 2,
    title: "Anim labore sint eiusmod reprehenderit consequat irure.",
    content:
      "Nisi eu magna do et tempor veniam cupidatat nulla duis esse nulla laboris labore magna. Nostrud anim officia dolore nostrud voluptate ea esse voluptate magna enim consectetur minim ex ea. Ad incididunt proident labore duis dolor consequat dolore duis commodo ad non nulla deserunt.",
  },
  {
    id: 3,
    title: "Anim labore sint eiusmod reprehenderit consequat irure.",
    content:
      "Nisi eu magna do et tempor veniam cupidatat nulla duis esse nulla laboris labore magna. Nostrud anim officia dolore nostrud voluptate ea esse voluptate magna enim consectetur minim ex ea. Ad incididunt proident labore duis dolor consequat dolore duis commodo ad non nulla deserunt.",
  },
  {
    id: 4,
    title: "Anim labore sint eiusmod reprehenderit consequat irure.",
    content:
      "Nisi eu magna do et tempor veniam cupidatat nulla duis esse nulla laboris labore magna. Nostrud anim officia dolore nostrud voluptate ea esse voluptate magna enim consectetur minim ex ea. Ad incididunt proident labore duis dolor consequat dolore duis commodo ad non nulla deserunt.",
  },
];

export default function AboutListItem() {
  return data.map((el) => {
    return (
      <div className="block">
        <h5 className="block__title">{el.title}</h5>
        <p className="block__content">{el.content}</p>
      </div>
    );
  });
}

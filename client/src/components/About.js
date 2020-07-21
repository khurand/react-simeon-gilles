import React from "react";

function About() {
  const card = [
    {
      icon: "icone-1",
      titre: "card-title-1",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
    {
      icon: "icone-2",
      titre: "card-title-2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
    {
      icon: "icone-3",
      titre: "card-title-3",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
  ];
  return (
    <div className='about'>
      <div className='cards'>
        {card.map((item, index) => {
          return (
            <div className='card' key={index}>
              <div className='card-icon'>{item.icon}</div>
              <div className='card-title'>{item.titre}</div>
              <div className='card-text'>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;

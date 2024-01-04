import React from "react";

const Card = ({ cards }) => {
  return (
    <div className="sm:px-16 md:px-28 lg:px-28 px-5 ">
      <div className="grid lg:grid-cols-2 gap-4 ">
        {cards.map((card, index) => (
          <div key={index} className="mb-4 ">
            <div className="border-2 p-4    border-[#FAE9D2]">
              <p >{card.story}</p>
              <div className="flex">
                <img
                  src={card.url}
                  alt={card.title}
                  className="w-16 h-16 rounded-full object-cover mr-4 mt-4 border-2 border-[#FAE9D2]"
                />
                <div className="mr-4 mt-4">
                  <div className="font-bold text-xs mb-2">{card.title}</div>
                  <div className="font-medium text-xs mb-2">{card.work}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

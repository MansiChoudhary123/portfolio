import React from "react";

const Card = ({ item, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full  border-[1px] border-violet-600   text-orange-300 rounded-lg  overflow-hidden"
    >
      {item.image && (
        <div className=" w-full rounded-t-sm border-b-2">
          <img src={item.image} alt={item.title} />
        </div>
      )}

      <div className="p-4">
        <h1 className="text-xl font-bold text-center mb-2">{item.title}</h1>
        <p className="text-sm text-center">{item.description}</p>
      </div>
    </a>
  );
};

export default Card;

import React from "react";

const Card = ({ item, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[350px] h-auto border-[1px] border-violet-600  bg-black text-orange-300 rounded-lg shadow-xl hover:scale-110 transition transform duration-300 overflow-hidden"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[150px] object-cover rounded-t-sm border-b-2"
        />
      )}

      <div className="p-4">
        <h1 className="text-xl font-bold text-center mb-2">{item.title}</h1>
        <p className="text-sm text-center">{item.description}</p>
      </div>
    </a>
  );
};

export default Card;

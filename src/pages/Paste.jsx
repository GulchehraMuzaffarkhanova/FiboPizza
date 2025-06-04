import React, { useState } from "react";
import pasta1 from "../assets/paste/pasta1.jpeg";
import pasta2 from "../assets/paste/pasta2.jpg";
import pasta3 from "../assets/paste/pasta3.jpg";
import pasta4 from "../assets/paste/pasta4.jpg";
import pasta5 from "../assets/paste/pasta5.jpeg";
import pasta6 from "../assets/paste/pasta6.jpeg";
import pasta7 from "../assets/paste/pasta7.jpeg";
import pasta8 from "../assets/paste/pasta8.jpeg";
import YellowBtn from "../components/YellowBtn";

const Paste = () => {
  
  const paste_card = [
    {
      id: 1,
      img: pasta1,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 2,
      img: pasta2,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 3,
      img: pasta3,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 4,
      img: pasta4,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 5,
      img: pasta5,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 6,
      img: pasta6,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 7,
      img: pasta7,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
    {
      id: 8,
      img: pasta8,
      name: "С креветками и трюфелями",
      text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г",
      price: "от 600 ₽",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-[32px] text-yellow font-extrabold">Паста</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {paste_card.map((item, index) => {
          return (
            <div key={index} className="pizza_card w-[255px] h-[490px] rounded-[18px] pl-[5px] mt-[50px]"onClick={() => setSelectedCard(item)}>
              <img src={item.img} alt="" />
              <h1 className="text-[24px] font-extrabold text-grey">{item.name}</h1>
              <p className="text-[13px] font-[400] text-grey py-[12px]">{item.text}</p>
              <div className="flex gap-[5px]">
                <span className="text-[22px] text-dark font-bold">{item.price}</span>
                <YellowBtn text={"В корзину"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Paste;

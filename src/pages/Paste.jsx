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
import ProductsCard from "../components/ProductsCard";

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-3">
      {
            paste_card.map((item, index) => {
                return(
                    <ProductsCard item={item} key={index}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Paste;

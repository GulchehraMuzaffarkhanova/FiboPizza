import React, { useState } from "react";
import YellowBtn from "./YellowBtn";
import Modal from "./Modal";
import 'bootstrap-icons/font/bootstrap-icons.css';


const ProductsCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [curr, setCurr] = useState(null);

  const openModal = (item) => {
    setOpen(true);
    setCurr(item)
  };
  const closeModal = () => {
    setOpen(false);
    setCurr(null)
  };

  return (
    <div className="pizza_card rounded-[18px] flex flex-col items-center justify-center p-[20px] mt-[50px]">
      <div className="relative flex">
      <img className="mt-[10px]" onClick={()=>openModal(item)} src={item.img} alt="" />
      <i class="bi bi-heart absolute right-0 "></i>
      </div>
      <h1 className="text-[24px] font-extrabold text-grey">{item.name}</h1>
      <p className="text-[13px] font-[400] text-grey py-[12px]">{item.text}</p>
      <div className="flex items-center gap-5">
        <span className="text-[18px] text-dark font-bold">{item.price}</span>
        <YellowBtn text={"В корзину"} />
      </div>
      {open && <Modal item={curr} closeModal={closeModal} />}
    </div>
  );
};

export default ProductsCard;

import React from "react";
import YellowBtn from "./YellowBtn";

const Modal = ({ closeModal, item }) => {
  return (
    <div className="modal">
      <div className="modal-content sm:px-2 rounded-[18px] flex items-center justify-center flex-col">
        <button onClick={closeModal} className="px-5 py-2 bg-light-blue rounded-xl text-xl font-medium ml-[300px]">x</button>
        <img src={item.img} alt="" />
        <h1 className="text-[24px] font-extrabold text-grey">{item.name}</h1>
        <p className="text-[13px] font-[400] text-grey py-[12px] w-[400px]">{item.text}</p>
        <div className="flex items-center gap-10">
          <span className="text-[18px] text-dark font-bold">{item.price}</span>
          <YellowBtn text={"В корзину"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

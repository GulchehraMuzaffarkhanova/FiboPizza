import React from "react";
import cake from "../assets/cake.svg";
import YellowBtn from "./YellowBtn";
import girl from "../assets/girl.svg";

const Discount = () => {
  return (
    <section className="mt-[65px] relative">
      <div className="container relative">
        <h1 className="text-[44px] text-dark font-extrabold flex items-center justify-center">
          Наши <span className="text-yellow"> акции</span>
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_1fr] mt-[50px] gap-5">
          <img className="w-full h-auto" src={cake} alt="" />
          <div className="grid grid-cols-2 gap-5 w-full">
            <img src={cake} alt="" />
            <img src={cake} alt="" />
            <img src={cake} alt="" />
            <img src={cake} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center py-[50px]">
          <YellowBtn text={"Все в aкции"} />
        </div>
      </div>
      {/*<img className='absolute right-0 bottom-0' src={girl} alt="" /> */}
    </section>
  );
};

export default Discount;

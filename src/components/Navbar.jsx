import React, { useState } from "react";
import logo from "../assets/logo.svg";
import yandex from "../assets/yandex.svg";
import star from "../assets/star.svg";
import OrderBtn from "./OrderBtn";
import YellowBtn from "./YellowBtn";
import menuicon from "../assets/menuicon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[50px]">
            <img className="" src={logo} alt="" />
            <div className="yandex md:hidden lg:flex lg:flex-col">
              <h1 className="font-[600] text-[17px] text-dark">
                Доставка пасты <span className="text-yellow">Москва</span>
              </h1>
              <div className="flex items-center gap-[20px]">
                <div className="flex items-center gap-[7px]">
                  <img src={yandex} alt="" />
                  <p className="text-[13px] font-[700] text-dark">
                    Яндекс еда{" "}
                  </p>
                  <div className="w-[4px] h-[4px] rounded-full bg-red"></div>
                  <span className="text-[13px] font-[700] text-dark">4.8</span>
                  <img src={star} alt="" />
                </div>

                <div className="flex items-center gap-[7px]">
                  <p className="text-[13px] font-[700] text-dark">
                    Время доставки
                  </p>
                  <div className="w-[4px] h-[4px] rounded-full bg-red"></div>
                  <span className="text-[13px] font-[700] text-dark">
                    от 31 мин
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="number flex items-center gap-[30px] md:hidden lg:flex">
            <OrderBtn text={"Заказать звонок"} />
            <span className="text-[27px] font-bold text-yellow">
              8 499 391-84-49
            </span>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_icn lg:hidden">
            <img className="" src={menuicon} alt="" />
          </button>
        </div>

        {/*M E N U*/}

        <div className="menu mt-[20px] flex items-center justify-between md:hidden lg:flex">
          <div className="text-[15px] text-dark font-semibold flex gap-[30px]">
            <Link to="/">Дом</Link>
            <Link to="/pizza">Пицца</Link>
            <Link to="/paste">Паста</Link>
            <Link to="/soup">Супы</Link>
            <Link to="/salad">Салаты</Link>
            <Link to="/drinks">Напитки</Link>
            <Link to="/discount">Акции</Link>
            <Link to="/location">Локация</Link>
            <Link to="/contact">Контакты</Link>
          </div>
          <div className="flex gap-[10px]">
            <OrderBtn variant="bg-transparent" text={"Войти"} />
            <YellowBtn text={"Корзина | 1"} />
          </div>
        </div>

        {/*M E N U   modal*/}

        <div
          className={`modal_menu bg-yellow w-full py-10 flex-col items-center justify-center ${
            isMenuOpen ? "flex md:flex lg:hidden" : "hidden"
          }`}>
          <div className="flex flex-col items-center gap-4 text-[15px] font-extrabold">
            <Link to="/">Дом</Link>
            <Link to="/pizza">Пицца</Link>
            <Link to="/paste">Паста</Link>
            <Link to="/soup">Супы</Link>
            <Link to="/salad">Салаты</Link>
            <Link to="/drinks">Напитки</Link>
            <Link to="/discount">Акции</Link>
            <Link to="/location">Локация</Link>
            <Link to="/contact">Контакты</Link>
          </div>

          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-[18px] font-bold text-dark">8 499 391-84-49</p>
            <button className="px-[25px] py-[7px] bg-white rounded-[8px]">
              Корзина | 1
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import { HeroData } from "@/utils/data";
import Img from "../../../public/Imiges/iPhone-12-PNG-Pic 1.png";
import "./style.scss";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__div">
          <Slider {...settings}>
            {HeroData.map((item, index) => (
              <div key={index} className="hero__wrapper">
                <div className="hero__content">
                  <h1 className="hero__title">{item.title}</h1>
                  <p className="hero__text">{item.text}</p>
                  <button className="hero__btn">get it</button>
                  <Image src={Img} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./Screenshots.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutScreenshots() {
  const { t } = useTranslation();
  const items = t("about.screenshots", { returnObjects: true }) || [];

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) setSlidesToShow(1);
      else if (width <= 900) setSlidesToShow(2);
      else if (width <= 1200) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  }), [slidesToShow]);

  return (
    <section className="about-screenshots" aria-label={t("menu.about") || "About Screenshots"}>
      <Slider {...sliderSettings} className="screenshots-slider">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="slide-item">
              <figure className="screenshot-card">
                <img
                  src={item.img}
                  alt={item.text || `screenshot-${index}`}
                  className="screenshot-img"
                  loading="lazy"
                />
                <figcaption className="screenshot-caption">{item.text}</figcaption>
              </figure>
            </div>
          ))
        ) : (
          <div className="slide-item">No screenshots found</div>
        )}
      </Slider>
    </section>
  );
}

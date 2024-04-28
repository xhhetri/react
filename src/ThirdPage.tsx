import style from "./ThirdPage.module.css";
import arrow from "./assets/arrow.png";
import alb1 from "./assets//alb1.png";
import alb2 from "./assets//allb2.png";
import alb3 from "./assets//alb3.png";
import alb4 from "./assets//alb4.png";
import alb5 from "./assets//alb5.png";

import { useState } from "react";

function ThirdPage() {
  const album = [alb1, alb2, alb3, alb4, alb5];
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlide = (direction) => {
      if (direction === "forward") {
        setCurrentIndex((prevIndex) =>
          prevIndex === album.length - 1 ? 0 : prevIndex + 1
        );
      } else if (direction === "backward") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? album.length - 1 : prevIndex - 1
        );
      }
    };

    return (
      <div className={style.album}>
        <div className={style.frame3}>
          <p></p>
        </div>

        <div className={style.frame1}>
          <img
            src={
              album[currentIndex === 0 ? album.length - 1 : currentIndex - 1]
            }
            alt="Previous Album"
            className={style.frameimg}
          ></img>
          <button
            className={style.forward}
            onClick={() => handleSlide("forward")}
          >
            <img src={arrow} className={style.move1} alt="Forward"></img>
          </button>
          <button
            className={style.backward}
            onClick={() => handleSlide("backward")}
          >
            <img src={arrow} alt="Backward" className={style.move2}></img>
          </button>
        </div>

        <div className={style.frame2}>
          <img
            src={album[currentIndex]}
            className={style.frameimg}
            alt="Current Album"
          ></img>
        </div>

        <div className={style.frame2}>
          <img
            src={album[currentIndex]}
            className={style.frameimg}
            alt="Album"
          ></img>
        </div>
        <div className="drift-king"></div>
      </div>
    );
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.leftbox}>
          <h1 className={style.heading}>TOYOTA AE86</h1>
          <p className={style.content}>
            The AE86 is also called the "Hachi-Roku (ハチロク)", Japanese for
            "eight-six". Similarly the AE85 was commonly called "Hachi-Go
            (ハチロク)", meaning "eight-five". Bracketing a minor external
            facelift, models marketed between 1983-1985 are called "zenki"
            (前記, lit. early period), and those marketed from 1986-1987 are
            called "kouki" (高貴, lit. latter period). To mark the end of
            production, In 1987, Toyota marketed a limited edition model of the
            AE86 as the "Black Limited" model.
          </p>
          <button className={style.button}>
            READ MORE
            <img
              src={arrow}
              className={style.arrow}
              onClick={() =>
                window.open("https://en.wikipedia.org/wiki/Toyota_AE86")
              }
            ></img>
          </button>
          <div>
            <ImageSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdPage;

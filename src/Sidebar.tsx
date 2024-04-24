import style from "./Sidebar.module.css";
import car from "./assets/car.png";
import shadow from "./assets/car.png";
import down from "./assets/down.png";
import search from "./assets/search.png";
import dot from "./assets/dot.png";
import audio from "./assets/toyto.mp3";
import { useState } from "react";

function Sidebar() {
  const Bar = ["HOME", "ENGINE", "ABOUT", "OUR REVIEW", "CONTACT"];
  const Footer = ["twitter", "facebook", "instagram"];
  const Playaudio = (audioElement: HTMLAudioElement | null) => {
    if (audioElement) {
      audioElement.play();
    }
  };

  const Pauseaudio = (audioElement: HTMLAudioElement | null) => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio to the beginning
    }
  };

  const [IsHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className={style.container} user-scaable="no">
        <div className={style.search}>
          <p className={style.language}>EN</p>
          <img src={down} className={style.down}></img>
          <img src={search} className={style.icon}></img>
        </div>

        <h1 className={style.head}>TRUENO</h1>
        <nav className={style.navbar}>
          <p className={style.backtext}>
            <strong>TRUENO</strong>
          </p>
          <ul>
            {Bar.map((bar) => (
              <li className={style.list}>
                <a href="#" className={style.items}>
                  {bar}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onMouseOver={() => {
            setIsHovered(true);
            const audioElement = document.getElementById(
              "yourAudioElementId"
            ) as HTMLAudioElement | null;
            Playaudio(audioElement);
          }}
          onMouseOut={() => {
            setIsHovered(false);
            const audioElement = document.getElementById(
              "yourAudioElementId"
            ) as HTMLAudioElement | null;
            Pauseaudio(audioElement);
          }}
        >
          <audio
            id="yourAudioElementId"
            src={audio}
            className={style.audio}
            autoPlay
          ></audio>
          <img src={car} alt="car" className={style.car}></img>
          <img src={shadow} alt="car" className={style.shadow}></img>
        </div>

        <p className={style.bottom}>
          The AE86 generation of the Toyota Corolla Levin and Toyota Sprinter
          Trueno is a small, lightweight coupe introduced by Toyota in 1983 as
          part of the fifth generation Toyota Corolla lineup.
        </p>
        <div className={style.speed}>
          <img src={dot} className={style.dot} alt="DOT"></img>
          <p className={style.kph}>
            POWER
            <br /> 112 kpm/84 mph
          </p>
        </div>

        <div className={style.power}>
          <img src={dot} className={style.dot2} alt="DOT"></img>
          <p className={style.bph}>
            TOP SPEED
            <br /> 201 kpm/125 mph
          </p>
        </div>

        <div className={style.footer}>
          <ul>
            {Footer.map((foot) => (
              <li className={style.footlist}>
                <a href="#" className={style.footitems}>
                  {foot}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;

import style from "./SecondWindow.module.css";
import engine from "./assets/engine1.png";
import fuel from "./assets/feul.png";
import drop from "./assets/drop.png";
import bolt from "./assets/bolt.png";
import speed from "./assets/speed.png";
import { useState } from "react";

function SecondWindow() {
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
      <div className={style.container}>
        {/*  */}
        <div className={style.heading}>
          <h1 className={style.header}> ENGINE SPECIFICATION</h1>
          <p className={style.para}>
            The next major modification was the high-performance 4A-G, with the
            fuel injected version, the 4A-CE. being the most powerful.
            Production of the various models of this version lasted for three
            generations, from 1983 through 1992 for most versions, though the
            S-valve 4A-CE lasted through 1998. Most 4A-Cs were 4-valve DOHC
            engines with wide (50") valve spacing for performance.
          </p>
        </div>
        {/*  */}
        <div className={style.background}>
          <strong className={style.backtext}>4A GE</strong>
          <img
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
            src={engine}
            className={style.engine}
          ></img>
        </div>
        {/*  */}
        <div className={style.lefttext}>
          <p className={style.turbo}>Turbo Engine</p>
          <h1 className={style.turbonum}>7.3</h1>

          <img src={fuel} className={style.fuelimg}></img>
          <h1 className={style.fuelnum}>26.1</h1>
          <p className={style.fuel}>Fuel(Gal)</p>
        </div>

        <div className={style.righttext}>
          <img src={drop} className={style.drop}></img>
          <h1 className={style.torquenum}>206</h1>
          <p className={style.torque}>Torque</p>

          <img src={bolt} className={style.bolt}></img>
          <h1 className={style.powernum}>170 HP</h1>
          <p className={style.power}>Power</p>

          <img src={speed} className={style.speedimg}></img>
          <h1 className={style.speednum}>201 KPH</h1>
          <p className={style.speed}>Top Speed</p>
        </div>
      </div>
    </>
  );
}

export default SecondWindow;

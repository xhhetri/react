import style from "./Footer.module.css";
import yokohama from "./assets/brand1.png";
import recaro from "./assets/brand2.png";
import sparco from "./assets/brand3.png";
import trd from "./assets/brand4.png";
import motul from "./assets/brand5.png";

function Footer() {
  const Footer = ["Twitter", "Facebook", "Instagram"];
  return (
    <>
      <div className={style.brand_banner}>
        <img
          src={yokohama}
          className={style.yokohama}
          onClick={() =>
            window.open("https://www.yokohamatire.com/motorsports")
          }
        ></img>
        <img
          src={recaro}
          className={style.recaro}
          onClick={() => window.open("https://www.recaro-automotive.com/us")}
        ></img>
        <img
          src={sparco}
          className={style.sparco}
          onClick={() => window.open("https://www.sparco-official.com/en/")}
        ></img>
        <img
          src={trd}
          className={style.trd}
          onClick={() => window.open("https://www.trdparts.jp/english/")}
        ></img>
        <img
          src={motul}
          className={style.motul}
          onClick={() => window.open("https://www.motul.com/en-US")}
        ></img>
      </div>
      {/*  */}

      <div className={style.bottom}>
        <ul className={style.footlist}>
          {Footer.map((foot) => (
            <li>
              <a href="#" className={style.footitems}>
                {foot}
              </a>
            </li>
          ))}
        </ul>
        <p className={style.copyright}>© 2019 TOYOTA ALL RIGHT RESERVED.</p>
        <h1 className={style.tureno}>TRUENO</h1>
      </div>
    </>
  );
}

export default Footer;

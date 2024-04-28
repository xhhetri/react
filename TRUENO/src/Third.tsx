import style from "./Third.module.css";
import track from "./assets/track.png";
import shader from "./assets/pattern.png";
import df1 from "./assets/driftking1.png";
import df2 from "./assets/driftking2.png";
import df3 from "./assets/driftking4.png";

function Third() {
  return (
    <>
      <div className={style.container}>
        <img className={style.background_img} src={track}></img>
        <img className={style.shader1} src={shader}></img>
        <img className={style.shader2} src={shader}></img>
        <img className={style.frame3} src={df1}></img>
        <img className={style.frame2} src={df2}></img>
        <img className={style.frame1} src={df3}></img>

        <p className={style.sub_head}>DRIFT KING</p>
        <h1
          className={style.head}
          onClick={() =>
            window.open("https://en.wikipedia.org/wiki/Keiichi_Tsuchiya")
          }
        >
          KEIICHI TSUCHIYA
        </h1>
      </div>
    </>
  );
}

export default Third;

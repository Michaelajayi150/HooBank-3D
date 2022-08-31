import styles, { layout } from "../styles";
import { apple, bill, google } from "../assets";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Bill" className="w-100% h-100% relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &amp;
          invoicing
        </h2>
        <p className={`max-w--[470px] mt-5 ${styles.paragraph}`}>
          Duis ut ea consectetur non elit anim ullamco enim.Cillum qui elit
          laborum anim ea deserunt culpa occaecat laboris duis minim fugiat
          mollit magna.
        </p>

        <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple-store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google-play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;

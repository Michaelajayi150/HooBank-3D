import styles, { layout } from "../styles";
import { card } from "../assets";
import Button from "./Button";

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          veritatis doloribus perferendis reprehenderit aspernatur.
        </p>

        <Button styles="mt-10 rounded-[25px]" />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="Card"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </section>
  );
}

export default CardDeal;

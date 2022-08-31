import styles, { layout } from "../styles";
import { features } from "../constants";
import Button from "./Button";

function FeatureCard({ icon, title, content, index }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card cursor-pointer`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex-col flex ml-3 font-poppins">
        <h4 className="font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
}

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business <br className="sm:block hidden" /> we'll handle
          the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Ipsum nisi Lorem veniam aliqua do adipisicing minim nisi ullamco eu
          adipisicing nisi do voluptate. Consequat reprehenderit aliqua
          consectetur velit deserunt id.
        </p>
        <Button styles="mt-10 rounded-[25px]" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index) => (
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;

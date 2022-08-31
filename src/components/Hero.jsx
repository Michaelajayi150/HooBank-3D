import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex md:flex-row flex-col`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] flex-1 ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient"> Generation </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] w-full ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Ullamco adipisicing mollit Lorem duis aliquip. Qui magna eu dolore
          voluptate laborum cillum deserunt. Nisi voluptate in sit excepteur
          cillum.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="Billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden flex ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;

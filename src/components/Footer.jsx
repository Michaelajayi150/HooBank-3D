import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Button from "./Button";

function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="Hoobanks"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="font-poppins flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLinks.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3f3e45] font-poppins">
        <p className="font-normal text-[18px] text-center leading-[27px] text-white">
          2022 HooBank. All Right Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.id}
              className={`w-[21px] h-[21px] cursor-pointer object-contain ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

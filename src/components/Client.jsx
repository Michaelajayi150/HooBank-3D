import styles from "../styles";
import { clients } from "../constants";

function Client() {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={clients.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] clients`}
          >
            <img
              src={client.logo}
              alt="Client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Client;

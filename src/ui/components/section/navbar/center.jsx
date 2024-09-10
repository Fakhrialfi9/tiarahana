import navbarStyle from "../../../../assets/style/components/navbar.module.css";
import { navbarcenterData } from "../../../../data/components/navbar.js";

const Center = () => {
  return (
    <section className={navbarStyle.center}>
      <ul>
        {navbarcenterData.map((item) => (
          <li key={item.index}>
            <a href={item.to}>{item.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Center;

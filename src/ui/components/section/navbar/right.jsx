import navbarStyle from "../../../../assets/style/components/navbar.module.css";
import { navbarrightData } from "../../../../data/components/navbar.js";

const Right = () => {
  return (
    <section className={navbarStyle.right}>
      <ul>
        {navbarrightData.map((item) => (
          <li key={item.index}>
            <a href={item.to}>
              <item.icon size={15} /> {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Right;

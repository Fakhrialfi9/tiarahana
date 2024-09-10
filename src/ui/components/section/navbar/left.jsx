import navbarStyle from "../../../../assets/style/components/navbar.module.css";
import Logo from "../../../../../public/image/logo/LogoCompany.png";

const Left = () => {
  return (
    <section className={navbarStyle.left}>
      <img src={Logo} alt='tiara-hana'></img> <h5>TIARA HANA</h5>
    </section>
  );
};

export default Left;

import { useEffect, useState } from "react";
import navbarStyle from "../../assets/style/components/navbar.module.css";
import Left from "./section/navbar/left.jsx";
import Center from "./section/navbar/center.jsx";
import Right from "./section/navbar/right.jsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarStyle.navbar} ${isScrolled ? navbarStyle.scrolled : ""}`}>
      <div className='Container'>
        <div className={navbarStyle.content}>
          <Left />
          <Center />
          <Right />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

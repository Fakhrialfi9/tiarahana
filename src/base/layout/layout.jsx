import { Outlet } from "react-router-dom";
import layoutStyle from "../style/layout.module.css";
import ScrollOnTop from "../../lib/scrollToTop.tsx";
import Navbar from "../../ui/components/navbar.jsx";
import Footer from "../../ui/components/footer.jsx";

const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      <header>
        <Navbar />
      </header>

      <main className={layoutStyle.main}>
        <aside className={layoutStyle.pages}>
          <ScrollOnTop />
          <Outlet />
        </aside>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

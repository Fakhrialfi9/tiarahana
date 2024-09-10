import { Link } from "react-router-dom";
import { SendHorizontal } from "lucide-react";
import { socialmediaData, portfolioData, awardData } from "../../data/components/footerData.js";
import { navbarcenterData } from "../../data/components/navbar.js";
import footerStyle from "../../assets/style/components/footer.module.css";
import Logo from "../../../public/Favicon.png";

const Footer = () => {
  return (
    <footer className={footerStyle.main}>
      <div className={footerStyle.footer}>
        <div className='Container'>
          <div className={footerStyle.content}>
            <div className={footerStyle.top}>
              {/* Content Footer */}
              <section className={footerStyle.maincontent}>
                <div className={footerStyle.logo}>
                  <figure className={footerStyle.image}>
                    <img src={Logo} alt=''></img>
                  </figure>
                  <h5>Tiara Hana</h5>
                </div>

                <div className={footerStyle.description}>
                  <p>
                    Tiara Hana Indonesia, a boutique property company established in 2012, is proud to unveil an exciting ownership opportunity that
                    transcends traditional notions of property investment.
                  </p>
                </div>

                <div className={footerStyle.socialmedia}>
                  {socialmediaData.map((socialmediaData) => (
                    <div key={socialmediaData.index} data-index={socialmediaData.index} className={footerStyle.card}>
                      <a href={socialmediaData.to} target='_blank' rel='noopener noreferrer'>
                        <socialmediaData.icon strokeWidth={1.25} absoluteStrokeWidth='true' size={22.5} />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section className={footerStyle.linkcontent}>
                <div className={footerStyle.item}>
                  <h5>Navigation</h5>
                  <ul>
                    {navbarcenterData.map((navbarcenterData) => (
                      <li key={navbarcenterData.index} data-index={navbarcenterData.index}>
                        <Link to={navbarcenterData.to}>{navbarcenterData.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={footerStyle.item}>
                  <h5>Our Resort Portfolio</h5>
                  <ul>
                    {portfolioData.map((portfolioData) => (
                      <li key={portfolioData.index} data-index={portfolioData.index}>
                        <Link>{portfolioData.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={footerStyle.item}>
                  <h5>Our Address</h5>
                  <h5>
                    PT. Tiara Hana Indonesia
                    <p>Luxury Property Company</p>
                  </h5>
                  <p>Gd. Puri Begawan Lantai 1, Jl. Pajajaran No. 05-07, Kota Bogor, Jawa Barat 16143</p>
                  <p>Pondok Indah Office Tower 2, 15th Floor Jl. Sultan Iskandar Muda, Jakarta Selatan 12310</p>
                  <p>WhatsApp : +62 811 1117 916</p>
                  <form action=''>
                    <input type='email' name='email' placeholder='Email Address'></input>
                    <button>
                      Join with us <SendHorizontal size={15} />
                    </button>
                  </form>
                </div>
              </section>
              {/* Content Footer */}
            </div>

            <div className={footerStyle.center}>
              <div className={footerStyle.awardcompany}>
                <h5>Award Company</h5>
                {awardData.map((awardData) => (
                  <img src={awardData.image} alt={awardData.name} key={awardData.index} data-index={awardData.index}></img>
                ))}
              </div>
              <div className={footerStyle.officehour}>
                <h5>Opening Hours:</h5>
                <p>Senin - Jumat | 09.00 - 17.00</p>
              </div>
            </div>

            <div className={footerStyle.bottom}>
              <p>© 2012 - 2024 Tiara Hana. | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

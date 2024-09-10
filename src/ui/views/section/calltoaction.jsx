import { ArrowUpRight } from "lucide-react";
import homeStyle from "../../../assets/style/views/home.module.css";
import calltoactionStyle from "../../../assets/style/views/calltoaction.module.css";

const CallToAction = () => {
  return (
    <section className={homeStyle.calltoaction}>
      <div className='Container'>
        <div className={calltoactionStyle.content}>
          <div className={calltoactionStyle.header}>
            <h2>
              <p>Be a Part of Our Community</p>
              Invest in Indonesia’s Luxury Boutique Resort-Hotel Properties
            </h2>
            <p>
              Designed beautifully and strategically located in some of the World’s favourite travel destinations, offers investors an excellent
              combination of promising rental returns and elevated vacation experiences, all within one investment.
              <span>
                <button>
                  More Info
                  <code>
                    <ArrowUpRight size={15} />
                  </code>
                </button>
              </span>
            </p>
          </div>

          <div className={calltoactionStyle.gallery}>
            <div className={calltoactionStyle.gallerycontainer}>
              <div className={calltoactionStyle.grid}></div>
              <div className={calltoactionStyle.grid}></div>
              <div className={calltoactionStyle.grid}></div>
              <div className={calltoactionStyle.grid}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

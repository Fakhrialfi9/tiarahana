import { ArrowUpRight } from "lucide-react";
import homeStyle from "../../../assets/style/views/home.module.css";
import testimonialsStyle from "../../../assets/style/views/testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={homeStyle.testimonials}>
      <div className='Container'>
        <div className={testimonialsStyle.content}>
          <div className={testimonialsStyle.header}>
            <h2>Read our Customers Stories</h2>

            <p>
              Discover the stories of our customers on how we make their dreams come true. One luxury resort villa at a time, we create their dream
              property portfolio, enriching their lifestyles and the lives of their families.
            </p>

            <button>
              Learn More
              <code>
                <ArrowUpRight size={15} />
              </code>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

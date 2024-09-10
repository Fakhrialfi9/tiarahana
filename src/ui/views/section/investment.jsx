import { ArrowUpRight } from "lucide-react";
import homeStyle from "../../../assets/style/views/home.module.css";
import investmentStyle from "../../../assets/style/views/investment.module.css";

const About = () => {
  return (
    <section className={homeStyle.about}>
      <div className='Container'>
        <div className={investmentStyle.content}>
          <div className={investmentStyle.header}>
            <h2>The Perfect Investment Opportunity is Here</h2>
            <p>When you own a villa in a luxury resort, you own more than just your villa!</p>
            <p>
              Your investment gains benefits and value from everything the resort has to offer. From first-class facilities to its prime location,
              creating an exceptional investment opportunity for both an ultimate lifestyle upgrade and financial returns, without any hassles or a
              huge investment outlay.
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

export default About;

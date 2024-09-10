import { ArrowUpRight } from "lucide-react";
import homeStyle from "../../../assets/style/views/home.module.css";
import joinwithusStyle from "../../../assets/style/views/joinwithus.module.css";

const JoinWithUs = () => {
  return (
    <section className={homeStyle.joinwithus}>
      <div className='Container'>
        <div className={joinwithusStyle.content}>
          <div className={joinwithusStyle.header}>
            <h2>Would you like to own a luxury villa in a resort?</h2>

            <p>
              A dream to own one, is no longer just a dream. Speak with our team to discuss more about this beautiful opportunity for you and your
              family.
            </p>

            <button>
              Whatsapp Us
              <code>
                <ArrowUpRight size={15} />
              </code>
            </button>
          </div>

          <div className={joinwithusStyle.gallery}>
            <div className={joinwithusStyle.gallerycontainer}>
              <div className={joinwithusStyle.grid}></div>
              <div className={joinwithusStyle.grid}></div>
              <div className={joinwithusStyle.grid}></div>
              <div className={joinwithusStyle.grid}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;

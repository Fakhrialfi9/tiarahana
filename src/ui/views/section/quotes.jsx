/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { typeroomData } from "../../../data/views/typeroomData.js";
import { ArrowUpRight } from "lucide-react";
import homeStyle from "../../../assets/style/views/home.module.css";
import quotesStyle from "../../../assets/style/views/quotes.module.css";
import "swiper/css";

const Quotes = () => {
  return (
    <section className={homeStyle.quotes}>
      <div className='Container'>
        <div className={quotesStyle.content}>
          <div className={quotesStyle.quotes}>
            <h5>"Now, we were able to have more quality time together"</h5>
            <p>“Grand Villa is a beautiful family home for a year-end holiday with my family, as well as a future asset for my only child”</p>
            <h6>Mr. Pujianto</h6>
          </div>

          <Swiper className={quotesStyle.card}>
            {typeroomData.map((room, index) => (
              <SwiperSlide key={index} className={quotesStyle.image}>
                <img src={room.image} alt={room.title} />
                <div className={quotesStyle.information}>
                  <div className={quotesStyle.title}>
                    <h5>{room.title}</h5>
                  </div>
                  <div className={quotesStyle.description}>
                    <p>{room.description}</p>
                  </div>
                  <div className={quotesStyle.direction}>
                    <button>
                      View Villa
                      <code>
                        <ArrowUpRight size={15} />
                      </code>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Quotes;

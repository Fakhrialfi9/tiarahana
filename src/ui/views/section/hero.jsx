import { useState } from "react";
import { ArrowRight } from "lucide-react";
import homeStyle from "../../../assets/style/views/home.module.css";
import heroStyle from "../../../assets/style/views/hero.module.css";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  return (
    <section className={homeStyle.hero}>
      <div className={homeStyle.gradient}></div>
      <div className='Container'>
        <div className={heroStyle.content}>
          <div className={heroStyle.header}>
            <h1>
              Where You Get Trapped <br /> in the Beauty of the World <br /> and Unforgettable <br /> Happiness!
            </h1>
            <p>At Trip Trap, we believe that every journey is an opportunity for adventure, discovery, and unforgettable experiences.</p>
          </div>
          <div className={heroStyle.cardbooking}>
            <form>
              <div className={heroStyle.formgroup}>
                <div className={heroStyle.inputgroup}>
                  <label htmlFor='location'>Location</label>
                  <input autoComplete='off' type='text' id='location' name='location' placeholder='Find Location' />
                </div>

                <div className={heroStyle.inputgroup}>
                  <label htmlFor='checkindate'>Check In Date</label>
                  <input autoComplete='off' type='date' id='checkin' name='checkin' value={checkInDate} onChange={handleCheckInChange} />
                </div>

                <div className={heroStyle.inputgroup}>
                  <label htmlFor='checkoutdate'>Check Out Date</label>
                  <input autoComplete='off' type='date' id='checkout' name='checkout' min={checkInDate} />
                </div>

                <div className={heroStyle.inputgroup}>
                  <label htmlFor='guests'>Guests</label>
                  <select id='guests' name='guests'>
                    <option value='' disabled selected>
                      Select Guests
                    </option>
                    <option value='1'>1 Guest</option>
                    <option value='2'>2 Guests</option>
                    <option value='3'>3 Guests</option>
                    <option value='4'>4 Guests</option>
                  </select>
                </div>

                <div className={heroStyle.inputgroup}>
                  <label htmlFor='rooms'>Rooms</label>
                  <select id='rooms' name='rooms'>
                    <option value='' disabled selected>
                      Select Rooms
                    </option>
                    <option value='1'>1 Room</option>
                    <option value='2'>2 Rooms</option>
                    <option value='3'>3 Rooms</option>
                    <option value='4'>4 Rooms</option>
                  </select>
                </div>
              </div>

              <div className={heroStyle.formgroup}>
                <div className={heroStyle.filteraction}>
                  <h5>Filter</h5>
                  <button type='button'>Hotel</button>
                  <button type='button'>Villa</button>
                  <button type='button'>Resorts</button>
                </div>

                <div className={heroStyle.filteraction}>
                  <button type='submit'>
                    Search <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

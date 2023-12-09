import "./about.scss";

import about from "../../imgs/about.jpg";
import { icons } from "../../component/info";

import ava1 from "../../imgs/ava1.jpg";
import ava2 from "../../imgs/ava2.jpg";
import ava3 from "../../imgs/ava3.jpeg";
import ava4 from "../../imgs/ava4.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const About_us = () => {
  return (
    <div className="about_wrapper">
      <div className="page_header">
        <div className="container">
          <h2>about us</h2>
          <div className="nav">
            <h3>home</h3>
            <h3>.</h3>
            <h3>about us</h3>
          </div>
        </div>
      </div>

      <div className="about_container container">
        <div className="txt">
          <p className="subtitle">welcome</p>
          <h2>your bright future is our mission.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            veritatis omnis deserunt error eos perspiciatis autem velit ipsa
            itaque est officiis laudantium nulla, sit at labore temporibus
            maiores, recusandae mollitia!
          </p>
          <div className="btn">
            <button>learn more</button>
          </div>
        </div>
        <div className="img">
          <img src={about} alt="img" />
        </div>
      </div>

      <div className="amenities">
        <div className="container">
          <div className="box">
            <h2>
              <span>{icons.awesome}</span>
            </h2>
            <h3>professional teachers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corrupti repellat iste .
            </p>
          </div>
          <div className="box">
            <h2>
              <span>{icons.public}</span>
            </h2>
            <h3>learn anywhere online</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corrupti repellat iste .
            </p>
          </div>
          <div className="box">
            <h2>
              <span>{icons.certificate}</span>
            </h2>
            <h3>free graduation certificate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corrupti repellat iste .
            </p>
          </div>
          <div className="box">
            <h2>
              <span>{icons.scholarship}</span>
            </h2>
            <h3>over 1k scholarship</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corrupti repellat iste .
            </p>
          </div>
        </div>
      </div>

      <div className="review_container container">
        <h2>student reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis
          animi voluptate vitae odio doloru.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={1200}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="wrapper"
        >
          {/* box1 */}
          <SwiperSlide className="box ">
            <div className="img">
              <img src={ava1} alt="img" />
            </div>
            <div className="txt">
              <h3>ouen miracle</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis accusamus aut excepturi odit omnis ut odio tempora,
                magnam quidem commodi fugiat unde voluptas .
              </p>
            </div>
          </SwiperSlide>
          {/* box2 */}
          <SwiperSlide className="box ">
            <div className="img">
              <img src={ava2} alt="img" />
            </div>
            <div className="txt">
              <h3>ouen miracle</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis accusamus aut excepturi odit omnis ut odio tempora,
                magnam quidem commodi fugiat unde voluptas .
              </p>
            </div>
          </SwiperSlide>
          {/* box3 */}
          <SwiperSlide className="box ">
            <div className="img">
              <img src={ava3} alt="img" />
            </div>
            <div className="txt">
              <h3>ouen miracle</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis accusamus aut excepturi odit omnis ut odio tempora,
                magnam quidem commodi fugiat unde voluptas .
              </p>
            </div>
          </SwiperSlide>
          {/* box4 */}
          <SwiperSlide className="box ">
            <div className="img">
              <img src={ava4} alt="img" />
            </div>
            <div className="txt">
              <h3>ouen miracle</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis accusamus aut excepturi odit omnis ut odio tempora,
                magnam quidem commodi fugiat unde voluptas .
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

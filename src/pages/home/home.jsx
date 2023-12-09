import "./home.scss";
import hero from "../../imgs/Female-Student-PNG-Image.png";
import about_img from "../../imgs/about.jpg";
import { Most_popular } from "../../component/popularTeacher";
import { Link } from "react-router-dom";

import company1 from "../../imgs/company1.png";
import company2 from "../../imgs/company2.png";
import company3 from "../../imgs/company3.png";
import company4 from "../../imgs/company4.png";
import company5 from "../../imgs/company5.jpeg";
import company6 from "../../imgs/company6.png";

import { icons } from "../../component/info";
import { all_data } from "../../component/info";

export const Home = () => {
  return (
    <div className="landing_page">
      <div className="home">
        <div className="wrapper">
          <div className="home_container container">
            <div className="txt">
              <p className="sub_title">learn & achive</p>
              <h1>Find the right online tutor for you.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam
                iure assumenda similique distinctio, voluptate recusandae
                veritatis pariatur nisi cupiditate ducimus.
              </p>
              <button>get started</button>
            </div>

            <div className="img">
              <img src={hero} alt="img" />
            </div>
          </div>

          <div className="col">
            <div className="box">
              <p>6 courses</p>
              <h4>programing language</h4>
            </div>

            <div className="box">
              <p>4 courses</p>
              <h4>idea discussion</h4>
            </div>

            <div className="box">
              <p>8 courses</p>
              <h4>web development</h4>
            </div>

            <div className="box">
              <p>6 courses</p>
              <h4> system administration</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about_container container">
          <div className="img">
            <img src={about_img} alt="img" />
          </div>
          <div className="txt">
            <h2>achieve your goals with activelearn</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              temporibus. Dolores molestiae distinctio consequuntur beatae
              recusandae.
            </p>
            <ul>
              <li>
                {icons.Done}
                Upgrade your organization
              </li>
              <li>
                {icons.Done}
                Access more that 100k courses
              </li>
              <li>
                {icons.Done}
                Learn latest skills
              </li>
              <li>
                {icons.Done}
                Gain free certificate
              </li>
            </ul>

            <div className="btn">
              <button>apply now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="teacher_section">
        <div className="teacher_container container">
          <h2>our most</h2>
          <h2> popular teachers</h2>
          <p>
            You don't have to struggle alone, you've got our assistances and
            help.
          </p>

          <Most_popular />
        </div>
      </div>

      <div className="trusted_companies container">
        <h3>trusted by 100 world's best companies</h3>

        <div className="wrapper">
          <div className="box">
            <img src={company1} alt="logo" />
          </div>

          <div className="box">
            <img src={company2} alt="logo" />
          </div>

          <div className="box">
            <img src={company3} alt="logo" />
          </div>

          <div className="box">
            <img src={company4} alt="logo" />
          </div>

          <div className="box">
            <img src={company5} alt="logo" />
          </div>

          <div className="box">
            <img src={company6} alt="logo" />
          </div>
        </div>
      </div>

      <div className="courses_section container">
        <h2>online courses</h2>
        <h2>for anyone, anywhere.</h2>
        <p className="title">
          You don't have to struggle alone, you've got our assistances and help.
        </p>
        <>
          <div className="courses_wrapper">
            {all_data[1].slice(0, 6).map((i, key) => {
              return (
                <Link to={`/${i.course_name}`} className="box">
                  <div key={key}>
                    <div className="img">
                      <img src={i.img} alt="img" />
                    </div>
                    <div className="txt">
                      <div className="row_1">
                        <p>
                          {icons.lesson}
                          {i.lessons} lessons
                        </p>
                        <p>
                          {icons.star} {i.rated}
                        </p>
                      </div>
                      <h3>{i.course_name}</h3>
                      <p className="overview">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Odit recusandae nam nostrum.
                      </p>
                      <div className="row_2">
                        <h4>
                          ${i.current_price} <span>${i.old_price}</span>
                        </h4>

                        <button>
                          view details <span>{icons.arrow}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
};

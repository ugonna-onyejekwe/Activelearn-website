import "./course_details.scss";

import { all_data } from "../../component/info";
import { icons } from "../../component/info";
import { useParams } from "react-router-dom";
import image from "../../imgs/ava1.jpg";
import img from "../../imgs/signin2.jpg";

export const Course_datail = () => {
  const { name } = useParams();

  return (
    <>
      <div className="page_header">
        <div className="container">
          <h2>details</h2>
          <div className="nav">
            <h3>home</h3>
            <h3>.</h3>
            <h3>courses</h3>
            <h3>.</h3>
            <h3>details</h3>
          </div>
        </div>
      </div>

      <div className="course_detail_container container">
        {all_data[1].map((i, key) => {
          if (i.course_name === name) {
            return (
              <>
                <div className="wrapper" key={key}>
                  <div className="col1">
                    <h2>{i.course_name}</h2>
                    <div className="info">
                      <div className="box1">
                        <img src={image} alt="img" />
                        <div className="txt">
                          <p>teacher</p>
                          <h4>elon gates</h4>
                        </div>
                      </div>
                      <div className="box2">
                        <p>last updated:</p>
                        <h4>july 24, 2022</h4>
                      </div>
                      <div className="box2">
                        <p>reviews</p>
                        <h4>
                          {i.rated}
                          {icons.star}
                        </h4>
                      </div>
                    </div>
                    <div className="course_img">
                      <img src={i.img} alt="img" />
                    </div>
                    <div className="course_overview">
                      <div className="overview">
                        <h3>course overview</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nulla impedit fuga doloribus odit commodi autem
                          iure nesciunt accusantium, beatae velit nisi debitis
                          sapiente quas quae quis? Quod quibusdam aliquam esse!
                          Facilis, maiores? Distinctio placeat doloremque
                          possimus quam, repellendus ex rem, amet eligendi nam
                          veniam deleniti? Nostrum illo, illum aut dolorem
                          labore quisquam expedita, corporis nobis voluptates,
                          ab quam voluptate magnam.
                        </p>
                      </div>

                      <div className="achievements">
                        <h3>what you will achieve?</h3>
                        <p>
                          <span>{icons.Done}</span> Upskill your organization.
                        </p>
                        <p>
                          <span>{icons.Done}</span> Access more than 300k online
                          course.
                        </p>
                        <p>
                          <span>{icons.Done}</span> Learn the latest skill.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col2">
                    <div className="img">
                      <img src={img} alt="img" />
                    </div>
                    <div className="txt">
                      <div className="price">
                        <h3>
                          ${i.current_price} <span>${i.old_price}</span>
                        </h3>
                        <p className="off">5% off</p>
                      </div>

                      <div className="about_course">
                        <div>
                          {icons.instructor}
                          <p>
                            instructor: <span>eleon famous</span>
                          </p>
                        </div>
                        <div>
                          {icons.lesson}
                          <p>
                            lectures: <span>{i.lessons}</span>
                          </p>
                        </div>

                        <div>
                          {icons.time}
                          <p>
                            duration : <span>6 weeks</span>
                          </p>
                        </div>

                        <div>
                          {icons.person}
                          <p>
                            enrolled: <span>20 students</span>
                          </p>
                        </div>

                        <div>
                          {icons.language}
                          <p>
                            language: <span>english</span>
                          </p>
                        </div>
                      </div>

                      <div className="btn">
                        <button>proceed course</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="second_wrapper">
                  <div className="instructors">
                    <h3>other instructors</h3>

                    <div className="con">
                      {all_data[0].slice(0, 3).map((i, key) => {
                        return (
                          <div key={key} className="instructor">
                            <img src={i.img} alt="img" />
                            <div>
                              <h4>{i.name}</h4>
                              <p>{i.position}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="share">
                    <h3>share :</h3>

                    <div className="con">
                      <span>{icons.facebook}</span>
                      <span>{icons.twitter}</span>
                      <span>{icons.youtube}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

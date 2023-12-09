import "./courses.scss";

import { Link } from "react-router-dom";
import { all_data } from "../../component/info";
import { icons } from "../../component/info";

export const All_courses = () => {
  return (
    <div className="all_course">
      <div className="page_header">
        <div className="container">
          <h2>All courses</h2>
          <div className="nav">
            <h3>home</h3>
            <h3>.</h3>
            <h3>courses</h3>
          </div>
        </div>
      </div>

      <div className="courses_wrapper container">
        {all_data[1].map((i, key) => {
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit recusandae nam nostrum.
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
    </div>
  );
};

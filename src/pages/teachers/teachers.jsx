import "./teachers.scss";

import { all_data } from "../../component/info";
import { icons } from "../../component/info";

export const All_teachers = () => {
  return (
    <>
      <div className="all_teachers">
        <div className="page_header">
          <div className="container">
            <h2>All teachers</h2>
            <div className="nav">
              <h3>home</h3>
              <h3>.</h3>
              <h3>teachers</h3>
            </div>
          </div>
        </div>

        <div className="teachers_wrapper container">
          {all_data[0].map((i, key) => {
            return (
              <>
                <div className="box" key={key}>
                  <div className="img">
                    <img src={i.img} alt="img" />
                  </div>
                  <div className="txt">
                    <h4>
                      {i.name} <span>{i.position}</span>
                    </h4>
                    <div className="icons_div">
                      <span>{icons.twitter}</span>
                      <span>{icons.instagram}</span>
                      <span>{icons.linkedin}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

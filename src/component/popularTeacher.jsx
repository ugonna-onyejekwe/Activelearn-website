import { all_data } from "./info";
import { icons } from "./info";

export const Most_popular = () => {
  return (
    <div className="teachers_wrapper">
      {all_data[0].slice(0, 6).map((i, key) => {
        console.log(i.img);
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
  );
};

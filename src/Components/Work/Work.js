import React from "react";

import "./Work.scss";
const Work = props => {
  const { items } = props;
  const WorksItems = items.map(item => {
    return (
      <div className="work" key={item.id}>
        <div className="info">
          <div className="head">
            <p className="position">{item.position}</p>
            <div className="nameDate">
              <p className="compName">{item.company}</p>
              <p className="duration">{item.date}</p>
            </div>
          </div>
          <div className="information">
            <ul>
              {item.info.map(bullet => {
                return <li key={bullet.id}>{bullet.text}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{WorksItems}</React.Fragment>;
};

export default Work;

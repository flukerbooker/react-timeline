import React from "react";

const TimelineItem = ({ data }) => (
  <div className="timeline__item">
    <div className="timeline__item__content">
      <div className="timeline__item__content__event">
        <span className="tag" style={{ backgroundColor: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
      </div>
      <h3>{data.text}</h3>
      <p>{data.description}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;

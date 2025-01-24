import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Roadmap.css";
import { milestones } from "./data";

const Roadmap = () => {
  return (
    <div className="d-flex mx-auto mh-75 overflow-y-auto timeline-box">
      <VerticalTimeline lineColor="var(--text-color-3)">
        {milestones.map((milestone, index) => (
          <VerticalTimelineElement
            key={milestone.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "var(--bg-color-2)",
              color: "var(--text-color)",
              border: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--bg-color-2)" }}
            date={milestone.date}
            dateClassName=""
            iconStyle={{
              border: "none",
              background: "var(--bg-color)",
              color: "#fff",
            }}
            icon={milestone.icon}
          >
           <h4 className="vertical-timeline-element-title">{milestone.title}</h4>
          <h5 className="vertical-timeline-element-subtitle">{milestone.subtitle}</h5>
          <p>
            {milestone.description}
          </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Roadmap;

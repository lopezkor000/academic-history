import Chevron from "../../../resources/icons/Chevron";
import { useState } from "react";

function CourseDetails(props) {
  let makeDetails = () => {
    let details = [];
    for (let [key, value] of Object.entries(props.details))
      details.push(
        <p key={key}>
          {key}: {String(value)}
        </p>
      );
    return details;
  };

  return (
    <div
      className="collapse text-start ps-5 border border-secondary"
      id={`${props.name}`}
    >
      {makeDetails()}
    </div>
  );
}

function CourseTab(props) {
  let [open, setOpen] = useState(true);

  return (
    <div className="py-2">
      <button
        className="btn w-100"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${props.name}`}
        onClick={async () => {
          setOpen(!open);
        }}
      >
        <div className="card-text row">
          <div className="col col-1">
            <Chevron open={open} />
          </div>
          <div className="col col-2">{props.name}</div>
          <div className="col col-7">{props.details.name}</div>
          <div className="col col-2">{props.details.grade}%</div>
        </div>
        <CourseDetails name={props.name} details={props.details} />
      </button>
    </div>
  );
}

export default CourseTab;

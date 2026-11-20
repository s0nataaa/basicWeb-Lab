import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <h2 className="emoji-name">{props.name}</h2>
      </dt>
      <dd className="emoji-meaning">{props.meaning}</dd>
    </div>
  );
}

export default Entry;

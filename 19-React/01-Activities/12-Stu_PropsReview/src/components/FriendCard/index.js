import React from "react";
import "./style.css";

function Friends(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> SpongeBob
          </li>
          <li>
            <strong>Occupation:</strong> Fry Cook
          </li>
          <li>
            <strong>Location:</strong> A Pinapple Under the Sea
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpongeBobCard;

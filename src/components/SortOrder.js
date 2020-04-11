import React from "react";

const SortOrder = (props) => {
  return (
    <div className="sortOrder">
      <ul>
        <li>
          <h2
            onClick={() => {
              props.updateSortOrder("np");
            }}
          >
            Now Playing
          </h2>
        </li>
        <li>
          <h2
            onClick={() => {
              props.updateSortOrder("p");
            }}
          >
            Popular
          </h2>
        </li>
        <li>
          <h2
            onClick={() => {
              props.updateSortOrder("tr");
            }}
          >
            Top Rated
          </h2>
        </li>
        <li>
          <h2
            onClick={() => {
              props.updateSortOrder("u");
            }}
          >
            Upcoming
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default SortOrder;

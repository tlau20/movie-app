import React from "react";

const SortOrder = (props) => {
  return (
    <div className="sortOrder">
      <ul>
        <li
          onClick={() => {
            props.updateSortOrder("np");
          }}
        >
          Now Playing
        </li>
        <li
          onClick={() => {
            props.updateSortOrder("p");
          }}
        >
          Popular
        </li>
        <li
          onClick={() => {
            props.updateSortOrder("tr");
          }}
        >
          Top Rated
        </li>
        <li
          onClick={() => {
            props.updateSortOrder("u");
          }}
        >
          Upcoming
        </li>
      </ul>
    </div>
  );
};

export default SortOrder;

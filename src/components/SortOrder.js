import React from "react";

const SortOrder = (props) => {
  return (
    <div className="sortOrder">
      <ul>
        <li
          onClick={() => {
            props.updateSortOrder("np");
          }}
          className={props.sortOrder === "np" ? "active" : undefined}
        >
          Now Playing
        </li>
        <li
          onClick={() => {
            props.updateSortOrder("p");
          }}
          className={props.sortOrder === "p" ? "active" : undefined}
        >
          Popular
        </li>
        <li
          onClick={() => {
            props.updateSortOrder("tr");
          }}
          className={props.sortOrder === "tr" ? "active" : undefined}
        >
          Top Rated
        </li>
        <li
          onClick={() => {
            props.updateSortOrder("u");
          }}
          className={props.sortOrder === "u" ? "active" : undefined}
        >
          Upcoming
        </li>
      </ul>
    </div>
  );
};

export default SortOrder;

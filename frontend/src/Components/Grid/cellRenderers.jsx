import React from "react";
import { Link } from "react-router-dom";

export const NameCellRenderer = (props) => {
  if (props.value) {
    console.log(props);
    return (
      <Link to={`/admin/guest-information?studentId=${props.data._id}`}>
        {props.value}
      </Link>
    );
  } else return <p></p>;
};

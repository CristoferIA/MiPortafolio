import React from "react";
import './headerTitle.css'

const HeaderTitle = ({title, myTitle}) => {
  return (
    <div className="header-title">
      <h1>{title}</h1>
      <h2>{myTitle}</h2>
    </div>
  );
};

export default HeaderTitle;

import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 max-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name}
          <span className="text-blue">{title}</span>
        </h1>
      </div>
    </div>
  );
};

export default Title;

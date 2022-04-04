import React from 'react';

const MainTitle = (props) => {
  return (
    <div>
      <h2 className="display-6 p-3 pb-0 bg-light text-secondary">
        <i className={`bi bi-${props.icon} me-2`}></i>
        <span>{props.name}</span>
      </h2>
      <hr />
    </div>
  );
};

export default MainTitle;

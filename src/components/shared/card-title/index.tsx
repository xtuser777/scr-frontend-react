import React from 'react';

const CardTitle = (props: { title: string }) => {
  return (
    <div className="card-title">
      <div className="card-title-container">
        <h4>
          <b>SCR - {props.title}</b>
        </h4>
      </div>
    </div>
  );
};

export default CardTitle;

import React from 'react';
const Records = ({ data }) => {
  return (
    <div>
      <ul>
        {data && data.map((item, index) => <li key={index}>Concept: {item.concept} Amount: {item.amount}</li>)}
      </ul>
    </div>
  );
};
export default Records;
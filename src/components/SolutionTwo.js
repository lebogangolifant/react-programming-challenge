import React from 'react';

import { DistanceData } from '../Data/DistanceData';
export const SolutionTwo = () => {
  return (
    <>
      <div className='solution-container'>
        {DistanceData.map((data, key) => {
          return <div key={key}>{data.ipv4 + ' , ' + data.geo}</div>;
        })}
      </div>
    </>
  );
};

export default SolutionTwo;

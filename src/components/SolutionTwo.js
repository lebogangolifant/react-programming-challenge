import React from 'react';

import { DistanceData } from '../Data/DistanceData';
export const SolutionTwo = () => {
  return (
    <>
      <SolutionHeader />
      <div className='solution-container'>
        {DistanceData.map((data, key) => {
          return <div key={key}>{data.latitude + ' , ' + data.longitude}</div>;
        })}
      </div>
    </>
  );
};

const SolutionHeader = () => {
  return (
    <div className='header'>
      <p>
        a function that takes in Latitude and Longitude.Returns sorted list of
        the 10 rows from data.json
      </p>
    </div>
  );
};

export default SolutionTwo;

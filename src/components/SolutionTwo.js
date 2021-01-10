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

const Distance = ({ latitude, longitude }) => {
  if (!latitude) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h4>{latitude}</h4>
          </td>
          <td>
            <h4>{longitude}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Distance;

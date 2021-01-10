import React from 'react';

import { SolutionThree } from './SolutionThree';

const ChallengeThree = () => {
  const handleClick = () => console.log('Clicked!');

  return (
    <div>
      <SolutionThree />
      <button type='button' onClick={handleClick}>
        view results
      </button>
    </div>
  );
};

export default ChallengeThree;

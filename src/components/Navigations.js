import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigations = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/ChallengeOne'>Challenge One</NavLink>
      <NavLink to='/ChallengeTwo'>Challenge Two</NavLink>
      <NavLink to='/ChallengeThree'>Challenge Three</NavLink>
    </div>
  );
};

export default Navigations;

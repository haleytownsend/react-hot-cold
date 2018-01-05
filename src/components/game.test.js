import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe ('Game />', () => {
//shallow - smoke test
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

//restartGame
  it('Can start a new game', () => {

  });

//makeGuess
  it('Can make guesses', () => {

  });

//generateAuralUpdate
  it('Can generate aural updates', () => {

  });
})

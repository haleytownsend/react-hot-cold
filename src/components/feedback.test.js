import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe (<'Feedback />', () => {
//shallow - smoke test
  it ('Renders without crashing', () => {
    shallow(<Feedback />);
  });
});

//shallow - smoke test
it ('Renders some feedback', () =>
  let TEST_FEEDBACK = 'You are listening to a game!';

  let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
    expect (wrapper.contains(TEST_FEEDBACK)).toEqual(true);
})

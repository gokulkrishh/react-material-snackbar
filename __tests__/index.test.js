'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SnackBar from '../src/index';

describe('SnackBar Component', () => {
  var component;
  it('should render correctly', () => {
    // Render the SnackBar component
    component = TestUtils.renderIntoDocument(
      <SnackBar 
      	show={true}
		    timer={10000}
      >
        <p>Loading...</p>
      </SnackBar>
    );

    expect(component.state.showSnackBar).toEqual(true);
    const pTag = TestUtils.findRenderedDOMComponentWithTag(component, 'p');
    expect(pTag.textContent).toEqual('Loading...');
  });
});

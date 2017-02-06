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
      	actionText="undo"
        onCloseCallback={() => {}}
		    show={true}
		    snackBarText="Offline"
        timer={10000}
      />
    );

    expect(component.state.showSnackBar).toEqual(true);
    const pTag = TestUtils.findRenderedDOMComponentWithTag(component, 'p');
    expect(pTag.textContent).toEqual('Offline');
  });


  it('click action button to close it', () => { 
    const snackbarActionButton = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    TestUtils.Simulate.click(snackbarActionButton);
    expect(component.state.showSnackBar).toEqual(false);
  });
});

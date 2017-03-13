'use strict'

import React from 'react';

import {
	Panel,
} from 'react-bootstrap';

export default class ResultPanel extends React.Component {
   render() {
    // please note that different from App component, this component only use "props" sent
    // down from its parent, which is App component
    const num1 = this.props.num1;
    const num2 = this.props.num2;

    return (
      <div id="result-panel-container">
        <Panel id="left-panel" header="Result panel header">
          The result is {num1+num2}
        </Panel>
      </div>
    );
  }
}
'use strict'

import React from 'react';

import {
	Panel,
	Grid,
	Row,
	Col,
  FormControl,
} from 'react-bootstrap';

export default class RightPanel extends React.Component {
  handleChange(event) {
    const value = event.target.value ? parseInt(event.target.value) : 0;
    console.log('RightPanel_handleChange: ',value);
    this.props.handleNumChange(value);
  }

  render() {
    return (
      <div id="right-panel-container">
      	<Panel id="right-panel" header="Right panel header">
          <FormControl
            id="right-panel-num-input"
            type="number"
            label="Right panel number"
            placeholder="Enter a number"
            onChange={::this.handleChange}
          />
        </Panel>
      </div>
    );
  }
}
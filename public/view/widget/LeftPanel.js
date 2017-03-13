'use strict'

import React from 'react';

import {
	Panel,
	Grid,
	Row,
	Col,
  FormControl,
} from 'react-bootstrap';

export default class LeftPanel extends React.Component {
  handleChange(event) {
    const value = event.target.value ? parseInt(event.target.value) : 0;
    console.log('LeftPanel_handleChange: ',value);
    this.props.handleNumChange(value);
  }

   render() {
      return (
        <div id="left-panel-container">
        	<Panel id="left-panel" header="Left panel header">
            <FormControl
              id="left-panel-num-input"
              type="number"
              label="Left panel number"
              placeholder="Enter a number"
              onChange={::this.handleChange}
            />
          </Panel>
        </div>
      );
   }
}
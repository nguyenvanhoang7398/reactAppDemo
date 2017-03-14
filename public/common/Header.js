'use strict'

import React from 'react';

const STYLES = {
   pageHeader: {
      backgroundColor: 'black',
      color: 'white',
   }         
}

export default class Header extends React.Component {

   render() {
   	return (
   		<div style={STYLES.pageHeader}>
   			<h1> Page header</h1>
   		</div>
   	);
	}
}


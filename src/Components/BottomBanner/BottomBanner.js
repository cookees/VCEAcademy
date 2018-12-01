import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

function BottomBanner(props) {
  const { classes } = props;
  return (
    <div>
      <div
        style={{
          width: window.innerWidth,
          backgroundColor: '#FFF',
          height: window.innerHeight * 0.05,
        }}

      >

      </div>
      <div
        style={{
          width: window.innerWidth,
          backgroundColor: '#273746 ',
          height: window.innerHeight * 0.30,
        }}

      >

      </div>
    </div>
  );
}

export default (BottomBanner);

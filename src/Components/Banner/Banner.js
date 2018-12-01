import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

function Banner(props) {
  const { classes } = props;
  return (
    <div >
      <img
      src="http://www.wallpapermaiden.com/wallpaper/21936/download/1366x768/flat-landscape-mountains-digital-art.jpg"
      alt="new"
      style={{
        width: window.innerWidth,
        height: window.innerHeight * 0.45,
        margin: 0
      }}

      />
    </div>
  );
}

export default (Banner);

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: window.innerWidth*0.12,
    marginRight: 20,
  },
  title: {
    paddingLeft: window.innerWidth*0.43,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  backtitle: {
    paddingLeft: - window.innerWidth*0.05,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titles: {
    marginLeft: window.innerWidth*0.24,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#e6e6e6",
    '&:hover': {
      backgroundColor: "#dcdcdc",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class HeaderBar extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="#fff">
          <Toolbar>
            {this.props.back === 1 ?
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
              onClick={() => {this.props.changing(0)}}
              >
              <ArrowBack />
              </IconButton> : null
            }
            {this.props.back === 1 ?
              <Typography className={classes.backtitle} variant="subtitle1" noWrap>
                Back
              </Typography> : null
            }
            {this.props.back === 1 ?
              <Typography className={classes.titles} variant="h6" noWrap>
                VCE Academy
              </Typography> : null
            }
            {this.props.back !== 1 ?
              <Typography className={classes.title} variant="h6" noWrap>
                VCE Academy
              </Typography>:null
            }
            <div className={classes.grow} />

            {this.props.working !== undefined ?
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={(event: object) =>
                  {
                    this.props.search(event.target.value)
                  }
                }
                defaultValue= {this.props.defaultval}
                autoFocus = {this.props.auto}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div> : null }


          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);

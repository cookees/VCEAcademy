import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import HeaderBar from '../HeaderBar/HeaderBar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  root: {
    paddingTop: 25,
    display: 'flex',
    marginLeft: window.innerWidth * 0.42,
    paddingBottom: 25,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Polynomials extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { classes } = this.props;
    return (
      <div>
      <HeaderBar/>
      <div className={classes.root}>
      <Card>
        <Typography style = {{paddingTop: 15, paddingLeft: 10}} align = 'left'>
        Introduction to Polynomials
        </Typography>
        <Typography style = {{paddingTop: 15, paddingLeft: 10}} align = 'left'>
        Learn
        </Typography>

        <CardContent>

        <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"What are Polynomials?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            A polynomial is any combination of power functions where n is equal to a positive integer or zero.

            Polynomial Types

            A degree one polynomial is where there is x to the power of one plus any real number, a linear function
            A degree two polynomial is the same a quadratic function
            A degree three polynomial is called a cubic.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        </CardContent>
      </Card>
      </div>
      </div>
    );
  }
}

Polynomials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Polynomials);

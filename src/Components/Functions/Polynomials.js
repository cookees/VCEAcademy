import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FileCopy from '@material-ui/icons/FileCopy';
import PlayArrow from '@material-ui/icons/PlayArrow';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import YouTube from 'react-youtube';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    paddingTop: 25,
    display: 'flex',
    marginLeft: window.innerWidth * 0.14,
    paddingBottom: 25,
  },
  paper: {
    marginRight: theme.spacing.unit * 3,
    minWidth: window.innerWidth * 0.2
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Polynomials extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openvideo: false,
      events: null,
      menu: 0,
      check: false,
    };
    this._onReady = this._onReady.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpenVideo = () => {
    this.setState({ openvideo: true });
  };

  handleCloseVideo = () => {
    this.setState({ openvideo: false });
    this.state.events.target.pauseVideo();
  };

  goNext = () => {
    this.setState({ openvideo: false });
    this.state.events.target.pauseVideo();
    this.setState({ open: true });
  }
  _onReady(event) {
    // access to player in all event handlers via event.target

    this.setState({
      events: event
    })
    //event.target.pauseVideo();
  }

  componentWillUnmount(){

    if (this.state.menu === 0){
      this.props.change(0)
    }
  }

  async navigate(number){
    await this.setState({ menu: number });
    await this.setState({ check: true });
    this.props.change(number)
  }

  render(){
    const opts = {
      height: '370',

      width: window.innerWidth * 0.50,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const { classes } = this.props;
    return (
      <div>
      <HeaderBar back={1} title ={'Functions & Graphs'} changing={this.props.change} moved={this.handleFilterUpdate}/>
      <div className={classes.root}>
      <Card className={classes.paper}>
          <Typography style = {{paddingTop: 21, paddingLeft: 15}} variant ='subheading' component="h4" align = 'left'>
          Functions & Graphs
          </Typography>
          <MenuList>
            <MenuItem onClick={() => {this.props.change(2)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              &gt;&nbsp;Polynomials Introduction
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(3)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              General Cubic Function
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(4)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Sine and Cosine
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(5)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Tangent
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(6)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Exponential Functions
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(7)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Logarithmic Functions
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(8)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Hybrid / Absolute Value Functions
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(9)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Addition of Functions
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(10)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Fraction Power Functions
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(11)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Integer Power Functions
              </Typography>
            </MenuItem>
          </MenuList>
        </Card>
      <Card
        style={{
          minWidth: window.innerWidth * 0.5,
        }}
      >
        <Typography style = {{paddingTop: 15, paddingLeft: 50}} variant ='h6' align = 'left'>
        Introduction to Polynomials
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="Polynomials Intro" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Polynomials Intro" />
        </ListItem>
        </List>

        <Dialog
          open={this.state.openvideo}
          TransitionComponent={Transition}
          keepMounted
          fullWidth={true}
          maxWidth = {'md'}
          onClose={this.handleCloseVideo}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" style = {{textAlign: "center"}}>
            {"What are Polynomials?"}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId="88hGRndkeC0"
              opts={opts}
              onReady={this._onReady}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseVideo} color="primary">
              Close
            </Button>
            <Button onClick={this.goNext} color="primary">
              Next Article
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          fullWidth={true}
          maxWidth = {'md'}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" style = {{textAlign: "center"}}>
            {"What are Polynomials?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="subtitle1" gutterBottom>
            A polynomial is any combination of power functions where n is equal to a positive integer or zero.
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3Da_%7B0%7D%2Ba_%7B1%7Dx%2Ba_%7B2%7D%2Bx%5E%7B2%7D%2B.......%2Ba_%7Bn%7Dx%5E%7Bn%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <Typography variant="h6" >
            Polynomial Types<br/><br/>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            - A degree one polynomial is where there is x to the power of one plus any real number, a linear function<br/>
            - A degree two polynomial is the same a quadratic function<br/>
            - A degree three polynomial is called a cubic.<br/>
            </Typography>
            <br/>
            <Typography variant="h6" >
            Turning and Inflection Points<br/><br/>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            When a function has an even amount of turning points at the same point, we have a point of inflection in our graph.<br/><br/>

            A point of inflection is characterised by a gradient which approaches zero and is 0 at its point, just like a turning point. However unlike the turning point it then continues in the same direction instead of reversing.
            <br/>
            </Typography>
            <br/>
            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funcpoly1-300x300.jpg"
            alt="new"
            />
            <br/><br/>
            <Typography variant="subtitle1" gutterBottom>
            For the blue cubic function there is a point of inflection at (-2,0), since both the turning points are located at the same point. Note how the function flattens out and then continues in the same direction. A cubic function is also able to have two turning points at different co-ordinates instead of a point of inflection.
            <br/><br/>
            For the red quadratic function, the turning point we can see at (2,0). Note how the function flattens out and then reverses direction.
            <br/>
            </Typography>
            <br/>
            <Typography variant="h6" >
            Turning Point Form<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Sometimes a polynomial equation may appear in a form similar to the turning point form of a quadratic, but its not possible to display all polynomials in this form unlike a quadratic:            <br/><br/>
            For the red quadratic function, the turning point we can see at (2,0). Note how the function flattens out and then reverses direction.
            <br/>
            </Typography>
            <br/>
            <img
            src="http://s0.wp.com/latex.php?latex=y%3Da%28x%2Bh%29%5E%7Bn%7D%2Bk&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            This form lets us know where the turning point or the point of inflection is straight away.
            <br/><br/>
            If n is a positive odd integer greater or equal to 3 then we know that it will be a point of inflection at (-h,k). In this form all the turning points are located in the one spot.
            <br/><br/>
            If n is a positive even integer greater or equal to 2 then we know that it will be a turning point at (-h,k). This is the same form as our turning point form for quadratics.
            <br/><br/>
            To draw the rest of the graph we go through the same process as the quadratic of setting x to zero to calculate the y intercept and then y to zero to calculate the x intercept.
            </Typography>
            <br/>

            <Typography variant="h6" >
            Example<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            For example if we were required to sketch:<br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3D2%28x%2B1%29%5E%7B3%7D%2B2&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 1: Locate the point of Inflection
            <br/><br/>
            As the function is in turning point form and to the power of an odd number the x co-ordinate of the point of inflection is easy to find. In this case it is (-1,2).
            <br/><br/>
            Step 2: Find the y intercept, by setting x to zero
            </Typography>
            <br/>
            <img
            src="http://s0.wp.com/latex.php?latex=y%3D2%280%2B1%29%5E%7B3%7D%2B2%5Cnewline+%3D4&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 3: Find the x intercept by setting y to zero
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3D2%28x%2B1%29%5E%7B3%7D%2B2%3D0%5Cnewline+2%28x%2B1%29%5E%7B3%7D%3D-2%5Cnewline+x%2B1%3D%5Csqrt%5B3%5D%7B%5Cfrac%7B-2%7D%7B2%7D%7D%5Cnewline+x%3D%5Csqrt%5B3%5D%7B-1%7D-1%3D-2&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 4: Connect the dots in a polynomial shape like so:
            <br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funcpoly2-300x300.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Receiving a polynomial in turning point form is easiest to sketch as it will always be either the S shape of the cubic above when is an odd number or the U shape when n is an even number. However, since not all polynomials can be put in this form, they are not all this easy to sketch.
            <br/><br/>
            </Typography>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleClose} disabled color="primary">
              Next Article
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

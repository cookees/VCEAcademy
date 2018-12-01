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

class Sine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openvideo: false,
      events: null,
      menu: 0,
      check: false,
      openAgain: false,
    };
    this._onReady = this._onReady.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseAgain = () => {
    this.setState({ openAgain: false });
  };

  handleClickOpenAgain = () => {
    this.setState({ openAgain: true });
  };

  handleClickOpenVideo = () => {
    this.setState({ openvideo: true });
  };

  handleCloseVideo = () => {
    this.setState({ openvideo: false });
    this.state.events.target.pauseVideo();
  };

  handleCloseMore = () => {
    this.setState({ open: false });
    this.setState({ openAgain: true });
  }

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
            <MenuItem onClick={() => {this.navigate(2)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Polynomials Introduction
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.navigate(3)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              General Cubic Function
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {this.props.change(4)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              &gt;&nbsp;Sine and Cosine
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
        Sine and Cosine
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="Sine and Cosine" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Sine and Cosine" />
        </ListItem>
        <ListItem onClick={this.handleClickOpenAgain} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Sin and Cos Equations" />
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
            {"Sine and Cosine"}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId="VHQufGkss5g"
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
            {"Sine and Cosine"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <Typography variant="h6" >
            Unit Circle<br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/unitcircle.gif"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            The angle, theta, is measured from the positive x-axis line in a reverse clockwise direction and the measurement unit is radians. Each quadrant is divided up into 90 degree quarters which are the equivalent of &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5Cfrac%7B%5Cpi%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp; radians. From this graph the sin function will be positive for the first two quadrants, which is the equivalent of &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5B0%2C%5Cpi%5D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;.
            <br/><br/>
            For cos it will be positive in the first and fourth quadrant, as that is where the x-axis is positive. This will be in the range of &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5B0%2C%5Cfrac%7B%5Cpi%7D%7B2%7D%5D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp; & &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5B%5Cfrac%7B3%5Cpi%7D%7B2%7D%2C2%5Cpi%5D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp; . Theta can also take on a negative value, which is just when it moves in an anti-clockwise direction. There for we know for cos it will be positive in the range of &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5B-%5Cfrac%7B%5Cpi%7D%7B2%7D%2C%5Cfrac%7B%5Cpi%7D%7B2%7D%5D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;
            <br/><br/>
            Sin and cos will both have the same maximum, one and the same minimum, negative one. The difference between the minimum and the average and the maximum and the average is the amplitude. In the basic sin and cos functions the amplitude is one.
            <br/><br/>
            The period of the function is how long the graph takes to perform a full circular rotation and in the basic function that is 2π.
            <br/><br/>
            Once the original pattern of a sine and cos function, the starting point, the period and the amplitude is known then they are able to be sketched.
            <br/><br/>
            Lets take a look at the basic sine and cos functions.
            </Typography>
            <br/>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/trig1-300x300.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Here we can see that the cos function is the same as a sin function but shifted slightly to the right by  &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5Cfrac%7B%5Cpi%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;. The same pattern for each function is repeated continuously.
            <br/><br/>
            </Typography>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleCloseMore} color="primary">
              Next Article
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={this.state.openAgain}
          TransitionComponent={Transition}
          keepMounted
          fullWidth={true}
          maxWidth = {'md'}
          onClose={this.handleCloseAgain}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" style = {{textAlign: "center"}}>
            {"Sin and Cos Equations"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <Typography variant="subtitle1" gutterBottom>
            Once we have the basic form of the sin and cos functions in our head, it’s time to look at the more complicated sin and cos equations.
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3Da%5Csin%28n%28t%5Cpm%5Cepsilon%29%29%5Cpm+b&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3Da%5Ccos%28n%28t%5Cpm%5Cepsilon%29%29%5Cpm+b&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            In these equations epsilon gives us the shift along the x axis, where it moves in the reverse direction of the epsilon sign. The b component of the equation is the shift either up or down on the y axis.
            <br/><br/>
            The a determines the amplitude of the equation, which is as we said before the difference between the max or min and the mean.
            <br/><br/>
            We also need to determine the period of the function, which is how often the pattern repeats itself. The formula for the period is:
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=Period+%3D%5Cfrac%7B2%5Cpi%7D%7B%5Clvert+n+%5Crvert%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            The final thing we look out for is for any reflections.  If there is a negative sign in front of the a the function will be reflected in the x-axis. If there is a negative sign in front of the n then there will be a reflection in the y axis.
            </Typography>
            <br/>


            <Typography variant="h6" gutterBottom>
            Find the local Minimum and Maximums
            <br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Example
            <br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Lets take a look at a question which asks us to sketch the function of
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%3A%5B-%5Cpi%2C%5Cpi%5D+%5Crightarrow+R%2C+f%28x%29%3D5cos%282%28x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 1 Calculate the amplitude
            <br/><br/>
            This is the number in front of cos, 5. Since there is no shift in the y direction then we know also that our min and maximum will be negative 5 and 5
            <br/><br/>
            Step 2 Calculate the period
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=Period+%3D%5Cfrac%7B2%5Cpi%7D%7B%5Clvert+2+%5Crvert%7D%3D%5Cpi&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 3 Determine the y intercept let x=0
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%280%29%3D5cos%282%280%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29%29%5Cnewline+%3D5cos%28%5Cfrac%7B2%5Cpi%7D%7B3%7D%29+%3D-%5Cfrac%7B5%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 4 Find the x intercepts over the range, let f(x)=0
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=5cos%282%28x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29%29%3D0%5Cnewline+2%28x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29%3Dcos%5E%7B-1%7D%280%29%5Cnewline+2%28x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%29%3D%5Cfrac%7B-3%5Cpi%7D%7B2%7D%2C%5Cfrac%7B-%5Cpi%7D%7B2%7D%2C%5Cfrac%7B%5Cpi%7D%7B2%7D%2C%5Cfrac%7B3%5Cpi%7D%7B2%7D%2C+%5Cfrac%7B5%5Cpi%7D%7B2%7D%5Cnewline+x%2B%5Cfrac%7B%5Cpi%7D%7B3%7D%3D%5Cfrac%7B-3%5Cpi%7D%7B4%7D%2C%5Cfrac%7B-%5Cpi%7D%7B4%7D%2C%5Cfrac%7B%5Cpi%7D%7B4%7D%2C%5Cfrac%7B3%5Cpi%7D%7B4%7D%2C%5Cfrac%7B5%5Cpi%7D%7B4%7D%5Cnewline+x%3D%5Cfrac%7B-13%5Cpi%7D%7B12%7D%2C%5Cfrac%7B-7%5Cpi%7D%7B12%7D%2C%5Cfrac%7B-%5Cpi%7D%7B12%7D%2C%5Cfrac%7B5%5Cpi%7D%7B12%7D%2C%5Cfrac%7B11%5Cpi%7D%7B12%7D+&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            However the domain is &nbsp;<img
            src="http://latex2png.com/output//latex_8c629ecb8ee3a2c059e2ca846842284e.png"
            alt="new"
            />&nbsp;
            <br/><br/>
            Therefore: &nbsp;<img
            src="http://latex2png.com/output//latex_675744c33e9a8b313e02f9fc8abb5eb6.png"
            alt="new"
            />&nbsp;
            <br/><br/>
            Step 5 Find the start point of the function
            <br/><br/>
            This is a shift of &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5Cfrac%7B%5Cpi%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp; to the left.
            <br/><br/>
            Step 6 Sketch the function using the starting point and the x and y intercepts, amplitude and period
            <br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/trig2-300x300.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Note that the pattern repeats itself twice which is what we expect from a period of pi.
            <br/><br/>
            In the exam it is perfectly acceptable to also label your x-axis as pi fractions and much easier to do when sketching by hand.
            <br/><br/>
            </Typography>


            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseAgain} color="primary">
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

Sine.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sine);

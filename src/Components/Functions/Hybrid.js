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

class Hybrid extends React.Component {

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
            <MenuItem onClick={() => {this.props.change(8)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              &gt;&nbsp;Hybrid / Absolute Value Functions
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
        Hybrid and Absolute Value Functions
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="Hybrid and Absolute Functions" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Hybrid Functions" />
        </ListItem>
        <ListItem onClick={this.handleClickOpenAgain} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Absolute Value Functions" />
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
            {"Hybrid and Absolute Functions"}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId="N_5ZKvWzZjY"
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
            {"Hybrid Functions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">



            <Typography variant="h6" >
            Hybrid Functions<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            A hybrid function is where there are different rules or functions over different areas of the domain. This is used to model real life situations where it is too difficult to find the one function to model all of the data. Hybrid functions appear like this:
            <br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funchybrida.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            In order to sketch this graph we need to break it down into the separate domains and draw the function between their end points.
            <br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funchybrid-300x300.jpg"
            alt="new"
            /><br/><br/>

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
            {"Absolute Value Functions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <Typography variant="h6" >
            Absolute Value Functions<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Now we will look at the absolute value function. The absolute value, also known as the modulus, function is used to define a number that is always positive. It can be shown as a hybrid function such as:
            </Typography>
            <br/>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funchybridb.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Absolute value of x means that for every positive value of x the function just equals x and is always positive. For every negative value of x the function is equals negative x and due to the double negative will now be positive.

            </Typography>
            <br/>

            <Typography variant="h6" >
            Absolute Function Properties<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Absolute value functions have a number of properties which are important to know, however they are fairly intuitive, such as this. |ab|=|a||b|
            </Typography>
            <br/>

            <Typography variant="subtitle1" gutterBottom>
            The absolute value of two numbers which have been multiplied together is the same as the absolute value of the two numbers which are then multiplied together.

            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=%5Clvert+%5Cfrac%7Ba%7D%7Bb%7D+%5Crvert+%3D+%5Cfrac%7B%5Clvert+a%5Crvert%7D%7B%5Clvert+b%5Crvert%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            The absolute value of two numbers which have been divided by each other is the same as the absolute value of the two numbers which are then divided together.
            <br/><br/>
            The absolute value of two numbers which have been together is less or equal to the absolute value of the two numbers which are then added together.
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=%5Clvert+a%2Bb+%5Crvert+%5Cleq+%5Clvert+a%5Crvert+%2B+%5Clvert+b+%5Crvert&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="h6" gutterBottom>
            Practice Exam question (2012)
            <br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Sketch the graph of:
            <br/><br/>
            </Typography>


            <img
            src="http://s0.wp.com/latex.php?latex=f%3A%5B0%2C5%5D+%5Crightarrow+R%2C+f%28x%29%3D+-+%5Clvert+x-3+%5Crvert+%2B2&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            And to label the axes intercepts and endpoints of the graph.
            <br/><br/>
            First we can work out the endpoints of the function, which will give us the y intercept as we

            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%280%29%3D-%5Clvert+0-3+%5Crvert+%2B2+%3D+-1&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%285%29%3D-%5Clvert+5-3+%5Crvert+%2B2+%3D+0&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>


            <Typography variant="subtitle1" gutterBottom>
            We know that whatever we take as the absolute value ofn in this function, x minus 3, will always be negative due to the sign out the front.
            <br/><br/>
            Therefore the function will decrease as the value of x moves away from three, with the maximum occurring when x equals 3 and the absolute value is zero and the function equals 2. We also know that the function has a gradient of one.
            <br/><br/>
            The function can also be re-written like so:
            <br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funchybridd.jpg"
            alt="new"
            /><br/><br/>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funchybridc.jpg"
            alt="new"
            /><br/><br/>

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

Hybrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hybrid);

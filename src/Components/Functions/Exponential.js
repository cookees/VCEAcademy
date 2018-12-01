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

class Exponential extends React.Component {

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
            <MenuItem onClick={() => {this.props.change(6)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              &gt;&nbsp;Exponential Functions
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
        Exponential Functions
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="Exponential Functions" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Exponential Functions" />
        </ListItem>
        <ListItem onClick={this.handleClickOpenAgain} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Transformations and Examples" />
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
            {"Exponential Functions"}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId="hstPY0RwAh8"
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
            {"Exponential Functions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3Da%5E%7Bx%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="h6" >
            Exponential Function Rules<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            There are a number of rules that we can apply to any basic exponential function such as this.
            <br/><br/>
            Number one:
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28-1%29%3D%5Cfrac%7B1%7D%7Ba%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Number two:
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%280%29%3D1&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Number three:
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%281%29%3Da&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Number four is that the x axis is a horizontal asymptote.
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=x+%5Crightarrow+%5Cinfty%5E%7B-%7D%2C+f%28x%29+%5Crightarrow+0&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Number five is that the domain includes all real numbers.
            <br/><br/>
            Number six is that the range of the function is all positive real numbers exclusive of zero
            <br/><br/>
            Number seven is that it is only a one to function, which means that every point on the x axis corresponds to one and only one point on the y axis
            <br/><br/>
            If we follow these rules the basic function is not hard at all to sketch.
            <br/><br/>
            </Typography>


            <Typography variant="h6" >
            The Exponential Function<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            The main exponential function is euler’s number to the power of x ,which is known as the exponential function
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3De%5E%7Bx%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            To graph this we can just follow the same rules as the exponential functions.
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
            {"Transformations"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <Typography variant="h6" >
            Translations<br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3Da%5E%7Bx-h%7D%2Bk&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            - h represents the shift along the x-axis
            <br/>
            - k the shift along the y-axis
            <br/><br/>
            So the rules above will face a shift along this axis
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=%28-1%2C%5Cfrac%7B1%7D%7Ba%7D%29+%5Crightarrow+%28-1%2Bh%2C%5Cfrac%7B1%7D%7Ba%7D%2Bk%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <img
            src="http://s0.wp.com/latex.php?latex=%280%2C1%29+%5Crightarrow+%28h%2C1%2Bk%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <img
            src="http://s0.wp.com/latex.php?latex=%281%2Ca%29+%5Crightarrow+%281%2Bh%2Ca%2Bk%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="h6" >
            Reflections<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            The graph can be reflected in the x-axis by placing a negative in front of the function to get:

            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3D-e%5E%7Bx%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            The graph can be reflected in the y-axis by placing a negative in front of x in the function to get:
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3De%5E%7B-x%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Here we can see the black function is a reflection of the blue function in the x axis and the red function is a reflection of the blue function in the x axis.
            </Typography>
            <br/>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funcexp1-300x300.png"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            It is also possible for a function to be reflected in both the x and y axis.
            <br/><br/>
            If there are translations applied to the function as well, you must first reflect the function before you translate them.
            <br/><br/>
            </Typography>

            <Typography variant="h6" gutterBottom>
            Dilation
            <br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            If the function has a dilation factor in front of it, say k. Then the image is multiplied by this factor.


            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=%28-1%2C%5Cfrac%7B1%7D%7Ba%7D%29+%5Crightarrow+%28-1%2C%5Cfrac%7Bk%7D%7Ba%7D%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <img
            src="http://s0.wp.com/latex.php?latex=%280%2C1%29+%5Crightarrow+%280%2Ck%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <img
            src="http://s0.wp.com/latex.php?latex=%281%2Ca%29+%5Crightarrow+%281%2Cka%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            If the function has a dilation factor of x divided by k. Then the image is dilated by a factor k from the y axis.
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=%28-1%2C%5Cfrac%7B1%7D%7Ba%7D%29+%5Crightarrow+%28-k%2C%5Cfrac%7B1%7D%7Ba%7D%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <img
            src="http://s0.wp.com/latex.php?latex=%280%2C1%29+%5Crightarrow+%280%2C1%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>
            <img
            src="http://s0.wp.com/latex.php?latex=%281%2Ca%29+%5Crightarrow+%28k%2Cka%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>


            <Typography variant="h6" gutterBottom>
            Exponential Function Examples
            <br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Lets now have a look at an example, such as the function:


            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3De%5E%7B1-x%7D%2B3&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            This we can rewrite quickly as:
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3De%5E%7B-%28x-1%29%7D%2B3&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Straight away we can see that there is a reflection in the y-axis, no dilation, but a shift of the graph of one to the right and three up.
            <br/><br/>
            Now we just need to apply this to our basic e function
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=%28-1%2C%5Cfrac%7B1%7D%7Be%7D%29+%5Crightarrow+%280%2Ce%2B3%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <img
            src="http://s0.wp.com/latex.php?latex=%280%2C1%29+%5Crightarrow+%281%2C4%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <img
            src="http://s0.wp.com/latex.php?latex=%281%2Ce%29+%5Crightarrow+%282%2C%5Cfrac%7B1%7D%7Be%7D%2B3%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            The asymptote will move up to x=3
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funcexp-300x300.jpg"
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

Exponential.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exponential);

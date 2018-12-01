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
            <MenuItem onClick={() => {this.props.change(5)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              &gt;&nbsp;Tangent
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
        Tangent
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="Tangent" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Tangent" />
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
            {"Tangent"}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId="ohT1pHnaNQw"
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
            {"Tangent"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">


            <img
            src="http://s0.wp.com/latex.php?latex=tan%28%5Ctheta%29%3D%5Cfrac%7Bsin%28%5Ctheta%29%7D%7Bcos%28%5Ctheta%29%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Therefore tan theta will equal zero whenever &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=sin%28%5Ctheta%29%3D0&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=sin%28%5Ctheta%29%3D0+%5Cnewline+%5Ctheta%3D+...%2C-%5Cpi%2C0%2C%5Cpi.....%5Cnewline+%5Ctheta%3D+k%5Cpi&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>


            <Typography variant="subtitle1" gutterBottom>
            Where k is equal to any positive or negative integer and zero
            <br/><br/>
            It will be undefined when cos(\theta)=0 and an asymptote will occur there.
            </Typography>
            <br/>
            <img
            src="http://s0.wp.com/latex.php?latex=cos%28%5Ctheta%29%3D0+%5Cnewline+%5Ctheta%3D+...%2C-%5Cfrac%7B%5Cpi%7D%7B2%7D%2C%5Cfrac%7B%5Cpi%7D%7B2%7D%2C%5Cfrac%7B3%5Cpi%7D%7B2%7D.....%5Cnewline+%5Ctheta%3D+%282k%2B1%29%5Cfrac%7B%5Cpi%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />
            <br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Where k is equal to any positive or negative integer and zero
            </Typography>
            <br/>
            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/functrig1a-300x300.png"
            alt="new"
            />
            <br/><br/>

            <Typography variant="h6" >
            Turning Point Form<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            The graph shows that as &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=cos%28%5Ctheta%29+%5Crightarrow+0&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp; , &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=f%28x%29+%5Crightarrow+%5Cinfty%5E%7B%2B%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;if the angle is in the first and third quadrants, where tan is positive.
            <br/><br/>
            It will get closer to negative infinity if the angle is in the second and fourth quadrants, under the same conditions.
            </Typography>
            <br/>

            <Typography variant="h6" >
            Example<br/><br/>
            </Typography>


            <Typography variant="subtitle1" gutterBottom>
            So let’s take a look at the first multiple choice question from the 2013 exam 2.
            </Typography>
            <br/>


            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/tan1-300x200.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 1 calculate the period, which this question asks us to do and remember our formula for calculating the tan period is slightly different to when we calculuated sin and cos<br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=Period%3D%5Cfrac%7B%5Cpi%7D%7B2%5Cpi%7D%3D%5Cfrac%7B1%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            So the answer is C.
            <br/><br/>
            From the period, as it is usually pi we can see that the function has been dialated by a factor of a &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5Cfrac%7B1%7D%7B2%5Cpi%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp; from the y-axis.
            <br/><br/>
            Step 2: Find the y intercept let x=0
            </Typography>
            <br/>


            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3D-3tan%282%5Cpi+x%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 3 Find the x axis intercepts
            <br/><br/>
            Divide the tan theta x axis intercepts by
            &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5Cfrac%7B1%7D%7B2%5Cpi%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=x-int%3D%5Cfrac%7Bk%5Cpi%7D%7B2%5Cpi%7D%3D%5Cfrac%7Bk%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Where k is any whole integer for example:
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=x-int%3D-%5Cfrac%7B1%7D%7B2%7D%2C0%2C%5Cfrac%7B1%7D%7B2%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 4: Find the x asymptotes

            Apply the same dilation factor of
            &nbsp;<img
            src="http://s0.wp.com/latex.php?latex=%5Cfrac%7B1%7D%7B2%5Cpi%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            />&nbsp;
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=x-asym%3D%5Cfrac%7B%282k%2B1%29%5Cpi%7D%7B2%5Ctimes2%5Cpi%7D%3D%5Cfrac%7B2k%2B1%7D%7B4%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Where k is any whole integer number. Therefore:
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=x-asym%3D-%5Cfrac%7B1%7D%7B4%7D%2C%5Cfrac%7B1%7D%7B4%7D%2C%5Cfrac%7B3%7D%7B4%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 4: Dilation from the x-axis
            <br/><br/>
            It is also worth noting that the three at the front of the tan the function will stretch the function from the x-axis by a factor of three. Therefore at our values where tan normally equals one, halfway between the intercept and the asymptote will now equal three.
            <br/><br/>
            Step 5: Apply any reflections
            <br/><br/>
            Also due to the negative sign out the front the graph will reflect the graph in the x axis.
            <br/><br/>
            </Typography>
            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/tan2-300x300.jpg"
            alt="new"
            /><br/><br/>

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

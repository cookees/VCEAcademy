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

class Cubics extends React.Component {

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
            <MenuItem onClick={() => {this.props.change(3)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              General Cubic Function
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Sine and Cosine
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Tangent
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Exponential Functions
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Logarithmic Functions
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Hybrid / Absolute Value Functions
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              Fraction Power Functions
              </Typography>
            </MenuItem>
            <MenuItem>
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
        General Cubic Function
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="General Cubic Function" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="General Cubic Function" />
        </ListItem>
        <ListItem onClick={this.handleClickOpenAgain} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Sign Diagram" />
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
              videoId="rcDJRBIy_ik"
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
            {"General Cubic Function"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <Typography variant="h6" >
            General Cubic Function<br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=y%3Dax%5E%7B3%7D%2Bbx%5E%7B2%7D%2Bcx%2Bd&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            In this form the y intercept is easy to find since if we set x=0, y =d.
            <br/><br/>
            To calculate the x intercepts is much more difficult. Since we know that a cubic will always end up heading in the direction that it starts in, either through a point of inflection or two turning points, we know there will be at least one x intercept. The easiest way to find the intercepts is through substitution.
            <br/><br/>
            The turning points can only be found through use of differentiation or using a calculator.
            </Typography>
            <br/>

            <Typography variant="h6" >
            Example<br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3D-x%5E%7B3%7D%2B19x-30&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 1: Find y-intercept, let x=0
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%280%29%3D-%280%29%5E%7B3%7D%2B19%280%29-30%3D-30&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Step 2: Find x intercept, let y=0
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3D-x%5E%7B3%7D%2B19x-30%3D0&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            The easiest way is to factorise the equation is to start substituting in values of x and seeing if the equation equals zero.
            <br/><br/>
            Let’s try x=1
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%281%29%3D-1%5E%7B3%7D%2B19%5Ctimes+1-30%3D-12&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Since the function does not equal zero then we know that one is not a factor so we try another number.
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%282%29%3D-2%5E%7B3%7D%2B19%5Ctimes+2-30%3D0&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Therefore two is a factor of the function. If we take out x minus two from the function then we get
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3D%28x-2%29%28-x%5E%7B2%7D-2x%2B15%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            We can then use either the quadratic formula or continue to guess and check other factors.
            <br/><br/>
            Let’s try 3 given it is a factor of 15
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%283%29%3D-3%5E%7B3%7D%2B19%5Ctimes+3-30%5Cnewline+%3D+-27%2B57-30%3D0&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Then we can take out (x-3) from the equation
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28x%29%3D%28x-2%29%28-x%2B3%29%28x%2B5%29&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Therefore the x-intercepts are 2,3 and -5
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
            {"Sign Diagram"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <Typography variant="h6" >
            Determine the Shape<br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            A sign diagram gives a general idea of the shape of a cubic by telling us where the function is positive or negative.
            <br/><br/>
            We start by substituting in points between the x intercepts
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28%5Cfrac%7B5%7D%7B2%7D%29%3D-%28%5Cfrac%7B5%7D%7B2%7D%29%5E%7B3%7D%2B19%28%5Cfrac%7B5%7D%7B2%7D%29-30+%5Cnewline+%5Cnewline+%3D+-%5Cfrac%7B125%7D%7B8%7D%2B%5Cfrac%7B95%7D%7B2%7D-30%3D%5Cfrac%7B15%7D%7B8%7D&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            This tells us the function will be positive for 2>x>3.
            <br/><br/>
            We already know a point between -5 and 2, the y intercept, which is negative 30. Therefore we know that the function will be negative between these two points.
            <br/><br/>
            Now we just need to work out whether the function is positive or negative before and after the x intercepts.
            </Typography>
            <br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28-6%29%3D-%28-6%29%5E%7B3%7D%2B19%28-6%29-30+%5Cnewline+%3D+216-114-30%3D72&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%284%29%3D-%284%29%5E%7B3%7D%2B19%284%29-30+%5Cnewline+%3D+-64%2B76-30%3D-18&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Therefore it is positive when x&lt;-5 and negative for x&gt;4
            <br/><br/>
            Now we can can draw the sign diagram to get an idea of the shape
            </Typography>
            <br/>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funcsigndiagram.jpg"
            alt="new"
            /><br/><br/>

            <Typography variant="h6" gutterBottom>
            Find the local Minimum and Maximums
            <br/><br/>
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            They can be found through the use of the min and max functions on your calculators or through power differentiation shown below
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%27%28x%29%3D-3%5Ctimes+x%5E%7B3-1%7D%2B19%5Cnewline+%3D-3x%5E%7B2%7D%2B19&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Find the turning points by setting f'(x)=0 and solve for x
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=-3x%5E%7B2%7D%2B19%3D0%5Cnewline+x%3D%5Cpm%5Csqrt%7B%5Cfrac%7B19%7D%7B3%7D%7D%5Cnewline%3D%5Cpm2.52&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Find the y co-ordinates by substituting in the x values above into the original equation
            <br/><br/>
            </Typography>

            <img
            src="http://s0.wp.com/latex.php?latex=f%282.52%29%3D-2%5E%7B2.52%7D%2B19%5Ctimes+2.52-30%3D1.88&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <img
            src="http://s0.wp.com/latex.php?latex=f%28-2.52%29%3D-2%5E%7B-2.52%7D%2B19%5Ctimes+-2.52-30%3D-61.88&bg=ffffff&fg=000&s=0"
            alt="new"
            /><br/><br/>

            <Typography variant="subtitle1" gutterBottom>
            Therefore the turning points are (2.52,1.88) and (-2.52,-61.88)
            <br/><br/>
            So the graph can be sketched below:
            <br/><br/>
            </Typography>

            <img
            src="http://wiki.engageeducation.org.au/wp-content/uploads/2015/10/funcgencubic1-300x300.jpg"
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

Cubics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cubics);

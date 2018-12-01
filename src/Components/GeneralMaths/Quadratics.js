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

class Addition extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openvideo: false,
      events: null,
      menu: 0,
      check: false,
      openAgain: false,
      openAgainAgain: false,
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
  handleCloseAgainAgain = () => {
    this.setState({ openAgainAgain: false });
  };

  handleClickOpenAgain = () => {
    this.setState({ openAgain: true });
  };
  handleClickOpenAgainAgain = () => {
    this.setState({ openAgainAgain: true });
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
  handleCloseMoreAgain = () => {
    this.setState({ openAgain: false });
    this.setState({ openAgainAgain: true });
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
      <HeaderBar back={1} title ={'General Mathematics'} changing={this.props.change} moved={this.handleFilterUpdate}/>
      <div className={classes.root}>
      <Card className={classes.paper}>
          <Typography style = {{paddingTop: 21, paddingLeft: 15}} variant ='subheading' component="h4" align = 'left'>
          Functions & Graphs
          </Typography>
          <MenuList>
            <MenuItem onClick={() => {this.props.change(1)}}>
              <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
              &gt;&nbsp;Quadratics
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
        Quadratics
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="Quadratics" />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary="Quadratics" />
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
            {"Quadratics"}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId="oZjzDlUbRJ4"
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
            {"Quadratics"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            <img
            src="https://i.imgur.com/SvYC9tt.png?1"
            alt="new"
            /><br/><br/>
            <img
            src="https://i.imgur.com/SnII69i.png?1"
            alt="new"
            /><br/><br/>
            <img
            src="https://i.imgur.com/snXneBJ.png?1"
            alt="new"
            /><br/><br/>
            <img
            src="https://i.imgur.com/91puQlM.png?1"
            alt="new"
            /><br/><br/>
            <img
            src="https://i.imgur.com/QMiBxTj.png?1"
            alt="new"
            /><br/><br/>
            <img
            src="https://i.imgur.com/31EOac9.png?1"
            alt="new"
            /><br/><br/>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleCloseMore} disabled color="primary">
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

Addition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Addition);

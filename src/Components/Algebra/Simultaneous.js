import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopy from '@material-ui/icons/FileCopy';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Card from '@material-ui/core/Card';
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
import YouTube from 'react-youtube';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Algebra from './Algebra';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class Simultaneous extends React.Component {

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
      name: 'Simultaneous Equations',
      video: 'm_8MK_pvilQ',
      item: [{link: 'https://i.imgur.com/B5muutA.png?1'},{link: 'https://i.imgur.com/t5xj9hx.png?1'},{link: 'https://i.imgur.com/WrSwUJB.png?1'},
      {link: 'https://i.imgur.com/mtG5Fz6.png?1'},
      ]
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
    return (
      <div>
      <HeaderBar back={1} title ={'Calculus'} changing={this.props.change} moved={this.handleFilterUpdate}/>
      <div style = {{
        paddingTop: 25,
        display: 'flex',
        marginLeft: window.innerWidth * 0.14,
        paddingBottom: 25,
      }}>
      <Card style = {{
        marginRight: 24,
        minWidth: window.innerWidth * 0.2
      }}>
          <Typography style = {{paddingTop: 21, paddingLeft: 15}} variant ='subheading' component="h4" align = 'left'>
          Algebra
          </Typography>
          <MenuList>

            {Algebra.subtopics.map((l) => (
              <MenuItem onClick={() => {this.navigate(l.key)}}>
                <Typography variant ='body2' style = {{paddingLeft: 8}} align = 'left'>
                {l.name}
                </Typography>
              </MenuItem>
              ))
            }

          </MenuList>
        </Card>
      <Card
        style={{
          minWidth: window.innerWidth * 0.5,
        }}
      >
        <Typography style = {{paddingTop: 15, paddingLeft: 50}} variant ='h6' align = 'left'>
        {this.state.name}
        </Typography>

        <CardContent>

        <List component="nav">
        <ListItem onClick={this.handleClickOpenVideo} button>
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary={this.state.name} />
        </ListItem>
        <ListItem onClick={this.handleClickOpen} button>
          <ListItemIcon>
            <FileCopy />
          </ListItemIcon>
          <ListItemText primary={this.state.name} />
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
            {this.state.name}
          </DialogTitle>
          <DialogContent style = {{textAlign: "center"}}>
            <YouTube
              videoId={this.state.video}
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
            {this.state.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            {this.state.item.map((l) => (
              <div>
              <img
              src={l.link}
              alt="new"
              /><br/><br/>
              </div>
              ))
            }

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

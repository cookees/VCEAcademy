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
import Divider from '@material-ui/core/Divider';
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner'
import HeaderBar from '../HeaderBar/HeaderBar'
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row',
  },
  unroot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginLeft: window.innerWidth * 0.15,
    marginRight: window.innerWidth * 0.15,
    width: window.innerWidth * 0.7,
  },
});

class CourseList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      default:'',
      current: 0,
      list: [
      {name: 'General', id: 2},
      {name: 'Functions and Graphs', id: 3},
      {name: 'Calculus', id: 4},
      {name: 'Probability', id: 5},
      {name: 'Algebra', id: 6},
      {name: 'Data Analysis', id: 7},
      {name: 'Number Patterns', id: 8},
      {name: 'Matrices', id: 9},
      {name: 'Geometry and Trigonometry', id: 10},
      {name: 'Graphs and Relations', id: 11},],
      searchlist:[]
    }
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.change = this.change.bind(this);

  }

  findstr(string){

    var sample = [];
    if (string !== "" && string !== " "){
      for(var i = 0; i < this.state.list.length; i++) {
        if (this.state.list[i].name.toLowerCase().includes(string.toLowerCase())){
          var word = this.state.list[i]
          sample.push(word)
        }
      }
    }
    this.setState({
        searchlist: sample
    })
  }


  async handleFilterUpdate(filterValue) {
        await this.findstr(filterValue)
        await this.setState({
              current: 1,
              default: filterValue,
        });
      }
  change(){
    this.setState({
          current: 0,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      {this.state.current === 1 ?
        <div>
        <HeaderBar search={this.handleFilterUpdate} defaultval={this.state.default} auto={true} changing={this.change} back={1} working={true}/>
        <div style = {{paddingTop: window.innerHeight * 0.05}}>
        </div>
          <Card className={classes.paper}>
            <List
            component="nav"
            className={classes.unroot}
          >


            {this.state.searchlist.map((l) => (
            <ListItem
              style = {{width: window.innerWidth * 0.7}}
              button
              onClick={event => this.props.change(l.id)}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary={l.name} />
            </ListItem>
            ))
            }



          </List>
        </Card>
        </div>:null
      }
      {this.state.current === 0 ?
      <div>
      <HeaderBar search={this.handleFilterUpdate} working ={true}/>
      <Banner/>
      <div className={classes.root}>
        <List disablePadding dense>
          <div style={{ marginLeft: window.innerWidth * 0.06, display: 'flex', flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>
            <ListItem style={{
              width: window.innerWidth * 0.21,
            }}>
              <Avatar src="https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png" />
              <ListItemText primary="Maths Methods" />
            </ListItem>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem
                button
                onClick={event => this.props.change(2)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="General" inset />
              </ListItem>
              <ListItem
                button
                onClick={event => this.props.change(3)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Functions & Graphs" inset />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem
                button
                onClick={event => this.props.change(4)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Calculus" />
              </ListItem>
              <ListItem
                button
                onClick={event => this.props.change(6)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Probability" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              button
              onClick={event => this.props.change(5)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Algebra" />
              </ListItem>
            </div>

          </div>
          <Divider style={{ marginLeft: window.innerWidth * 0.06, marginRight: window.innerWidth * 0.06 }} />


          <div style={{ marginLeft: window.innerWidth * 0.06, display: 'flex', flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>
          <ListItem
            style={{
              width: window.innerWidth * 0.21,
            }}>
              <Avatar src="https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png" />
              <ListItemText primary="Further Maths" />
            </ListItem>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              button
              onClick={event => this.props.change(7)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Data Analysis" inset />
              </ListItem>
              <ListItem
                button
                onClick={event => this.props.change(8)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Number Patterns" inset />
              </ListItem>
              <ListItem
                button
                onClick={event => this.props.change(9)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Matrices" inset />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              button
              onClick={event => this.props.change(10)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Geometry & Trigonometry" />
              </ListItem>
              <ListItem
                button
                onClick={event => this.props.change(11)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Graphs & Relations" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              disabled
              button
              onClick={event => this.props.change(12)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Business Related Maths" />
              </ListItem>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(13)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Network & Decisions Maths" />
              </ListItem>
            </div>

          </div>
          <Divider style={{ marginLeft: window.innerWidth * 0.06, marginRight: window.innerWidth * 0.06 }} />



          <div style={{ marginLeft: window.innerWidth * 0.06, display: 'flex', flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>
          <ListItem
            style={{
              width: window.innerWidth * 0.21,
            }}>
              <Avatar src="https://cdn.kastatic.org/genfiles/topic-icons/icons/sat_reading_writing.png-a4e240-128c.png" />
              <ListItemText primary="Legal Studies" />
            </ListItem>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              disabled
              button
              onClick={event => this.props.change(14)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="General Principles" inset />
              </ListItem>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(15)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Parliament & the Citizen" inset />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              disabled
              button
              onClick={event => this.props.change(16)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="The Constitution" />
              </ListItem>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(17)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Courts in Law-Making" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              disabled
              button
              onClick={event => this.props.change(18)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Dispute Resolution" />
              </ListItem>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(19)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Court Procedures" />
              </ListItem>
            </div>

          </div>
          <Divider style={{ marginLeft: window.innerWidth * 0.06, marginRight: window.innerWidth * 0.06 }} />


          <div style={{ marginLeft: window.innerWidth * 0.06, display: 'flex', flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>
            <ListItem style={{
              width: window.innerWidth * 0.21,
            }}>
              <Avatar src="https://cdn.kastatic.org/genfiles/topic-icons/icons/science.png-3b6492-128c.png" />
              <ListItemText primary="Chemistry" />
            </ListItem>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(2)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Chemical Analysis" inset />
              </ListItem>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(3)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Organic Chemistry" inset />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem
                disabled
                button
                onClick={event => this.props.change(4)}
                style={{
                  width: window.innerWidth * 0.23,
                }}>
                <ListItemText primary="Industrial Chemistry" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem
              disabled
              button
              onClick={event => this.props.change(5)}
              style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Energy Supply" />
              </ListItem>
            </div>

          </div>


        </List>
      </div>
      <BottomBanner/>
    </div>: null }
  </div>
    );
  }
}

CourseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);

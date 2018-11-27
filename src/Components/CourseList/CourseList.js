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

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row',
  },
});

class CourseList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <HeaderBar/>
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
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Calculus" />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Probability" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Algebra" />
              </ListItem>
            </div>

          </div>
          <Divider style={{ marginLeft: window.innerWidth * 0.06, marginRight: window.innerWidth * 0.06 }} />


          <div style={{ marginLeft: window.innerWidth * 0.06, display: 'flex', flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>
            <ListItem style={{
              width: window.innerWidth * 0.21,
            }}>
              <Avatar src="https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png" />
              <ListItemText primary="Further Maths" />
            </ListItem>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Data Analysis" inset />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Number Patterns" inset />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Matrices" inset />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Geometry & Trigonometry" />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Graphs & Relations" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Business Related Maths" />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Network & Decisions Maths" />
              </ListItem>
            </div>

          </div>
          <Divider style={{ marginLeft: window.innerWidth * 0.06, marginRight: window.innerWidth * 0.06 }} />



          <div style={{ marginLeft: window.innerWidth * 0.06, display: 'flex', flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>
            <ListItem style={{
              width: window.innerWidth * 0.21,
            }}>
              <Avatar src="https://cdn.kastatic.org/genfiles/topic-icons/icons/sat_reading_writing.png-a4e240-128c.png" />
              <ListItemText primary="Legal Studies" />
            </ListItem>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="General Principles" inset />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Parliament & the Citizen" inset />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="The Constitution" />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Courts in Law-Making" />
              </ListItem>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Dispute Resolution" />
              </ListItem>
              <ListItem style={{
                width: window.innerWidth * 0.23,
              }}>
                <ListItemText primary="Court Procedures" />
              </ListItem>
            </div>

          </div>
          <Divider style={{ marginLeft: window.innerWidth * 0.06, marginRight: window.innerWidth * 0.06 }} />



        </List>
      </div>
      <BottomBanner/>
    </div>
    );
  }
}

CourseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);

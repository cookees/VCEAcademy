import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Polynomials from '../Functions/Polynomials';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner'
import HeaderBar from '../HeaderBar/HeaderBar'
import Cubics from '../Functions/Cubics';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Sine from '../Functions/Sine';
import Tangent from '../Functions/Tangent';
import Exponential from '../Functions/Exponential';
import Logarithms from '../Functions/Logarithms';
import Hybrid from '../Functions/Hybrid';
import Addition from '../Functions/Addition';
import Fraction from '../Functions/Fraction';
import Integer from '../Functions/Integer';
import Quadratics from '../GeneralMaths/Quadratics';
import Diff from '../Calculus/Diff';
import Chain from '../Calculus/Chain';
import Definite from '../Calculus/Definite';
import Gradient from '../Calculus/Gradient';
import IntEx from '../Calculus/IntEx';
import IntPow from '../Calculus/IntPow';
import Product from '../Calculus/Product';
import Quotient from '../Calculus/Quotient';
import Rate from '../Calculus/Rate';
import Recap from '../Calculus/Recap';
import AlgPoly from '../Algebra/AlgPoly';
import Compound from '../Algebra/Compound';
import Inverse from '../Algebra/Inverse';
import LogExLaws from '../Algebra/LogExLaws';
import Matrices from '../Algebra/Matrices';
import Notation from '../Algebra/Notation';
import Simultaneous from '../Algebra/Simultaneous';
import Trigon from '../Algebra/Trigon';
import Normal from '../Probability/Normal';
import Binomial from '../Probability/Binomial';
import Samples from '../Analysis/Samples';
import Type from '../Analysis/Type';
import Pythagorus from '../Geometry/Pythagorus';
import RAT from '../Geometry/RAT';
import Arithmetic from '../Patterns/Arithmetic';
import Geometric from '../Patterns/Geometric';
import Linear from '../MoreMatrices/Linear';
import Transitions from '../MoreMatrices/Transition';
import Gradients from '../Graphs/Gradients';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';


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
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: '#fff',
  },
  heroUnits: {
    backgroundColor: '#fff',
  },
  heroContent: {
    backgroundColor: '#fff',
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    backgroundColor: '#fff',
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#fff',
    padding: theme.spacing.unit * 6,
  },
});

class SubTopicCard extends Component {

    constructor(props) {
      super(props)
      this.onMouseEnter = this.onMouseEnter.bind(this)
      this.onMouseLeave = this.onMouseLeave.bind(this)
      this.state = {
        expanded: false,
      }
    }

    onMouseEnter = () => {
      this.setState(state => ({expanded: true}))
    }
    onMouseLeave = () => {
      this.setState(state => ({expanded: false}))
    }

    render() {
      const {onClick} = this.props
      const {name, icon, extraInfo} = this.props.card
      return (
        <div>

        <Card
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={onClick}
        style={{
          minWidth: 205,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <CardActionArea>
            <CardMedia
              style={{ paddingTop: '65%' }}
              image={require('../../images/' + icon + '.png')}
              title="Image title"
            />

            <CardContent style={{ flexGrow: 1, height: window.innerHeight * 0.1,}}>
              <Typography color='#000000' gutterBottom variant="subtitle2" component="h4" align="center">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      )
    }
  }


class SubTopicsGrid extends React.Component {

  constructor(props) {
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
      searchlist:[],
      currents: 0
    }
    this.myRef = React.createRef();
    this.scrollToMyRef = this.scrollToMyRef.bind(this);
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.change = this.change.bind(this);
  }

  async handleFilterUpdate(filterValue) {
            await this.setState({
                  current: filterValue
            });
            if (this.state.current === 0){
              this.scrollToMyRef()
            }
      }

  goBack = () => {
    this.setState({ current: 0 })
  }

  async componentDidMount(){
    this.scrollToMyRef()

  }
  scrollToMyRef = () => {
    window.scrollTo({
        top:this.myRef.current.offsetTop,
        behavior: "smooth"
    })
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


  async handleFilters(filterValue) {
        await this.findstr(filterValue)
        await this.setState({
              currents: 1,
              default: filterValue,
        });
      }
  change(){
    this.setState({
          currents: 0,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
      <React.Fragment>
        <CssBaseline />
        {this.state.current === 40?
          <div>
            <div>
                  <Redirect push to="/graphs"></Redirect>
            </div>
            <div>
            <Route
              path="/graphs"
              render={(props) => <Gradients change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 39?
          <div>
            <div>
                  <Redirect push to="/matrices"></Redirect>
            </div>
            <div>
            <Route
              path="/matrices"
              render={(props) => <Transitions change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 38?
          <div>
            <div>
                  <Redirect push to="/matrices"></Redirect>
            </div>
            <div>
            <Route
              path="/matrices"
              render={(props) => <Linear change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 37?
          <div>
            <div>
                  <Redirect push to="/patterns"></Redirect>
            </div>
            <div>
            <Route
              path="/patterns"
              render={(props) => <Geometric change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 36?
          <div>
            <div>
                  <Redirect push to="/patterns"></Redirect>
            </div>
            <div>
            <Route
              path="/patterns"
              render={(props) => <Arithmetic change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 35?
          <div>
            <div>
                  <Redirect push to="/geometry"></Redirect>
            </div>
            <div>
            <Route
              path="/geometry"
              render={(props) => <RAT change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 34?
          <div>
            <div>
                  <Redirect push to="/geometry"></Redirect>
            </div>
            <div>
            <Route
              path="/geometry"
              render={(props) => <Pythagorus change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 33?
          <div>
            <div>
                  <Redirect push to="/analysis"></Redirect>
            </div>
            <div>
            <Route
              path="/analysis"
              render={(props) => <Samples change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 32?
          <div>
            <div>
                  <Redirect push to="/analysis"></Redirect>
            </div>
            <div>
            <Route
              path="/analysis"
              render={(props) => <Type change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 31?
          <div>
            <div>
                  <Redirect push to="/probability"></Redirect>
            </div>
            <div>
            <Route
              path="/probability"
              render={(props) => <Binomial change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 30?
          <div>
            <div>
                  <Redirect push to="/probability"></Redirect>
            </div>
            <div>
            <Route
              path="/probability"
              render={(props) => <Normal change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 29?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <Simultaneous change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 28?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <Matrices change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 27?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <Notation change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 26?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <Trigon change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 25?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <Compound change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 24?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <LogExLaws change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 23?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <Inverse change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 22?
          <div>
            <div>
                  <Redirect push to="/algebra"></Redirect>
            </div>
            <div>
            <Route
              path="/algebra"
              render={(props) => <AlgPoly change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 21?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Recap change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 20?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Definite change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 19?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <IntEx change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 18?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <IntPow change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 17?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Rate change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 16?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Gradient change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 15?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Quotient change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 14?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Product change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 13?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Chain change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 12?
          <div>
            <div>
                  <Redirect push to="/calculus"></Redirect>
            </div>
            <div>
            <Route
              path="/calculus"
              render={(props) => <Diff change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 11?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Integer change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 10?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Fraction change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 9?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Addition change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 8?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Hybrid change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 7?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Logarithms change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 6 ?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Exponential change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 5 ?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Tangent change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 4 ?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Sine change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 3 ?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Cubics change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 2 ?
          <div>
            <div>
                  <Redirect push to="/functions"></Redirect>
            </div>
            <div>
            <Route
              path="/functions"
              render={(props) => <Polynomials change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 1 ?
          <div>
            <div>
                  <Redirect push to="/general"></Redirect>
            </div>
            <div>
            <Route
              path="/general"
              render={(props) => <Quadratics change={this.handleFilterUpdate} />}
              />
            </div>
          </div>: null
        }
        {this.state.current === 0 ?
          <div style={{ backgroundColor: '#fff' }}>

              <main>

              {this.state.currents === 1 ?
                <div>
                <HeaderBar search={this.handleFilters} defaultval={this.state.default} auto={true} changing={this.change} back={1} working={true}/>
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

              {this.state.currents === 0 ?
                <div>


                      <HeaderBar search={this.handleFilters} working={true}/>
                      <Banner/>
                      <div ref={this.myRef}>
                      </div>


                      <Toolbar style = {{backgroundColor: '#f6f6f6', marginTop: '0'}}>
                        <div style = {{flexDirection: 'row', display: 'flex'}}>
                        <IconButton color="inherit" aria-label="Menu"
                        onClick={() => {this.props.change(1)}}
                        >
                        <ArrowBack />
                        </IconButton>
                        <Typography style={{paddingTop: '11px' }} align='left' variant="subtitle1" gutterBottom>
                          Main Menu
                        </Typography>
                        </div>
                      </Toolbar>


                        <Typography align='left' style={{ paddingLeft: '38px', paddingBottom: '4px', paddingTop: '12px' }} component="h5" gutterBottom variant="h6">
                          What do you want to learn in {this.props.name}?
                        </Typography>
                        <div style={{
                          backgroundColor: '#fff',
                          width: 'auto',
                          marginLeft: '24px',
                          marginRight: '24px',
                          padding: '10px',
                        }}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                          {this.props.cards.map((card) => (
                            <Grid item key={card} sm={6} md={4} lg={2}>

                              <SubTopicCard
                                card={card}
                                onClick={() => {this.setState({
                                  current: card.key,
                                })}}
                              />
                            </Grid>
                          ))}

                        </Grid>
                        </div>
                        <BottomBanner/>
                </div> : null}
            </main>
        </div>:null
        }
      </React.Fragment>
      </Router>
    );
  }
}
SubTopicsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubTopicsGrid);

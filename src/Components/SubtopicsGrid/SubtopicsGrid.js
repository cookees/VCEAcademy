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

const styles = theme => ({
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

export default class SubTopicsGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
    this.myRef = React.createRef();
    this.scrollToMyRef = this.scrollToMyRef.bind(this);
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
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

  render() {

    return (
      <Router>
      <React.Fragment>
        <CssBaseline />
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
        {this.state.current === 0 ?
          <div style={{ backgroundColor: '#fff' }}>

              <main>
              <HeaderBar/>
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
            </main>
          </div> : null
        }
      </React.Fragment>
      </Router>
    );
  }
}

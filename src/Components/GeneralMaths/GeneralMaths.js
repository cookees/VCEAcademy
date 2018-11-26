import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

const cards = [
  {
    name: 'Quadratics',
    key:1,
    icon: 'add'
  }
];

export default class GeneralMaths extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      current: 0
    }
  }

  goBack = () => {
    this.setState({current:0})
  }

  render(){
  return (
    <React.Fragment>
      <CssBaseline />
      {this.state.current === 0 ?
      <div style={{backgroundColor:'#fff'}}>


        <main>

          <div style={{
            backgroundColor: '#fff',
            width: 'auto',
            marginLeft: '24px',
            marginRight: '24px',
            padding: '10px'
          }}>
            {/* End hero unit */}
            <Grid container spacing={40}>
                  {cards.map((card) => (
                    <Grid item key={card} sm={6} md={4} lg={2}>
                      <Card styles={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                            <CardActionArea
                            onClick={() => {
                              this.setState({current : card.key})
                              }
                            }>
                            <CardMedia
                              style={{paddingTop: '100%' }}
                              //image= {require('./' + card.icon + '.svg')}
                              title="Image title"
                            />
                            <CardContent style={{flexGrow: 1,}}>
                              <Typography gutterBottom variant="h7" component="h2">
                                {card.name}
                              </Typography>
                            </CardContent>
                            </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
            </Grid>
          </div>
        </main>
      </div>:null
    }
    </React.Fragment>
    );
  }
}

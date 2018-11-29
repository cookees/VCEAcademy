import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './Components/HeaderBar/HeaderBar'
import Banner from './Components/Banner/Banner'
import BottomBanner from './Components/BottomBanner/BottomBanner'
import CourseList from './Components/CourseList/CourseList'
import GeneralMaths from './Components/GeneralMaths/GeneralMaths'
import Functions from './Components/Functions/Functions'
import SubTopicsGrid from './Components/SubtopicsGrid/SubtopicsGrid';
import Polynomials from './Components/Functions/Polynomials';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

class App extends Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      current: 1,
    }
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }

  handleFilterUpdate(filterValue) {
            this.setState({
                  current: filterValue,
            });
      }

  render() {
    return (
      <div className="App">

        <div>
        {this.state.current === 1 ?
          <div>
            <CourseList change={this.handleFilterUpdate}/>
          </div> : null
        }
        {this.state.current === 2 ?
          <div>
            <SubTopicsGrid cards={GeneralMaths.subtopics} name={GeneralMaths.name} change={this.handleFilterUpdate} go={1} />
          </div> : null
        }
        {this.state.current === 3 ?
          <div>
            <SubTopicsGrid cards={Functions.subtopics} name={Functions.name} change={this.handleFilterUpdate} go={1}/>
          </div> : null
        }
        </div>
      </div>
    );
  }
}

export default App;

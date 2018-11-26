import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './Components/HeaderBar/HeaderBar'
import Banner from './Components/Banner/Banner'
import CourseList from './Components/CourseList/CourseList'

class App extends Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      current: 1
    }
    this.scrollToContent = this.scrollToContent.bind(this);
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }

  handleFilterUpdate(filterValue) {
            this.setState({
                  current: filterValue
            });
            this.scrollToContent()
      }

  scrollToContent() {
    this.myRef.current.scrollIntoView({behavior: 'smooth'});
  }


  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <Banner/>
        <div ref={this.myRef}>
        {this.state.current === 1 ?
          <div>
            <CourseList change={this.handleFilterUpdate}/>
          </div> : null
        }
        {this.state.current === 2 ?
          <div>
            <Banner/>
          </div> : null
        }
        </div>

      </div>
    );
  }
}

export default App;

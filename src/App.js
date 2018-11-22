import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./actions/index";
import Landing from './components/Introduction/Landing';
import Menu from './components/Menu/Menu'
import Login from './components/Introduction/login'
import DeviceMainComponent from './components/MainScreen/Rooms/DeviceMainComponent'
import './App.scss'
import { Route, Link, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Analyst from './components/Anslysist/AllRoom';
library.add( faCheckSquare, faCoffee)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  goHeatingPage = () => {
    this.props.history.push("/devices");
  }
  goAnalystPage = () => {
    this.props.history.push("/analyst");
  }


  render() {
    const {isAuthenticated} = this.props;
    return (
      <div className="container">

      <div className="ui grid">
        <div className="four wide column main">
        {
          !isAuthenticated
          ?
          <div>
          <div className="userAva">
            <img src={require("./image/menu/ava.png")} alt=""/>
          </div>

          <ul className="unorderList">
            <li className="menuList"><img className="menuIcon" src={require("./image/menu/home.png")} alt=""/> <span>Dashboard</span></li>
            <li className="menuList"><img className="menuIcon" src={require("./image/menu/heater.png")} alt=""/> <span onClick={this.goHeatingPage}>Heating machines</span></li>
            <li className="menuList"><img className="menuIcon" src={require("./image/menu/line-chart.png")} alt=""/> <span onClick={this.goAnalystPage}>Analyst</span></li>
            <li className="menuList"><img className="menuIcon" src={require("./image/menu/user-silhouette.png")} alt=""/> <span>Setting</span></li>
            
          </ul>
        </div>
        :
        ''

        }
       
        
        <img className="image-menu-city-black" src={require("./image/nightcities.png")}/> 
        <img className="image-menu-city-white" src={require("./image/skyscraper.png")}/> 
        </div>
        <div className="twelve wide wide column router">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/devices" component={DeviceMainComponent}/>
          <Route path="/analyst" component={Analyst}/>
        </Switch>
        </div>
      </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated:state.Authenticate.isAuthenticated
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

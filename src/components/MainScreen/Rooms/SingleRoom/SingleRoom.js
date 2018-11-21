import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";

import Sensor from './Sensor';
import Heater from './Heater'
class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
      const { currentRoom } = this.props;
      const percentage = 66;
    return (
        <div className="single-room-container ">
            <div className="ui grid">
            {/* SENSOR */}
                <div className="six wide column">
                    <div className="device-content-wrapper sensor">
                        <Sensor></Sensor>
                    </div>
                </div>
                
                {/* HEATER */}
                <div className="ten wide column">
                    <div className="device-content-wrapper heating">
                        <Heater></Heater>
                    </div>
                </div>
            </div>
      </div>
     
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentRoom: state.Rooms.currentRoom
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getCurrentRoom:(roomId)=>{
      dispatch(actions.getCurrentRoom(roomId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);

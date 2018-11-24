import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
class Sensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    const {currentRoom} = this.props;
    console.log("sensor ",currentRoom)
    return (
        <div className=" ui segment  detail sensor-detail">
        <a className="ui orange left ribbon label">Sensor</a>
        <div className="">
            {
              currentRoom
              ?
              <ul>
                <li>
                    <div className="sensor-icon">
                        <FontAwesomeIcon icon={Icons.faTemperatureLow}></FontAwesomeIcon>
                    </div>
                    <span className="sensor-item">Temperature: {currentRoom.temperature} ° C</span>  
                </li>
                <li>
                    <div className="sensor-icon">
                        <FontAwesomeIcon icon={Icons.faTint}></FontAwesomeIcon>
                    </div>
                    <span className="sensor-item">Humidity {currentRoom.humidity} %rh</span> 
                </li>
                <li>
                    <div className="sensor-icon">
                        <FontAwesomeIcon icon={Icons.faCloud}></FontAwesomeIcon> 
                    </div>
                    <span className="sensor-item">Co2: {currentRoom.co2}</span>
                </li>
            </ul>
            :
            'loadiing'
            }

          </div>
      </div>  
     
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentRoom: state.Rooms.currentRoom,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sensor);

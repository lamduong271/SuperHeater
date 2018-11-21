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
    return (
        <div className=" ui segment  detail sensor-detail">
        <a className="ui orange left ribbon label">Sensor</a>
        <div className="">
            <ul>
                <li>
                    <div className="sensor-icon">
                        <FontAwesomeIcon icon={Icons.faTemperatureLow}></FontAwesomeIcon>
                    </div>
                    <span className="sensor-item">Temperature:</span>  
                </li>
                <li>
                    <div className="sensor-icon">
                        <FontAwesomeIcon icon={Icons.faTint}></FontAwesomeIcon>
                    </div>
                    <span className="sensor-item">Humidity</span> 
                </li>
                <li>
                    <div className="sensor-icon">
                        <FontAwesomeIcon icon={Icons.faVolumeUp}></FontAwesomeIcon> 
                    </div>
                    <span className="sensor-item">Noise</span>
                </li>
            </ul>

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
export default connect(mapStateToProps, mapDispatchToProps)(Sensor);

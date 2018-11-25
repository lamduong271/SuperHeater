import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
class Sensor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className=" ui segment  detail sensor-detail">
        <span className="ui orange left ribbon label">Sensor</span>
        <div className="">
          <ul>
            <li>
              <div className="sensor-icon">
                <FontAwesomeIcon icon={Icons.faTemperatureLow} />
              </div>
              <span className="sensor-item">Temperature:</span>
            </li>
            <li>
              <div className="sensor-icon">
                <FontAwesomeIcon icon={Icons.faTint} />
              </div>
              <span className="sensor-item">Humidity</span>
            </li>
            <li>
              <div className="sensor-icon">
                <FontAwesomeIcon icon={Icons.faVolumeUp} />
              </div>
              <span className="sensor-item">Noise</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRoom: state.Rooms.currentRoom
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getCurrentRoom: roomId => {
      dispatch(actions.getCurrentRoom(roomId));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sensor);

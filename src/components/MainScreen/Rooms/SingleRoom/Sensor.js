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
    const { currentRoom } = this.props;
    console.log("sensor ", currentRoom);
    return (
      <div className=" ui segment  detail sensor-detail">
        <span className="ui orange left ribbon label">Sensor</span>
        <div className="sensor-wrapper">
          {currentRoom ? (
            <ul>
              <li>
                <div className="sensor-icon">
                  <FontAwesomeIcon icon={Icons.faTemperatureLow} />
                </div>
                <div className="sensor-item">
                  <strong>Temperature: </strong>
                  {currentRoom.temperature} ° C
                </div>
              </li>
              <li>
                <div className="sensor-icon">
                  <FontAwesomeIcon icon={Icons.faTint} />
                </div>
                <div className="sensor-item">
                  <strong>Humidity :</strong>
                  {currentRoom.humidity} %rh
                </div>
              </li>
              <li>
                <div className="sensor-icon">
                  <FontAwesomeIcon icon={Icons.faCloud} />
                </div>
                <div className="sensor-item">
                  <strong>Co2: </strong>
                  {currentRoom.co2}
                </div>
              </li>
            </ul>
          ) : (
            "loadiing"
          )}
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

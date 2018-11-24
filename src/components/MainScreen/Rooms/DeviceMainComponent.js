import React, { Component } from 'react';
import { connect } from "react-redux";
import RoomList from './RoomList/RoomList';
import SingleRoom from './SingleRoom/SingleRoom';
import ElectricityConsumption from './SingleRoom/ElectricityConsumption';
import * as actions from "../../../actions/index";

class DeviceMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getCurrentRoom(1);
  }

  render() {
    return (
      <div>
        <RoomList></RoomList>
        {
          this.props.currentRoom
          ?
          <div>
              <SingleRoom></SingleRoom>
              <ElectricityConsumption></ElectricityConsumption>
          </div>
          :
          ''
        }
              
          
        
          
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
export default connect(mapStateToProps, mapDispatchToProps)(DeviceMainComponent);

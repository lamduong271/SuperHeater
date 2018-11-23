import React, { Component } from 'react';
import { connect } from "react-redux";
import RoomList from './RoomList/RoomList';
import SingleRoom from './SingleRoom/SingleRoom';
import ElectricityConsumption from './SingleRoom/ElectricityConsumption';
class DeviceMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceMainComponent);

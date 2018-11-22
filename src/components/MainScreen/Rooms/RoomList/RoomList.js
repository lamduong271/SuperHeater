import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  findRoomByIndex = (roomId) => {
      this.props.getCurrentRoom(roomId)
  }
  componentDidMount() {
      this.props.getCurrentRoom(1);
  }

  renderRooms = () => {
    const {currentRoom} = this.props;
    return this.props.Rooms.map(room => {
      return (
        <span key={room.id} className="four wide column" onClick={()=>this.findRoomByIndex(room.id)}>
            <div className={ `single-room ${currentRoom.id===room.id?"foundId":"notFoundId"}`}>
                <img  className="room-icon " src={room.source} alt=""/>
                <span className="room-name">{room.name}</span>
            </div>
        </span>
      )
    })
  }


  render() {
    console.log(this.props.Rooms)
    return (
      <div className="heating-container">
        <h2 className="ui header">
        {/* <img className="ui image" src={require("../../../image/menu/heaterHeader.png")}/> */}
        <div className="content headerText">
           Device list
        </div>
        </h2>
        <hr/>

        <div className="ui grid rooms">
          {this.renderRooms()}
        </div>


        {/* SIngleRoom render here */}
          
      </div>
     
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Rooms:state.Rooms.Rooms,
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
export default connect(mapStateToProps, mapDispatchToProps)(RoomList);

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { RadialProgress } from 'react-radial-progress-indicator';

class DialogSetTime extends Component {
  constructor(props) {
    super(props);
    this.state = {

        
    }
  }




  render() {
      const {heaterStatus, heaterLevel} = this.props;
      const copyHeater = heaterLevel;
    return (
        <div>
            
        </div>
     
    );
  }
}


const mapStateToProps = (state) => {
  return {
    heaterStatus: state.Rooms.heaterStatus,
    heaterLevel: state.Rooms.heaterLevel
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    toogleHeater:(value)=>{
      dispatch(actions.toogleHeater(value))
    },
    getHeaterLever:(value) => {
        dispatch(actions.getHeaterLever(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Heater);

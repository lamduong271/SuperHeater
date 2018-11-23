import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { RadialProgress } from 'react-radial-progress-indicator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import TimePicker from 'react-times';
 
// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
class Heater extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        timeSet:'',
        count:true
    }
  }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    turnOffHeater =()=>{
        this.props.turnOffHeater()
        this.props.getHeaterLever(0)
        console.log("OFF",this.props.currentRoom.heaterStatus)
    } 

    turnOnHeater =()=>{
        this.props.turnOnHeater();
        this.props.getHeaterLever();
        console.log("ON",this.props.currentRoom.heaterStatus)
    } 

    onTimeChange=(event)=> {
      
    }
     
    onFocusChange=(event)=> {
    
    }

    increaseHeater = () => {
        this.props.increaseHeater();
        this.setState({
            count:true
        })
    }

    decreaseHeater = () => {
        this.props.decreaseHeater();
        this.setState({
            count:false
        })
        
    }

    startStep = () => {

    }

    step = () => {

    }

    



  render() {
      const {heaterStatus, heaterLevel,currentRoom} = this.props;
      const copyHeater = heaterLevel;
      console.log(this.props.currentRoom.heaterStatus)
    return (
        <div className="ui segment detail heating-detail">
            <a className="ui orange left ribbon label">Heater</a>
            <div>
            <div className="ui on-off">
                <button onClick={()=>this.turnOnHeater()} className={`ui mini button ${currentRoom.heaterStatus?'blue':'blue basic'}`}>On</button>
                <button onClick={()=>this.turnOffHeater()} className={`ui mini button ${currentRoom.heaterStatus?'blue basic':'blue'} `}>Off</button>
            </div>

            <div className="ui on-off">
                <button onClick={()=>this.increaseHeater()} className={`ui mini button ${this.state.count?'blue':'blue basic'}`}><i className="plus icon"></i></button>
                <button onClick={()=>this.decreaseHeater()} className={`ui mini button ${this.state.count?'blue basic':'blue'} `}><i className="minus icon"></i></button>
            </div>

            <div className="set-time">
                {/* <button className="ui mini blue button">Blue</button>
                <div className="or">or</div>
                <button className="ui mini blue button">Blue</button> */}
                <button onClick={this.handleClickOpen} className="ui mini blue button set-time-btn">Set time</button>
                

            </div> 

            <div className="progress">
                <RadialProgress
                duration={5000}
                ringThickness={0.2}
                segmented
                showIntermediateProgress
                ringBgColour="#ccc"
                ringFgColour="#f2711c"
                ringIntermediateColour="#aaa"
                width={150}
                height={150}
                startStep={this.state.count?currentRoom.heaterLevel-1:currentRoom.heaterLevel+1}
                steps={10}
                step={currentRoom.heaterLevel}
                text={function text(steps,proportion){return Math.floor(100*proportion)+"%"}}
                />
            </div>
            </div>



            {/* DIALOG */}
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">Set time</DialogTitle>
                <DialogContent className="content-dialog">
                    <div className="time-picker">
                    <TimePicker
                    onFocusChange={()=>this.onFocusChange()}
                    onTimeChange={this.onTimeChange}
                    showTimezone // show the timezone, default false
                    focused // whether to show timepicker modal after rendered. default false
                    withoutIcon // whether to has time icon on button, default false
                    colorPalette="light"// main color, default "light"
                    time={this.state.timeSet} // initial time, default current time
                    theme="material"
                    limitDrag={true}
                    // or
                    // theme="classic"
                    timeMode="12" // use 24 or 12 hours mode, default 24
                    // timezone="America/New_York" // what timezone to use, detects the user's local timezone by default
                    />
                    </div>
                
                </DialogContent>
                <DialogActions>
                    <button onClick={this.handleClose} className="ui button primary">
                    Disagree
                    </button>
                    <button onClick={this.handleClose} className="ui button primary" autoFocus>
                    Agree
                    </button>
                </DialogActions>
            </Dialog>
                            
        </div>
     
    );
  }
}


const mapStateToProps = (state) => {
  return {
    heaterStatus: state.Rooms.heaterStatus,
    heaterLevel: state.Rooms.heaterLevel,
    currentRoom: state.Rooms.currentRoom,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    turnOnHeater:(value)=>{
        dispatch(actions.turnOnHeater())
    },
    turnOffHeater:(value)=>{
        dispatch(actions.turnOffHeater())
    },
    getHeaterLever:(value) => {
        dispatch(actions.getHeaterLever(value))
    },
    increaseHeater:() => {
        dispatch(actions.increaseHeater())
    },
    decreaseHeater:() => {
        dispatch(actions.decreaseHeater())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Heater);

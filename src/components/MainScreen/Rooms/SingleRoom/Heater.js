import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { RadialProgress } from 'react-radial-progress-indicator';

class Heater extends Component {
  constructor(props) {
    super(props);
    this.state = {

        
    }
  }

    turnOffHeater =()=>{
        this.props.toogleHeater(false);
        this.props.getHeaterLever(0)
    } 

    turnOnHeater =()=>{
        this.props.toogleHeater(true);
        this.props.getHeaterLever()
    } 



  render() {
      const {heaterStatus, heaterLevel} = this.props;
      const copyHeater = heaterLevel;
    return (
        <div className="ui segment detail heating-detail">
            <a className="ui orange left ribbon label">Heater</a>
            <div>
            <div className="ui buttons on-off">
                <button onClick={()=>this.turnOnHeater()} className={`ui button ${heaterStatus?'teal':''}`}>On</button>
                <div className="or"></div>
                <button onClick={()=>this.turnOffHeater()} className={`ui  button ${heaterStatus?'':'teal'} `}>Off</button>
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
                startStep={copyHeater!==0?0:5}
                steps={10}
                step={copyHeater!==0?5:0}
                text={function text(steps,proportion){return Math.floor(100*proportion)+"%"}}
                />
            </div>
            </div>
                            
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

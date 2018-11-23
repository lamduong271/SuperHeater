import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import list_devices from '../../../../common/devices';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Form } from 'semantic-ui-react'
import devices from '../../../../common/devices';
class ElectricityConsumption extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        age: '',
        editMode:false,
        
          name:'',
          kwh:'',
          hours:''
        
    }
  }
  
  handleChange = e => {
    
    this.setState({
      
        [e.target.name]: e.target.value 
      
    });
    console.log("onchange", this.state)
  };

  openFormDevice = () => {
    this.setState({
      editMode:false
    })
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  editDevice = (id) => {
    this.setState({
      editMode:true
    })
  }
  
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    let renderDevicesInCurrentRoom;
      const options = devices
      
      if(this.props.currentRoom.devices) {
       renderDevicesInCurrentRoom =this.props.currentRoom.devices.map(device => {
          return (
              <span key ={device.name} className="consumption-icon-wrapper">
                  <div className="consumption-icon">
                      <img src={device.source} alt=""/>
                  </div>
                  <span onClick={()=>this.editDevice(device.id)} className="consumption-edit">
                    <div  className="icon">
                       <FontAwesomeIcon icon={Icons.faPen}></FontAwesomeIcon>
                    </div>
                  </span>  
              </span>
            )
        })
      }
    return (
      
        <div className="electricity-consumption ">
        {this.props.currentRoom.devices
        ?
        <div className="electricity-consumption-detail">
          {renderDevicesInCurrentRoom}
          <span onClick={this.openFormDevice} className="consumption-icon-wrapper plus">
                    <div className="consumption-icon">
                        <img src={require('../../../../image/Furniture/plus.png')} alt=""/>
                    </div>
                    <div className="consumption-item"></div>
          </span>
        </div>
        :
        ''
        }
            

            {/* DIAGO */}
            <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
        
        <Form className="form-add-device">
        <Form.Group widths='equal'>
          <Form.Select value={this.state.name} name="name" fluid label='Device' options={options} placeholder='device' />
        </Form.Group>
        <Form.Input value={this.state.kwh} name="kwh" onChange={(value)=>this.setState({kwh:value})} fluid label='kwh' placeholder='Kw/h' />
        <Form.Input value={this.state.hours} name="hours" onChange={this.handleChange} fluid label='Average hours per day' placeholder='average hour used per day' />
        <Form.Group widths='equal'>
            <Form.Button onClick={this.handleClose}>Submit</Form.Button>
            <Form.Button onClick={this.handleClose}>Cancel</Form.Button>
        </Form.Group>
        
      </Form>
        </Dialog>
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
export default connect(mapStateToProps, mapDispatchToProps)(ElectricityConsumption);

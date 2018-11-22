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

class ElectricityConsumption extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        age: '',
    }
  }
  
  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleChange = (e, { value }) => this.setState({ value })

  render() {
      console.log("this.props.currentRoom.devices" , this.props.currentRoom.devices)
      const options = [
        { key: 'm', text: 'TV', value: 'TV' },
        { key: 'f', text: 'Fridge', value: 'fridge' },
      ]
    return (
        <div className="electricity-consumption ">
            <div className="electricity-consumption-detail">
                <span className="consumption-icon-wrapper">
                    <div className="consumption-icon">
                        <img src={require('../../../../image/Furniture/reading-lamp.png')} alt=""/>
                    </div>
                    <div className="consumption-item"></div>  
                </span>

                <span className="consumption-icon-wrapper">
                    <div className="consumption-icon">
                    <img src={require('../../../../image/Furniture/TV.png')} alt=""/>
                    </div>
                    <div className="consumption-item"></div> 
                </span>

                <span className="consumption-icon-wrapper">
                    <div className="consumption-icon">
                        <img src={require('../../../../image/Furniture/computer.png')} alt=""/>
                    </div>
                    <div className="consumption-item"></div>
                </span>

                <span onClick={this.handleClickOpen} className="consumption-icon-wrapper plus">
                    <div className="consumption-icon">
                        <img src={require('../../../../image/Furniture/plus.png')} alt=""/>
                    </div>
                    <div className="consumption-item"></div>
                </span>
            </div>

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
          <Form.Select fluid label='Device' options={options} placeholder='device' />
        </Form.Group>
        <Form.Input fluid label='kwh' placeholder='Kw/h' />
        <Form.Input fluid label='Average hours per day' placeholder='average hour used per day' />
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

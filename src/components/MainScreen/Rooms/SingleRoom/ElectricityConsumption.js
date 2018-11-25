import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Dialog from "@material-ui/core/Dialog";
import { Form } from "semantic-ui-react";
import devices from "../../../../common/devices";
class ElectricityConsumption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      age: "",
      editMode: false,
      name: "",
      kwh: "",
      hours: "",
      selectValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  };

  onSelectChange = (e, data) => {
    this.setState({
      ...this.state,
      name: data.value
    });
  };

  openFormDevice = () => {
    this.setState({
      editMode: false
    });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  editDevice = id => {
    this.setState({
      editMode: true
    });
  };

  onAddDevice = () => {
    const deviceType = devices.find(i => i.text === this.state.name);
    const newDevice = {
      id: this.props.currentRoom.devices.length + 1,
      name: this.state.name,
      kwh: Number(this.state.kwh),
      hours: Number(this.state.hours),
      source: deviceType.source
    };
    this.props.addDevice(newDevice, this.props.currentRoom.name);
    this.handleClose();
  };

  calculateKwh = () => {
    if (this.props.currentRoom.devices) {
      console.log("this.props.currentRoom.devices ", this.props.currentRoom.devices)
      const total = this.props.currentRoom.devices
        .map(o => o.kwh)
        .reduce((total, amount) => {
          return total + amount;
        });

      return total;
    }
  };

  calculateCost = () => {
    if (this.props.currentRoom.devices) {
      const total = this.props.currentRoom.devices
        .map(o => o.hours)
        .reduce((total, amount) => {
          return total + amount;
        });
      console.log("Hours", total);
      return total;
    }
  };

  render() {
    let renderDevicesInCurrentRoom;
    const options = devices;

    if (this.props.currentRoom.devices) {
      renderDevicesInCurrentRoom = this.props.currentRoom.devices.map(
        device => {
          return (
            <span key={device.id} className="consumption-icon-wrapper">
              <div className="consumption-icon">
                <img src={device.source} alt="" />
              </div>
              <span
                onClick={() => this.editDevice(device.id)}
                className="consumption-edit"
              >
                <div className="icon">
                  <FontAwesomeIcon icon={Icons.faPen} />
                </div>
              </span>
            </span>
          );
        }
      );
    }
    return (
      <div className="electricity-consumption">
        {this.props.currentRoom.devices ? (
          <div className=" ui segment electricity-consumption-detail">
            <span className="ui orange left ribbon label">
              Consumtion Calculation
            </span>
            <div className="electricity-consumption-list-device">
            {renderDevicesInCurrentRoom}
            <span
              onClick={this.openFormDevice}
              className="consumption-icon-wrapper plus"
            >
              <div className="consumption-icon">
                <img
                  src={require("../../../../image/Furniture/plus.png")}
                  alt=""
                />
              </div>
              <div className="consumption-item" />
            </span>
            </div>
            
          </div>
        ) : (
          ""
        )}

        <div className="ui segment electricity-consumption-calculation">
          <span className="ui orange left ribbon label">
            Consumtion Calculation
          </span>
          <p style={{marginTop:'30px'}}>
            You spent total: <span style={{fontStyle:'italic', fontWeight:700}}>{this.calculateCost() * this.calculateKwh()} Watt</span>
          </p>
          <p>
            It costs:{" "}
            <span style={{fontStyle:'italic', fontWeight:700,}}>
            {Math.round(
              (this.calculateCost() * this.calculateKwh() * 0.00016 + 0.00001) *
                100
            ) / 100}{" "}
            €
            </span>
            
          </p>
          <p>
            Avarage cost in your country: 1.7 € per day for a household / ~7,3
            kWh. / 16 cent for 1 kwh
          </p>
        </div>

        {/* ADD FORM */}
        <div>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={this.state.open}
            onClose={this.handleClose}
          >
            <Form className="form-add-device">
              <Form.Group widths="equal">
                <Form.Select
                  value={this.state.name}
                  name="name"
                  fluid
                  label="Device"
                  options={options}
                  placeholder="Choose your device"
                  onChange={this.onSelectChange}
                />
              </Form.Group>
              <Form.Input
                value={this.state.kwh}
                name="kwh"
                onChange={this.handleChange}
                fluid
                label="Watt"
                placeholder="W"
              />
              <Form.Input
                value={this.state.hours}
                name="hours"
                onChange={this.handleChange}
                fluid
                label="Average hours per day"
                placeholder="average hour used per day"
              />
              <Form.Group widths="equal">
                <Form.Button onClick={this.onAddDevice}>Submit</Form.Button>
                <Form.Button onClick={this.handleClose}>Cancel</Form.Button>
              </Form.Group>
            </Form>
          </Dialog>
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
    },
    addDevice: (device, room) => {
      dispatch(actions.addDevice(device, room));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElectricityConsumption);

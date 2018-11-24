import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";

class ChatBotContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOrigin:'',
      messageInfor:'',
      messageWarning:'',

    }
  }
  
  componentDidMount(){
    this.generalHouseInfor();
  }

  generalHouseInfor = () => {
    const {Rooms} = this.props;
    let messageOrigin = 'Hello there';
    let messageInfor = '';
    let messageWarning = '';

    if(Rooms) {
      for(let i = 0; i< Rooms.length;i++) {
          messageInfor += ` Temperature in ${Rooms[i].name} is ${Rooms[i].temperature}.`
      }
      for(let i = 0; i< Rooms.length;i++) {
        if(Rooms[i].temperature > 30) {
          messageWarning += ` Temperature in ${Rooms[i].name} seems to be quite high.`
        }
      }
    };
    this.setState({
      messageOrigin,
      messageInfor,
      messageWarning,
    })
  }

  // {
  //   id: "1",
  //   message: this.generalHouseInfor.messageOrigin,
  //   trigger: "4"
  // },
  // {
  //   id: "2",
  //   message: this.generalHouseInfor.messageInfor,
  //   trigger: "4"
  // },
  // {
  //   id: "3",
  //   message: this.generalHouseInfor.messageWarning,
  //   trigger: "4"
  // },
  // {
  //   id: "4",
  //   user: true,
  //   trigger: "3"
  // },
  // {
  //   id: "5",
  //   message: `Temperature inside your bedroom is now +${Rooms[0].temperature} `,
  //   end: true
  // }
  render() {
    console.log(this.state.messageOrigin)
    const {Rooms} = this.props;
    let step;
    if(this.state.messageInfor) {
     step = [
        {
          id: "1",
          component:(
            <div>
            <p>{this.state.messageOrigin}</p>
            <p>{this.state.messageInfor}</p>
            <p>{this.state.messageWarning}</p>
            </div>
          ),
          trigger: "2"
        },
        {
          id: "2",
          user: true,
          trigger: "3"
        },
        {
          id: "3",
          message: `Temperature inside your bedroom is now +${this.state.messageInfor} `,
          end: true
        }
      ]
    }
    return (
      <div>
        {
          this.state.messageInfor
          ?
            <ChatBot
            headerTitle="Speech Synthesis"
            speechSynthesis={{ enable: true, lang: 'en' }}
            width="100%"
            style={{ height: "100%" }}
            steps={step?step:[]}
          />
          :
          ''
        }
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentRoom: state.Rooms.currentRoom,
    Rooms: state.Rooms.Rooms
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatBotContainer);

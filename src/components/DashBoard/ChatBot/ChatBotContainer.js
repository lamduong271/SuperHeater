import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import fetch from 'isomorphic-fetch';
import wittoken from '../../../key_secret/wit';

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
    fetch(
      'https://api.wit.ai/message?v=20181125&q=turn on heater',
      {
        method: 'GET',
        headers: {Authorization: `Bearer ${wittoken}`}
      }
    )
    .then(response => response.json())
    .then(json => console.log(json));
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
          trigger: 'question',

        },
        {
          id: 'question',
          message: 'Do you want me to reduce the heater?',
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 'yes', label: 'Yes', trigger: 'update-yes' },
            { value: 'no', label: 'No', trigger: 'update-no' },
          ],
        },
        {
          id: 'update-yes',
          message: 'Heater updated ! anything else?',
          trigger: '3',
        },
        {
          id: 'update-no',
          message: 'OK! anything else',
          trigger: '3',
        },
        {
          id: "3",
          user: true,
          trigger: "4"
        },
        {
          id: "4",
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

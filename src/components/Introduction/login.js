import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated:false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.isAuthenticated)
  }

  componentDidMount() {
    console.log(this.props.isAuthenticated)
  }

  haha = () =>{
      this.props.authenticate()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated)
    {
      console.log(nextProps.isAuthenticated);
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="form-login-div">
       

            <form onSubmit={this.handleSubmit} className="ui form form-login">
            <div className="field">
                <label>First Name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox"  className="hidden"/>
                <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            {/* <button className="ui inverted primary button" type="submit">Submit</button> */}
            <br/>
            </form>
            <button className="ui inverted primary button" onClick={this.haha}>Submit</button>
        </div>
      </div>
     
    );
  }
}

const styles = {
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated:state.Authenticate.isAuthenticated
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    authenticate :() => {
        dispatch(actions.authenticate())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

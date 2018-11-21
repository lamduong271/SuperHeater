import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
class Addroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div style ={styles.container}>
      AddRoom
      </div>
     
    );
  }
}

const styles = {
    container:{
        margin: 'auto',
        
    },
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);

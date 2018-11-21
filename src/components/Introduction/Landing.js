import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import {  Link } from 'react-router-dom';
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div style ={styles.container}>
      <div style ={styles.center}>
        <div style ={styles.logo}>
            <img style ={styles.img} className="individual" src={require("../../image/house.png")} alt={"logo"} />
            <div style={styles.buttons}>
            <Link to="/menu"><Button basic color='blue' content='Enterprise Use' /></Link> 
            </div>
        </div>

        <div style ={styles.logo}>
            <img style ={styles.img}  className="enterprise" src={require("../../image/enterprise.png")} alt={"logo"} />
            <div style={styles.buttons}>
            <Link to="/menu"><Button basic color='blue' content='Enterprise Use' /></Link> 
            </div>
        </div>
        
        </div>
      </div>
     
    );
  }
}

const styles = {
    container:{
        margin: 'auto',
        
    },
    center:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    },
    logo:{
        display:'inline-block',
        margin: 'auto',
        textAlign:'center',
        width:'50%',
    },
    img:{
        width:'200px',
        height:'200px',
    },
    buttons:{
      textAlign:'center',
      marginTop: '20px',
    }
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

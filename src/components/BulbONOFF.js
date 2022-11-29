import { Component } from "react";

class BulbONOFF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulbStatus: false,
    };
    this.BulbOnOff = this.BulbOnOff.bind(this);
  }

  BulbOnOff() {
    this.setState((prevState) => ({
      bulbStatus: !prevState.bulbStatus,
    }));
  }
  render() {
    let imgStyle = {
      height: "400px",
      margin: "10px",
    };
    let btnStyle = {
      fontSize: "1.5em",
      padding: "10px",
      borderRadius: "10px",
      margin: "5px",
    };
    return (
      <>
        <img
          src={
            this.state.bulbStatus
              ? "https://www.w3schools.com/html/pic_bulboff.gif"
              : "https://www.w3schools.com/html/pic_bulbon.gif"
          }
          alt="Bulb"
          style={imgStyle}
        />
        <br />
        <button style={btnStyle} onClick={this.BulbOnOff}>
          ON/OFF
        </button>
      </>
    );
  }
}
export default BulbONOFF;

import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.increment5 = this.increment5.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((prevCount) => ({
      count: prevCount.count + 1,
    }));
  }
  increment5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  decrement() {
    this.setState((prevCount) => ({
      count: prevCount.count - 1,
    }));
  }
  render() {
    let countStyle = {
      height: "350px",
      fontSize: "250px",
      margin: "0",
    };
    let btnStyle = {
      fontSize: "1.5em",
      padding: "10px",
      borderRadius: "10px",
      margin: "5px",
    };
    return (
      <>
        <p style={countStyle}>{this.state.count}</p>
        <button style={btnStyle} onClick={this.increment}>
          Increment
        </button>
        <button style={btnStyle} onClick={this.increment5}>
          Increment5
        </button>
        <button style={btnStyle} onClick={this.decrement}>
          Decrement
        </button>
      </>
    );
  }
}
export default Counter;

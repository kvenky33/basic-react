import { Component } from "react";
import "./App.css";
import BulbONOFF from "./components/BulbONOFF";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <BulbONOFF />
          <Counter />
        </div>
      </>
    );
  }
}
export default App;

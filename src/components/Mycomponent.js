import React from "react";
//2 kiểu viết code
// class component
// function component

//class component
class Mycomponent extends React.Component {
  state = {
    name: "Phat",
    address: "HCM",
    age: 19,
  };

  handleClick = (event) => {
    console.log("my name is", this.state.name);
    console.log("random");

    this.setState({
      name: "Nhi",
      age: Math.floor(Math.random() * 100) + 1,
    });
  };

  handleMouseOver(event) {
    console.log(event.clientX);
  }

  //JSX
  render() {
    return (
      <div>
        {" "}
        my name is {this.state.name} and Im {this.state.age}
        <button onClick={this.handleClick}>Click me</button>
        <button
          onMouseOver={(event) => {
            this.handleMouseOver(event);
          }}
        >
          Hover me
        </button>
      </div>
    );
  }
}

export default Mycomponent;

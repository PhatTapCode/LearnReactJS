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

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();  // Sự kiện không bị tải lại trang 
    console.log(this.state)
  }

  //JSX
  render() {
    return (
      <div>
        {" "}
        my name is {this.state.name} and Im {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}> 
            <input type = "text" onChange={(event)=>this.handleOnChangeInput(event)}/>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Mycomponent;

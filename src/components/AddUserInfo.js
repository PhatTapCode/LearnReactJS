import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "Phat",
    address: "HCM",
    age: 19,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // Sự kiện không bị tải lại trang
    console.log(this.state);
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-Random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        my name is {this.state.name} and Im {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfo;

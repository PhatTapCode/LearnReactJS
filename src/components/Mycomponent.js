import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
//2 kiểu viết code
// class component
// function component

//class component
class Mycomponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "Phat",
        age: 20,
      },
      {
        id: 2,
        name: "Phong",
        age: 16,
      },
      {
        id: 3,
        name: "Phu",
        age: 70,
      },
    ],
  };

  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <br /> <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default Mycomponent;

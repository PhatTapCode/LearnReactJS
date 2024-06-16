import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    //props => viết tắt properties truyền dữ liệu từ cha sang con
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;

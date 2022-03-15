import React from "react";
import { useNavigate } from "react-router-dom";
const ListView = ({
  users,
  setUsers,
  inputVal,
  setInputVal,
  sortedByfirstName,
  reversedSortedByfirstName,
}) => {
  const navigate = useNavigate();
  const backToGridView = () => {
    navigate("gridview");
  };

  return (
    <div>
      <h4 className="title-ListView"> Meet the Team</h4>
      <div className="container-header">
        <div className="listHeader-itemOne">
          {" "}
          <button
            className="sortButtonAtoZ"
            onClick={sortedByfirstName}
          ></button>
          <button
            onClick={reversedSortedByfirstName}
            className="sortButtonZtoA"
          ></button>
        </div>
        <div className="listHeader-item2">
          <input
            value={inputVal}
            type="text"
            onChange={(event) => {
              setInputVal(event.target.value);
            }}
          />
        </div>
        <div className="listHeader-item3">
          <button onClick={backToGridView} className="goToGridView"></button>
        </div>
      </div>

      <div className="list-container">
        {users
          .filter((user) => {
            if (inputVal === "") {
              return user;
            } else if (
              user.name.first.toLowerCase().includes(inputVal.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => {
            return (
              <div
                key={!user.id.value ? user.phone : user.id.value}
                className="grid-item"
              >
                <div className="nameAndImgdiv">
                  {user.name.first} {user.name.last}
                  <div style={{ marginTop: "20px" }}>
                    <img src={user.picture.thumbnail} alt="user" />
                  </div>
                </div>
                <div className="locaition-and-icons-div">
                  <div className="city-div">
                    <p>{user.location.city}</p>{" "}
                    <div style={{ marginTop: "60px" }}>
                      <img
                        className="emailImage"
                        alt="email"
                        src="https://static.vecteezy.com/ti/gratis-vektor/t2/581999-email-icon-vektor-illustration-gratis-vector.jpg"
                      ></img>
                      <img
                        className="phoneImage"
                        alt="phone"
                        src="https://static.vecteezy.com/system/resources/previews/002/079/984/original/phone-icon-flat-style-isolated-on-grey-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-vector.jpg"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ListView;

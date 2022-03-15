import React from "react";
import { useNavigate } from "react-router-dom";
const GridView = ({
  users,

  inputVal,
  setInputVal,
  sortedByfirstName,
  reversedSortedByfirstName,
}) => {
  const navigate = useNavigate();
  const backToList = () => {
    navigate("/");
  };
  return (
    <div>
      <h4 className="title-GridView"> Meet the Team</h4>
      <div class="container-header">
        <div className="gridV-Header-item1">
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
        <div className="gridV-Header-item2">
          <input
            value={inputVal}
            type="text"
            onChange={(event) => {
              setInputVal(event.target.value);
            }}
          />
        </div>
        <div className="gridV-Header-item3">
          <button onClick={backToList} className="goToListView"></button>
        </div>
      </div>

      <div className="grid-container-GridView">
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
                className="grid-item-GridView"
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "60px 0px 0px 60px",
                    border: "1px solid rgba(0, 0, 0, 0)",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      borderRadius: "60px ",
                    }}
                    className="grid-item-container"
                  >
                    <img
                      className="imgGridView"
                      src={user.picture.thumbnail}
                      alt="user"
                    />

                    <div>
                      {user.name.first} {user.name.last}{" "}
                      <p>{user.location.city}</p>
                    </div>

                    <div>
                      {" "}
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
export default GridView;

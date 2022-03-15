import "./App.css";
import React from "react";
import GridView from "./pages/GridView";
import ListView from "./pages/ListView";
import { Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = React.useState([]);
  const [inputVal, setInputVal] = React.useState("");
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://randomuser.me/api/?results=50");
      const response = await data.json();

      const giveUniqId = response.results.map((user) => {
        return {
          ...user,

          id: !user.id.value ? user.phone : user.id.value,
        };
      });

      setUsers([...giveUniqId]);
    };
    fetchData();
  }, []);
  console.log("users", users);

  const sortedByfirstName = () => {
    const copyArray = [...users];
    const sorted = copyArray.sort(function (a, b) {
      return a.name.first.localeCompare(b.name.first);
    });
    setUsers(sorted);
  };

  const reversedSortedByfirstName = () => {
    const copyArray = [...users];
    const sorted = copyArray.sort(function (a, b) {
      return b.name.first.localeCompare(a.name.first);
    });
    setUsers(sorted);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="gridview"
          element={
            <GridView
              users={users}
              inputVal={inputVal}
              setInputVal={setInputVal}
              sortedByfirstName={sortedByfirstName}
              reversedSortedByfirstName={reversedSortedByfirstName}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <ListView
              users={users}
              setUsers={setUsers}
              inputVal={inputVal}
              setInputVal={setInputVal}
              sortedByfirstName={sortedByfirstName}
              reversedSortedByfirstName={reversedSortedByfirstName}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

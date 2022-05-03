import React from "react";

import DATA from "./store/data.json";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {DATA.map((datas) => {
        return (
          <div>
            <h1>{datas.name}</h1>
            <h2>{datas.occupation}</h2>
            <h3>Projects:</h3>
            <p>💻{datas.projects}</p>
            <h3>Skills:</h3>
            <ul>
              <li>{datas.skills[0]}</li>
              <li>{datas.skills[1]}</li>
              <li>{datas.skills[2]}</li>
              <li>{datas.skills[3]}</li>
              <li>{datas.skills[4]}</li>
              <li>{datas.skills[5]}</li>
            </ul>
            <h3>Languages:</h3>
            <p>{datas.languages}</p>
            <h3>Contacts:</h3>
            <p>{`📞phone: ${datas.phone}, 📩email:  ${datas.email}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;

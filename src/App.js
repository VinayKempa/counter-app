import React, { useState } from "react";
import AlertBox from "./component/Alert";
import Banner from "./layout/Banner";
import SideNav from "./layout/SideNav";
import "./styles/base.scss";
//import "./styles/theme.scss";

function App() {
  const getData = (size) => {
    let arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(`item_${i}`);
    }
    return arr;
  };

  const identifyType = (index) => {
    switch (index) {
      case 0: {
        return "info";
      }
      case 1: {
        return "warning";
      }
      case 2: {
        return "success";
      }
    }
  };

  return (
    <React.Fragment>
      <Banner />
      <div className="app-wrapper">
        <SideNav />
        <div className="app-content-wrapper">
          <main>
            <div className="row">
              {getData(20).map((item, index) => {
                return (
                  <div className="col-md-4 col-sm-4 col-12">
                    <AlertBox
                      key={item}
                      type={identifyType(index % 3)}
                      message={<Counter title={`Hello ${index}`} />}
                    />
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

const Counter = ({ title }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <dt>{title}</dt>
      <dd>
        Counter:{" "}
        <strong
          style={{
            position: "absolute",
            top: "0px",
            fontSize: "85px",
            right: "15px",
            opacity: 0.6,
            textShadow: "6px 2px 0 #929090, 7px 3px 0 #080707",
          }}
        >
          {counter}
        </strong>
      </dd>
      <dd>
        <button
          className="btn btn-outline-success btn-sm me-2"
          onClick={increment}
        >
          Increment
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={decrement}>
          Decrement
        </button>
      </dd>
    </div>
  );
};

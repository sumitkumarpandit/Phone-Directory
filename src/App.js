import React , { Component } from 'react';
import { Fragment } from 'react';
import Header from "./Header";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let subscribers = [
      {
        id: 1,
        name: "Vishal Dutt",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Vishal Dutt",
        phone: "9999999999"
      }
    ]
    return (
      <Fragment>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                 <button className="custom-btn delete-btn">Delete</button>
                </span>  
              </div>
            })
          }
        </div> 
      </Fragment>
    );
  }
} 


export default App;

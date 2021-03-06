import React , { Component } from 'react';
import { Fragment } from 'react';
import Header from "./Header";
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {

  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  // clickHandler(message) {
  //   alert(message)
  // }

  // constructor() 
  // {
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  // }


  render() {

    return (
      <Fragment>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                 <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button>
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

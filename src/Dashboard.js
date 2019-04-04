import React, { Component } from 'react';

import Footer from './components/Footer';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className="main-panel" ref="mainPanel">
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;

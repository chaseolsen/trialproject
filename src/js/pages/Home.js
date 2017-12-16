import React from 'react';

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <h1>Home</h1>
        <Footer />
      </div>
    )
  }
}

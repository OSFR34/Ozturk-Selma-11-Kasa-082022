import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AProposBanner from '../AProposBanner/AProposBanner';
import Accordion from '../Accordion/Accordion';

class APropos extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AProposBanner/>
        <Accordion/>
        <Footer/>
      </div>
    )
  }
}
export default APropos;
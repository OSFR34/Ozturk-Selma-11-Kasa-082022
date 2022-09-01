import React, { Component } from 'react'
import LodgingCard from '../LodgingCard/LodgingCard';
import './lodgingcards.css';
import LodgingDatas from '../../data.json';

class LodgingCards extends Component {
  render() {
    return (
      <div className='container p-5 my-3 cards'>
        <div className='row gx-5'>
        {
            LodgingDatas.map((lodging,i) => {
                return (
                    <LodgingCard key={i} id={lodging.id}  title={lodging.title} coverpicture = {lodging.cover}  />
                )
            })
        }
        </div>
      </div>
    )
  }
}
export default LodgingCards;

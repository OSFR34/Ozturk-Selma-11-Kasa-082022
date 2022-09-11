import React, { Component } from 'react'
import './hostinfo.css';
import starfull from '../../images/starfull.svg';
import starempty from '../../images/starempty.svg';

class HostInfo extends Component {
    render() {
      const {hostinfo,rating} = this.props;
    return (
      // JSX formatında yani return un içindeyken let const kullanamayız.
      // JSX = javascript kodları içerisinde HTML kodları kullanmak

      <div className='col-12 col-lg-2 parent-div'>
        <div className="host-parent">
            <div className="host-name">{hostinfo.name}</div>
            <div>
                <img src={hostinfo.picture} className="img-fluid host-picture"/>
            </div>
        </div>
        <div className="star-rating">
          {/* si le rating est égale 1 alors on place une étoile pleine et 4 étoiles vides, etc */}
            {
                rating === "1" && <><img src={starfull} /><img src={starempty} /><img src={starempty} /><img src={starempty} /><img src={starempty} /></>
            }
            {
                rating === "2" && <><img src={starfull} /><img src={starfull} /><img src={starempty} /><img src={starempty} /><img src={starempty} /></>
            }
            {
               rating === "3" && <><img src={starfull} /><img src={starfull} /><img src={starfull} /><img src={starempty} /><img src={starempty} /></>
            }
            {
               rating === "4" && <><img src={starfull} /><img src={starfull} /><img src={starfull} /><img src={starfull} /><img src={starempty} /></>
            }
            {
               rating === "5" && <><img src={starfull} /><img src={starfull} /><img src={starfull} /><img src={starfull} /><img src={starfull} /></>
            }
        </div>
      </div>
    )
  }
}

export default HostInfo;
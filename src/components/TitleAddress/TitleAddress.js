import React, { Component } from 'react'
import './titleaddress.css';

class TitleAddress extends Component {
  render() {
    const {title,localisation,tags} = this.props;
    return (
      <div className='col-12 col-lg-10'>
        <div className="card-title">{title}</div>
        <div className="card-localisation">{localisation}</div>
        <div>
            {
                tags.map((tag,index) => {
                    return(
                        <span key={index} className="card-tag">{tag}</span>
                    )
                })
            }
        </div>
      </div>
    )
  }
}

export default TitleAddress;
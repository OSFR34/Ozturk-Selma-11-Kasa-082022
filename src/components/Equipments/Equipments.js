import React, { Component } from 'react'
import './equipments.css';
import arrowup from '../../images/arrowup.png';
import arrowdown from '../../images/arrowdown.png';

class Equipments extends Component {
  constructor(props){
    super(props);
    this.state = {
      equipmentsOn:false
    }
  }
  changeEquipmentsState = () => {
    this.setState({
      equipmentsOn:!this.state.equipmentsOn
    })
  }

  render() {
    const {equipments} = this.props;
    return (
      <div className='col-12 col-lg-6 equipments-area'>
             <div className='equipments-title' onClick={this.changeEquipmentsState}>
                <div className='equipments-text'>
                    Equipments
                </div>
                <div>
                    {
                      //  ? ===true ise demektir.
                      // if(this.state.equipmentsOn === true){
                      // } soru işareti (?) kısa yazılmasıdır.
                        this.state.equipmentsOn ? <img src={arrowdown} className="img-fluid arrow-img" /> : <img src={arrowup} className="img-fluid arrow-img" />
                    }
                </div>
            </div>
            {
                this.state.equipmentsOn ? <div className='equipments-bigtext'>
                  {
                     equipments.map((equipment,i) => {
                      return(
                        <div key={i} className='equipment' >{equipment}</div>
                      )
                     })
                  }
                </div> : null
            }
      </div>
    )
  }
}

export default Equipments;
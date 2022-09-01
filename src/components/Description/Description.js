import React, { Component } from 'react'
import './description.css';
import yukariok from '../../images/arrowup.png';
import asagiok from '../../images/arrowdown.png';

class Description extends Component {
    // React'te state yaratmak veya kullanmak için constructor mutlaka kullanmamız gerekir. coNTRUCTOR kullanmazsak state yaratamayız.
    constructor(props){
        // Parent classın özelliklerini aynen al
        super(props)
        // State durum demektir. React'te örneğin butona tıklanma durumunu kontrol etmek için state yaratıryoruz.
        this.state = {
            // Description componentine tıklanıp tıklanmadığını kontrol etmek için descriptionOn adında bir state yaratırız. bU adı istediğimiz gibi koyabiliriz. Başlangıçta Description component kapalı olduğu için default değeri false olur.
            // JSON objesinde son satırın sonunda virgül kullanılmaz. O yüzden equipmentsOn:false tan sonra virgül koyulmaz.
            descriptionOn:false,
            equipmentsOn:false
        }
    }
    // Buradaki fonksiyonu biz yarattık. Fonksiyon descriptionOn stateinin değerini true ise false, false ise true yapar.
    changeDescriptionState = () => {
        // this.setState fonksiyonu state in değerini değiştir demektir.
        this.setState({
            descriptionOn:!this.state.descriptionOn 
        })
    }
  render() {
    const {description} = this.props;
    return (
        <div className='col-12 col-lg-6 description-area'>
            {/* description-title elementine tıklandığında changeDescriptionState fonksiyonunu çalıştır. */}
            <div className='description-title' onClick={this.changeDescriptionState}>
                <div className='description-text'>
                    Description
                </div>
                <div>
                    {
                        // eğer descriptionOn state inin değeri valuesu === true ise yukarı ok resmini göster değilse aşağı ok resmini göster.
                        // ? = if demektir ve : = else demektir. (Shorthand if else loop)
                        this.state.descriptionOn ? <img src={asagiok} className="img-fluid arrow-img" /> : <img src={yukariok} className="img-fluid arrow-img" />
                    }
                </div>
            </div>
            {
                // Eğer descriptionOn statei === true ise description-bigtext divini göster, değilse gösterme
                this.state.descriptionOn ? <div className='description-bigtext'>
                {description}
                </div> : null
            }
        </div>
    )
  }
}

export default Description;
import React, { Component } from 'react'
import './slider.css';

class Slider extends Component {
    render() {
        //react da destructing metodu
        // this.propstan cardinfo yu al demektir. Böylece this.props.cardinfo şeklinde kullanmak yerine daha kısa kelimeyle süslü parantez içinde cardinfo olarak çağırabiliriz. 
        // destructing prop method react
        const {cardinfo} = this.props;
        return (
            // classNameName = container seçince logo ile aynı hizaya geliyor. bu yüzden container bootstrap classNameını kullandık.
            // classNameName sadece css ayarlamak için kullanılır.
            <div className='container my-4'>
                {/* Bootstrap web adresinden carousel kodlarını kopyalayıp buraya yapıştırıyoruz. */}
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Slider içindeki her bir resme carousel-item denir. Eğer carousel-item yanında active yazıyorsa o anda o resim gösteriliyor demektir. */}
                        <div className="carousel-item active">
                            <img src={cardinfo.pictures[0]} className="d-block w-100 img-fluid" alt={cardinfo.title}  />
                            <div className="carousel-caption d-none d-md-block">
                                {/* current-slide-text = texte de la diapositive actuelle demektir. */}
                                <p className="current-slide-text">1 / {cardinfo.pictures.length}</p>
                            </div>
                        </div>
                        {
                            cardinfo.pictures.map((picture,index) => {
                                if(index !== 0){
                                    return(
                                        <div key={index} className="carousel-item">
                                            <img src={picture} className="d-block w-100 img-fluid" alt={cardinfo.title} />
                                            <div className="carousel-caption d-none d-md-block">
                                                {/* index 0'dan basşladığı için 1 artırmamız gerekir indexin değerini. */}
                                            <p className="current-slide-text">{index + 1} / {cardinfo.pictures.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                   {
                        cardinfo.pictures.length > 1 ?  
                        <>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </> :null
                   }
                </div>
            </div>
        )
    }
}
export default Slider;
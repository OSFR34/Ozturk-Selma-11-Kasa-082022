import React, { Component } from 'react'
import './slider.css';

class Slider extends Component {
    render() {
        // destructing prop method react
        const {cardinfo} = this.props;
        return (
            // className=container permet l'alignement avec le logo
            <div className='container my-4'>
                {/* Récupération des codes carousel à partir du site web de bootstrap. */}
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/*l'ajout d'active après "carousel-item" signifie qu'il faut l'affiché. */}
                        <div className="carousel-item active">
                            <img src={cardinfo.pictures[0]} className="d-block w-100 img-fluid" alt={cardinfo.title}  />
                            <div className="carousel-caption d-none d-md-block">
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
                                                {/* comme l'index commence par 0 alors on ajoute +1. */}
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
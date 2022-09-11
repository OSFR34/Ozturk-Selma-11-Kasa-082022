// création d'un composant fonction pour récupérer id à partir du "path"de l'annonce.

import React from 'react'
// utilisation de la méthode useParams() pour récupérer du chemin 'Path'son id.
import {useParams} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import ListCards from '../../data.json';
import TitleAddress from '../TitleAddress/TitleAddress';
import HostInfo from '../HostInfo/HostInfo';
import DetailAccordions from '../DetailAccordions/DetailAccordions';


function Detail() {
  const parameters = useParams(); 
  return (
    <div>
        <Header/>
          {/* map :permet l'itération à partir des objets */}
          {   
            ListCards.map((card,i) => {
              if(card.id === parameters.lodgingid){
                return(
                
                  <div key={i}>
                    <Slider key={i} cardinfo={card} />
                    <div className='container my-4'>
                    <div className="row">
                      <TitleAddress key={i} title={card.title} localisation={card.location} tags={card.tags} />
                      <HostInfo hostinfo={card.host} rating={card.rating} />
                      <DetailAccordions equipmentProps = {card.equipments} descriptionProps={card.description} />
                    </div>
                    </div>
                  </div>
                )
              }
             
            })
          }
          
        <Footer/>
    </div>
  )
}
export default Detail;
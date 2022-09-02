// Normalde class component oluşturuyoruz ancak burada path 'den ilan id sini almak için rfc yazıp entera basıyoruz.
//Yani functional component oluşturmamız gerekiyor.
import React from 'react'
// Path'den ilanın idsini almak için useParams metodunu kullanıyoruz.
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
          {/* map metodu javascript objeleri için iterasyon yapmayı sağlar. Her bir iterasyon öğesine card ismini verdik. */}
          {   
            ListCards.map((card,i) => {
              if(card.id === parameters.lodgingid){
                return(
                  // Slider componentine card bilgilerini yollamak için bir prop oluşturuyoruz. propun ismine istediğimiz ismi verebiliriz. Burda ismini cardinfo olarak belirledik. cardinfonun değeri de card değişkenine eşitledik. Böylece tıklanan ilanın bilgilerini slider componentine yolladık.
                  // return içinde birden fazla component kullanmak istediğimizde aşağıdaki gibi "sarmalama(<>)" yapmamız gerekir.
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
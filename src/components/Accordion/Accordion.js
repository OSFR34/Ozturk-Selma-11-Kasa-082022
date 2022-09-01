import React, { Component } from 'react'
import './accordion.css'

class Accordion extends Component {
  render() {
    return (
      // container bootstrap özelliğidir. my-5 de bootstrap özelliğidir.
      // container: sayfanın sağ ve sol tarafından otomatik olarak margin verir. Ama hepsi eşit margin olur. 
      // my-5 : my-1 den my-5'e kadar verilebilir. 1 en az margin ve 5'de en çok margin demektir. my: Margin-bot ve aynı anda margin-bottom demektir. 
      <div className='container my-5'>
        {/* Kolon oluşturmak için satır açmanız gerekir. O yüzden row kullandık. */}
        <div className='row'>
          {/* col-12 : Mobil telefonlar için tam ekran genişliğinde olması demektir.  */}
          {/* col-lg-10: Laptop ve daha geniş ekranlar için 10 kolon genişliğinde olması demektir. */}
          {/* offset-lg-1 : Kolonu 1 kolon genişliğinde kaydır. Kolonu ortalamak için kullanırız. */}
          <div className='col-12 col-lg-10 offset-lg-1'>
            {/* className="accordion" bootstrap tarafından tanımlanan css classıdır. */}
            <div className="accordion" id="accordionExample">
              {/* accordion-item bootstrap özelliğidir. */}
              {/* accordion-item accordionun açılması veya kapanması gibi özellikleri ayarlayabiliriz. Ayrıca bootstrap tarafondan yaratılmış kendi css özellikleri vardır. Kendi margini paddingi bootstrap tarafından ayarlanmıştır. */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  {/* button : accordionun açılıp kapanmasını sağlayan butondur. */}
                  {/* collapsed: Bootstrap css classıdır. accordion kapalı demektir. */}
                  {/* data-bs-toggle="collapse" accordionu açıp kapamaya yarayan bootstrap propertysidir.  */}
                  {/* data-bs-target="#collapseOne", collapseOne idli accordionu aç demektir. */}
                  {/* aria-controls="collapseOne" , buttonun hangi elementi kontrol edeceğini belirtir. Burada collapseOne idli elementi kontrol ediyoruz. */}
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Fiabilité
                  </button>
                </h2>
                {/* accordion-collapse: accordiona tıkladığımızda görünecek olan alanın css özelliğidir. Bootstrap classıdır.  */}
                {/* data-bs-parent="#accordionExample" accordiona tıkladığımızda görünecek alanın hangi parent alana bağlı olduğunu belirten css özelliğidir. */}
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  {/* accordion-body : Bootstrap classıdır. Accordiona tıkladığında açılan alanın margin padding gibi özelliklerini ayarlar. */}
                  <div className="accordion-body">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Respect
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Service
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Sécurité
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Accordion;

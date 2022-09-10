import React, { Component } from 'react'
import './accordion.css'

class Accordion extends Component {
  render() {
    return (
      // bootstrap =container: gère automatiquement les marges à droite et à gauches de façon équitablen. 
      // my-5 : gère la marge des ordonnées (haut bas)- régalage de my-1 à my-5.my-1 est la valeur la plus petite et my-5 est la plus grande. 
      <div className='container my-5'>
        {/* Pour créer des colones il faut d'abord créer une ligne. */}
        <div className='row'>
          {/* col-12 : en mode mobile que la largeur de l'affichage doit occupé l'intégralité de l'écran.  */}
          {/* col-lg-10: pour les Laptop et plus grand écran la largeur de la colonne doit correspondre à 10. */}
          {/* offset-lg-1 : bascule la largeur à 1 colonne et pour centrage de celle-ci */}
          <div className='col-12 col-lg-10 offset-lg-1'>
            <div className="accordion" id="accordionExample">
             
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  {/* button : accordionun açılıp kapanmasını sağlayan butondur. */}
                  {/* collapsed: signifie que l'accordeon est fermé */}
                  {/* data-bs-toggle="collapse" gère l'ouverture et la fermeture de l'accordeon.  */}
                  {/* data-bs-target="#collapseOne", collapseOne ouvre l'accordeon. */}
                  {/* aria-controls="collapseOne" signifie quel element doit etre controler*/}
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Fiabilité
                  </button>
                </h2>
                {/* accordion-collapse: precise ce qui doit etre vu au clic.*/}
                {/* data-bs-parent="#accordionExample" au clic sue l'accordeon, précise quel est le parent qui est lié. */}
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  {/* accordion-body :règle automatique les margins et les paddings . */}
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

import React from 'react'
import "./services.css";
import seo from '../../assets/seo.png'
import app from '../../assets/application.png'
import coding from '../../assets/coding.png'
const Services = () => {
  const service = [
    {
      name: "Website Development",
      img: coding,
      desc: "We devlop a complete real world working website.As per your reqire domain ,we devlop for you."
    },
    { name: "SEO Optimization", img: seo, desc: "We make sure that your site is visible" },
    { name: "App Development", img: app, desc: "We devlop a complete real world working Application.As per your reqire domain ,we devlop for you." }
  ]
  return (
    <>
      <section class="service section" id="services">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div class="row">

            {service.map((e) => {
              return (
                <>
                  <div class="service-item padd-15">
                    <div class="service-item-inner">
                      <div class="icon">
                        <img src={e.img} />
                      </div>
                      <h4>{e.name}</h4>
                      <p>
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </>
              )

            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Services
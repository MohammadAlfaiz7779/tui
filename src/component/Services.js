import React, { useState } from 'react';
import ServiceApi from "../API/ServiceApi";
const Services = () => {
    const [serviceData, setServiceData] = useState(ServiceApi);
  return (
    <>
    <section className='service-main-container'>
        <div className='container service-container'>
            <h1 className='main-heading text-center fw-bold'>How to send money</h1>
            <div className='row'>
            {
                serviceData.map((v) =>{
                return(
                    <>
                    <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
                <i className={v.logo} id='vlogo'></i>
                <h2 className='sub-heading'>{v.title}</h2>
                <p className='main-hero-para'>{v.info}</p>
            </div>       
                    </>
                )
                })
            }
        </div>
        </div>
    </section>
    </>
  )
}


export default Services;
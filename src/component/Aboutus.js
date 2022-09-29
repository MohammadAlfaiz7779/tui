import React,{useState} from 'react';
import howtoUseApp from "../API/Howtouse";

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howtoUseApp);
    return (
        <>
            <section className='common-section our-services'>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-5 text-center our-services-leftside-img'>
                            <img src={require('../images/hero3.jpg')} alt="aboutimg" />
                        </div>

{/*--------------------------------------1section right side data ------------------------------------*/}

                        <div className='col-12 col-lg-7 our-services-list'>
                            <h3 className='mini-title'>
                                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className='main-heading'>How to use the App</h1>

{/* -------------------------------------api from "howtouse" -----------------------------------------*/}

                            {aboutData.map((v) => {
                                return ( <>
                                <div className='row our-services-info'>
                                    <div className='col-1 our-services-number'>{v.id}</div>
                                    <div className='col-10 our-services-data'>
                                        <h2>{v.title}</h2>
                                        <p className='main-hero-para'>{v.info}</p>
                                    </div>
                                </div>
                                </> )
                            })}
                            <br />
                            <button className='btn-style btn-style-border'>learn more</button>
                        </div>
                    </div>
                </div>
            </section>
{/* -----------------------------------------repeat ---2nd section------------------------------------------ */}


            <section className='common-section our-services our-services-rightside'>
                <div className='container mb-5'>
                    <div className='row'>

{/*--------------------------------------2part  right side data ------------------------------------*/}

                        <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column'>
                            <h3 className='mini-title'>
                                --SUPPORT IN ANY LANGUAGES                            </h3>
                            <h1 className='main-heading'>World class support <br /> Available 24/7 </h1>

{/* -------------------------------------api from "howtouse" -----------------------------------------*/}

                            {aboutData.map((v) => {
                                return ( <>
                                <div className='row our-services-info'>
                                    <div className='col-1 our-services-number'>{v.id}</div>
                                    <div className='col-10 our-services-data'>
                                        <h2>{v.title}</h2>
                                        <p className='main-hero-para'>{v.info}</p>
                                    </div>
                                </div>
                                </> )
                            })}
                            <br />
                            <button className='btn-style btn-style-border'>learn more</button>
                        </div>

                        <div className='col-12 col-lg-5 our-services-rightside-img'>
                            <img src={require('../images/callcenter.jpg')} alt="aboutimg" />
                        </div>      

                    </div>
                </div>
            </section>


        </>
    )
}

export default Aboutus;
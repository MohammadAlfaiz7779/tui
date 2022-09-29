import React from 'react';

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-conatiner'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start'>
                            <h1 className='display-2'>
                                Online Payment Made <br /> Easy For You
                            </h1>
                            <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, deleniti quae? Repellendus inventore, quo, architecto repudiandae perferendis dicta distinctio, error consequatur eligendi veniam illo unde!</p>
                            <h3>Get Early Access For You</h3>
                            <div className='input-group mt-3'>
                                <input
                                    type="text"
                                    placeholder='Enter Your E-mail'
                                    className='rounded-pill w-50 me-3 p-2 form-control-text' 
                                    />
                                <div className='input-group-button'>Get It Now</div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 header-right-side d-flex justify-content-center flex-row align-item-center main-herosecion-images'>
                            <img src={require('../images/hero1.jpg')} alt="hero1" className='img-fluid' />
                            <img src={require('../images/hero4.jpg')} alt="hero1" className='img-fluid main-hero-img2' />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
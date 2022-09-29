import React, { useState } from 'react';

const Contactform = () => {
    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        Email: "",
        Address: "",
        Message: "",
    });


    let name, value;
    const postContactData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setContactData({ ...contactData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phoneNumber, Email, Address, Message } = contactData;

        if (firstName && lastName && phoneNumber && Email && Address && Message) {
            const res = fetch(
                //firebase link
                "https://t-ui-a393b-default-rtdb.firebaseio.com/contactdataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phoneNumber,
                        Email,
                        Address,
                        Message,
                    }),
                }
            );
    
            if (res) {
                setContactData({
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    Email: "",
                    Address: "",
                    Message: "",
                })
                alert("Data Stored");
            } else {
                alert("plz fill the data")
            }
        } else {
            alert("plz fill the data");
        }
    };

    return (
        <>
            <section className='contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='contact-leftside col-12 col-lg-5'>
                                    <h1 className='main-heading'>
                                        Connect With Our <br /> Sales Team.</h1>
                                    <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad minima nihil.</p>
                                    <figure>
                                        <img src={require('../images/hero1.jpg')} alt="contactusimg" className='img-fluid' />
                                    </figure>
                                </div>
                                {/* right side Form */}
                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form method="POST">
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='firstName'
                                                    value={contactData.firstName}
                                                    onChange={postContactData}
                                                    id='' className='form-control'
                                                    placeholder='First Name' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='lastName'
                                                    value={contactData.lastName}
                                                    onChange={postContactData}
                                                    id='' className='form-control'
                                                    placeholder='Last Name' />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='phoneNumber'
                                                    value={contactData.phoneNumber}
                                                    onChange={postContactData}
                                                    id='' className='form-control'
                                                    placeholder='Phone Number' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                                <input type="text"
                                                    name='Email'
                                                    value={contactData.Email}
                                                    onChange={postContactData}
                                                    id='' className='form-control'
                                                    placeholder='E mail Id' />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                                <input type="text"
                                                    name='Address'
                                                    value={contactData.Address}
                                                    onChange={postContactData}
                                                    id='' className='form-control '
                                                    placeholder='Add Address' />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                                <input type="text"
                                                    name='Message'
                                                    value={contactData.Message}
                                                    onChange={postContactData}
                                                    id='' className='form-control'
                                                    placeholder='Enter Your Message' />
                                            </div>
                                        </div>

                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked" />
                                            <label class="form-check-label" className='main-hero-para'>I agree that THEUNICORNINDIA may contact me at the email address or phone number above
                                            </label>
                                        </div>

                                        <button
                                            type='submit'
                                            className='btn btn-style w-100'
                                            onClick={submitData}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactform;
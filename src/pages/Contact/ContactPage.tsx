import React, { useState } from 'react';
import './ContactPage.css';

const ContactForm: React.FC = () => {

    return (
        <section className="vh-200" style={{ backgroundColor: '#eee', borderRadius: '40px', marginTop: '100px' }}>
            <div className="container px-4" style={{padding: '30px'}}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control"/>
                                                    <label className="form-label" htmlFor="form3Example1c">Your
                                                        Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control"/>
                                                    <label className="form-label" htmlFor="form3Example3c">Your
                                                        Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control"/>
                                                    <label className="form-label" htmlFor="form3Example3c">
                                                        Subject</label>
                                                </div>
                                            </div>
                                            <div className="App">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-5">
                                                        <textarea id="form3Example4cd" className="form-control col-9" rows={6}></textarea>
                                                        <label className="form-label" htmlFor="form3Example4cd">Your Description</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end mt-3">
                                                    <button type="button" className="btn-lg px-4 me-sm-3 custom-btn-style">
                                                        Envoyer
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
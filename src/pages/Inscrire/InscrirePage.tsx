import axios from 'axios';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Contact/ContactPage.css'

const InscrirePage: React.FC = () => {
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const bcrypt = require('bcryptjs');
        const formData = new FormData(event.currentTarget);

        // Vérification si les mots de passe sont identiques
        const password = formData.get('password');
        const passwordConfirmation = formData.get('password_confirmation');
        if (password !== passwordConfirmation) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Vérification de la case de confirmation des conditions générales d'utilisation
        const termsChecked = formData.get('terms');
        if (!termsChecked) {
            alert("Veuillez accepter les conditions générales d'utilisation.");
            return;
        }
        const email = {
            adresse_mail: formData.get('email')
        }

        const role = formData.get('role');
        let intRole;
        if (role === '1') {
            intRole = 1;
        } else if (role === '2') {
            intRole = 2;
        } else {
            intRole = 0;
        }
        console.log(intRole);

        const data = {
            username: formData.get('name'),
            password: formData.get('password'),
            email: formData.get('email'),
            role: intRole,
            telephone: formData.get('telephone'),
        };

        console.log(data);

        axios
            .post('http://localhost:5001/register', data)
            .then((response) => {
                console.log(response);
                setSuccess(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (success) {
        return <Navigate to="/connexion" />;
    }


    return (
        <section className="vh-200" style={{ backgroundColor: '#eee', borderRadius: '40px', marginTop: '100px' }}>
            <div className="container px-4" style={{padding: '30px'}}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">

                                    <div className="">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">S'inscrire</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control"
                                                           name="name"/>
                                                    <label className="form-label" htmlFor="form3Example1c">Your
                                                        Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control"
                                                           name="email"/>
                                                    <label className="form-label" htmlFor="form3Example3c">Your
                                                        Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4cd">Role</label>
                                                    <select id="form3Example4cd" className="form-control" name="role">
                                                        <option value="2">ADMIN</option>
                                                        <option value="1">PROPRIETAIRE</option>
                                                        <option value="0">LOCATAIRE</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example4cd" className="form-control"
                                                           name="telephone"/>
                                                    <label className="form-label" htmlFor="form3Example4cd">Telephone</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control"
                                                           name="password"/>
                                                    <label className="form-label"
                                                           htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control"
                                                           name="password_confirmation"/>
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your
                                                        password</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox"
                                                       value="accepted" name="terms" id="form2Example3c"/>
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    J'accepte tous les termes du <a href="#!">contrat de service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="submit"
                                                    className="btn-lg px-4 me-sm-3 custom-btn-style"

                                                >S'enregistrer
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InscrirePage;

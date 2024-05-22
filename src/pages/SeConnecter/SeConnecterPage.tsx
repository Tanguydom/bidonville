import React from 'react';
import axios, {AxiosError} from "axios";
import '../Contact/ContactPage.css'

const SeConnecterPage: React.FC = () => {

    //connexion
    const handleConnect = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêcher le rechargement de la page

        const formData = new FormData(event.currentTarget); // Récupérer les données du formulaire
        const password = formData.get('password');
        const username = formData.get('username');

        const data = {
            username: username,
            password: password,
        };

        console.log(data);

        try {
            const response = await axios.post(
                'http://localhost:5001/login',
                data
            );

            console.log(response);
            alert("Identifiant correct !");
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
            window.location.href = '/';

        } catch (err: any) {
            if ((err as AxiosError).response?.status === 401) {
                alert("Erreur d'authentification !");
            } else {
                alert("Une erreur est survenue !");
            }
        }
    };


    return (
        <section style={{ backgroundColor: '#eee', borderRadius: '40px'}}>
            <div className="container px-4" style={{ padding: '10px', marginTop: '100px' }}>
                <div className="row d-flex justify-content-center align-items-center h-100" style={{marginBottom:'210px'}}>
                    <div className="col-lg-12 col-xl-5">
                        <div className="card text-black" style={{ borderRadius: '25px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Se Connecter</p>
                                        <form className="mx-1 mx-md-4" onSubmit={handleConnect} >
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    <input type="username" id="form3Example3c" className="form-control" name="username"/>
                                                    <label className="form-label" htmlFor="form3Example3c">Nom d'utilisateur</label>

                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">


                                                    <input type="password" id="form3Example4c"
                                                           className="form-control" name="password"/>
                                                    <label className="form-label"
                                                           htmlFor="form3Example4c">Mot de passe</label>



                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">


                                                <input className="form-check-input me-2" type="checkbox" value=""
                                                       id="form2Example3c"/>
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    rester connecter
                                                </label>


                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >
                                                <button type="submit"
                                                        className="btn-lg px-4 me-sm-3 custom-btn-style"
                                                > Se Connecter
                                                </button>
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

export default SeConnecterPage;
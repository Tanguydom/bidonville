import React from 'react';
import '../Contact/ContactPage.css';

const HomePage: React.FC = () => {
    const clickHandler = () => {
        const token = localStorage.getItem('token');
        if (token) {
            window.location.href = '/visite';
        } else {
            window.location.href = '/connexion';
        }
    }

    const whiteTextStyle = {
        color: 'black',
    };
    const greenTextStyle = {
        color: '#70BD95',
        fontWeight: 'bold',
    };

    return (
        <section className="vh-200">
            <div className="container px-4" style={{ padding: '100px' }}>
                <div className="card text-black" style={{borderRadius : '25px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)', padding : '40px'}}>
                    <div className="row gx-5 justify-content-center">
                        <div style={{ padding: '20px' }}>
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder mb-1" style={{ padding: '37px', ...whiteTextStyle }}>
                                    Bienvenue sur PasseTaMaison
                                </h1>
                                <p className="lead mb-4" style={{ textAlign: 'justify', width: '70%', marginLeft: '15%', ...greenTextStyle }}>
                                    Trouvez votre logement idéal avec PasseTaMaison. Nous offrons une vaste sélection de propriétés en location, adaptées à tous les besoins et budgets.
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <button
                                        type="button"
                                        className="btn-lg px-4 me-sm-3 custom-btn-style"
                                        onClick={clickHandler}
                                        style={{ marginTop: '20px' }}
                                    >
                                        Voir les Locations
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body" style={{height : '250px', borderRadius: '20px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)'}}>
                                    <h2 className="h4 fw-bolder text-dark" style={{ textAlign: 'center', marginBottom: '20px' }}>
                                        Large Sélection
                                    </h2>
                                    <p className="text-muted" style={{ textAlign: 'justify' }}>
                                        Découvrez une large sélection de logements disponibles à la location, que vous cherchiez un appartement, une maison ou une villa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body" style={{height : '250px', borderRadius: '20px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)'}}>
                                    <h2 className="h4 fw-bolder text-dark" style={{ textAlign: 'center', marginBottom: '20px' }}>
                                        Flexibilité
                                    </h2>
                                    <p className="text-muted" style={{ textAlign: 'justify' }}>
                                        Trouvez des options de location flexibles pour répondre à vos besoins, que vous recherchiez une location à court ou à long terme.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body" style={{height : '250px', borderRadius: '20px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)'}}>
                                    <h2 className="h4 fw-bolder text-dark" style={{ textAlign: 'center', marginBottom: '20px' }}>
                                        Support Client
                                    </h2>
                                    <p className="text-muted" style={{ textAlign: 'justify' }}>
                                        Notre équipe de support client est là pour vous aider à chaque étape de votre recherche et de votre location de logement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
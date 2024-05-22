import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white text-center py-4"> {/* Ajoutez la classe "fixed-bottom" */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            {/* Ajoutez d'autres liens ici */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
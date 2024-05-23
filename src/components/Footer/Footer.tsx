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
                                <a href="https://www.pornhub.com/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://rule34.xxx/index.php?page=post&s=list&tags=chatgpt" target="_blank" rel="noopener noreferrer">
                                    Notre IA
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
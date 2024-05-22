import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import SeConnecterPage from "./pages/SeConnecter/SeConnecterPage";
import InscrirePage from "./pages/Inscrire/InscrirePage";
import ContactPage from "./pages/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Produit from "./pages/Produit/Produit";
import Visite from "./pages/Visite/Visite";
import Profil from "./pages/Profil/Profil";
import ProduitDetail from "./pages/ProduitDetail/ProduitDetail";

const App: React.FC = () => {
    const token = localStorage.getItem('token');

    const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
        if (token) {
            return <>{element}</>;
        } else {
            return <Navigate to="/connexion" />;
        }
    };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="connexion" element={<SeConnecterPage />} />
                <Route path="inscrire" element={<InscrirePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="produit" element={<ProtectedRoute element={<Produit />} />} />
                <Route path="produit/:id" element={<ProtectedRoute element={<ProduitDetail />} />} />
                <Route path="visite" element={<ProtectedRoute element={<Visite />} />} />
                <Route path="profil" element={<ProtectedRoute element={<Profil />} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

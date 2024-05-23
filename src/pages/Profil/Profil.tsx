import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profil.css';



interface Profile {
    username: string;
    email: string;
    role: number;
}

const Profil: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = () => {
        const id = localStorage.getItem('id');
        const token = localStorage.getItem('token');

        console.log(id);
        console.log(token);

        if (!id || !token) {
            setError("Missing ID or token");
            return;
        }

        axios.get(`http://localhost:5001/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setProfile(res.data.user);
            })
            .catch((err) => {
                console.log(err);
                setError("Failed to fetch profile");
            });
    };

    const handleEditAccount = () => {
        // Code pour éditer le compte
    };

    const handleDeleteAccount = () => {
        if (!window.confirm("êtes-vous sûr de vouloir supprimer votre compte ?")) {
            console.log("compte non supprimé");
            return;
        } else {
            const id = localStorage.getItem('id');
            const token = localStorage.getItem('token');

            if (!id || !token) {
                setError("Missing ID or token");
                return;
            }

            axios.delete(`http://localhost:5001/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('id');
                    window.location.href = '/';
                    console.log("compte supprimé");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <section className="vh-100 profile-section">
            <div className="container">
                <div className="card shadow rounded-lg profile-card">
                    <div className="card-body p-5">
                        <h1 className="text-center mb-4 profile-title">
                            Profil
                        </h1>
                        <div className="mb-4">
                            <h5 className="card-title profile-subtitle">
                                Informations du profil
                            </h5>
                            <hr />
                            <p className="card-text profile-text">
                                <strong>Nom d'utilisateur :</strong> {profile.username}
                            </p>
                            <p className="card-text profile-text">
                                <strong>Email :</strong> {profile.email}
                            </p>
                            <p className="card-text profile-text">
                                <strong>Rôle :</strong> {profile.role === 1 ? 'Admin' : 'Utilisateur'}
                            </p>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-failed" onClick={handleDeleteAccount}>
                                Supprimer mon compte
                            </button>
                            <button className="btn btn-success" onClick={handleEditAccount}>
                                Modifier mon compte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profil;
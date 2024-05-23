import React from 'react';
import './produitCard.css';

interface Room {
    number: number;
    type: string;
}

interface Pricing {
    charge: number;
    price: number;
}

interface Property {
    address: string;
    idOwner: number;
    idProperty: number;
    internet: string;
    pricing: Pricing;
    rooms: Room[];
    surface: number;
    terrace: boolean;
}

interface Advert {
    property: Property;
    "description": string,
    "dtAvailability": Date,
    "dtCreation": Date,
    "dtModification": Date,
    "idAdvert": number,
    "title": string
}

function formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

const PropertyCard: React.FC<{ advert: Advert }> = ({ advert }) => {
    return (
        <div className="property-card">
            <div className="property-card-body">
                <div className="property-card-header">
                    <div className="property-card-main-info">
                        {/*<p className="property-card-title">Advert ID: {advert.idAdvert}</p>*/}
                        <p className="property-card-text">Titre : {advert.title}</p>
                        <p className="property-card-text">Description : {advert.description}</p>
                        <p className="property-card-text">Dispo à partir du
                            : {formatDate(new Date(advert.dtAvailability))}</p>
                        <p className="property-card-text">Créé le : {formatDate(new Date(advert.dtCreation))}</p>
                        <p className="property-card-text">Dernière modification
                            le: {formatDate(new Date(advert.dtModification))}</p>
                    </div>
                </div>
                <div className="property-card-details">
                    <div className="property-card-property">
                        <h6>Property</h6>
                        {/*<p className="property-card-text">Property ID: {advert.property.idProperty}</p>*/}
                        <p className="property-card-text">Address: {advert.property.address}</p>
                        {/*<p className="property-card-text">Owner : {advert.property.idOwner}</p>*/}
                        <p className="property-card-text">Internet: {advert.property.internet}</p>
                        <p className="property-card-text">Surface: {advert.property.surface} m²</p>
                        <p className="property-card-text">Terrace: {advert.property.terrace ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="property-card-pricing">
                        <h6>Pricing</h6>
                        <p className="property-card-text">Charge: {advert.property.pricing.charge} €</p>
                        <p className="property-card-text">Price: {advert.property.pricing.price} €</p>
                    </div>
                    <div className="property-card-rooms">
                        <h6>Rooms</h6>
                        {advert.property.rooms.map((room, index) => (
                            <p key={index} className="property-card-text">{room.type}: {room.number}</p>
                        ))}
                    </div>
                </div>
                <div className="property-card-footer">
                    <button className="btn btn-primary">Postuler</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

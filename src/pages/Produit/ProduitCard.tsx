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

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-card-body">
                <div className="property-card-header">
                    <div className="property-card-main-info">
                        <h5 className="property-card-title">Property ID: {property.idProperty}</h5>
                        <p className="property-card-text">Address: {property.address}</p>
                        <p className="property-card-text">Owner ID: {property.idOwner}</p>
                        <p className="property-card-text">Internet: {property.internet}</p>
                        <p className="property-card-text">Surface: {property.surface} m²</p>
                        <p className="property-card-text">Terrace: {property.terrace ? 'Yes' : 'No'}</p>
                    </div>
                </div>
                <div className="property-card-details">
                    <div className="property-card-pricing">
                        <h6>Pricing</h6>
                        <p className="property-card-text">Charge: {property.pricing.charge} €</p>
                        <p className="property-card-text">Price: {property.pricing.price} €</p>
                    </div>
                    <div className="property-card-rooms">
                        <h6>Rooms</h6>
                        {property.rooms.map((room, index) => (
                            <p key={index} className="property-card-text">{room.type}: {room.number}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
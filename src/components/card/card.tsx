import React, {useState} from 'react';
import Image from "next/image";
import {observer} from "mobx-react";

import './card.css';

interface CardProps {
    image: any;
    rating?: number;
    isInMovieDetailsPage?: boolean;
    movieId?: string;
}
const Card = observer(({image, rating, isInMovieDetailsPage, movieId}: CardProps) => {
    const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
    const handleAddToFavoritesClick = () => {
        setIsAddedToFavorites(prevState => !prevState);
    };

    const renderBookmarkIcon = () => {
        return (
            <div
                className={`bookmark-icon ${isAddedToFavorites ? 'bookmark-active' : ''}`}
                onClick={handleAddToFavoritesClick}
            >
                <span>🔖</span>
            </div>
        )
    }

    const renderCardInfo = () => {
        return (
            <div className="info p-4">
                <div className="rating flex items-center">
                    <span className="star-icon">⭐</span>
                    <span className="small-text ml-2">{rating}</span>
                </div>
                <div className="movie-name my-2">{image.attributes.alt}</div>
                <div className="add-button my-2">
                    <button onClick={handleAddToFavoritesClick} className="rounded p-2">
                        {isAddedToFavorites ? 'Added' : 'Add'}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="card bg-amber-800 shadow-lg rounded overflow-hidden relative">
            {
                !isInMovieDetailsPage ? (renderBookmarkIcon()) : null
            }
            <div className="image-container">
                <Image
                    src={image.attributes.src}
                    alt={image.attributes.alt}
                    width={image.attributes.width}
                    height={image.attributes.height}
                />
            </div>
            {
                !isInMovieDetailsPage ? (renderCardInfo()) : null
            }
        </div>
    );
});

export default Card;

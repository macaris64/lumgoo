import {observer} from "mobx-react";
import {Movie} from "@/models/movie.model";
import "./movie.css";
import {ImageCarousel} from "@/components/carousel/carousel";
import React from "react";

interface MovieProps {
    movie: Movie;
}

const MovieComponent = observer (({movie}: MovieProps) => {
    return (
        <div className="movie-page">
            <div className="movie-image">
                <div className="movie-carousel">
                    <ImageCarousel
                        images={movie.images}
                        slidesToShow={5}
                        isInMovieDetailsPage={true}
                    />
                </div>
            </div>
            <div className="movie-info">
                <h1>{movie.title} ({movie.year})</h1>
                <p><strong>Director:</strong> {movie.director.map(d => d.name).join(", ")}</p>
                <p><strong>Genre:</strong> {movie.genre.map(g => g.name).join(", ")}</p>
                <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
                <p><strong>Plot:</strong> {movie.plot}</p>
                {/* Add more movie details as needed */}
            </div>
        </div>
    );
});

export default MovieComponent;

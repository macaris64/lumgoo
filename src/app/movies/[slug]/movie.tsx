import {observer} from "mobx-react";
import {Movie} from "@/models/movie.model";
import Image from "next/image";
import "./movie.css";

interface MovieProps {
    movie: Movie;
}

const MovieComponent = observer (({movie}: MovieProps) => {
    return (
        <div className="movie-page">
            <div className="movie-image">
                <Image
                    src="https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg"
                    alt={`${movie.title} Poster`}
                    width={500} // Set desired width
                    height={750} // Set desired height
                  />
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

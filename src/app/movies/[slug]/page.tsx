'use client';
import React, { useState, useEffect } from 'react';
import Movie from './movie';
import { movieStore } from '@/store/store';
import {getSlugFromUrl} from "@/app/helpers";

export default function Page() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const slug = getSlugFromUrl();
        const movieData = movieStore.getMovieBySlug(slug);
        // @ts-ignore
        setMovie(movieData);
    }, []);

    if (!movie) return <div>Loading movie or not found...</div>;

    return (
        <div className="movie">
            <Movie movie={movie}/>
        </div>
    );
}

import React, {useState} from 'react';
import {observer} from "mobx-react";
import {MovieImage} from "@/models/image.model";
import Carousel from "@/components/carousel/carousel";

import '@/components/carousel/carousel.css';

interface MovieCarouselProps {
    movieId?: string;
    images: MovieImage[];
}

const MovieCarouselComponent = observer(({movieId, images}: MovieCarouselProps) => {
    return (
        <div className="movie-carousel">
            <Carousel images={images} slidesToShow={5} isInMovieDetailsPage={true} movieId={movieId}/>
        </div>
    );
});

export default MovieCarouselComponent;

import React, {useState} from 'react';
import {observer} from "mobx-react";
import {MovieImage} from "@/models/image.model";
import Carousel from "@/app/carousel";

import '../../carousel.css';

interface MovieCarouselProps {
    images: MovieImage[];
}

const MovieCarouselComponent = observer(({images}: MovieCarouselProps) => {
    return (
        <div className="movie-carousel">
            <Carousel images={images} slidesToShow={5}/>
        </div>
    );
});

export default MovieCarouselComponent;

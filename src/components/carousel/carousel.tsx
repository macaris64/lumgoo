'use client';
import React, { useState } from "react";
import { observer } from "mobx-react";
import Slider from "react-slick";
import Card from "@/components/card/card";
import { Movie } from "@/models/movie.model";
import { MovieImage } from "@/models/image.model";

import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
    className: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    currentSlide?: number;
    slideCount?: number;
}

const Arrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <button onClick={onClick} className={className} style={style}>
        <span>{className.includes('slick-prev') ? '←' : '→'}</span>
    </button>
);

interface CustomSliderProps {
    slidesToShow: number;
    slideCount: number;
    children: React.ReactNode;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ slidesToShow, slideCount, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        prevArrow: <Arrow className="slick-prev" currentSlide={currentSlide} slideCount={slideCount} onClick={() => setCurrentSlide(currentSlide - 1)} />,
        nextArrow: <Arrow className="slick-next" currentSlide={currentSlide} slideCount={slideCount} onClick={() => setCurrentSlide(currentSlide + 1)} />,
        afterChange: setCurrentSlide,
        responsive: [/* ...responsive settings */]
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
};

interface MovieCarouselProps {
    movies: Movie[];
    slidesToShow: number;
    isInMovieDetailsPage?: boolean;
}

export const MovieCarousel: React.FC<MovieCarouselProps> = observer(({ movies, slidesToShow, isInMovieDetailsPage }) => (
    <div className="carousel-container mt-4">
        <CustomSlider slidesToShow={slidesToShow} slideCount={movies.length}>
            {movies.map((movie, index) => (
                <div key={index}>
                    <Card
                        image={movie.images.find(image => image.attributes.isMain) || movie.images[0]}
                        isInMovieDetailsPage={isInMovieDetailsPage}
                        movieId={movie.id}
                        movieTitle={movie.title}
                        movieRating={movie.imdbRating}
                    />
                </div>
            ))}
        </CustomSlider>
    </div>
));

interface ImageCarouselProps {
    images: MovieImage[];
    slidesToShow: number;
    isInMovieDetailsPage?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = observer(({ images, slidesToShow, isInMovieDetailsPage }) => (
    <div className="carousel-container mt-4">
        <CustomSlider slidesToShow={slidesToShow} slideCount={images.length}>
            {images.map((image, index) => (
                <div key={index}>
                    <Card
                        image={image}
                        isInMovieDetailsPage={isInMovieDetailsPage}
                    />
                </div>
            ))}
        </CustomSlider>
    </div>
));

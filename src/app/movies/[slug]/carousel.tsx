import React, {useState} from 'react';
import Slider from 'react-slick';
import {observer} from "mobx-react";
import Image from "next/image";
import {MovieImage} from "@/models/image.model";

import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MovieCarouselProps {
    images: MovieImage[];
}

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    currentSlide?: number;
    slideCount?: number;
}

const MovieCarouselComponent = observer(({images}: MovieCarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
        currentSlide !== 0 && <button onClick={onClick} className={className} style={style} aria-label="←"><span>←</span></button>
    );
    const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
        currentSlide < images.length - 1 && <button onClick={onClick} className={className} style={style} aria-label="→"><span>→</span></button>
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        nextArrow: <CustomNextArrow currentSlide={currentSlide} slideCount={images.length} />,
        afterChange: setCurrentSlide,
        responsive: [
        {
            breakpoint: 1024, // At 1024px, show 3 images
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600, // At 600px, show 2 images
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, // Below 480px, show 1 image
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    };

    return (
        <div className="movie-carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={image.attributes.src}
                            alt={image.attributes.alt}
                            width={image.attributes.width}
                            height={image.attributes.height}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
});

export default MovieCarouselComponent;

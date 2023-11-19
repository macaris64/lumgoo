import React from 'react';
import {movieStore} from "@/store/store";
import Carousel from "@/components/carousel/carousel";
import {MovieImage} from "@/models/image.model";

import '../components/carousel/carousel.css';
const LandingPage = () => {
    const bestMovies = movieStore.getBestMovies();

    const bestMoviesSection = () => {
        function getMainImageFromBestMovies() {
            let mainImages: MovieImage[] = [];
            for (let i = 0; i < bestMovies.length; i++) {
                bestMovies[i].images.forEach(image => {
                    if (image.attributes.isMain) {
                        mainImages.push({
                            attributes: {
                                src: image.attributes.src,
                                alt: image.attributes.alt,
                                width: image.attributes.width,
                                height: image.attributes.height,
                                isMain: image.attributes.isMain,
                                order: image.attributes.order
                            },
                            id: image.id
                        })
                    }
                });
            }
            return mainImages;
        }

        return (
            <section className="best-movies mt-4">
                <h2 className="text-2xl font-bold">Best Movies</h2>
                <p className="text-sm small-text">Check out the top-rated movies</p>
                <Carousel
                    images={getMainImageFromBestMovies()}
                    slidesToShow={5}
                />
            </section>
        )
    }

    return (
        <div className="container mx-auto">
            {bestMoviesSection()}
        </div>
    )
}

export default LandingPage;

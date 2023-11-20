import React from 'react';
import {movieStore} from "@/store/store";
import {MovieCarousel} from "@/components/carousel/carousel";

import '../components/carousel/carousel.css';
import { toJS } from 'mobx';
import _ from 'lodash';

const LandingPage = () => {
    const bestMovies = movieStore.getBestMovies();
    const bestMoviesPlain = toJS(_.cloneDeep(bestMovies));
    const bestMoviesSection = () => {
        return (
            <section className="best-movies mt-4">
                <h2 className="text-2xl font-bold">Best Movies</h2>
                <p className="text-sm small-text">Check out the top-rated movies</p>
                <MovieCarousel
                    movies={bestMoviesPlain}
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

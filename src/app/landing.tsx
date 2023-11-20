import React from 'react';
import {movieStore} from "@/store/store";
import {MovieCarousel} from "@/components/carousel/carousel";

import { toJS } from 'mobx';
import _ from 'lodash';

import './landing.css';

const LandingPage = () => {
    const bestMovies = movieStore.getBestMovies();
    const bestMoviesPlain = toJS(_.cloneDeep(bestMovies));
    const bestMoviesSection = () => {
        return (
            <section className="best-movies mt-4">
                <div className="header flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold landing-h2">Best Movies</h2>
                        <p className="text-sm small-text">Check out the top-rated movies</p>
                    </div>
                    <a href={"/what-to-watch/best-movies"} className="text-blue-500 hover:text-blue-600">Full List</a>
                </div>
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

'use client';
import React from 'react';
import {movieStore} from "@/store/store";
import {MovieCarousel} from "@/components/carousel/carousel";
import {Redirect} from "@/components/route/route";

import { toJS } from 'mobx';
import _ from 'lodash';

import './landing.css';

const LandingPage = () => {
    const linkSection = (href: string, content: string) => {
        return (
            <div className="text-blue-500 hover:text-blue-600">
                <Redirect href={href}>{content}</Redirect>
            </div>
        )
    }

    const descriptionSection = (title: string, description: string) => {
        return (
            <div>
                <h2 className="text-2xl font-bold landing-h2">{title}</h2>
                <p className="text-sm small-text">{description}</p>
            </div>
        )
    }

    const bestMoviesSection = () => {
        const bestMovies = movieStore.getBestMovies();
        const bestMoviesPlain = toJS(_.cloneDeep(bestMovies));

        return (
            <section className="best-movies mt-4">
                <div className="header flex justify-between items-center">
                    {descriptionSection('Best Movies', 'Check out the top-rated movies')}
                    {linkSection('/what-to-watch/best-movies/', 'Full List')}
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

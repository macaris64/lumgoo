import { observable, action, computed, makeAutoObservable } from "mobx";
import Movies from '../data/movie';
import {Movie} from "@/models/movie.model";

class MovieStore {
    @observable movies: Movie[] = [];
    @observable loading = false;
    @observable error = false;
    constructor() {
        makeAutoObservable(this);
        this.movies = Movies;
    }

    @action getMovies = () => {
        return this.movies;
    }

    @action getMovieBySlug = (slug: string) : Movie => {
        const movie = this.movies.find(movie => movie.slug === slug);
        if (!movie) {
            this.error = true;
            throw new Error(`Movie with slug ${slug} not found`)
        }
        return movie;
    }

    @action getBestMovies = () => {
        return this.movies
            .filter(movie => movie.imdbRating >= 8.0)
            .sort((a, b) => b.imdbRating - a.imdbRating)
            .slice(0, 20);
    }

    @action addMovie = (movie: Movie) => {
        this.movies.push(movie);
    }
}

export const movieStore = new MovieStore();

class SearchStore {
    @observable searchQuery = '';
    @observable movies : Movie[] = [];
    constructor() {
        makeAutoObservable(this);
        this.movies = movieStore.getMovies();
    }

    @action setSearchQuery = (query: string) => {
        this.searchQuery = query;
    };

    @computed get filteredMovies() {
      return this.searchQuery
        ? this.movies.filter(movie => movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        : [];
    }
}

export const searchStore = new SearchStore();

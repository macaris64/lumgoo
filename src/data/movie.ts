import {Movie} from "@/models/movie.model";

const Movies: Movie[] = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        slug: 'the-shawshank-redemption',
        genre: [{id: 1, name: 'Crime'}, {id: 2, name: 'Drama'}],
        actors: [
            {actorId: 19, characterName: 'Andy Dufresne',},
            {actorId: 20, characterName: 'Ellis Boyd "Red" Redding',},
            {actorId: 21, characterName: 'Warden Norton',},
            {actorId: 22, characterName: 'Heywood',},
            {actorId: 23, characterName: 'Captain Hadley',},
            {actorId: 24, characterName: 'Bogs Diamond',},
            {actorId: 25, characterName: 'Floyd',},
            {actorId: 26, characterName: 'Delmar Berry',},
        ],
        imdbRating: 9.3,
        director: [{id: 3, name: 'Frank Darabont'}],
        year: '1994',
        plot: '',
        soundtracksBy: [{id: 1, name: 'Thomas Newman'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
    {
        id: 2,
        title: 'The Godfather',
        slug: 'the-godfather',
        genre: [{id: 1, name: 'Crime'}, {id: 2, name: 'Drama'}],
        actors: [
            {actorId: 1, characterName: 'Don Vito Corleone',},
            {actorId: 2, characterName: 'Michael Corleone',},
            {actorId: 3, characterName: 'Sonny Corleone',},
            {actorId: 4, characterName: 'Clemenza',},
            {actorId: 5, characterName: 'Tom Hagen',},
            {actorId: 6, characterName: 'Kay Adams',},
        ],
        imdbRating: 9.2,
        director: [{id: 1, name: 'Francis Ford Coppola'}],
        year: '1972',
        plot: '',
        soundtracksBy: [{id: 3, name: 'Nino Rota'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
    {
        id: 3,
        title: 'The Godfather: Part II',
        slug: 'the-godfather-part-ii',
        genre: [{id: 1, name: 'Crime'}, {id: 2, name: 'Drama'}],
        actors: [
            {actorId: 1, characterName: 'Don Vito Corleone',},
            {actorId: 7, characterName: 'Vito Corleone',},
            {actorId: 2, characterName: 'Michael Corleone',},
            {actorId: 8, characterName: 'Young Vito',},
            {actorId: 9, characterName: 'Young Michael',},
            {actorId: 10, characterName: 'Fredo Corleone',},
            {actorId: 11, characterName: 'Tom Hagen',},
            {actorId: 12, characterName: 'Kay Adams',},
        ],
        imdbRating: 9.0,
        director: [{id: 1, name: 'Francis Ford Coppola'}],
        year: '1974',
        plot: '',
        soundtracksBy: [{id: 3, name: 'Nino Rota'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
    {
        id: 4,
        title: 'The Dark Knight',
        slug: 'the-dark-knight',
        genre: [{id: 3, name: 'Action'}, {id: 4, name: 'Adventure'}, {id: 5, name: 'Sci-Fi'}, {id: 6, name: 'Thriller'}],
        actors: [
            {actorId: 8, characterName: 'Bruce Wayne',},
            {actorId: 9, characterName: 'Joker',},
            {actorId: 10, characterName: 'Harvey Dent',},
            {actorId: 11, characterName: 'Alfred',},
            {actorId: 12, characterName: 'Lucius Fox',},
        ],
        imdbRating: 9.0,
        director: [{id: 2, name: 'Christopher Nolan'}],
        year: '2008',
        plot: '',
        soundtracksBy: [{id: 2, name: 'Hans Zimmer'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
    {
        id: 5,
        title: 'Interstellar',
        slug: 'interstellar',
        genre: [{id: 4, name: 'Adventure'}, {id: 5, name: 'Sci-Fi'}, {id: 6, name: 'Thriller'}],
        actors: [
            {actorId: 12, characterName: 'Cooper',},
            {actorId: 13, characterName: 'Brand',},
            {actorId: 14, characterName: 'Murph',},
            {actorId: 15, characterName: 'Old Murph',},
        ],
        imdbRating: 8.6,
        director: [{id: 2, name: 'Christopher Nolan'}],
        year: '2014',
        plot: '',
        soundtracksBy: [{id: 2, name: 'Hans Zimmer'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
    {
        id: 6,
        title: 'The Prestige',
        slug: 'the-prestige',
        genre: [{id: 4, name: 'Adventure'}, {id: 5, name: 'Sci-Fi'}, {id: 6, name: 'Thriller'}],
        actors: [
            {actorId: 8, characterName: 'Alfred Borden',},
            {actorId: 9, characterName: 'Robert Angier',},
            {actorId: 10, characterName: 'Cutter',},
            {actorId: 11, characterName: 'Olivia Wenscombe',},
        ],
        imdbRating: 8.5,
        director: [{id: 2, name: 'Christopher Nolan'}],
        year: '2006',
        plot: '',
        soundtracksBy: [{id: 2, name: 'Hans Zimmer'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
    {
        id: 7,
        title: 'The Godfather: Part III',
        slug: 'the-godfather-part-iii',
        genre: [{id: 1, name: 'Crime'}, {id: 2, name: 'Drama'}],
        actors: [
            {actorId: 1, characterName: 'Don Vito Corleone',},
            {actorId: 2, characterName: 'Michael Corleone',},
            {actorId: 3, characterName: 'Sonny Corleone',},
            {actorId: 4, characterName: 'Clemenza',},
            {actorId: 5, characterName: 'Tom Hagen',},
            {actorId: 6, characterName: 'Kay Adams',},
        ],
        imdbRating: 7.6,
        director: [{id: 1, name: 'Francis Ford Coppola'}],
        year: '1990',
        plot: '',
        soundtracksBy: [{id: 3, name: 'Nino Rota'}],
        images: [
            {
                id: 1,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: true
                }
            },
            {
                id: 2,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 3,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 4,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
            {
                id: 5,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 1,
                    isMain: false
                }
            },
            {
                id: 6,
                attributes: {
                    src: 'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
                    alt: 'The Shawshank Redemption',
                    width: 600,
                    height: 800,
                    order: 2,
                    isMain: false
                }
            },
        ],
    },
];

export default Movies;

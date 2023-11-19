import { ActorCharacter } from './actor.model'
import { Genre } from './genre.model'
import { Director } from './director.model'
import { SoundtracksBy } from "./soundtrackBy.model";

export interface Movie {
    id: number;
    title: string;
    slug: string;
    genre: Genre[];
    actors: ActorCharacter[];
    imdbRating: number;
    director: Director[];
    year: string;
    plot: string;
    soundtracksBy: SoundtracksBy[];
    poster: string;
}

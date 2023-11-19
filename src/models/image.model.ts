interface MovieImageAttributes {
    alt: string;
    src: string;
    width: number;
    height: number;
    order: number;
    isMain: boolean;
}

export interface MovieImage {
    id: number;
    attributes: MovieImageAttributes;
}

export interface Actor {
    id: number;
    name: string;
}

export interface ActorCharacter {
    actorId: Actor['id'];
    characterName: string;
}

/*
const Actors = [
    {
        id: 1,
        name: 'Marlon Brando',
    },
    {
        id: 2,
        name: 'Al Pacino',
    },
    {
        id: 3,
        name: 'James Caan',
    },
    {
        id: 4,
        name: 'Richard S. Castellano',
    },
    {
        id: 5,
        name: 'Robert Duvall',
    },
    {
        id: 6,
        name: 'Diane Keaton',
    },
    {
        id: 7,
        name: 'Robert De Niro',
    },
    {
        id: 8,
        name: 'Christian Bale',
    },
    {
        id: 9,
        name: 'Heath Ledger',
    },
    {
        id: 10,
        name: 'Aaron Eckhart',
    },
    {
        id: 11,
        name: 'Michael Caine',
    },
    {
        id: 12,
        name: 'Matthew McConaughey',
    },
    {
        id: 13,
        name: 'Anne Hathaway',
    },
    {
        id: 14,
        name: 'Jessica Chastain',
    },
    {
        id: 15,
        name: 'Mackenzie Foy',
    },
    {
        id: 16,
        name: 'Francis Ford Coppola',
    },
    {
        id: 17,
        name: 'Christopher Nolan',
    },
    {
        id: 18,
        name: 'Frank Darabont',
    },
    {
        id: 19,
        name: 'Tim Robbins',
    },
    {
        id: 20,
        name: 'Morgan Freeman',
    },
    {
        id: 21,
        name: 'Bob Gunton',
    },
    {
        id: 22,
        name: 'William Sadler',
    },
    {
        id: 23,
        name: 'Clancy Brown',
    },
    {
        id: 24,
        name: 'Gil Bellows',
    },
    {
        id: 25,
        name: 'Mark Rolston',
    },
    {
        id: 26,
        name: 'James Whitmore',
    },
    {
        id: 27,
        name: 'Jeffrey DeMunn',
    },
]*/

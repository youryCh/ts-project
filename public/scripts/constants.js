import { Genre } from './models.js';
export const reviews = [
    ['John', 5, 'It is my fovarite book'],
    ['Anna', 3, 'I expected more from it'],
    ['Sherlock', 0, 'I don\'t read this'],
];
export const author = {
    firstName: 'Ivan',
    lastName: 'Denisovich',
    rating: 4,
};
export const notepad = {
    price: 40,
    getProductDescription: () => {
        return 'Notepad 50 pages';
    }
};
export const genreMapping = {
    [Genre.adventure]: 'Adventure',
    [Genre.fantasy]: 'Fantasy',
    [Genre.horror]: 'Horror',
};

import { Riddle } from '../service/RiddleService';

export const fetchRiddlesCollection = async (): Promise<Riddle[]> => {
    return fetch('http://localhost:3000/riddles').then((response) => response.json());
};

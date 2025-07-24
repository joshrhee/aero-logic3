import { Riddle, getRandomRiddleId } from './RiddleService';

export enum ResolutionState {
    Correct = 'correct',
    Wrong = 'wrong',
    Undefined = 'undefined',
}

export const createResolveRiddleViewModel = (riddles: Riddle[]) => {
    const randomRiddleId = getRandomRiddleId(riddles);

    return {
        randomRiddleId,
        state: ResolutionState.Undefined,
    };
};

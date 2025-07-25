import { Riddle } from './RiddleService';

export const createLandingPageViewModel = (riddles: Riddle[]) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const hoursStr = Number(hours);
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const timestamp = `${year}-${month}-${day} ${hours}:${minutes}`;

    let workInterval = 'Busy Times';

    if (hoursStr >= 11 && hoursStr > 17) {
        workInterval = 'Easy jets';
    } else if (hoursStr >= 17 && hoursStr < 23) {
        workInterval = 'Returning pips';
    } else if (hoursStr >= 23 && hoursStr < 5) {
        workInterval = 'Sleepies';
    }

    const ids = riddles.map(({ id: riddleId }) => riddleId);
    const id = ids[Math.floor(Math.random() * ids.length)];

    return {
        workInterval,
        timestamp,
        id,
    };
};

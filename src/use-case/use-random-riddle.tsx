import { createLandingPageViewModel } from '../service/LandingPageService';
import { useRiddlesCollection } from '../repository/useRiddlesCollection';

export const useRandomRiddle = () => {
    const data = useRiddlesCollection();
    const model = createLandingPageViewModel(data);

    return model;
};

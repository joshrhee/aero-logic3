import { createLandingPageViewModel } from '../service/LandingPageService';
import { useRiddlesCollection } from '../repository/useRiddlesCollection';

export const useRandomRiddle = () => {
    const { collection } = useRiddlesCollection();
    const model = createLandingPageViewModel(collection);

    return model;
};

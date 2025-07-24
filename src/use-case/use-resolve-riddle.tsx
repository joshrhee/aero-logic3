import { useState } from 'react';
import { useRiddleById } from '../repository/useRiddleById';
import { useRiddlesCollection } from '../repository/useRiddlesCollection';
import { createResolveRiddleViewModel } from '../service/ResolveRiddleService';

export const useResolveRiddle = (id: string) => {
    const { collection } = useRiddlesCollection();
    const { riddle, isRiddleLoading } = useRiddleById(id);

    const [selected, setSelected] = useState<string>();
    const [correct, setCorrect] = useState<{ id: string }>();

    const handleClick = async (id: string) => {
        if (selected) {
            return;
        }

        setSelected(id);

        const data = await getAnswerFor(riddle!.id);

        setCorrect(data);
    };

    const model = createResolveRiddleViewModel(collection);

    return { ...model, riddle, isRiddleLoading, correct, selected, handleClick };
};

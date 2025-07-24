import { Link } from 'react-router-dom';
import { useRandomRiddle } from './use-case/use-random-riddle';

export const LandingPage = () => {
    const { id, workInterval, timestamp } = useRandomRiddle();

    return (
        <main className="text-lg">
            <div>
                <p>Work Interval: {workInterval}</p>
                <p>Timestamp: {timestamp}</p>
                <div className="p-20 text-center">
                    {id && (
                        <Link to={`/riddle/${id}`} className="p-5 border border-blue-500">
                            Resolve random riddle
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
};

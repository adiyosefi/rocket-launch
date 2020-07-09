import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }
        const timer = setInterval(tick, 20);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" m={1}
             p={1} width={1} height={200}>
            <CircularProgress variant="determinate" value={progress} style={{ color: 'rgb(202, 184, 27)' }} />
        </Box>
    );
};

export default Loading;
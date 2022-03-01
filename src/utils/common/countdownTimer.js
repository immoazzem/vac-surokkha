import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CountdownTimer = (props) => {

    const [counter, setCounter] = useState(props.seconds ? props.seconds : 60);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            if (props.onCounterFinish) {
                props.onCounterFinish();
            }
        }
    }, [counter]);

    return (
        <>{moment.utc(counter*1000).format('mm:ss')}</>
    );

}

export default CountdownTimer;
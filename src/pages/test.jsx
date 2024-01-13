import { increment } from '@/redux/features/counter/counterSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TestPage = () => {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
    );
};

export default TestPage;
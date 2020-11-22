import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from 'Component/counter/counterSlice'

const Counter = () => {

    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter.value)

    const _increate = e => {
        dispatch(increment());
    }

    const _decreate = e => {
        dispatch(decrement());
    }

    const _incrementByAmount = e => {
        dispatch(incrementByAmount(5))
    }

    return (
        <div>
            <a>Counter: {counter}</a>
            <button onClick={_increate}>In-create</button>
            <button onClick={_decreate}>De-create</button>
            <button onClick={_incrementByAmount}>In-create 5</button>
        </div>
    );
}

export default Counter 
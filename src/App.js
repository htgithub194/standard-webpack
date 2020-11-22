import React from 'react';
import Counter from 'Component/counter/counter'
import { Thunk } from 'Component/thunk/thunk'

export const App = () => {

    return (
        <>
            <Thunk />
            <Counter />
        </>
    );
}
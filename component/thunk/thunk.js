import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './thunkSlice'

export const Thunk = () => {

    const dispatch = useDispatch();
    const postStatus = useSelector(state => state.thunk.status)

    const _fetchPosts = e => {
        dispatch(fetchPosts());
    }

    return (
        <div>
            <a>State: {postStatus}</a>
            <button onClick={_fetchPosts}>Ahihi</button>
        </div>
    );
}
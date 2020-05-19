import React from 'react';
import useFetch from '../../hooks/useFetch.js';
import CurrentCard from './CurrentCard.js';

const CurrentList = () => {
    const { loading, data } = useFetch(`/api/issues/current-user`);

    return (
        <div className='current-user-issue'>
            <h2>My recent issues</h2>
            { loading && <div className='loader' /> }
            { data && <h3> You posted { data.length } issue! </h3> }
                <div className='user-issue-list'>
                    { data && data.length > 0 
                    && data.map((issue, i) => {
                        return (
                        <CurrentCard 
                            { ...issue } 
                            key={ i } 
                        /> )}
                    )}
                </div>
        </div>
    );
};

export default CurrentList;

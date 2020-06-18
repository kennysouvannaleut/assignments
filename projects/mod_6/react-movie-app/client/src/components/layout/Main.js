import React from 'react';
import SearchMovie from '../search/SearchMovie';
import { Typography } from 'antd';

const { Title } = Typography;

const Main = () => (
    <>
        <Title 
            style={{ marginLeft: '5em' }} 
            level={ 1 }> Search Movies
        </Title>
        <SearchMovie />
    </>
);

export default Main;

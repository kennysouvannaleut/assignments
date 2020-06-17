import React from 'react';
import SearchMovie from '../Search/SearchMovie';
import { Typography } from 'antd';

const { Title } = Typography;

const Main = () => (
    <>
        <Title 
            style={{ marginLeft: '5em' }} 
            level={ 1 }>React Movies Search
        </Title>
        <SearchMovie />
    </>
);

export default Main;

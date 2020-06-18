import React from 'react';
import { Button } from 'antd';

const SearchInput = props => {

    const {
        handleChange,
        btnText,
        input: { query }
    } = props;

    return (
        <form>
            <label htmlFor='query'>MOVIE: </label>
            <input
                type='text'
                name='query'
                value={ query }
                onChange={ handleChange }
                placeholder='i.e. transformers'
            />
            <br /><br />
            <Button htmlType='reset'>{ btnText }</Button>
        </form>
    )
};

export default SearchInput;

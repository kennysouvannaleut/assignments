import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ListContext } from '../contexts/ListContext';

const List = () => {
        const { isLightTheme, light, dark } = useContext(ThemeContext);
        const { lists } = useContext(ListContext);
        const theme = isLightTheme ? light : dark;
        return (  
            <div className='list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    {lists.map(list => {
                        return (
                            <li key={ list.id } style={{ background: theme.ui }}>{ list.title }</li>
                        )
                    }
                )}
            </ul>
        </div>
    );
}
 
export default List;
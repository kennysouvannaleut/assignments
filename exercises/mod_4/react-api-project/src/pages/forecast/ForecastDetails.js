// import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// const ForecastDetails = (props) => {
//     const { id } = useParams();
//     const history = useHistory();
//     const thisWeather = props.data.find(obj => obj.id === id);

//     const handleClick = () => {
//         console.log('Submitting...')
//         setTimeout(() => {
//             history.push('/forecast')
//         }, 2000)
//         history.replace('')
//     }

//     return (
//         <div>
//             <h1>Weather Details Page</h1>
//             <h3>{ thisWeather.name }</h3>
//             <p>{ thisWeather.description }</p> 
//             <button onClick={ handleClick }>Go back to all weather forecast</button>
//         </div>
//     );
// }

// export default ForecastDetails;
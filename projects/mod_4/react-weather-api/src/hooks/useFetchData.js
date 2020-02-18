// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// const Weather = () => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const apiKey = process.env.REACT_APP_API_KEY;

//     useEffect(() => {
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=boston,us&units=metric&APPID=${apiKey}`)
//             .then(res => {
//                 console.log(res)
//                 setData(res.data);
//                 setLoading(true);
//             })
//             .catch(err => {
//                 console.log(err)
//                 setError(err.message);
//                 setLoading(true);
//             })
//     }, []);

//     if (loading) {
//         return (<ul>
//             {error ? <li>{error.message}</li> : data.map((obj, index) => <li key={index}>{obj.name}</li>)}
//         </ul>);
//     } else { 
//         return (
//             <div>
//                     Loading...
//                 </div>
//         );
//     }

// };

// export default Weather;
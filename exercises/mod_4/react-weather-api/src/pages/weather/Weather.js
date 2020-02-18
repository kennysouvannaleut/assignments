import React from 'react';

const Weather = ({city, country, description, error, humidity, temperature}) => {

    function matchValues () {
    if(description) {
        const weatherDescription = description.split(' ');

        const keyWordsCloud = ['cloudy', 'clouds', 'cloud', 'overcast', 'sky'];
        const keyWordsRain =['moderate', 'rain'];
        const keyWordsSnow = ['snow', 'snowy', 'snowing'];
        const keyWordsHaze =['haze', 'hazy'];
        const keyWordsNight = ['moon', 'night', 'dark'];
        const keyWordsThunder = ['thunder', 'storm'];
        const keyWordsSunny =['sunny', 'sun', 'sunshine'];

        for (var desc of weatherDescription) {
        }
            if(keyWordsCloud.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/09_cloudy_sun_happy_emoticon_weather_smiley-256.png' alt='cloud' width='100'/>
            }
            if(keyWordsRain.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/06_rain_cloud_cry_emoticon_weather_smiley-512.png' alt='rain' width='100'/>
            }
            if(keyWordsSnow.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/10_snow_coud_emoticon_weather_smiley-256.png' alt='snow' width='100' />
            }
            if(keyWordsHaze.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/05_cloud_smile_cloudy_emoticon_weather_smiley-256.png' alt='haze' width='100' />
            }
            if(keyWordsSunny.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/07_sun_smile_happy_emoticon_weather_smiley-256.png' alt='sunny' width='100' />
            }
            if(keyWordsNight.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/11_cloud_night_emoticon_weather_smiley-256.png' alt='night' width='100' />
            }
            if(keyWordsThunder.includes(desc)) {
                return <img src='https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/08_thunder_cloud_angry_emoticon_weather_smiley-256.png' alt='thunder' width='100' />
            }
        }
    };

    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} °F</p>}
            {humidity && <p> Humidity: {humidity} °</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    );
};

export default Weather; 
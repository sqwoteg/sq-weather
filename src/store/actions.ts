export function setLocation(location: string) {
    return {
        type: 'SET_LOCATION',
        location: location
    };
}

export function setWeatherData(data: object) {
    return {
        type: 'SET_WEATHER_DATA',
        data: data
    };
}
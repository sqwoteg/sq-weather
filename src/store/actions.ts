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

export function selectDay(day: number) {
    return {
        type: 'SELECT_DAY',
        day: day
    };
}

export function selectHour(hour: number) {
    return {
        type: 'SELECT_HOUR',
        hour: hour
    };
}
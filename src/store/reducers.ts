import {AnyAction} from 'redux';

const initialState = {
    location: '',
    data: {},
    selectedDay: 0,
    selectedHour: 0
};


export default function mainReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case 'SET_LOCATION':
            return Object.assign({}, state, {
                location: action.location
            });
        case 'SET_WEATHER_DATA':
            return Object.assign({}, state, {
                data: action.data || state.data
            });
        case 'SELECT_DAY':
            return Object.assign({}, state, {
                selectedDay: action.day
            });
        case 'SELECT_HOUR':
            return Object.assign({}, state, {
                selectedHour: action.hour
            });
        default:
            return state;
    }
}
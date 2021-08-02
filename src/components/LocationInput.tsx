import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {setLocation} from "../store/actions";
import {getWeatherData} from "../actions/getWeatherData";


const LocationInput: FC = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();


    const enterHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(setLocation(input));
            dispatch(getWeatherData(input));
        }
    }

    // const store = useStore();
    // const state = store.getState();

    // const location = useSelector((state: RootState) => state.location);

    return (
        <input
            className={'locationInput'}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={enterHandler}
        />
    );
};



export default LocationInput;
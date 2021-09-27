import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {setLocation} from "../store/actions";
import {getWeatherData} from "../actions/getWeatherData";


const LocationInput: FC<{locationName: string, country: string}> = ({locationName, country}) => {

    const [input, setInput] = useState('');
    const [editingEnabled, toggleEditing] = useState(false);
    const dispatch = useDispatch();


    // const handleSubmit = (e: React.FormEvent) => {
    //     if (e.key === 'Enter') {
    //         dispatch(setLocation(input));
    //         dispatch(getWeatherData(input));
    //     }
    // }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setLocation(input));
        dispatch(getWeatherData(input));
        toggleEditing(false);
    }
    const enableEditing = () => {
        setInput(locationName + ", " + country)
        toggleEditing(true);
    }



    // const store = useStore();
    // const state = store.getState();

    // const location = useSelector((state: RootState) => state.location);

    return (
        // <input
        //     className={'locationInput'}
        //     type="text"
        //     value={input}
        //     onChange={(e) => setInput(e.target.value)}
        //     onKeyDown={enterHandler}
        // />
        <div>
            <div className="location">
                {editingEnabled
                    ?
                    <form onSubmit={handleSubmit} className="locationInputForm">
                        <input onBlur={() => toggleEditing(false)} value={input} onChange={e => setInput(e.target.value)} type="text" autoFocus={true} name={"locationInput"} className={"locationInput"}/>
                        <input type="submit" style={{
                            visibility: "hidden"
                        }}/>
                    </form>
                    :
                    <div className="currentLocation" onClick={() => enableEditing()}>
                        <div>
                            <span className="city">{locationName}</span> <span className="country">{country}</span>
                        </div>
                        <div className="changeLocation">change location</div>
                    </div>
                }
            </div>
        </div>
    );
};



export default LocationInput;
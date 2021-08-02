import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {setLocation} from "../store/actions";
import {getWeatherData} from "../actions/getWeatherData";
import LocationInput from "./LocationInput";
import {useParams} from 'react-router-dom';

interface ParamTypes {
    location: string
}

const WeatherPage: FC = () => {

    const dispatch = useDispatch();

    let { location } = useParams<ParamTypes>();

    location = location || "Kiev, Ukraine";

    useEffect(() => {
        dispatch(setLocation(location));
        dispatch(getWeatherData(location));
    }, [dispatch, location]);

    const data: any = useSelector((state: RootState) => state.data);

    return (
        <div className={"App" + (data.current ? "" : " hidden")}>
            <div className="temperature">{data.current?.temp_c} °C</div>
            <div className="location">{data.location?.name}, {data.location?.country}</div>
            <LocationInput/>
        </div>
    );
};



export default WeatherPage;
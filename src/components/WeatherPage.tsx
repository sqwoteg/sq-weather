import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {selectHour, setLocation} from "../store/actions";
import {getWeatherData} from "../actions/getWeatherData";
// import LocationInput from "./LocationInput";
import {useParams} from 'react-router-dom';
import IconCell from "./IconCell";
import WeatherIcon from "./WeatherIcon";
import LocationInput from "./LocationInput";
import DateSelector from "./DateSelector";
import Charts from "./Charts/Charts";

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
    const selectedDay: any = useSelector((state: RootState) => state.selectedDay);
    const selectedHour: any = useSelector((state: RootState) => state.selectedHour);

    const getDayTime = (sunrise: string, sunset: string) => {
        let sr = new Date("01/01/1970 " + sunrise).getTime(),
            ss = new Date("01/01/1970 " + sunset).getTime();
        let diff = ss - sr;
        let hours = Math.floor(diff / 1000 / 60 / 60);
        return `${hours}h ${diff / 1000 / 60 - hours * 60}m`;
    }

    return (
        <div className={"App"}>
            {data.forecast !== undefined &&
                <div>
                    <div className="header">
                        <LocationInput locationName={data.location.name} country={data.location.country}/>
                        <DateSelector selectedDay={selectedDay} selectedHour={selectedHour} selectedDateTimeString={data.forecast.forecastday[selectedDay].hour[selectedHour].time}/>
                    </div>
                    <div className="content">
                        <table className="content-table">
                            <tr>
                                <td colSpan={2}>
                                    <div className="table-cell-border temperature-cell">
                                        <WeatherIcon code={data.current.condition.code || 0}/>
                                        <span className="number">
                                            {data.forecast.forecastday[selectedDay].hour[selectedHour].temp_c}
                                        </span>
                                        <span className="celsius">°C</span>
                                    </div>
                                </td>
                                <td>
                                    <IconCell
                                        value={data.forecast.forecastday[selectedDay].hour[selectedHour].chance_of_rain + '%'}
                                        icon={"rainChance"}
                                        sub={"Rain chance"}
                                    />
                                </td>
                                <td colSpan={3} rowSpan={3}>
                                    <div className="table-cell-border">
                                        <Charts data={data} selectedDay={selectedDay}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <IconCell
                                        value={data.forecast.forecastday[selectedDay].hour[selectedHour].wind_kph + " kph"}
                                        icon={"windSpeed"}
                                        sub={"Wind speed"}
                                    />
                                </td>
                                <td>
                                    <IconCell
                                        value={data.forecast.forecastday[selectedDay].astro.sunrise}
                                        icon={"sunrise"}
                                        sub={"Sunrise"}
                                    />
                                </td>
                                <td>
                                    <IconCell
                                        value={data.forecast.forecastday[selectedDay].astro.sunset}
                                        icon={"sunset"}
                                        sub={"Sunset"}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <IconCell
                                        value={getDayTime(
                                            data.forecast.forecastday[selectedDay].astro.sunrise,
                                            data.forecast.forecastday[selectedDay].astro.sunset
                                        )}
                                        icon={"daytime"}
                                        sub={"Daytime"}
                                    />
                                </td>
                                <td>
                                    <IconCell
                                        value={Math.floor(data.forecast.forecastday[selectedDay].day.maxtemp_c) + " °C"}
                                        icon={"maxTemp"}
                                        sub={"Daily max"}
                                    />
                                </td>
                                <td>
                                    <IconCell
                                        value={Math.floor(data.forecast.forecastday[selectedDay].day.mintemp_c) + " °C"}
                                        icon={"minTemp"}
                                        sub={"Daily min"}
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};



export default WeatherPage;
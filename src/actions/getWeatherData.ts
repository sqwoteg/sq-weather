import axios from 'axios';
import {setWeatherData} from "../store/actions";
import history from "../history";



export const getWeatherData = (location: string) => {
    return async (dispatch: any) => {
        let response;
        try {
            response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7d32591f21924f7984e115430210208&q=${location}&days=3`);
        } catch {
            response = {};
        }
        console.log(response.data);

        if (response.data) {
            history.replace({ pathname: `/${response.data.location.lat},${response.data.location.lon}`})
            document.title = `${response.data.location.name} weather`;
        }
        dispatch(setWeatherData(response.data));
    }
}
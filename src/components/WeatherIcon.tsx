import React, {SVGProps} from 'react';
import { ReactComponent as sunny } from './weatherIcons/sunny.svg';
// import { ReactComponent as clearNight } from './weatherIcons/clear-night.svg';
import { ReactComponent as partlyCloudy } from './weatherIcons/partly-cloudy.svg';
import { ReactComponent as cloudy } from './weatherIcons/cloudy.svg';
import { ReactComponent as unknownWeather } from './weatherIcons/unknown.svg';


const icons: {[key:number]: React.FunctionComponent<SVGProps<SVGSVGElement>>} = {
    "1000": sunny,
    "1003": partlyCloudy,
    "1006": cloudy,
    "1009": cloudy,
    "0": unknownWeather
}


export default function WeatherIcon(props: { code: number; }) {
    let Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    if (icons.hasOwnProperty(props.code)) {
        Icon = icons[props.code];
    } else {
        Icon = icons[0];
    }
    return <Icon width={64} style={{
        verticalAlign: "center",
    }}/>;
}

import React, {FC} from 'react';
import { ReactComponent as RainChance } from './iconCellIcons/rainChance.svg';
import { ReactComponent as Sunrise } from './iconCellIcons/sunrise.svg';
import { ReactComponent as Sunset } from './iconCellIcons/sunset.svg';
import { ReactComponent as Daytime } from './iconCellIcons/daytime.svg';
import { ReactComponent as WindSpeed } from './iconCellIcons/windSpeed.svg';
import { ReactComponent as MaxTemp } from './iconCellIcons/maxTemp.svg';
import { ReactComponent as MinTemp } from './iconCellIcons/minTemp.svg';


const icons: {[key:string]: any} = {
    "rainChance": RainChance,
    "sunrise": Sunrise,
    "sunset": Sunset,
    "daytime": Daytime,
    "windSpeed": WindSpeed,
    "maxTemp": MaxTemp,
    "minTemp": MinTemp,
}



const IconCell: FC<{value: string, icon: string, sub: string}> = ({value, icon, sub}) => {

    const Icon = icons[icon];

    return (
        <div className="table-cell-border icon-cell">
            <div className="value">
                {value}
            </div>
            <div className="sub">
                <Icon height={21} style={{
                    display: "inline-block",
                    marginRight: "8px"
                }}/>
                <span>{sub}</span>
            </div>
        </div>
    );
};



export default IconCell;
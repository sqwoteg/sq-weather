import React, {FC, PureComponent, useState} from 'react';
import {AreaChart, XAxis, YAxis, LabelList, Area} from 'recharts';


function makeChartsData(data: any, selectedDay: number): ({bottomLabel: null|string, value: number, topLabel: null|string}[])[] {
    let tempchartdata = []
    let rainchartdata = []

    for (let hourKey = 0; hourKey < data.forecast.forecastday[selectedDay].hour.length; hourKey++) {
        const hour = data.forecast.forecastday[selectedDay].hour[hourKey];
        const timeLabel: string|null = ((hourKey % 3) === 2) ? hour.time.slice(11) : null;
        const tempLabel: string|null = ((hourKey % 4) + 2 === 3) ? Math.floor(hour.temp_c).toString() : null;
        const chanceOfRainLabel: string|null = ((hourKey % 4) + 2 === 3) ? Math.floor(hour.chance_of_rain).toString() : null;
        tempchartdata.push({bottomLabel: timeLabel, value: hour.temp_c, topLabel: tempLabel})
        rainchartdata.push({bottomLabel: timeLabel, value: hour.chance_of_rain, topLabel: chanceOfRainLabel})
    }
    return [tempchartdata, rainchartdata];
}


const DateSelector: FC<{data: any, selectedDay: number}> = ({data, selectedDay}) => {
    // const chartdata = [{name: null, uv: 23.4, label: null}, {name: null, uv: 25, label: 25}, {name: 'Page A', uv: 20, label: null}, {name: null, uv: 23.4, label: null}, {name: null, uv: 25, label: 25}, {name: 'Page A', uv: 20, label: null}, {name: null, uv: 23.4, label: null}, {name: null, uv: 25, label: 25}, {name: 'Page A', uv: 20, label: null}, {name: 'Page A', uv: 23.4, label: null}, {name: 'Page A', uv: 25, label: 25}, {name: 'Page A', uv: 20, label: null}, {name: 'Page A', uv: 23.4, label: null}, {name: 'Page A', uv: 25, label: 25}, {name: null, uv: 20, label: null}, ];
    console.log(data)
    const chartdata = makeChartsData(data, selectedDay);

    console.log(chartdata)

    // const store = useStore();
    // const state = store.getState();

    // const location = useSelector((state: RootState) => state.location);

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="charts">
            <h5 className={"temperatureTitle"}>Temperature</h5>
            <AreaChart  className="tempChart" width={424} height={100} data={chartdata[0]}>
                <XAxis tickLine={false} interval={1} minTickGap={0} tickMargin={10} dataKey="bottomLabel" stroke="#ddd" />
                <YAxis hide />
                <Area isAnimationActive={false} type="basis" dataKey="value" fill="#FFD787" stroke="none">
                    <LabelList dataKey="topLabel" position="top" fill="#fff" offset={8} />
                </Area>
            </AreaChart>
            <h5 className={"rainChanceTitle"}>Rain chance</h5>
            <AreaChart  className="tempChart" width={424} height={100} data={chartdata[1]}>
                <XAxis tickLine={false} interval={1} minTickGap={0} tickMargin={10} dataKey="bottomLabel" stroke="#ddd" />
                <YAxis hide />
                <Area isAnimationActive={false} type="step" dataKey="value" fill="#FFD787" stroke="none">
                    <LabelList dataKey="topLabel" position="top" fill="#fff" offset={8} />
                </Area>
            </AreaChart>
        </div>
    );
};



export default DateSelector;
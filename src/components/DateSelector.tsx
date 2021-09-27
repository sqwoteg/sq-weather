import React, {FC, useState} from 'react';
import { ReactComponent as ArrowIcon } from './arrowIcons/left.svg';
import {selectDay, selectHour} from "../store/actions";
import {useDispatch} from "react-redux";


const DateSelector: FC<{selectedDay: number, selectedHour: number, selectedDateTimeString: string}> = ({selectedDay, selectedHour, selectedDateTimeString}) => {

    const dispatch = useDispatch();


    const handleTimeChange = (change: number) => {
        let newHour = selectedHour + change;
        let newDay = selectedDay;
        if (newHour < 0) {
            newHour = 23;
            newDay--;
            if (newDay < 0) newDay = 2;
        } else if (newHour > 23) {
            newHour = 0;
            newDay++;
            if (newDay > 2) newDay = 0;
        }
        if (newDay !== selectedDay) dispatch(selectDay(newDay));
        dispatch(selectHour(newHour));
    }


    // const store = useStore();
    // const state = store.getState();

    // const location = useSelector((state: RootState) => state.location);

    return (
        <div className="dateSelector">
            <ArrowIcon
                className="dateTimeArrow"
                height={24}
                onClick={() => handleTimeChange(-1)}
            />
            <span className="dateTimeString">
                {selectedDateTimeString}
            </span>
            <ArrowIcon
                className="dateTimeArrow"
                height={24}
                style={{
                    transform: "rotate(180deg)"
                }}
                onClick={() => handleTimeChange(+1)}
            />
        </div>
    );
};



export default DateSelector;
import React, {FC} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import WeatherPage from "./components/WeatherPage";

const App: FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/:location" children={<WeatherPage />} />
            </Switch>
            <Switch>
                <Route exact path="/" children={<WeatherPage />} />
            </Switch>
        </Router>

    );
}

export default App;

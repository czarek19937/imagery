import React from 'react';
import { Overview } from './Overview';
import {ErrorBoundary} from "./components/ErrorBoundary";

export const App = () => {
    return (
        <ErrorBoundary>
            <Overview />
        </ErrorBoundary>
    );
}

export default App;

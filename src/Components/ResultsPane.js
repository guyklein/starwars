import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getVisibleResults} from "../redux/Selectors/results";
import CircularProgress from '@material-ui/core/CircularProgress';

const ResultsPane = ({search, onResults, children}) => {
    const results = useSelector(getVisibleResults);
    useEffect(() => {
        if (search.result) {
            onResults(search.result);
        }
    }, [search.result]);
    return (
        <div className="results-container">
            {search.loading && <CircularProgress/>}
            {search.error && <div>Error: {search.error.message}</div>}
            {search.result && results && children }
        </div>)
};

export default ResultsPane;

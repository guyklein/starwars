import React from "react";
import SearchResult from "./SearchResult";
import {useSelector} from "react-redux";
import {useResults} from "../redux/Results";

const ResultsPane = ({search}) => {
    const results = useSelector(useResults);
    return (
        <div className="results-container">
            {search.loading && 'loading...'}
            {search.error && <div>Error: {search.error.message}</div>}
            {results && (
                <ul>
                    {
                        results.map((product, index) => (
                            <SearchResult
                                key={index}
                                product={product}
                            />
                        ))
                    }
                </ul>
            )}
        </div>)
};

export default ResultsPane;

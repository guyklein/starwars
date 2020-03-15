import {useState} from "react";
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import {useAsyncAbortable} from "react-async-hook";

const useDebounceSearchApi = (searchFunction, timeout = 500) => {
    // Handle the input text state
    const [inputText, setInputText] = useState('');

    // Debounce the original search async function
    const debouncedSearchStarWarsApi = useConstant(() =>
        AwesomeDebouncePromise(searchFunction, timeout)
    );

    const search = useAsyncAbortable(
        async (abortSignal, text) =>
            debouncedSearchStarWarsApi(text, abortSignal),
        // Ensure a new request is made every time the text changes (even if it's debounced)
        [inputText]
    );

    // Return everything needed for the hook consumer
    return {
        inputText,
        setInputText,
        search,
    };
};

export default useDebounceSearchApi;

const FetchAll = async (url) => {
    const controller = new AbortController();
    const abortSignal =  controller.signal;

    try {
        const response = await fetch(url, { signal: abortSignal });
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Request aborted');
            // Handle abort-related logic here
        } else {
            console.error('Error during fetch:', error.message);
            // Handle other errors here
        }
    } finally {
        if (!signal) {
            controller.abort();
        }
    }
};

export default FetchAll;

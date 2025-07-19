import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fullConfig = { signal: controller.signal, ...requestConfig };
    console.log("Fetching from:", endpoint, fullConfig);
    apiClient
        .get(endpoint, { signal: controller.signal, ...requestConfig })
        .then((response) => {
            const responseData = response.data;

            // If it's a FetchResponse, use results
            if (Array.isArray(responseData.results)) {
            setData(responseData.results);
            } else {
            // Otherwise, wrap the single object in an array
            setData([responseData]);
            }

            setLoading(false);
        })

    return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading};
}

export default useData;